
const deldiv= document.getElementById("deldiv");
const newdiv=document.createElement("div");
deldiv.append(newdiv);

//Filter

const keywordsInput = document.getElementById('keywords');
const filter1Checkboxes = document.querySelectorAll('.filter1');
const filter2Checkboxes = document.querySelectorAll('.filter2');
const filter3Checkboxes = document.querySelectorAll('.filter3');
const filterButton = document.getElementById('contact-submit');
function applyFilters() {
  newdiv.innerHTML="";
  const keywords = keywordsInput.value.toLowerCase();
  const selected1 = Array.from(filter1Checkboxes).filter(checkbox => checkbox.checked).map(checkbox => checkbox.value.toLowerCase());
  const selected2 = Array.from(filter2Checkboxes).filter(checkbox => checkbox.checked).map(checkbox => checkbox.value.toLowerCase());
  const selected3 = Array.from(filter3Checkboxes).filter(checkbox => checkbox.checked).map(checkbox => checkbox.value.toLowerCase());


  // Filter logic here
  const jobBoxes = document.querySelectorAll('.job-box');
  jobBoxes.forEach(jobBox => {
      const Name = jobBox.querySelector('.job-content').textContent.toLowerCase();
      const shouldDisplay = matchKeywords(keywords, Name) && matchSelected(selected1, Name) && matchSelected(selected2, Name) && matchSelected(selected3, Name);
      console.log(shouldDisplay);
      jobBox.style.display = shouldDisplay ? "" : "none";
  });
}

function matchKeywords(keywords, text) {
  return keywords === '' || text.includes(keywords);
}

function matchSelected(selected, Name) {
  if(selected.length === 0){
    return true;
  }
  for(let i=0;i<selected.length;i++){
    if(Name.includes(selected[i])){
      return true;
    }
  }
  return false;
}

function handleEnterKey(e){ 
  if(e.keyCode == 13){ // enter pressed
      try{
          applyFilters();

      }catch(err){
          console.log(err.message); 
      }
  }
}

filterButton.addEventListener('click', applyFilters);


// View Donation 1
const viewDonation1 = document.getElementById("vdonation1"); //
const viewDonation1Screen = document.getElementById("vdonation1-screen");

viewDonation1.addEventListener("click", (e) => {
  newdiv.innerHTML="";
  viewDonation1Screen.style.visibility = "visible";
  viewDonation1Screen.style.display = "";
});

const CloseDonation1 = document.getElementsByClassName("close-donation")[0];

CloseDonation1.addEventListener("click", (e) => {
  newdiv.innerHTML="";
  viewDonation1Screen.style.display = "none";
  viewDonation1Screen.style.visibility = "hidden";
});

//View Donation 2

const viewDonation2 = document.getElementById("vdonation2"); //
const viewDonation2Screen = document.getElementById("vdonation2-screen");

viewDonation2.addEventListener("click", (e) => {
  newdiv.innerHTML="";
  viewDonation2Screen.style.visibility = "visible";
  viewDonation2Screen.style.display = "";
});

const CloseDonation2 = document.getElementsByClassName("close-donation")[1];

CloseDonation2.addEventListener("click", (e) => {
  newdiv.innerHTML="";
  viewDonation2Screen.style.display = "none";
  viewDonation2Screen.style.visibility = "hidden";
});

//View Donation 3

const viewDonation3 = document.getElementById("vdonation3"); //
const viewDonation3Screen = document.getElementById("vdonation3-screen");

viewDonation3.addEventListener("click", (e) => {
  newdiv.innerHTML="";
  viewDonation3Screen.style.visibility = "visible";
  viewDonation3Screen.style.display = "";
});

const CloseDonation3 = document.getElementsByClassName("close-donation")[2];

CloseDonation3.addEventListener("click", (e) => {
  newdiv.innerHTML="";
  viewDonation3Screen.style.display = "none";
  viewDonation3Screen.style.visibility = "hidden";
});

//View Donation 4

const viewDonation4 = document.getElementById("vdonation4"); //
const viewDonation4Screen = document.getElementById("vdonation4-screen");

viewDonation4.addEventListener("click", (e) => {
  newdiv.innerHTML="";
  viewDonation4Screen.style.visibility = "visible";
  viewDonation4Screen.style.display = "";
});

const CloseDonation4 = document.getElementsByClassName("close-donation")[3];

CloseDonation4.addEventListener("click", (e) => {
  newdiv.innerHTML="";
  viewDonation4Screen.style.display = "none";
  viewDonation4Screen.style.visibility = "hidden";
});



const delete1 = document.getElementById("delete1");

  delete1.addEventListener("click", (e) => {
  const del = document.getElementById("org1");
  viewDonation1Screen.remove();
  del.remove();
  newdiv.innerHTML='<div class="alert alert-success alert-white rounded" id="successful"><button type="button" data-dismiss="alert" aria-hidden="true" class="close">×</button><div class="icon"><i class="fa fa-check"></i></div><strong>Success!</strong> Organization has been deleted successfully.</div>';
  window.scrollTo(0,0);
});



const delete2 = document.getElementById("delete2");

  delete2.addEventListener("click", (e) => {
  const del = document.getElementById("org2");
  viewDonation2Screen.remove();
  del.remove();
  newdiv.innerHTML='<div class="alert alert-success alert-white rounded" id="successful"><button type="button" data-dismiss="alert" aria-hidden="true" class="close">×</button><div class="icon"><i class="fa fa-check"></i></div><strong>Success!</strong> Organization has been deleted successfully.</div>';
  window.scrollTo(0,0);

});

const delete3 = document.getElementById("delete3");

  delete3.addEventListener("click", (e) => {
  const del = document.getElementById("org3");
  viewDonation3Screen.remove();
  del.remove();
  newdiv.innerHTML='<div class="alert alert-success alert-white rounded" id="successful"><button type="button" data-dismiss="alert" aria-hidden="true" class="close">×</button><div class="icon"><i class="fa fa-check"></i></div><strong>Success!</strong> Organization has been deleted successfully.</div>';
  window.scrollTo(0,0);

});

const delete4 = document.getElementById("delete4");

  delete4.addEventListener("click", (e) => {
  const del = document.getElementById("org4");
  viewDonation4Screen.remove();
  del.remove();
  newdiv.innerHTML='<div class="alert alert-success alert-white rounded" id="successful"><button type="button" data-dismiss="alert" aria-hidden="true" class="close">×</button><div class="icon"><i class="fa fa-check"></i></div><strong>Success!</strong> Organization has been deleted successfully.</div>';
  window.scrollTo(0,0);

});