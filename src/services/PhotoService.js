// photoService.js
import { addDoc, collection, deleteDoc, doc } from "firebase/firestore";
import { db } from "./firebase";

export const addPhoto = (url) => addDoc(collection(db, "photos"), { url });

export const deletePhoto = (id) => deleteDoc(doc(db, "photos", id));
