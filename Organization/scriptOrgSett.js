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
const confirmButton = document.getElementById("confirm-button");

confirmButton.addEventListener("click", (e) => {
  let errorMessage = "";
  const oldPass = document.getElementById("old-pass");
  const newPass1 = document.getElementById("new-pass1");
  const newPass2 = document.getElementById("new-pass2");

  oldPass.style.border = "";
  newPass1.style.border = "";
  newPass2.style.border = "";

  if (oldPass.value == "" || newPass1.value == "" || newPass2.value == "") {
    if (oldPass.value == "") {
      errorMessage += "Please enter the old password.<br>";
      oldPass.style.border = "1px solid red";
    }
    if (newPass1.value == "") {
      errorMessage += "Please enter the new password<br>";
      newPass1.style.border = "1px solid red";
    }
    if (newPass2.value == "") {
      errorMessage += "Please enter the confirmation for the new password<br>";
      newPass2.style.border = "1px solid red";
    }
  } else {
    if (
      newPass1.value == newPass2.value &&
      !(newPass1.value == newPass2.value && newPass2.value == oldPass.value)
    ) {
    } else {
      if (newPass1.value != newPass2.value) {
        errorMessage += "Please enter matching new password values<br>";
      }
      if (newPass1.value == newPass2.value && newPass2.value == oldPass.value) {
        errorMessage += "Old password can't be new password<br>";
      }
    }
  }

  const newDiv = document.createElement("div");
  const appendH = document.getElementById("add-confirm");
  newDiv.style.marginTop = "5%";

  if (errorMessage == "") {
    newDiv.innerHTML =
      '<div class="alert alert-success alert-white rounded"><button type="button" data-dismiss="alert" aria-hidden="true" class="close">×</button><div class="icon"><i class="fa fa-check"></i></div><strong>Success!</strong> Changes has been saved successfully!</div>';

    if (appendH.hasChildNodes()) {
      appendH.removeChild(appendH.firstChild);
    }

    appendH.appendChild(newDiv);
  } else {
    newDiv.innerHTML =
      '<div class="alert alert-danger alert-white rounded"><button type="button" data-dismiss="alert" aria-hidden="true" class="close">×</button><div class="icon"><i class="fa fa-times-circle"></i></div><strong>Failure!<br></strong>' +
      errorMessage +
      "</div>";

    if (appendH.hasChildNodes()) {
      appendH.removeChild(appendH.firstChild);
    }
    appendH.appendChild(newDiv);
  }
});

const updateButt = document.getElementById("update-button");

updateButt.addEventListener("click", (e) => {
  const fromTime = document.getElementById("from-time");
  const toTime = document.getElementById("to-time");

  fromTime.style.border = "";
  toTime.style.border = "";

  let errorMessage = "";

  if (fromTime.value == "" || toTime.value == "") {
    if (fromTime.value == "") {
      errorMessage += "Please enter the 'From Time'<br>";
      fromTime.style.border = "1px solid red";
    }
    if (toTime.value == "") {
      errorMessage += "please enter the 'To Time'<br>";
      toTime.style.border = "1px solid red";
    }
  }

  const newDiv = document.createElement("div");
  const appendH = document.getElementById("add-drop");
  newDiv.style.marginTop = "5%";

  if (errorMessage == "") {
    newDiv.innerHTML =
      '<div class="alert alert-success alert-white rounded"><button type="button" data-dismiss="alert" aria-hidden="true" class="close">×</button><div class="icon"><i class="fa fa-check"></i></div><strong>Success!</strong> Changes has been saved successfully!</div>';

    if (appendH.hasChildNodes()) {
      appendH.removeChild(appendH.firstChild);
    }

    appendH.appendChild(newDiv);
  } else {
    newDiv.innerHTML =
      '<div class="alert alert-danger alert-white rounded"><button type="button" data-dismiss="alert" aria-hidden="true" class="close">×</button><div class="icon"><i class="fa fa-times-circle"></i></div><strong>Failure!<br></strong>' +
      errorMessage +
      "</div>";

    if (appendH.hasChildNodes()) {
      appendH.removeChild(appendH.firstChild);
    }
    appendH.appendChild(newDiv);
  }
});

const updateButton = document.getElementById("update-profile");

// Profile info validation

updateButton.addEventListener("click", function (event) {
  event.preventDefault();

  let r = "";

  const firstName = document.getElementById("fullName").value;
  const lastName = document.getElementById("lastName").value;
  const orgname = document.getElementById("orgname").value;
  const username = document.getElementById("username").value;
  const gender = document.getElementById("gender").value;
  const email = document.getElementById("email").value;
  const phoneNumber = document.getElementById("phone").value;
  const area = document.getElementById("area");
  const governorate = document.getElementById("governorate");
  const type = document.getElementById("type");
  const address = document.getElementById("address");

  document.getElementById("fullName").style.border = "";
  document.getElementById("lastName").style.border = "";
  document.getElementById("orgname").style.border = "";
  document.getElementById("username").style.border = "";
  document.getElementById("gender").style.border = "";
  document.getElementById("email").style.border = "";
  document.getElementById("phone").style.border = "";
  area.style.border = "";
  governorate.style.border = "";
  type.style.border = "";
  address.style.border = "";

  const nameRegex = /^[A-Za-z\s]+$/;
  if (!nameRegex.test(firstName)) {
    document.getElementById("fullName").style.border = "1px solid red";
    r += "First name must be provided and contain only letters.<br>";
  }
  if (!nameRegex.test(lastName)) {
    document.getElementById("lastName").style.border = "1px solid red";
    r += "Last name must be provided and contain only letters.<br>";
  }

  if (orgname == "") {
    document.getElementById("orgname").style.border = "1px solid red";
    r += "Please enter an organization name .<br>";
  }
  if (username == "") {
    document.getElementById("username").style.border = "1px solid red";
    r += "Please enter a username.<br>";
  }

  if (gender == "") {
    document.getElementById("gender").style.border = "1px solid red";
    r += "Please enter your gender.<br>";
  }

  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailRegex.test(email) || email == "") {
    document.getElementById("email").style.border = "1px solid red";
    r += "Please enter a valid email address.<br>";
  }

  const phoneRegex = /^\+?\d{10,}$/;
  if (!phoneRegex.test(phoneNumber) || phoneNumber == "") {
    document.getElementById("phone").style.border = "1px solid red";
    r += "Please enter a valid phone number.<br>";
  }

  if (address.value == "") {
    address.style.border = "1px solid red";
    r += "Please enter your organisation address.<br>";
  }

  if (area.value == "") {
    area.style.border = "1px solid red";
    r += "Please enter your area.<br>";
  }

  if (governorate.value == "") {
    governorate.style.border = "1px solid red";
    r += "Please enter your governorate.<br>";
  }

  if (type.value == "") {
    type.style.border = "1px solid red";
    r += "Please enter your organization type .<br>";
  }

  if (count1 != 1) {
    r += "Please choose organisation's location from the map. <br>";
  }

  const newDiv = document.createElement("div");
  const appendH = document.getElementById("update-prof");

  newDiv.style.marginTop = "5%";

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
