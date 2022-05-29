let video = document.querySelector("#videoInput");
let camera_button = document.querySelector("#start-camera");
let click_photo = document.querySelector("#click-photo");
let canvas = document.querySelector("#canvas");
let stream, image_data_url;
const photoCamContainer = document.getElementById('photo-box-container');
const photoCam = document.getElementById('photo-box');

//clicking on 'Add Photo' displays the webcam container
function AddPhoto() {
	photoCamContainer.style.display = "flex";
	photoCam.style.display = "flex";
}

//webcam is manually started by clicking on 'start camera'
camera_button.addEventListener('click', async function () {
	stream = await navigator.mediaDevices.getUserMedia({ video: true, audio: false });
	video.srcObject = stream;
});

//close button allows one to close the webcam container and view the main signup form
function closePhotoBox() {
	photoCamContainer.style.display = "none";
	stream.getTracks().forEach(function (track) {
		track.stop();
	});
}

/*'click photo' button lets one take a picture from their webcam, which 
can then be uploaded to firebase storage on registration*/
click_photo.addEventListener('click', function () {

	canvas.getContext('2d').drawImage(video, 0, 0, canvas.width, canvas.height);
	stream.getTracks().forEach(function (track) {
		track.stop();
	});
	//the image clicked is converted into base64 encoded string and stored in 'imageUpload'
	imageUpload = canvas.toDataURL('image/jpeg');
});


