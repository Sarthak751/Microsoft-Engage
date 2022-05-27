import firebaseApp from "./firebase.js";
import { getAuth, onAuthStateChanged } from "https://www.gstatic.com/firebasejs/9.8.1/firebase-auth.js";
import { getStorage, ref, getDownloadURL } from "https://www.gstatic.com/firebasejs/9.8.1/firebase-storage.js";

const auth = getAuth();
const storage = getStorage();
