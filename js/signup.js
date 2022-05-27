import firebaseApp from "./firebase.js";
import { getAuth, createUserWithEmailAndPassword, updateProfile } from "https://www.gstatic.com/firebasejs/9.8.1/firebase-auth.js";
import { getStorage, ref as sref, uploadString, getDownloadURL } from "https://www.gstatic.com/firebasejs/9.8.1/firebase-storage.js";

const auth = getAuth();
const storage = getStorage();

register.addEventListener('click', (e) => {
    const username = document.getElementById("username").value
    const email = document.getElementById("email").value
    const password = document.getElementById("password").value

    createUserWithEmailAndPassword(auth, email, password)
    .then((userCredential) => {
        const imageName = username;
        const adminImages = sref(storage, 'admins/'+imageName);
        const metadata = {
            contentType: 'image/jpeg'
        }
        uploadString(adminImages, image_data_url, 'data_url', metadata).then((snapshot) => {
            getDownloadURL(snapshot.ref).then((downloadURL) => {
                updateProfile(auth.currentUser, {
                    displayName: username,
                    photoURL: downloadURL 
                });
            });
        });
    alert("New user created successfully!");
    })
    .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        alert(errorMessage);
    });
});