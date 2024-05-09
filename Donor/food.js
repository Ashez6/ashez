
//Filter

const keywordsInput = document.getElementById('keywords');
const filter1Checkboxes = document.querySelectorAll('.filter1');

const filterButton = document.getElementById('contact-submit');
function applyFilters() {
  const keywords = keywordsInput.value.toLowerCase();
  const selected1 = Array.from(filter1Checkboxes).filter(checkbox => checkbox.checked).map(checkbox => checkbox.value.toLowerCase());  

  // Filter logic here
  const jobBoxes = document.querySelectorAll('.job-box');
  jobBoxes.forEach(jobBox => {
      const Name = jobBox.querySelector('.job-content').textContent.toLowerCase();
      const shouldDisplay = matchKeywords(keywords, Name) && matchSelected(selected1, Name) ;
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

filterButton.addEventListener('click', applyFilters);

const quantities=document.querySelectorAll(".quantity");
const fulfill=document.querySelectorAll(".btn-success");
const errorlocs=document.querySelectorAll(".error");
const titles=document.querySelectorAll(".text-white");
const photos=document.querySelectorAll(".photos");

for(let i=0;i<fulfill.length;i++){
  fulfill[i].addEventListener('click',(e)=>{
    if(quantities[i].value<=0){
      errorlocs[i].innerHTML='<div class="alert alert-danger alert-white rounded"><button type="button" data-dismiss="alert" aria-hidden="true" class="close">×</button><div class="icon"><i class="fa fa-times-circle"></i></div><strong>Failure!</strong> Cannot donate zero items!</div>';
    }
    else{
      errorlocs[i].innerHTML="";
      localStorage.setItem('dontype','item');
      localStorage.setItem('title',titles[i].textContent);
      localStorage.setItem('photo',photos[i].getAttribute("src"));
      localStorage.setItem('quantity',quantities[i].value);
      window.location.href = 'schedule.html';
    }
  });
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

//View Donation 4

const viewDonation4 = document.getElementById("vdonation4"); //
const viewDonation4Screen = document.getElementById("vdonation4-screen");

viewDonation4.addEventListener("click", (e) => {
  viewDonation4Screen.style.visibility = "visible";
  viewDonation4Screen.style.display = "";
});

const CloseDonation4 = document.getElementsByClassName("close-donation")[3];

CloseDonation4.addEventListener("click", (e) => {
  viewDonation4Screen.style.display = "none";
  viewDonation4Screen.style.visibility = "hidden";
});
