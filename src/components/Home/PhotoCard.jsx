// PhotoCard.js
import React from "react";
import { doc, deleteDoc } from "firebase/firestore";
import { db } from "../../services/firebase";

function PhotoCard({ photo }) {
  const handleDelete = async () => {
    try {
      await deleteDoc(doc(db, "photos", photo.id));
    } catch (error) {
      alert("Error deleting photo: " + error.message);
    }
  };

  return (
    <div className="photo-card">
      <img src={photo.url} alt="User submitted" />
      <button onClick={handleDelete}>🗑️</button>
    </div>
  );
}

export default PhotoCard;
