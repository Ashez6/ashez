document.addEventListener("DOMContentLoaded", (e) => {});

const donorH2 = document.getElementById("Donor");
const orgH2 = document.getElementById("Organization");

const donorForm = document.getElementById("signUpDonorForm");
const orgForm = document.getElementById("signUpOrgForm");

donorH2.addEventListener("click", () => {
  donorForm.style.display = "block";
  orgForm.style.display = "none";
  donorH2.classList.remove("inactive");
  donorH2.classList.add("active");
  orgH2.classList.remove("active");
  orgH2.classList.add("inactive");
});

orgH2.addEventListener("click", () => {
  orgForm.style.display = "block";
  donorForm.style.display = "none";
  donorH2.classList.remove("active");
  donorH2.classList.add("inactive");
  orgH2.classList.remove("inactive");
  orgH2.classList.add("active");
  setTimeout(() => {
    map.invalidateSize();
  }, 0);
});

function validateEmail(email) {
  const emailPattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
  return emailPattern.test(email);
}

function validatePhoneNumber(phoneNumber) {
  const phonePattern = /^\+?\d{10,}$/;
  return phonePattern.test(phoneNumber);
}

function validateName(name) {
  const namePattern = /^[a-zA-Z]+$/;
  return namePattern.test(name);
}

const donorSignUpButt = document.getElementById("sign-up-donor");
const donorTypeSelect = document.getElementById("donor-type");
const verificationFileInput = document.getElementById("verification-file");
const verificationFileInput2 = document.getElementById("verification-file2");
const verificationLabel = document.getElementById("verificationLabel");
const verificationLabel2 = document.getElementById("verificationLabel2");

donorTypeSelect.addEventListener("change", function () {
  if (
    donorTypeSelect.value === "teacher" ||
    donorTypeSelect.value === "doctor"
  ) {
    verificationFileInput.style.display = "block";
    verificationFileInput2.style.display = "block";
    verificationLabel.style.display = "block";
    verificationLabel2.style.display = "block";
  } else {
    verificationFileInput.style.display = "none";
    verificationFileInput2.style.display = "none";
    verificationLabel.style.display = "none";
    verificationLabel2.style.display = "none";
  }
});

verificationFileInput.addEventListener("change", function () {
  if (verificationFileInput.files.length > 0) {
    verificationFileInput.nextElementSibling.textContent =
      "Verification Uploaded";
  }
});

// Donor Sign-Up

donorSignUpButt.addEventListener("click", function (event) {
  const firstName = document.getElementById("first-name1");
  const lastName = document.getElementById("last-name1");
  const username = document.getElementById("username1");
  const email = document.getElementById("email1");
  const password = document.getElementById("signup-password1");
  const number = document.getElementById("contact-number1");
  const address = document.getElementById("address1");
  const area = document.getElementById("area1");
  const governorate = document.getElementById("governorate1");
  const gender = document.getElementById("gender1");

  console.log(gender.value);

  let isValid = true;

  let errorMessage = "";

  firstName.style.border = "";
  lastName.style.border = "";
  username.style.border = "";
  email.style.border = "";
  password.style.border = "";
  number.style.border = "";
  address.style.border = "";
  area.style.border = "";
  governorate.style.border = "";
  gender.style.border = "";

  if (!validateName(firstName.value)) {
    errorMessage += "First name must be provided and not contain any symbol.\n";
    firstName.style.border = "1px solid red";
    isValid = false;
  }
  if (!validateName(lastName.value)) {
    errorMessage += "Last name must be provided and not contain any symbol.\n";
    lastName.style.border = "1px solid red";
    isValid = false;
  }

  if (username.value == "") {
    errorMessage += "Please enter a username.\n";
    username.style.border = "1px solid red";
    isValid = false;
  }

  if (password.value == "") {
    errorMessage += "Please enter a password.\n";
    password.style.border = "1px solid red";
    isValid = false;
  }

  if (address.value == "") {
    errorMessage += "Please enter your address.\n";
    address.style.border = "1px solid red";
    isValid = false;
  }
  if (area.value == "") {
    errorMessage += "Please enter your area.\n";
    area.style.border = "1px solid red";
    isValid = false;
  }
  if (governorate.value == "") {
    errorMessage += "Please enter the your governorate.\n";
    governorate.style.border = "1px solid red";
    isValid = false;
  }

  if (!validateEmail(email.value)) {
    email.style.border = "1px solid red";
    isValid = false;
    errorMessage += "Please enter a valid email\n";
  }
  if (!validatePhoneNumber(number.value)) {
    number.style.border = "1px solid red";
    errorMessage +=
      "Please enter a valid phone number. [+country code][10 digits]\n";
    isValid = false;
  }

  if (
    (donorTypeSelect.value === "teacher" ||
      donorTypeSelect.value === "doctor") &&
       (verificationFileInput.files.length === 0 || verificationFileInput2.files.length === 0)

  ) {
    errorMessage += "Please upload your verification file.";
    isValid = false;
  }

  if (gender.value == "null") {
    errorMessage += "Please enter your gender. \n";
    gender.style.border = "1px solid red";
    isValid = false;
  }

  if (!isValid) {
    alert(errorMessage);
    event.preventDefault();
  }else if(donorTypeSelect.value === "teacher" ||
  donorTypeSelect.value === "doctor") {
    alert("Your pro bono account has been created and waiting for admin verification, for now you could sign in as a regular donor!");
    window.location.href = "index.html";
  }
   else {
    alert("Your account has been created!");
    window.location.href = "index.html";
  }
});

//ORG SIGN-UP

const orgSignUpButt = document.getElementById("sign-up-org");
const orgVerificationFileInput = document.getElementById(
  "org-verification-file"
);
const orgVerificationFileInput2 = document.getElementById(
  "org-verification-file2"
);

orgSignUpButt.addEventListener("click", function (event) {
  const firstName = document.getElementById("first-name2");
  const lastName = document.getElementById("last-name2");
  const email = document.getElementById("email2");
  const username = document.getElementById("username2");
  const password = document.getElementById("signup-password2");
  const number = document.getElementById("contact-number2");
  const orgName = document.getElementById("org-name2");
  const orgType = document.getElementById("org-type2");
  const address = document.getElementById("address2");
  const area = document.getElementById("area2");
  const governorate = document.getElementById("governorate2");
  const gender = document.getElementById("gender2");

  firstName.style.border = "";
  lastName.style.border = "";
  username.style.border = "";
  email.style.border = "";
  password.style.border = "";
  number.style.border = "";
  orgName.style.border = "";
  orgType.style.border = "";
  address.style.border = "";
  area.style.border = "";
  governorate.style.border = "";

  let errorMessage = "";

  let isValid = true;

  if (!validateName(firstName.value)) {
    errorMessage += "First name must be provided and not contain any symbol.\n";
    firstName.style.border = "1px solid red";
    isValid = false;
  }
  if (!validateName(lastName.value)) {
    errorMessage += "Last name must be provided and not contain any symbol.\n";
    lastName.style.border = "1px solid red";
    isValid = false;
  }

  if (orgVerificationFileInput.files.length === 0) {
    errorMessage += "Please upload your verification file.\n";
    orgVerificationFileInput.style.border = "1px solid red";
    isValid = false;
  } else {
    orgVerificationFileInput.style.border = ""; // reset border if validation passes
  }
  if (orgVerificationFileInput2.files.length === 0) {
    errorMessage += "Please upload your verification file.\n";
    orgVerificationFileInput2.style.border = "1px solid red";
    isValid = false;
  } else {
    orgVerificationFileInput2.style.border = ""; // reset border if validation passes
  }

  if (username.value == "") {
    errorMessage += "Please enter a username.\n";

    username.style.border = "1px solid red";
    isValid = false;
  }

  if (password.value == "") {
    errorMessage += "Please enter a password.\n";

    password.style.border = "1px solid red";
    isValid = false;
  }
  if (orgName.value == "") {
    errorMessage += "Please enter the organization's name.\n";
    orgName.style.border = "1px solid red";
    isValid = false;
  }
  if (orgType.value == "") {
    errorMessage += "Please enter the organization's type.\n";

    orgType.style.border = "1px solid red";
    isValid = false;
  }
  if (address.value == "") {
    errorMessage += "Please enter the organization's address.\n";
    address.style.border = "1px solid red";
    isValid = false;
  }
  if (area.value == "") {
    errorMessage += "Please enter the organization's area.\n";

    area.style.border = "1px solid red";
    isValid = false;
  }
  if (governorate.value == "") {
    errorMessage += "Please enter the organization's governorate.\n";

    governorate.style.border = "1px solid red";
    isValid = false;
  }

  if (!validateEmail(email.value)) {
    errorMessage += "A valid email must be provided.\n";
    email.style.border = "1px solid red";
    isValid = false;
  }
  if (!validatePhoneNumber(number.value)) {
    number.style.border = "1px solid red";
    errorMessage +=
      "Please enter a valid phone number. [+country code][10 digits].\n";
    isValid = false;
  }

  if (gender.value == "") {
    errorMessage += "Please enter your gender. \n";
    gender.style.border = "1px solid red";
    isValid = false;
  }
  if (count == 0) {
    errorMessage += "Please add your organization's pin on the map.\n";
    isValid = false;
  }

  if (!isValid) {
    event.preventDefault();
    alert(errorMessage);
  } else {
    alert("Your account has been created and waiting for admin verification! Check your mail frequently for confirmation of access.");
    window.location.href = "index.html";
  }
});
