import firebaseApp from "./firebase.js";
import { getAuth } from "https://www.gstatic.com/firebasejs/9.8.1/firebase-auth.js";

const auth = getAuth();

//firebase logout feature
logout.addEventListener('click',(e) => {
  e.preventDefault();
  auth.signOut().then(() => {
    window.location.href = "index.html";
  })
});


/*Note: I have provided logout option in both: the dashboard and the face login page;
during face login, one might type in the wrong username or their face recognition 
may give an error; in such cases one can logout to the first login page*/

