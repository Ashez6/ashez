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
  map.invalidateSize();

  orgForm.style.display = "block";
  donorForm.style.display = "none";
  donorH2.classList.remove("active");
  donorH2.classList.add("inactive");
  orgH2.classList.remove("inactive");
  orgH2.classList.add("active");
});

function validateEmail(email) {
  const emailPattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
  return emailPattern.test(email);
}

function validatePhoneNumber(phoneNumber) {
  const phonePattern = /^\d{11}$/;
  return phonePattern.test(phoneNumber);
}

function validateName(name) {
  const namePattern = /^[a-zA-Z]+$/;
  return namePattern.test(name);
}

const donorSignUpButt = document.getElementById("sign-up-donor");
const donorTypeSelect = document.getElementById("donor-type");
const verificationFileInput = document.getElementById("verification-file");

donorTypeSelect.addEventListener("change", function () {
  if (
    donorTypeSelect.value === "teacher" ||
    donorTypeSelect.value === "doctor"
  ) {
    verificationFileInput.style.display = "block";
  } else {
    verificationFileInput.style.display = "none";
  }
});

verificationFileInput.addEventListener("change", function () {
  if (verificationFileInput.files.length > 0) {
    verificationFileInput.nextElementSibling.textContent =
      "Verification Uploaded";
  }
});

donorSignUpButt.addEventListener("click", function (event) {
  const genderSelect = document.getElementById("gender1");
  const firstName = document.getElementById("first-name1");
  const lastName = document.getElementById("last-name1");
  const email = document.getElementById("email1");
  const password = document.getElementById("signup-password1");
  const number = document.getElementById("contact-number1");
  const address = document.getElementById("address1");
  const area = document.getElementById("area1");
  const governorate = document.getElementById("governorate1");
  const gender = document.getElementById("gender1");

  console.log(gender.value);

  let isValid = true;

  firstName.style.border = "";
  lastName.style.border = "";
  email.style.border = "";
  password.style.border = "";
  number.style.border = "";
  address.style.border = "";
  area.style.border = "";
  governorate.style.border = "";

  if (firstName.value == "") {
    firstName.style.border = "1px solid red";
    isValid = false;
  }
  if (lastName.value == "") {
    lastName.style.border = "1px solid red";
    isValid = false;
  }
  if (password.value == "") {
    password.style.border = "1px solid red";
    isValid = false;
  }
  if (address.value == "") {
    address.style.border = "1px solid red";
    isValid = false;
  }
  if (area.value == "") {
    area.style.border = "1px solid red";
    isValid = false;
  }
  if (governorate.value == "") {
    governorate.style.border = "1px solid red";
    isValid = false;
  }
  if (!validateName(firstName.value)) {
    firstName.style.border = "1px solid red";
    isValid = false;
  }
  if (!validateName(lastName.value)) {
    lastName.style.border = "1px solid red";
    isValid = false;
  }

  if (!validateEmail(email.value)) {
    email.style.border = "1px solid red";
    isValid = false;
  }
  if (!validatePhoneNumber(number.value)) {
    number.style.border = "1px solid red";
    isValid = false;
  }

  if (
    (donorTypeSelect.value === "teacher" ||
      donorTypeSelect.value === "doctor") &&
    verificationFileInput.files.length === 0
  ) {
    alert("Please upload your verification file.");
    isValid = false;
  }

  if (gender.value == "null") {
    gender.style.border = "1px solid red";
    isValid = false;
  }

  if (!isValid) {
    event.preventDefault();
  } else {
    alert("Your account has been created!");
    window.location.href = "./Donor/homepage.html";
  }
});

const orgSignUpButt = document.getElementById("sign-up-org");
const orgVerificationFileInput = document.getElementById(
  "org-verification-file"
);

orgSignUpButt.addEventListener("click", function (event) {
  const firstName = document.getElementById("first-name2");
  const lastName = document.getElementById("last-name2");
  const email = document.getElementById("email2");
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
  email.style.border = "";
  password.style.border = "";
  number.style.border = "";
  orgName.style.border = "";
  orgType.style.border = "";
  address.style.border = "";
  area.style.border = "";
  governorate.style.border = "";

  let isValid = true;

  if (orgVerificationFileInput.files.length === 0) {
    alert("Please upload your verification file.");
    orgVerificationFileInput.style.border = "1px solid red";
    isValid = false;
  } else {
    orgVerificationFileInput.style.border = ""; // reset border if validation passes
  }

  if (firstName.value == "") {
    firstName.style.border = "1px solid red";
    isValid = false;
  }
  if (lastName.value == "") {
    lastName.style.border = "1px solid red";
    isValid = false;
  }
  if (password.value == "") {
    password.style.border = "1px solid red";
    isValid = false;
  }
  if (orgName.value == "") {
    orgName.style.border = "1px solid red";
    isValid = false;
  }
  if (orgType.value == "") {
    orgType.style.border = "1px solid red";
    isValid = false;
  }
  if (address.value == "") {
    address.style.border = "1px solid red";
    isValid = false;
  }
  if (area.value == "") {
    area.style.border = "1px solid red";
    isValid = false;
  }
  if (governorate.value == "") {
    governorate.style.border = "1px solid red";
    isValid = false;
  }

  if (!validateName(firstName.value)) {
    firstName.style.border = "1px solid red";
    isValid = false;
  }
  if (!validateName(lastName.value)) {
    lastName.style.border = "1px solid red";
    isValid = false;
  }
  if (!validateEmail(email.value)) {
    email.style.border = "1px solid red";
    isValid = false;
  }
  if (!validatePhoneNumber(number.value)) {
    number.style.border = "1px solid red";
    isValid = false;
  }

  if (gender.value == "") {
    gender.style.border = "1px solid red";
    isValid = false;
  }

  if (!isValid) {
    event.preventDefault();
  } else {
    alert("Your account has been created!");
    window.location.href = "./Organization/homepageorg.html";
  }
});
