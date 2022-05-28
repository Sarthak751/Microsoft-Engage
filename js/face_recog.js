const video = document.getElementById('videoInput');

async function startVideo() {
	stream = await navigator.mediaDevices.getUserMedia({ 
        video: true, audio: false 
    });
	video.srcObject = stream;
}

function clickPhoto() {
    const click_image = document.getElementById('click-image');
    click_image.style.display = "none";
    canvas.getContext('2d').drawImage(video, 0, 0, canvas.width, canvas.height);
    stream.getTracks().forEach(function (track) {
        track.stop();
    });
    const queryImg2 = document.getElementById('queryImg2');
    queryImg2.title = canvas.toDataURL('image/jpeg');
    queryImg2.title = queryImg2.title.substring(23);
    const recog_btn = document.getElementById('recog-btn');
    recog_btn.style.display = 'flex';
}

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
    })
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
