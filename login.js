const usernameInput = document.getElementById("login");
const passwordInput = document.getElementById("password");
const loginButton = document.getElementById("login-button");

loginButton.addEventListener("click", function (event) {
  event.preventDefault();

  const enteredUsername = usernameInput.value;
  const enteredPassword = passwordInput.value;

  const users = {
    admin: { username: "admin", password: "admin1" },
    donor: { username: "donor", password: "donor1" },
    teacher: { username: "teach", password: "teach1" },
    org: { username: "org", password: "org1" },
    doctor: { username: "doc", password: "doc1" },
  };

  const matchedUser = Object.values(users).find(
    (user) =>
      user.username === enteredUsername && user.password === enteredPassword
  );

  if (matchedUser) {
    switch (matchedUser.username) {
      case "admin":
        window.location.href = "Admin/admin_home.html";
        break;
      case "donor":
        window.location.href = "Donor/homepage.html";
        localStorage.setItem("type", "donor");
        break;
      case "teach":
        window.location.href = "Donor/homepage.html";
        localStorage.setItem("type", "teacher");
        break;
      case "doc":
        window.location.href = "Donor/homepage.html";
        localStorage.setItem("type", "doctor");
        break;
      case "org":
        window.location.href = "Organization/homepageorg.html";
        localStorage.setItem("type", "organization");
        break;
    }
  } else {
    alert("Invalid credentials. Please try again.");
  }
});




