document.addEventListener("DOMContentLoaded", (e) => {
  const navBar = document.querySelector(".nav-drop");
  let type = localStorage.getItem("type");

  if (type == "doctor") {
    navBar.style.display = "none";
    const docs = document.getElementsByClassName("doc");
    for (let i = 0; i < 3; i++) {
      docs[i].style.display = "";
      map.invalidateSize();
    }
  }

  if (type == "teacher") {
    navBar.style.display = "none";
    const teacherForm = document.getElementById("teacher-form");
    teacherForm.style.display = "";
  }
});

const confirmButton = document.getElementById("confirm-button");

let count = 0;

confirmButton.addEventListener("click", (e) => {
  const oldPass = document.getElementById("old-pass");
  const newPass1 = document.getElementById("new-pass1");
  const newPass2 = document.getElementById("new-pass2");
  const newDiv = document.createElement("div");
  newDiv.id = "new-div";
  const addText = document.getElementById("add-confirm");
  addText.appendChild(newDiv);

  oldPass.style.border = "";
  newPass1.style.border = "";
  newPass2.style.border = "";

  if (oldPass.value == "" || newPass1.value == "" || newPass2.value == "") {
    addText.removeChild(document.getElementById("new-div"));
    if (count == 1) count--;
    if (oldPass.value == "") {
      alert("please enter the old password");
      oldPass.style.border = "1px solid red";
    }
    if (newPass1.value == "") {
      alert("please enter the new password");
      newPass1.style.border = "1px solid red";
    }
    if (newPass2.value == "") {
      alert("please enter the confirmation for the new password");
      newPass2.style.border = "1px solid red";
    }
  } else {
    if (
      newPass1.value == newPass2.value &&
      !(newPass1.value == newPass2.value && newPass2.value == oldPass.value)
    ) {
      if (count == 0) {
        newDiv.style.color = "green";
        newDiv.innerText = "Confirmed";
        addText.appendChild(newDiv);
        count++;
      }
    } else {
      if (newPass1.value != newPass2.value) {
        addText.removeChild(document.getElementById("new-div"));
        if (count == 1) count--;
        alert("please enter matching new password values");
      }
      if (newPass1.value == newPass2.value && newPass2.value == oldPass.value) {
        addText.removeChild(document.getElementById("new-div"));
        if (count == 1) count--;
        alert("old password can't be new password");
      }
    }
  }
});

const updateButton = document.getElementById("update-profile");

// Profile info validation

let countUpdate = 0;
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
    r += "Last name must be provided and not contain only letters.<br>";
  }

  if (username == "") {
    document.getElementById("username").style.border = "1px solid red";
    r += "Please enter a username.<br>";
  }

  const phoneRegex = /^\+?\d{10,}$/;
  if (!phoneRegex.test(phoneNumber) || phoneNumber == "") {
    document.getElementById("phone").style.border = "1px solid red";
    r += "Please enter a valid phone number.<br>";
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
    if (cases.value == "") {
      cases.style.border = "1px solid red";
      r += "Please enter your the number of cases you can take.<br>";
    }
  }

  if (type == "teacher") {
    const classes = document.getElementById("pro-classes");

    classes.style.border = "";
    if (classes.value == "") {
      classes.style.border = "1px solid red";
      r += "Please enter your the number of classes.<br>";
    }
  }

  if (r != "") {
    countUpdate--;
    const newDiv = document.createElement("div");
    console.log(r);

    newDiv.innerHTML =
      '<div class="alert alert-danger alert-white rounded"><button type="button" data-dismiss="alert" aria-hidden="true" class="close">×</button><div class="icon"><i class="fa fa-times-circle"></i></div><strong>Failure!<br></strong>' +
      r +
      "</div>";
    newDiv.style.marginTop = "5%";
    const profile = document.getElementById("profile");
    profile.append(newDiv);
    return;
  }

  const newDiv = document.createElement("div");

  if (type == "teacher" || type == "doctor") {
    newDiv.innerHTML =
      '<div class="alert alert-success alert-white rounded"><button type="button" data-dismiss="alert" aria-hidden="true" class="close">×</button><div class="icon"><i class="fa fa-check"></i></div><strong>Success!</strong> Changes has been saved successfully!</div>';
    newDiv.style.marginTop = "5%";
    const profile = document.getElementById("profile");
    profile.append(newDiv);

    return;
  }
  if (teacherClick && fileInput.files.length > 0) {
    localStorage.setItem("type", "teacher");
    newDiv.innerHTML =
      '<div class="alert alert-success alert-white rounded"><button type="button" data-dismiss="alert" aria-hidden="true" class="close">×</button><div class="icon"><i class="fa fa-check"></i></div><strong>Success!</strong> Changes has been saved successfully!<br> You have been verified by the admin immediatly as a teacher!</div>';
  } else if (doctorClick && fileInput.files.length > 0) {
    localStorage.setItem("type", "doctor");
    newDiv.innerHTML =
      '<div class="alert alert-success alert-white rounded"><button type="button" data-dismiss="alert" aria-hidden="true" class="close">×</button><div class="icon"><i class="fa fa-check"></i></div><strong>Success!</strong> Changes has been saved successfully!<br> You have been verified by the admin immediatly as a doctor!</div>';
  } else {
    newDiv.innerHTML =
      '<div class="alert alert-success alert-white rounded"><button type="button" data-dismiss="alert" aria-hidden="true" class="close">×</button><div class="icon"><i class="fa fa-check"></i></div><strong>Success!</strong> Changes has been saved successfully!<br> You are currently a donor who is not a teacher or a doctor. </div>';
  }
  newDiv.style.marginTop = "5%";
  const profile = document.getElementById("profile");
  profile.append(newDiv);
  newDiv.style.transition = "opacity 5s ease-out";

  // Schedule the opacity to change after a short delay
  setTimeout(function () {
    newDiv.style.opacity = "0";
    newDiv.maxHeight = "0";
  }, 100); // 100 milliseconds delay
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
