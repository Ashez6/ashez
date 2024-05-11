const divloc=document.getElementById("savepop");
const newdiv=document.createElement("div");
savepop.append(newdiv);

const keywordsInput = document.getElementById('keywords');
const filterButton = document.getElementById('contact-submit');

function applyFilters() {
  newdiv.innerHTML="";
  const keywords = keywordsInput.value.toLowerCase();
  // search logic here
  const jobBoxes = document.querySelectorAll('.job-box');
  jobBoxes.forEach(jobBox => {
      const Name = jobBox.querySelector('.job-content').textContent.toLowerCase();
      const shouldDisplay = matchKeywords(keywords, Name);
      jobBox.style.display = shouldDisplay ? "" : "none";
  });
}

function matchKeywords(keywords, text) {
  return keywords === '' || text.includes(keywords);
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

const savebtns=document.querySelectorAll(".btn-success");
const popout=document.querySelectorAll(".donorpop");
const expresstext=document.querySelectorAll(".express");
const experror=document.querySelectorAll(".experror");


for(let i=0;i<savebtns.length;i++){
   savebtns[i].addEventListener('click',(e)=>{
    if(expresstext[i].value==""){
      experror[i].innerHTML='<div class="alert alert-danger alert-white rounded"><button type="button" data-dismiss="alert" aria-hidden="true" class="close">×</button><div class="icon"><i class="fa fa-times-circle"></i></div><strong>Failure!</strong> Kindly enter a message.</div>';
    }
    else{
      expresstext[i].value="";
      experror[i].innerHTML="";
      newdiv.innerHTML='<div class="alert alert-success alert-white rounded" id="successful"><button type="button" data-dismiss="alert" aria-hidden="true" class="close">×</button><div class="icon"><i class="fa fa-check"></i></div><strong>Success!</strong> Message is sent to donor successfully</div>';
      popout[i].style.display="none";
      popout[i].style.visibility="hidden";
      divloc.append(newdiv);
      window.scrollTo(0, 0);
    }
  });
}



const deleteButts = document.querySelectorAll(".delete-button");
const jobBox = document.querySelectorAll(".job-box");

for (let i = 0; i < deleteButts.length; i++) {
  deleteButts[i].addEventListener("click", (e) => {
    newdiv.innerHTML='<div class="alert alert-success alert-white rounded" id="successful"><button type="button" data-dismiss="alert" aria-hidden="true" class="close">×</button><div class="icon"><i class="fa fa-check"></i></div><strong>Success!</strong> Donation Deleted Succesfully!</div>';
    jobBox[i].remove();
    window.scrollTo(0,0);
  });
}

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

//View Donor 1

const viewDonor1 = document.getElementById("vdonor1"); //
const viewDonor1Screen = document.getElementById("vdonor1-screen");

viewDonor1.addEventListener("click", (e) => {
  newdiv.innerHTML="";
  viewDonor1Screen.style.visibility = "visible";
  viewDonor1Screen.style.display = "";
});

const CloseDonor1 = document.getElementsByClassName("close-donor")[0];

CloseDonor1.addEventListener("click", (e) => {
  experror[0].innerHTML="";
  newdiv.innerHTML="";
  viewDonor1Screen.style.display = "none";
  viewDonor1Screen.style.visibility = "hidden";
});

//View Donor 2

const viewDonor2 = document.getElementById("vdonor2"); //
const viewDonor2Screen = document.getElementById("vdonor2-screen");

viewDonor2.addEventListener("click", (e) => {
  newdiv.innerHTML="";
  viewDonor2Screen.style.visibility = "visible";
  viewDonor2Screen.style.display = "";
});

const CloseDonor2 = document.getElementsByClassName("close-donor")[1];

CloseDonor2.addEventListener("click", (e) => {
  experror[1].innerHTML="";
  newdiv.innerHTML="";
  viewDonor2Screen.style.display = "none";
  viewDonor2Screen.style.visibility = "hidden";
});

//View Donor 3

const viewDonor3 = document.getElementById("vdonor3"); //
const viewDonor3Screen = document.getElementById("vdonor3-screen");

viewDonor3.addEventListener("click", (e) => {
  newdiv.innerHTML="";
  viewDonor3Screen.style.visibility = "visible";
  viewDonor3Screen.style.display = "";
});

const CloseDonor3 = document.getElementsByClassName("close-donor")[2];

CloseDonor3.addEventListener("click", (e) => {
  experror[2].innerHTML="";
  newdiv.innerHTML="";
  viewDonor3Screen.style.display = "none";
  viewDonor3Screen.style.visibility = "hidden";
});

//View Donor 4

const viewDonor4 = document.getElementById("vdonor4"); //
const viewDonor4Screen = document.getElementById("vdonor4-screen");

viewDonor4.addEventListener("click", (e) => {
  newdiv.innerHTML="";
  viewDonor4Screen.style.visibility = "visible";
  viewDonor4Screen.style.display = "";
});

const CloseDonor4 = document.getElementsByClassName("close-donor")[3];

CloseDonor4.addEventListener("click", (e) => {
  experror[3].innerHTML="";
  newdiv.innerHTML="";
  viewDonor4Screen.style.display = "none";
  viewDonor4Screen.style.visibility = "hidden";
});

