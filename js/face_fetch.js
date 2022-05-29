import firebaseApp from "./firebase.js";
import { getAuth, onAuthStateChanged } from "https://www.gstatic.com/firebasejs/9.8.1/firebase-auth.js";
import { getStorage, ref, getDownloadURL } from "https://www.gstatic.com/firebasejs/9.8.1/firebase-storage.js";

const auth = getAuth();
const storage = getStorage();

/*On entering and submitting the correct username on the face login page,
one moves on to facial recognition*/
submit_username.addEventListener('click', (e) => {
    
    const submit_username = document.getElementById("submit_username");
    const inputUserName =  document.getElementById("inputUserName");
    submit_username.style.display = "none";
    inputUserName.style.display = "none";
    const imageName = inputUserName.value;

    //the url of the image in firebase storage is stored in one of the image tags
    getDownloadURL(ref(storage, 'admins/'+imageName))
    .then((url) => {
        startVideo()
        const fromFirebase = document.getElementById('fromFirebase');
        fromFirebase.setAttribute('src', url);
        const imageUrl = fromFirebase.src;

        /*the image from firebase storage is fetched and stored 
         in 'imageBlob' using the async code below*/
        (async () => {
            const response = await fetch(imageUrl)
            const imageBlob = await response.blob()
            const reader = new FileReader();
            reader.readAsDataURL(imageBlob);
            reader.onloadend = () => {
                /*the title attribute of queryImg1 tag hosts the base64 
                 encoded string of firebase image*/
                const queryImg1 = document.getElementById('queryImg1');
                queryImg1.title = reader.result.substring(23);
                const click_image = document.getElementById('click-image');
                click_image.style.display = 'flex';
            }
        })()

    })
    .catch((error) => {
        alert("Wrong username!");
        location.reload();
    });
});


