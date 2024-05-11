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
  const type = document.getElementById("type");
  const quantity = document.getElementById("quantity");
  const usage = document.getElementById("usage");
  errorMessage = "";

  checkInput(title);
  checkInput(type);
  checkInput(usage);


  

  quantity.style.border = "";
  if (quantity.value <= 0) {
    quantity.style.border = "1px solid red";
    errorMessage += `Please enter the ${quantity.id}.<br>`;
  }

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


// document.addEventListener("DOMContentLoaded", function () {
//   const typeSelect = document.getElementById("type-select");

//   typeSelect.addEventListener("change", function () {
//     const selectedVal = typeSelect.value;
//     console.log("hello");

//     console.log("Selected value:", selectedVal);

//     if (selectedVal === "Medical Supplies") {
//       const newDiv = document.createElement("div");
//       newDiv.innerHTML = `
//               <div class="form-group">
//                   <label for="username">Select Supply Type</label><br>
//                   <select class="form-select" style="height: 50px; width: 250px;">
//                       <option value="Unisex" selected>Type</option>
//                       <option value="Medications">Medical equipment</option>
//                       <option value="Medical Supplies">Medical devices</option>
//                   </select>
//               </div>
//           `;

//       const profile = document.getElementById("append-here");
//       profile.appendChild(newDiv);
//     }
//   });
// });
