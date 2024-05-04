//Change Password Screen

const confirmButton = document.getElementById("confirm-button");

confirmButton.addEventListener("click", (e) => {
  const oldPass = document.getElementById("old-pass");
  const newPass1 = document.getElementById("new-pass1");
  const newPass2 = document.getElementById("new-pass2");

  let r = "";

  oldPass.style.border = "";
  newPass1.style.border = "";
  newPass2.style.border = "";

  if (oldPass.value == "" || newPass1.value == "" || newPass2.value == "") {
    if (oldPass.value == "") {
      r += "Please enter the old password.<br>";
      oldPass.style.border = "1px solid red";
    }
    if (newPass1.value == "") {
      r += "Please enter the new password.<br>";
      newPass1.style.border = "1px solid red";
    }
    if (newPass2.value == "") {
      r += "Please enter the confirmation for the new password.<br>";
      newPass2.style.border = "1px solid red";
    }
  } else {
    if (
      !(
        newPass1.value == newPass2.value &&
        !(newPass1.value == newPass2.value && newPass2.value == oldPass.value)
      )
    )
      if (newPass1.value != newPass2.value) {
        r += "please enter matching new password values.<br>";
      }
    if (newPass1.value == newPass2.value && newPass2.value == oldPass.value) {
      r += "old password can't be new password. <br>";
    }
  }

  const newDiv = document.createElement("div");
  const appendH = document.getElementById("add-confirm");
  newDiv.style.marginTop = "4%";

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
