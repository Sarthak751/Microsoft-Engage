/*This bit of code handles all the overlay pages when the user 
clicks on any of the available options*/
const profile_page = document.getElementById('profile');
const attendance_page = document.getElementById('attendance');
const edit_page = document.getElementById('edit');
const report_page = document.getElementById('report');
const goBack = document.getElementById('goBack');

function openProfile() {
    profile_page.style.display = "flex";
    goBack.style.display = "flex";
}

function openAttendance() {
    attendance_page.style.display = "flex";
    goBack.style.display = "flex";
}

function openEmployeeList() {
    edit_page.style.display = "flex";
    goBack.style.display = "flex";
}

function openReport() {
    report_page.style.display = "flex";
    goBack.style.display = "flex";
}

function backToConsole() {
    profile_page.style.display = "none";
    attendance_page.style.display = "none";
    edit_page.style.display = "none";
    report_page.style.display = "none";
    goBack.style.display = "none";
}