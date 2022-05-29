const video = document.getElementById('videoInput');
const click_image = document.getElementById('click-image');
const recog_btn = document.getElementById('recog-btn');
const retake_btn = document.getElementById('retake-image');

//webCam starts on entering the correct username
async function startVideo() {
	stream = await navigator.mediaDevices.getUserMedia({ 
        video: true, audio: false 
    });
	video.srcObject = stream;
}

//this bit of code clicks the image 
function clickPhoto() {
    click_image.style.display = "none";
    canvas.getContext('2d').drawImage(video, 0, 0, canvas.width, canvas.height);

    //stops the webcam
    stream.getTracks().forEach(function (track) {
        track.stop();
    });

    /*this bit of code stores the base 64 encoded string of the currently
     clicked image in the title attribute of queryImg2*/
    const queryImg2 = document.getElementById('queryImg2');
    queryImg2.title = canvas.toDataURL('image/jpeg');
    queryImg2.title = queryImg2.title.substring(23);

    //this bit of code below enables re-take and recognize options
    recog_btn.style.display = 'flex';
    retake_btn.style.display = 'flex';
}

//this code lets the user re-take their picture if so desired
function retake() {
    startVideo()
    canvas.getContext('2d').clearRect(0, 0, canvas.width, canvas.height);
    retake_btn.style.display = 'none';
    recog_btn.style.display = 'none';
    click_image.style.display = "flex";
}

//queryImg1 and queryImg2 are fed to MxFACE API for comparison
async function recognize() {
    const queryImg1 = document.getElementById('queryImg1');
    const queryImg2 = document.getElementById('queryImg2');
    fetch('https://faceapi.mxface.ai/api/v2/face/verify', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            'Subscriptionkey': 'edvTUrHRjHPvxXyB5842'
        },
        body: JSON.stringify({
            "encoded_image1": queryImg1.title,
            "encoded_image2": queryImg2.title
        })
    }) //the api returns a response from which the confidence value is used
    .then(res => {
        return res.json()
    }).then(data => {
            if (data.matchedFaces.length != 0 && data.matchedFaces[0].confidence < 90) {
                alert("FACE NOT MATCHING! TRY AGAIN!");
                location.reload();
            }
            else {
                alert("Face Matched! WELCOME to the Dashboard!")
                window.location.href = "dashboard.html";
            }
        })
    .catch((error) => {
        alert("NO face detected! TRY AGAIN!");
        location.reload();
    });
}
