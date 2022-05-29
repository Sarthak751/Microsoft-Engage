/*This bit of code handles all the overlay pages when the user 
clicks on any of the available options*/
const profile_page = document.getElementById('profile');
const attendance_page = document.getElementById('attendance');
const stud_page = document.getElementById('add_stud');
const edit_page = document.getElementById('edit');
const course_page = document.getElementById('add_course');
const report_page = document.getElementById('report');
const goBack = document.getElementById('goBack');

function openProfile() {
    profile_page.style.display = "flex";
    goBack.style.display = "flex";
}

function takeAttendance() {
    attendance_page.style.display = "flex";
    goBack.style.display = "flex";
    startVideo();
}

function addNewStudent() {
    stud_page.style.display = "flex";
    goBack.style.display = "flex";
}

function editStudent() {
    edit_page.style.display = "flex";
    goBack.style.display = "flex";
}

function addNewCourse() {
    course_page.style.display = "flex";
    goBack.style.display = "flex";
}

function viewReport() {
    report_page.style.display = "flex";
    goBack.style.display = "flex";
}

function backToConsole() {
    profile_page.style.display = "none";
    attendance_page.style.display = "none";
    edit_page.style.display = "none";
    report_page.style.display = "none";
    stud_page.style.display = "none";
    course_page.style.display = "none";
    goBack.style.display = "none";
}

/*this api call would create a course on mxface website 
  in which students would be enrolled*/
async function addCourse() {
    const courseName = document.getElementById('course_name')
    fetch('https://faceapi.mxface.ai/api/v1/Group', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            'Subscriptionkey': 'edvTUrHRjHPvxXyB5842'
        },
        body: JSON.stringify({
            "groupName": courseName
        })
    })
    .then(res => {
        return res.json()
    }).then(data => {
                alert("Course created! But " + data.error);
        })
    .catch((error) => {
        alert(error.message)
    })
}
