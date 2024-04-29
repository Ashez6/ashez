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
