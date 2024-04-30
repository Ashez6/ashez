const signInTab = document.getElementById("SignIn"); 
const signUpTab = document.getElementById("SignUp");
const signInForm = document.getElementById("signInForm");
const signUpForm = document.getElementById("signUpForm");
signUpTab.addEventListener("click", function (event){
  signInTab.classList.remove("active");
  signInTab.classList.add("inactive");

  signUpTab.classList.remove("inactive");
  signUpTab.classList.add("active");

} 
)
signInTab.addEventListener("click", function () {
  // Make the Sign In tab active
  signInTab.classList.remove("inactive");
  signInTab.classList.add("active");

  // Make the Sign Up tab inactive
  signUpTab.classList.remove("active");
  signUpTab.classList.add("inactive");


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