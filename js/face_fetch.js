import firebaseApp from "./firebase.js";
import { getAuth, onAuthStateChanged } from "https://www.gstatic.com/firebasejs/9.8.1/firebase-auth.js";
import { getStorage, ref, getDownloadURL } from "https://www.gstatic.com/firebasejs/9.8.1/firebase-storage.js";

const auth = getAuth();
const storage = getStorage();

submit_username.addEventListener('click', (e) => {
    
    const submit_username = document.getElementById("submit_username");
    const inputUserName =  document.getElementById("inputUserName");
    const imageName = inputUserName.value;
    inputUserName.style.display = "none";
    submit_username.style.display = "none";

    getDownloadURL(ref(storage, 'admins/'+imageName))
    .then((url) => {
        startVideo()
        const fromFirebase = document.getElementById('fromFirebase');
        fromFirebase.setAttribute('src', url);
        const imageUrl = fromFirebase.src;
        (async () => {
        const response = await fetch(imageUrl)
        const imageBlob = await response.blob()
        const reader = new FileReader();
        reader.readAsDataURL(imageBlob);
        reader.onloadend = () => {
            const queryImg1 = document.getElementById('queryImg1');
            queryImg1.title = reader.result.substring(23);
            console.log(queryImg1.title);
            const click_image = document.getElementById('click-image');
            click_image.style.display = 'flex';
        }
        })()
    })
    .catch((error) => {
        const errorCode = error.code;
        alert("Wrong username entered!");
        location.reload();
    });
});


