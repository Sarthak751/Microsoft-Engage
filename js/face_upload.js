let video = document.querySelector("#videoInput");
let camera_button = document.querySelector("#start-camera");
let click_photo = document.querySelector("#click-photo");
let canvas = document.querySelector("#canvas");
let stream, image_data_url;
const photoCamContainer = document.getElementById('photo-box-container');
const photoCam = document.getElementById('photo-box');

function AddPhoto() {
	photoCamContainer.style.display = "flex";
	photoCam.style.display = "flex";
}

camera_button.addEventListener('click', async function () {
	stream = await navigator.mediaDevices.getUserMedia({ video: true, audio: false });
	video.srcObject = stream;
});

function closePhotoBox() {
	photoCamContainer.style.display = "none";
	stream.getTracks().forEach(function (track) {
		track.stop();
	});
}

click_photo.addEventListener('click', function () {

	canvas.getContext('2d').drawImage(video, 0, 0, canvas.width, canvas.height);
	stream.getTracks().forEach(function (track) {
		track.stop();
	});
	imageUpload = canvas.toDataURL('image/jpeg');
});


