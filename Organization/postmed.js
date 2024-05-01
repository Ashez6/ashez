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
