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

const signupForm = document.getElementById("signUpForm");
signupForm.addEventListener("submit", function (event) {
  event.preventDefault();

  const email = document.getElementById("email").value;
  const contactNumber = document.getElementById("contact-number").value;

  // Regular expression for email validation
  const emailRegex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;
  if (!emailRegex.test(email)) {
    alert("Please enter a valid email.");
    return;
  }

  // Regular expression for contact number validation
  const contactNumberRegex = /^[0-9]{10}$/;
  if (!contactNumberRegex.test(contactNumber)) {
    alert("Please enter a valid contact number.");
    document.getElementById("contact-number").style.border = "1px solid red";
    return;
  }
});