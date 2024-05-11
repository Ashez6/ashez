const photobtns = document.querySelectorAll(".photobtn");
const photos = document.querySelectorAll(".photo");

photobtns[0].addEventListener("change", (e) => handleFileSelect(e, 0));

// Function to handle file selection
function handleFileSelect(event, i) {
  const file = event.target.files[0]; // Get the selected file
  const reader = new FileReader();
  reader.onload = function (event) {
    // const imgHolder = document.querySelector('.img-holder.photo'); // Get the image holder element
    photos[i].src = event.target.result; // Update the image source with the selected file
  };

  // Read the selected file as a data URL
  reader.readAsDataURL(file);
}

let errorMessage = "";

function checkInput(inputElement) {
  inputElement.style.border = "";
  if (inputElement.value === "") {
    inputElement.style.border = "1px solid red";
    errorMessage += `Please enter the ${inputElement.id}.<br>`;
  }
}

const postReq = document.getElementById("update-profile");

postReq.addEventListener("click", (e) => {
  const title = document.getElementById("title");
  const name = document.getElementById("name");
  const blood = document.getElementById("blood");

  errorMessage = "";

  checkInput(title);
  checkInput(name);
  checkInput(blood);

  const fileInput = document.getElementById("file-here");
  if (!fileInput.value) {
    errorMessage += "Please upload a photo.<br>";
    e.preventDefault();
  }

  const newDiv = document.createElement("div");
  const appendH = document.getElementById("append-here");

  if (errorMessage == "") {
    newDiv.innerHTML =
    '<div class="alert alert-success alert-white rounded"><button type="button" data-dismiss="alert" aria-hidden="true" class="close">×</button><div class="icon"><i class="fa fa-check"></i></div><strong>Success!</strong> Your Request has been posted successfully! <br><br><a href="required.html" style="margin-left: 0%;color: green;font-weight: 600;"><u>Go to required donations <i class="fa fa-long-arrow-right"></i> </u></a></div>';

    if (appendH.hasChildNodes()) {
      appendH.removeChild(appendH.firstChild);
    }

    appendH.appendChild(newDiv);
  } else {
    newDiv.innerHTML =
      '<div class="alert alert-danger alert-white rounded"><button type="button" data-dismiss="alert" aria-hidden="true" class="close">×</button><div class="icon"><i class="fa fa-times-circle"></i></div><strong>Failure!<br></strong>' +
      errorMessage +
      "</div>";

    if (appendH.hasChildNodes()) {
      appendH.removeChild(appendH.firstChild);
    }
    appendH.appendChild(newDiv);
  }
});
