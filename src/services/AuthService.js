// authService.js
import {
  signInWithEmailAndPassword,
  createUserWithEmailAndPassword,
  signOut,
} from "firebase/auth";
import { auth } from "./firebase";

export const login = (email, password) =>
  signInWithEmailAndPassword(auth, email, password);

export const register = (email, password) =>
  createUserWithEmailAndPassword(auth, email, password);

export const logout = () => signOut(auth);
