// Home.js
import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { onAuthStateChanged, signOut } from "firebase/auth";
import { auth, db } from "../../services/firebase";
import { collection, addDoc, onSnapshot, query } from "firebase/firestore";
import AddPhotoModal from "./AddPhotoModal";
import PhotoCard from "./PhotoCard";

function Home() {
  const [user, setUser] = useState(null);
  const [photos, setPhotos] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    const unsubscribeAuth = onAuthStateChanged(auth, (user) => {
      if (user) {
        setUser(user);
      } else {
        navigate("/");
      }
    });
    return unsubscribeAuth;
  }, [navigate]);

  useEffect(() => {
    const q = query(collection(db, "photos"));
    const unsubscribe = onSnapshot(q, (snapshot) => {
      const photosData = snapshot.docs.map((doc) => ({
        ...doc.data(),
        id: doc.id,
      }));
      setPhotos(photosData);
    });
    return unsubscribe;
  }, []);

  const handleLogout = () => {
    signOut(auth).then(() => {
      navigate("/");
    });
  };

  return (
    <div className="home-container">
      <header>
        <h1>Holiday Photos</h1>
        <button onClick={handleLogout}>Logout</button>
      </header>
      <main>
        <button data-bs-toggle="modal" data-bs-target="#addPhotoModal">
          + Add Photo
        </button>
        <div className="photos-grid">
          {photos.map((photo) => (
            <PhotoCard key={photo.id} photo={photo} />
          ))}
        </div>
      </main>
      <AddPhotoModal />
    </div>
  );
}

export default Home;
