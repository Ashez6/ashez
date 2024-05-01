
const confirmButton = document.getElementById("confirm-button");

let count1 = 0;

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
    if (count1 == 1) count--;
    if (oldPass.value == "") {
      alert("please enter the old password");
      oldPass.style.border = "3px solid red";
    }
    if (newPass1.value == "") {
      alert("please enter the new password");
      newPass1.style.border = "3px solid red";
    }
    if (newPass2.value == "") {
      alert("please enter the confirmation for the new password");
      newPass2.style.border = "3px solid red";
    }
  } else {
    if (
      newPass1.value == newPass2.value &&
      !(newPass1.value == newPass2.value && newPass2.value == oldPass.value)
    ) {
      if (count1 == 0) {
        newDiv.style.color = "green";
        newDiv.innerText = "Confirmed";
        addText.appendChild(newDiv);
        count1++;
      }
    } else {
      if (newPass1.value != newPass2.value) {
        addText.removeChild(document.getElementById("new-div"));
        if (count1 == 1) count--;
        alert("please enter matching new password values");
      }
      if (newPass1.value == newPass2.value && newPass2.value == oldPass.value) {
        addText.removeChild(document.getElementById("new-div"));
        if (count1 == 1) count--;
        alert("old password can't be new password");
      }
    }
  }
});


const updateButt = document.getElementById("update-button");

let count = 0;

updateButt.addEventListener("click", (e) => {
  const fromTime = document.getElementById("from-time");
  const toTime = document.getElementById("to-time");
  const newDiv = document.createElement("div");
  newDiv.id = "new-div";
  const addText = document.getElementById("add-update");
  addText.appendChild(newDiv);

  fromTime.style.border = "";
  toTime.style.border = "";

  if (fromTime.value == "" || toTime.value == "") {
    addText.removeChild(document.getElementById("new-div"));
    if (count == 1) count--;
    if (fromTime.value == "") {
      alert("Please enter the 'From Time' ");
      fromTime.style.border = "3px solid red";
    }
    if (toTime.value == "") {
      alert("please enter the 'To Time'");
      toTime.style.border = "3px solid red";
    }
  } else {
    if (count == 0) {
      newDiv.style.color = "green";
      newDiv.innerText = "Confirmed";
      addText.appendChild(newDiv);
      count++;
    }
  }
});


const updateButton = document.getElementById("update-profile");

// Profile info validation

let countUpdate = 0;

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

  const fileInput = document.getElementById("fileInput");

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

  const nameRegex = /^[A-Za-z\s]+$/;
  if (!nameRegex.test(firstName)) {
    document.getElementById("fullName").style.border = "1px solid red";
    r += "First name must be provided and contain only letters.<br>";
  }
  if (!nameRegex.test(lastName)) {
    document.getElementById("lastName").style.border = "1px solid red";
    r += "Last name must be provided and not contain only letters.<br>";
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

  
  if (type.value == "") {
    address.style.border = "1px solid red";
    r += "Please enter your organization type .<br>";
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
        '<div class="alert alert-success alert-white rounded"><button type="button" data-dismiss="alert" aria-hidden="true" class="close">×</button><div class="icon"><i class="fa fa-check"></i></div><strong>Success!</strong> Changes has been saved successfully!<br> Organization info updated successfully. </div>';
    
    newDiv.style.marginTop = "5%";
    const profile = document.getElementById("profile");
    profile.append(newDiv);
  }
});
