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

let countUpdate = 0;

// Profile info validation
updateButton.addEventListener("click", function (event) {
  event.preventDefault();

  let r = "";

  const firstName = document.getElementById("fullName").value;
  const lastName = document.getElementById("lastName").value;
  const phoneNumber = document.getElementById("phone").value;
  const email = document.getElementById("email").value;

  const nameRegex = /^[A-Za-z\s]+$/;
  if (!nameRegex.test(firstName)) {
    document.getElementById("fullName").style.border = "1px solid red";
    r += "First name must be provided and contain only letters.<br>";
  }
  if (!nameRegex.test(lastName)) {
    document.getElementById("lastName").style.border = "1px solid red";
    r += "Last name must be provided and not contain only letters.<br>";
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

  if (countUpdate == 0) {
    countUpdate++;
    const newDiv = document.createElement("div");
    newDiv.innerHTML =
      '<div class="alert alert-success alert-white rounded"><button type="button" data-dismiss="alert" aria-hidden="true" class="close">×</button><div class="icon"><i class="fa fa-check"></i></div><strong>Success!</strong> Changes has been saved successfully!</div>';
    newDiv.style.marginTop = "5%";
    const profile = document.getElementById("profile");
    profile.append(newDiv);
  }
});
