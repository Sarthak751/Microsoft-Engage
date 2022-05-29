//this is the firebase config file
import { initializeApp } from "https://www.gstatic.com/firebasejs/9.8.1/firebase-app.js";

const firebaseConfig = {
    apiKey: "AIzaSyDeS-Bsx8PrfPIQbq5jK4hgTtNSrCL2mjY",
    authDomain: "engage-e39e6.firebaseapp.com",
    projectId: "engage-e39e6",
    storageBucket: "engage-e39e6.appspot.com",
    messagingSenderId: "218098839958",
    appId: "1:218098839958:web:0d93a05cf98b1299656db7",
    measurementId: "G-GFQTKP0MXS"
}; 

const firebaseApp = initializeApp(firebaseConfig);

//this file is imported in all files where firebase services are used
export default firebaseApp;