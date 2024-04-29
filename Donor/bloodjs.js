
//Filter
// const checkboxes = document.querySelectorAll('.length-filter');
// const items = document.getElementsByClassName('job-box');
// const search=document.querySelector('#contact-submit');
// search.addEventListener('click',(e)=>{
//   const selectedOptions = Array.from(checkboxes).filter(checkbox => checkbox.checked).map(checkbox => checkbox.value);
//   for (let i = 0; i < items.length; i++) {
//     const item = items[i];
//     const itemName = item.textContent.toLowerCase();
//     if (selectedOptions.length > 0) {
//       if (selectedOptions.includes('short') && itemLength > 5) {
//         shouldDisplay = false;
//       }
//       if (selectedOptions.includes('medium') && (itemLength <= 5 || itemLength > 10)) {
//         shouldDisplay = false;
//       }
//       if (selectedOptions.includes('long') && itemLength <= 10) {
//         shouldDisplay = false;
//       }
//     }

//     item.style.display = shouldDisplay ? 'inline-block' : 'none';
//   }
// })

const keywordsInput = document.getElementById('keywords');
const hospitalCheckboxes = document.querySelectorAll('.filter1');
const filterButton = document.getElementById('contact-submit');
function applyFilters() {
  const keywords = keywordsInput.value.toLowerCase();
  const selectedHospitals = Array.from(hospitalCheckboxes)
      .filter(checkbox => checkbox.checked)
      .map(checkbox => checkbox.value.toLowerCase());

  // Filter logic here
  const jobBoxes = document.querySelectorAll('.job-box');
  jobBoxes.forEach(jobBox => {
      const hospitalName = jobBox.querySelector('.job-content').textContent.toLowerCase();
      console.log(hospitalName);
      const shouldDisplay = matchKeywords(keywords, hospitalName) && matchHospital(selectedHospitals, hospitalName);
      console.log(shouldDisplay);
      jobBox.style.display = shouldDisplay ? '' : 'none';
      jobBox.style.visible = shouldDisplay ? '' : 'none';
  });
}

function matchKeywords(keywords, text) {
  return keywords === '' || text.includes(keywords);
}

function matchHospital(selectedHospitals, hospitalName) {
  if(selectedHospitals.length === 0){
    return true;
  }
  for(let i=0;i<selectedHospitals.length;i++){
    if(hospitalName.includes(selectedHospitals[i])){
      return true;
    }
  }
  return false;
}

filterButton.addEventListener('click', applyFilters);


// View Donation 1
const viewDonation1 = document.getElementById("vdonation1"); //
const viewDonation1Screen = document.getElementById("vdonation1-screen");

viewDonation1.addEventListener("click", (e) => {
  viewDonation1Screen.style.visibility = "visible";
  viewDonation1Screen.style.display = "";
});

const CloseDonation1 = document.getElementsByClassName("close-donation")[0];

CloseDonation1.addEventListener("click", (e) => {
  viewDonation1Screen.style.display = "none";
  viewDonation1Screen.style.visibility = "hidden";
});

//View Donation 2

const viewDonation2 = document.getElementById("vdonation2"); //
const viewDonation2Screen = document.getElementById("vdonation2-screen");

viewDonation2.addEventListener("click", (e) => {
  viewDonation2Screen.style.visibility = "visible";
  viewDonation2Screen.style.display = "";
});

const CloseDonation2 = document.getElementsByClassName("close-donation")[1];

CloseDonation2.addEventListener("click", (e) => {
  viewDonation2Screen.style.display = "none";
  viewDonation2Screen.style.visibility = "hidden";
});

//View Donation 3

const viewDonation3 = document.getElementById("vdonation3"); //
const viewDonation3Screen = document.getElementById("vdonation3-screen");

viewDonation3.addEventListener("click", (e) => {
  viewDonation3Screen.style.visibility = "visible";
  viewDonation3Screen.style.display = "";
});

const CloseDonation3 = document.getElementsByClassName("close-donation")[2];

CloseDonation3.addEventListener("click", (e) => {
  viewDonation3Screen.style.display = "none";
  viewDonation3Screen.style.visibility = "hidden";
});



