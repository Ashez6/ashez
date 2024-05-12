const photobtns = document.querySelectorAll(".photobtn");
const photos = document.querySelectorAll(".photo");

photobtns[0].addEventListener("change", (e) => handleFileSelect(e, 0));

// Function to handle file selection
function handleFileSelect(event, i) {
  const file = event.target.files[0]; // Get the selected file
  const reader = new FileReader();
  reader.onload = function (event) {
    // const imgHolder = document.querySelector('.img-holder.photo'); // Get the image holder element
    photos[i].src = event.target.result; // Update the image source with the selected file
  };

  // Read the selected file as a data URL
  reader.readAsDataURL(file);
}

document.addEventListener("DOMContentLoaded", (e) => {
  const navBar = document.querySelector(".nav-drop");
  const label = document.querySelector("#remove-label");

  let type = localStorage.getItem("type");

  if (type == "doctor") {
    label.style.display = "none";
    navBar.style.display = "none";
    const docs = document.getElementsByClassName("doc");
    for (let i = 0; i < 3; i++) {
      docs[i].style.display = "";
      map.invalidateSize();
    }
  }

  if (type == "teacher") {
    label.style.display = "none";

    navBar.style.display = "none";
    const teacherForm = document.getElementById("teacher-form");
    const teacherForm1 = document.getElementById("teacher-form1");

    teacherForm.style.display = "";
    teacherForm1.style.display = "";
  }
});

//Change Password Screen

const confirmButton = document.getElementById("confirm-button");

confirmButton.addEventListener("click", (e) => {
  const oldPass = document.getElementById("old-pass");
  const newPass1 = document.getElementById("new-pass1");
  const newPass2 = document.getElementById("new-pass2");
  const addText = document.getElementById("add-confirm");

  let r = "";

  oldPass.style.border = "";
  newPass1.style.border = "";
  newPass2.style.border = "";

  if (oldPass.value == "" || newPass1.value == "" || newPass2.value == "") {
    if (oldPass.value == "") {
      r += "Please enter the old password.<br>";
      oldPass.style.border = "1px solid red";
    }
    if (newPass1.value == "") {
      r += "Please enter the new password.<br>";
      newPass1.style.border = "1px solid red";
    }
    if (newPass2.value == "") {
      r += "Please enter the confirmation for the new password.<br>";
      newPass2.style.border = "1px solid red";
    }
  } else {
    if (
      !(
        newPass1.value == newPass2.value &&
        !(newPass1.value == newPass2.value && newPass2.value == oldPass.value)
      )
    )
      if (newPass1.value != newPass2.value) {
        r += "please enter matching new password values.<br>";
      }
    if (newPass1.value == newPass2.value && newPass2.value == oldPass.value) {
      r += "old password can't be new password. <br>";
    }
  }

  const newDiv = document.createElement("div");
  const appendH = document.getElementById("add-confirm");

  if (r == "") {
    newDiv.innerHTML =
      '<div class="alert alert-success alert-white rounded"><button type="button" data-dismiss="alert" aria-hidden="true" class="close">×</button><div class="icon"><i class="fa fa-check"></i></div><strong>Success!</strong> Changes has been saved successfully!</div>';

    if (appendH.hasChildNodes()) {
      appendH.removeChild(appendH.firstChild);
    }

    appendH.appendChild(newDiv);
  } else {
    newDiv.innerHTML =
      '<div class="alert alert-danger alert-white rounded"><button type="button" data-dismiss="alert" aria-hidden="true" class="close">×</button><div class="icon"><i class="fa fa-times-circle"></i></div><strong>Failure!<br></strong>' +
      r +
      "</div>";

    if (appendH.hasChildNodes()) {
      appendH.removeChild(appendH.firstChild);
    }
    appendH.appendChild(newDiv);
  }
});

const updateButton = document.getElementById("update-profile");

// Profile info validation

let teacherClick = false;
let doctorClick = false;
updateButton.addEventListener("click", function (event) {
  event.preventDefault();

  let r = "";

  let type = localStorage.getItem("type");

  const firstName = document.getElementById("fullName").value;
  const lastName = document.getElementById("lastName").value;
  const username = document.getElementById("username").value;
  const phoneNumber = document.getElementById("phone").value;
  const email = document.getElementById("email").value;
  const address = document.getElementById("address");
  const area = document.getElementById("area");
  const governorate = document.getElementById("governorate");
  const fileInput = document.getElementById("fileInput");

  document.getElementById("fullName").style.border = "";
  document.getElementById("lastName").style.border = "";
  document.getElementById("username").style.border = "";
  document.getElementById("phone").style.border = "";
  document.getElementById("email").style.border = "";
  address.style.border = "";
  area.style.border = "";
  governorate.style.border = "";

  const nameRegex = /^[A-Za-z\s]+$/;
  if (!nameRegex.test(firstName)) {
    document.getElementById("fullName").style.border = "1px solid red";
    r += "First name must be provided and contain only letters.<br>";
  }
  if (!nameRegex.test(lastName)) {
    document.getElementById("lastName").style.border = "1px solid red";
    r += "Last name must be provided and contain only letters.<br>";
  }

  if (username == "") {
    document.getElementById("username").style.border = "1px solid red";
    r += "Please enter a username.<br>";
  }

  const phoneRegex = /^\+?\d{10,}$/;
  if (!phoneRegex.test(phoneNumber) || phoneNumber == "") {
    document.getElementById("phone").style.border = "1px solid red";
    r += "Please enter a valid phone number. [+country code][10 digits]<br>";
  }

  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailRegex.test(email) || email == "") {
    document.getElementById("email").style.border = "1px solid red";
    r += "Please enter a valid email address.<br>";
  }

  if (address.value == "") {
    address.style.border = "1px solid red";
    r += "Please enter your address.<br>";
  }

  if (area.value == "") {
    area.style.border = "1px solid red";
    r += "Please enter your area.<br>";
  }

  if (governorate.value == "") {
    governorate.style.border = "1px solid red";
    r += "Please enter your governorate.<br>";
  }

  if (type == "doctor") {
    const speciality = document.getElementById("speciality");
    const cases = document.getElementById("pro-cases");

    speciality.style.border = "";
    cases.style.border = "";
    if (speciality.value == "") {
      speciality.style.border = "1px solid red";
      r += "Please enter your speciality.<br>";
    }
    if (cases.value <= 0) {
      cases.style.border = "1px solid red";
      r += "Please enter the number of cases you can take.<br>";
    }

    if (count1 == 0) {
      r += "Please pin your clinic's address.<br>";
    }
  }

  if (type == "teacher") {
    const classes = document.getElementById("pro-classes");
    const subjects = document.getElementById("subjects");

    classes.style.border = "";
    subjects.style.border = "";

    if (classes.value <= 0) {
      classes.style.border = "1px solid red";
      r += "Please enter the number of classes you can take.<br>";
    }

    if (subjects.value == "") {
      subjects.style.border = "1px solid red";
      r += "Please enter the subjects that you can teach.<br>";
    }
  }
  const profile = document.getElementById("profile1");

  if (r != "") {
    const newDiv = document.createElement("div");
    console.log(r);

    newDiv.innerHTML =
      '<div class="alert alert-danger alert-white rounded"><button type="button" data-dismiss="alert" aria-hidden="true" class="close">×</button><div class="icon"><i class="fa fa-times-circle"></i></div><strong>Failure!<br></strong>' +
      r +
      "</div>";
    newDiv.style.marginTop = "5%";

    if (profile.hasChildNodes()) {
      profile.removeChild(profile.firstChild);
    }
    profile.appendChild(newDiv);
    return;
  }

  const newDiv = document.createElement("div");

  if (type == "teacher" || type == "doctor") {
    newDiv.innerHTML =
      '<div class="alert alert-success alert-white rounded"><button type="button" data-dismiss="alert" aria-hidden="true" class="close">×</button><div class="icon"><i class="fa fa-check"></i></div><strong>Success!</strong> Changes has been saved successfully!</div>';
    newDiv.style.marginTop = "5%";

    if (profile.hasChildNodes()) {
      profile.removeChild(profile.firstChild);
    }
    profile.appendChild(newDiv);

    return;
  }
  if (teacherClick && fileInput.files.length > 0) {
    localStorage.setItem("type", "teacher");
    newDiv.innerHTML =
      '<div class="alert alert-success alert-white rounded"><button type="button" data-dismiss="alert" aria-hidden="true" class="close">×</button><div class="icon"><i class="fa fa-check"></i></div><strong>Success!</strong> Changes has been saved successfully!<br> You have been verified by the admin immediately as a teacher!</div>';
    setTimeout(function () {
      location.reload();
    }, 4000);
  } else if (doctorClick && fileInput.files.length > 0) {
    localStorage.setItem("type", "doctor");
    newDiv.innerHTML =
      '<div class="alert alert-success alert-white rounded"><button type="button" data-dismiss="alert" aria-hidden="true" class="close">×</button><div class="icon"><i class="fa fa-check"></i></div><strong>Success!</strong> Changes has been saved successfully!<br> You have been verified by the admin immediately as a doctor!</div>';
    setTimeout(function () {
      location.reload();
    }, 4000);
  } else if ((teacherClick || doctorClick) && fileInput.files.length <= 0) {
    newDiv.innerHTML =
      '<div class="alert alert-info alert-white rounded"><button type="button" data-dismiss="alert" aria-hidden="true" class="close">×</button><div class="icon"><i class="fa fa-info-circle"></i></div><strong>Success!</strong> Changes has been saved successfully!<br> You did not upload a document, Therefore you are currently a donor who is not a teacher or a doctor. </div>';
  } else {
    newDiv.innerHTML =
      '<div class="alert alert-success alert-white rounded"><button type="button" data-dismiss="alert" aria-hidden="true" class="close">×</button><div class="icon"><i class="fa fa-check"></i></div><strong>Success!</strong> Changes has been saved successfully!<br> You are currently a donor who is not a teacher or a doctor. </div>';
  }
  newDiv.style.marginTop = "5%";
  if (profile.hasChildNodes()) {
    profile.removeChild(profile.firstChild);
  }
  profile.appendChild(newDiv);
});

const teachButt = document.getElementById("teacher-butt");

teachButt.addEventListener("click", function () {
  const dropDowntext = document.getElementById("dropdown-text");
  dropDowntext.innerText = "Teacher";
  document.getElementById("file-upload").style.display = "";
  teacherClick = true;
  doctorClick = false;
});

const doctButt = document.getElementById("doctor-butt");

doctButt.addEventListener("click", function () {
  const dropDowntext = document.getElementById("dropdown-text");
  dropDowntext.innerText = "Doctor";
  document.getElementById("file-upload").style.display = "";
  teacherClick = false;
  doctorClick = true;
});

const neither = document.getElementById("neither");

neither.addEventListener("click", function () {
  const dropDowntext = document.getElementById("dropdown-text");
  dropDowntext.innerText = "Neither";
  document.getElementById("file-upload").style.display = "none";
  teacherClick = false;
  doctorClick = false;
});
