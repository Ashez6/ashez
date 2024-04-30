const donorH2 = document.getElementById("Donor");
const orgH2 = document.getElementById("Organization");

// Get references to the form sections
const donorForm = document.getElementById("signUpDonorForm");
const orgForm = document.getElementById("signUpOrgForm");

// Add click event listeners to the h2 elements
donorH2.addEventListener("click", () => {
  donorForm.style.display = "block"; // Show donor form
  orgForm.style.display = "none"; // Hide organization form
  donorH2.classList.remove("inactive");
  donorH2.classList.add("active");
  orgH2.classList.remove("active");
  orgH2.classList.add("inactive");
});

orgH2.addEventListener("click", () => {
  orgForm.style.display = "block"; // Show organization form
  donorForm.style.display = "none"; // Hide donor form
  donorH2.classList.remove("active");
  donorH2.classList.add("inactive");
  orgH2.classList.remove("inactive");
  orgH2.classList.add("active");
});

// Validate email format
function validateEmail(email) {
  const emailPattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
  return emailPattern.test(email);
}

// Validate phone number format (10 digits)
function validatePhoneNumber(phoneNumber) {
  const phonePattern = /^\d{10}$/;
  return phonePattern.test(phoneNumber);
}

const donorSignUpButt = document.getElementById("sign-up-donor");

// Add event listener for form submission

donorSignUpButt.addEventListener("click", function (event) {
  const emailInput = document.getElementById("email1");
  const phoneNumberInput = document.getElementById("contact-number1");
  const firstName = document.getElementById("first-name");

  firstName.style.border = "";
  emailInput.style.border = "";
  phoneNumberInput.style.border = "";

  if (firstName.value == "") {
    firstName.style.border = "1px solid red";
  }
  // Validate email and phone number
  if (!validateEmail(emailInput.value)) {
    emailInput.style.border = "1px solid red";
  }

  if (!validatePhoneNumber(phoneNumberInput.value)) {
    phoneNumberInput.style.border = "1px solid red";
  }
});

// Inside the form submission event listener
// document
//   .getElementById("signUpDonorForm")
//   .addEventListener("click", function (event) {
//     // ... other validation code ...

//     // If all validations pass, show success message and redirect
//     if (
//       validateEmail(emailInput.value) &&
//       validatePhoneNumber(phoneNumberInput.value)
//     ) {
//       alert("Account created successfully!");
//       window.location.href = "homepage.html"; // Replace with your actual homepage URL
//     }
//   });
