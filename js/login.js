import firebaseApp from "./firebase.js";
import { getAuth, signInWithEmailAndPassword, browserLocalPersistence, setPersistence, onAuthStateChanged } from "https://www.gstatic.com/firebasejs/9.8.1/firebase-auth.js";

const auth = getAuth();

login.addEventListener('click',(e) => {

    const email = document.getElementById("email").value
    const password = document.getElementById("password").value

    signInWithEmailAndPassword(auth, email, password)
    .then(() => {
        alert("Logged in successfully!");
        window.location.href = "face_login.html";
    })
    .catch((error) => {
        const errorMessage = error.message;
        alert(errorMessage);
    });
});
