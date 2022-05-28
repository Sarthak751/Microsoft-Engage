import firebaseApp from "./firebase.js";
import { getAuth } from "https://www.gstatic.com/firebasejs/9.8.1/firebase-auth.js";

const auth = getAuth();

logout.addEventListener('click',(e) => {
  e.preventDefault();
  auth.signOut().then(() => {
    window.location.href = "index.html";
  })
});

