const photobtns= document.querySelectorAll(".photobtn");
const photos= document.querySelectorAll(".photo");

  
  photobtns[0].addEventListener('change', (e)=>handleFileSelect(e,0));


// Function to handle file selection
function handleFileSelect(event,i) {
  const file = event.target.files[0]; // Get the selected file
  const reader = new FileReader();
  reader.onload = function(event) {
      // const imgHolder = document.querySelector('.img-holder.photo'); // Get the image holder element
      photos[i].src = event.target.result; // Update the image source with the selected file
  };

  // Read the selected file as a data URL
  reader.readAsDataURL(file);
}
