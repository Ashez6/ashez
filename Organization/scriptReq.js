const divloc=document.getElementById("savepop");
const newdiv=document.createElement("div");

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
const popout=document.querySelectorAll(".pop-out");





const photobtns= document.querySelectorAll(".photobtn");
const photos= document.querySelectorAll(".photo");

  
for (let i = 0; i < photobtns.length; i++) {
  photobtns[i].addEventListener('change', (e)=>handleFileSelect(e,i));
}

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
  newdiv.innerHTML="";
  viewDonor1Screen.style.display = "none";
  viewDonor1Screen.style.visibility = "hidden";
});

const aybetngan0 = document.querySelectorAll(".pop1");
const aybetngan1 = document.querySelectorAll(".pop2");
const aybetngan2 = document.querySelectorAll(".pop3");
const aybetngan3 = document.querySelectorAll(".pop4");
const aybetngan4 = document.querySelectorAll(".pop5");
const textboxerror = document.querySelectorAll(".textboxs-error");
const quantity1 = document.querySelectorAll(".quantity1");
const quantity2 = document.querySelectorAll(".quantity2");
const number4 = document.querySelectorAll(".number4");
const amount5 = document.querySelectorAll(".amount5");

const save = document.querySelectorAll(".green-button");
divloc.append(newdiv);
const titlechange = document.querySelectorAll(".title");
const outertitle = document.querySelectorAll(".text-center")
save[0].addEventListener("click",(e)=>{
  let flag = true;
  for(let i=0;i<aybetngan0.length;i++){
    if(aybetngan0[i].value==""  | quantity1[0].value=="0" | quantity1[0].value==""){
      flag = false;
      break;
    }
    }
    if(flag){
      popout[0].style.display="none";
    popout[0].style.visibility="hidden";
    textboxerror[0].innerHTML ="";
    newdiv.innerHTML='<div class="alert alert-success alert-white rounded" id="successful"><button type="button" data-dismiss="alert" aria-hidden="true" class="close">×</button><div class="icon"><i class="fa fa-check"></i></div><strong>Success!</strong> Changes has been saved successfully!</div>';
    window.scrollTo(0, 0);
    outertitle[0].textContent=titlechange[0].value;
    }else{
      textboxerror[0].innerHTML = '<div class="alert alert-danger alert-white rounded"><button type="button" data-dismiss="alert" aria-hidden="true" class="close">×</button><div class="icon"><i class="fa fa-times-circle"></i></div><strong>Failure!</strong> Please enter valid data in all required fields! </div>';
    }
})
save[1].addEventListener("click",(e)=>{
  let flag = true;
  for(let i=0;i<aybetngan1.length;i++){
    if(aybetngan1[i].value==""  | quantity2[0].value=="0" | quantity2[0].value==""){
      flag = false;
      break;
    }
    }
    if(flag){
      popout[1].style.display="none";
    popout[1].style.visibility="hidden";
    textboxerror[1].innerHTML ="";
    newdiv.innerHTML='<div class="alert alert-success alert-white rounded" id="successful"><button type="button" data-dismiss="alert" aria-hidden="true" class="close">×</button><div class="icon"><i class="fa fa-check"></i></div><strong>Success!</strong> Changes has been saved successfully!</div>';
    window.scrollTo(0, 0);
    outertitle[1].textContent=titlechange[1].value;
    }else{
      textboxerror[1].innerHTML = '<div class="alert alert-danger alert-white rounded"><button type="button" data-dismiss="alert" aria-hidden="true" class="close">×</button><div class="icon"><i class="fa fa-times-circle"></i></div><strong>Failure!</strong> Please enter data in all required fields!</div>';
    }
})
save[2].addEventListener("click",(e)=>{
  let flag = true;
  for(let i=0;i<aybetngan2.length;i++){
    if(aybetngan2[i].value=="" | quantity2[1].value=="0" | quantity2[1].value=="" | quantity2[2].value=="0" | quantity2[2].value==""){
      flag = false;
      break;
    }
    }
    if(flag){
      popout[2].style.display="none";
    popout[2].style.visibility="hidden";
    textboxerror[2].innerHTML ="";
    newdiv.innerHTML='<div class="alert alert-success alert-white rounded" id="successful"><button type="button" data-dismiss="alert" aria-hidden="true" class="close">×</button><div class="icon"><i class="fa fa-check"></i></div><strong>Success!</strong> Changes has been saved successfully!</div>';
    window.scrollTo(0, 0);
    outertitle[2].textContent=titlechange[2].value;
    }else{
      textboxerror[2].innerHTML = '<div class="alert alert-danger alert-white rounded"><button type="button" data-dismiss="alert" aria-hidden="true" class="close">×</button><div class="icon"><i class="fa fa-times-circle"></i></div><strong>Failure!</strong> Please enter data in all required fields!</div>';
    }
})
save[3].addEventListener("click",(e)=>{
  let flag = true;
  for(let i=0;i<aybetngan3.length;i++){
    if(aybetngan3[i].value==""  | number4[0].value=="0" | number4[0].value==""){
      flag = false;
      break;
    }
    }
    if(flag){
      popout[3].style.display="none";
    popout[3].style.visibility="hidden";
    textboxerror[3].innerHTML ="";
    newdiv.innerHTML='<div class="alert alert-success alert-white rounded" id="successful"><button type="button" data-dismiss="alert" aria-hidden="true" class="close">×</button><div class="icon"><i class="fa fa-check"></i></div><strong>Success!</strong> Changes has been saved successfully!</div>';
    window.scrollTo(0, 0);
    outertitle[3].textContent=titlechange[3].value;
    }else{
      textboxerror[3].innerHTML = '<div class="alert alert-danger alert-white rounded"><button type="button" data-dismiss="alert" aria-hidden="true" class="close">×</button><div class="icon"><i class="fa fa-times-circle"></i></div><strong>Failure!</strong> Please enter valid data in all required fields!</div>';
    }
    
})
save[4].addEventListener("click",(e)=>{
  let flag = true;
  for(let i=0;i<aybetngan4.length;i++){
    if(aybetngan4[i].value==""  | amount5[0].value=="0" | amount5[0].value==""){
      flag = false;
      break;
    }
    }
    if(flag){
      popout[4].style.display="none";
    popout[4].style.visibility="hidden";
    textboxerror[4].innerHTML ="";
    newdiv.innerHTML='<div class="alert alert-success alert-white rounded" id="successful"><button type="button" data-dismiss="alert" aria-hidden="true" class="close">×</button><div class="icon"><i class="fa fa-check"></i></div><strong>Success!</strong> Changes has been saved successfully!</div>';
    window.scrollTo(0, 0);
    outertitle[4].textContent=titlechange[4].value;
    }else{
      textboxerror[4].innerHTML = '<div class="alert alert-danger alert-white rounded"><button type="button" data-dismiss="alert" aria-hidden="true" class="close">×</button><div class="icon"><i class="fa fa-times-circle"></i></div><strong>Failure!</strong> Please enter valid data in all required fields!</div>';
    }
})




