document.addEventListener("DOMContentLoaded", (e) => {
  const teacherElements = document.querySelectorAll(".teach-elem");
  const doctorElements = document.querySelectorAll(".doc-elem");

  const type = localStorage.getItem("type");

  if (type == "teacher") {
    for (let i = 0; i < 3; i++) {
      teacherElements[i].style.display = "";
    }
  }

  if (type == "doctor") {
    for (let i = 0; i < 2; i++) {
      doctorElements[i].style.display = "";
    }
  }
});

const keywordsInput = document.getElementById("keywords");
const filterButton = document.getElementById("contact-submit");
function applyFilters() {
  const keywords = keywordsInput.value.toLowerCase();

  // Filter logic here
  const jobBoxes = document.querySelectorAll(".job-box");
  jobBoxes.forEach((jobBox) => {
    const Name = jobBox.querySelector(".job-content").textContent.toLowerCase();
    const shouldDisplay = matchKeywords(keywords, Name);
    jobBox.style.display = shouldDisplay ? "" : "none";
  });
}

function matchKeywords(keywords, text) {
  return keywords === "" || text.includes(keywords);
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

filterButton.addEventListener("click", applyFilters);



const fulfill = document.querySelectorAll(".btn-success");
const titles = document.querySelectorAll(".text-white");
const sector = document.querySelectorAll(".text-primary");
const photos = document.querySelectorAll(".photos");

const quantity = document.querySelectorAll(".quantity");

const patient = document.querySelectorAll(".patient");

const students = document.querySelectorAll(".no-of-studs");
const address = document.querySelectorAll(".address");
const errorlocs = document.querySelectorAll(".error");

for (let i = 0; i < fulfill.length; i++) {
  fulfill[i].addEventListener("click", (e) => {
      
      switch (sector[i].textContent) {
        case "Medical Supplies":
          if(quantity[i-3].value<=0){
            errorlocs[i-3].innerHTML =
               '<div class="alert alert-danger alert-white rounded"><button type="button" data-dismiss="alert" aria-hidden="true" class="close">×</button><div class="icon"><i class="fa fa-times-circle"></i></div><strong>Failure!</strong> Cannot donate zero items!</div>';
          }
          else{
            errorlocs[i-3].innerHTML = "";
            localStorage.setItem('title',titles[i].textContent);
            localStorage.setItem('dontype',"item");
            localStorage.setItem('photo',photos[i].getAttribute("src"));
            localStorage.setItem('quantity',quantity[i-3].value);
            window.location.href = "schedule.html";
          }
          break;
        case "School Supplies":
          if(quantity[i].value<=0){
            errorlocs[i].innerHTML =
               '<div class="alert alert-danger alert-white rounded"><button type="button" data-dismiss="alert" aria-hidden="true" class="close">×</button><div class="icon"><i class="fa fa-times-circle"></i></div><strong>Failure!</strong> Cannot donate zero items!</div>';
          }
          else{
            localStorage.setItem('dontype',"item");
            errorlocs[i].innerHTML = "";
            localStorage.setItem('title',titles[i].textContent);
            localStorage.setItem('photo',photos[i].getAttribute("src"));
            localStorage.setItem('quantity',quantity[i].value);
            window.location.href = "schedule.html";
          }
          break;
        case "Clothes":
          if(quantity[i].value<=0){
            errorlocs[i].innerHTML =
               '<div class="alert alert-danger alert-white rounded"><button type="button" data-dismiss="alert" aria-hidden="true" class="close">×</button><div class="icon"><i class="fa fa-times-circle"></i></div><strong>Failure!</strong> Cannot donate zero items!</div>';
          }
          else{
            errorlocs[i].innerHTML = "";
            localStorage.setItem('dontype',"item");
            localStorage.setItem('title',titles[i].textContent);
            localStorage.setItem('photo',photos[i].getAttribute("src"));
            localStorage.setItem('quantity',quantity[i].value);
            
            window.location.href = "schedule.html";
          }
            break;
        case "Toys":
          if(quantity[i].value<=0){
            errorlocs[i].innerHTML =
               '<div class="alert alert-danger alert-white rounded"><button type="button" data-dismiss="alert" aria-hidden="true" class="close">×</button><div class="icon"><i class="fa fa-times-circle"></i></div><strong>Failure!</strong> Cannot donate zero items!</div>';
          }
          else{
            errorlocs[i].innerHTML = "";
            localStorage.setItem('dontype',"item");
            localStorage.setItem('title',titles[i].textContent);
            localStorage.setItem('photo',photos[i].getAttribute("src"));
            localStorage.setItem('quantity',quantity[i].value);
           
            window.location.href = "schedule.html";
          }
            break;
        case "Food":
          if(quantity[i-3].value<=0 ){
            errorlocs[i-3].innerHTML =
               '<div class="alert alert-danger alert-white rounded"><button type="button" data-dismiss="alert" aria-hidden="true" class="close">×</button><div class="icon"><i class="fa fa-times-circle"></i></div><strong>Failure!</strong> Cannot donate zero items!</div>';
          }
          else{
            errorlocs[i-3].innerHTML = "";
            localStorage.setItem('dontype',"item");
            localStorage.setItem('title',titles[i].textContent);
            localStorage.setItem('photo',photos[i].getAttribute("src"));
            localStorage.setItem('quantity',quantity[i-3].value);
            window.location.href = "schedule.html";
          }
            break;
        case "Pro-Bono Teaching":
          
            localStorage.setItem('title',titles[i].textContent);
            localStorage.setItem('photo',photos[i].getAttribute("src"));
            localStorage.setItem('quantity',students[i-24].value);
            localStorage.setItem('address',address[i-24].textContent);
            window.location.href = "schedprobono.html";
            break;
        case "Pro-Bono Cases":
            localStorage.setItem('dontype',"doc");
            localStorage.setItem('title',titles[i].textContent);
            localStorage.setItem('photo',photos[i].getAttribute("src"));
            localStorage.setItem('patient',patient[i-27].textContent);
            window.location.href = "schedprobono.html";
            break;
      
        default:
          break;
      }
      
    }
  );
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

//View Donor 1

const viewDonor1 = document.getElementById("vdonor1"); //
const viewDonor1Screen = document.getElementById("vdonor1-screen");

viewDonor1.addEventListener("click", (e) => {
  viewDonor1Screen.style.visibility = "visible";
  viewDonor1Screen.style.display = "";
});

const CloseDonor1 = document.getElementsByClassName("close-donor")[0];

CloseDonor1.addEventListener("click", (e) => {
  viewDonor1Screen.style.display = "none";
  viewDonor1Screen.style.visibility = "hidden";
});

//View Donor 2

const viewDonor2 = document.getElementById("vdonor2"); //
const viewDonor2Screen = document.getElementById("vdonor2-screen");

viewDonor2.addEventListener("click", (e) => {
  viewDonor2Screen.style.visibility = "visible";
  viewDonor2Screen.style.display = "";
});

const CloseDonor2 = document.getElementsByClassName("close-donor")[1];

CloseDonor2.addEventListener("click", (e) => {
  viewDonor2Screen.style.display = "none";
  viewDonor2Screen.style.visibility = "hidden";
});

//View Donor 3

const viewDonor3 = document.getElementById("vdonor3"); //
const viewDonor3Screen = document.getElementById("vdonor3-screen");

viewDonor3.addEventListener("click", (e) => {
  viewDonor3Screen.style.visibility = "visible";
  viewDonor3Screen.style.display = "";
});

const CloseDonor3 = document.getElementsByClassName("close-donor")[2];

CloseDonor3.addEventListener("click", (e) => {
  viewDonor3Screen.style.display = "none";
  viewDonor3Screen.style.visibility = "hidden";
});

//View Donor 4

const viewDonor4 = document.getElementById("vdonor4"); //
const viewDonor4Screen = document.getElementById("vdonor4-screen");

viewDonor4.addEventListener("click", (e) => {
  viewDonor4Screen.style.visibility = "visible";
  viewDonor4Screen.style.display = "";
});

const CloseDonor4 = document.getElementsByClassName("close-donor")[3];

CloseDonor4.addEventListener("click", (e) => {
  viewDonor4Screen.style.display = "none";
  viewDonor4Screen.style.visibility = "hidden";
});

//View Donor 5

const viewDonor5 = document.getElementById("vdonor5"); //
const viewDonor5Screen = document.getElementById("vdonor5-screen");

viewDonor5.addEventListener("click", (e) => {
  viewDonor5Screen.style.visibility = "visible";
  viewDonor5Screen.style.display = "";
});

const CloseDonor5 = document.getElementsByClassName("close-donor")[4];

CloseDonor5.addEventListener("click", (e) => {
  viewDonor5Screen.style.display = "none";
  viewDonor5Screen.style.visibility = "hidden";
});

//View Donor 6

const viewDonor6 = document.getElementById("vdonor6"); //
const viewDonor6Screen = document.getElementById("vdonor6-screen");

viewDonor6.addEventListener("click", (e) => {
  viewDonor6Screen.style.visibility = "visible";
  viewDonor6Screen.style.display = "";
});

const CloseDonor6 = document.getElementsByClassName("close-donor")[5];

CloseDonor6.addEventListener("click", (e) => {
  viewDonor6Screen.style.display = "none";
  viewDonor6Screen.style.visibility = "hidden";
});

//View Donor 7

const viewDonor7 = document.getElementById("vdonor7"); //
const viewDonor7Screen = document.getElementById("vdonor7-screen");

viewDonor7.addEventListener("click", (e) => {
  viewDonor7Screen.style.visibility = "visible";
  viewDonor7Screen.style.display = "";
});

const CloseDonor7 = document.getElementsByClassName("close-donor")[6];

CloseDonor7.addEventListener("click", (e) => {
  viewDonor7Screen.style.display = "none";
  viewDonor7Screen.style.visibility = "hidden";
});

//View Donor 8

const viewDonor8 = document.getElementById("vdonor8"); //
const viewDonor8Screen = document.getElementById("vdonor8-screen");

viewDonor8.addEventListener("click", (e) => {
  viewDonor8Screen.style.visibility = "visible";
  viewDonor8Screen.style.display = "";
});

const CloseDonor8 = document.getElementsByClassName("close-donor")[7];

CloseDonor8.addEventListener("click", (e) => {
  viewDonor8Screen.style.display = "none";
  viewDonor8Screen.style.visibility = "hidden";
});

// View Donation 1
const viewDonation5 = document.getElementById("vdonation5"); //
const viewDonation5Screen = document.getElementById("vdonation5-screen");

viewDonation5.addEventListener("click", (e) => {
  viewDonation5Screen.style.visibility = "visible";
  viewDonation5Screen.style.display = "";
});

const CloseDonation5 = document.getElementsByClassName("close-donation")[4];

CloseDonation5.addEventListener("click", (e) => {
  viewDonation5Screen.style.display = "none";
  viewDonation5Screen.style.visibility = "hidden";
});

//View Donation 2

const viewDonation6 = document.getElementById("vdonation6"); //
const viewDonation6Screen = document.getElementById("vdonation6-screen");

viewDonation6.addEventListener("click", (e) => {
  viewDonation6Screen.style.visibility = "visible";
  viewDonation6Screen.style.display = "";
});

const CloseDonation6 = document.getElementsByClassName("close-donation")[5];

CloseDonation6.addEventListener("click", (e) => {
  viewDonation6Screen.style.display = "none";
  viewDonation6Screen.style.visibility = "hidden";
});

//View Donation 3

const viewDonation7 = document.getElementById("vdonation7"); //
const viewDonation7Screen = document.getElementById("vdonation7-screen");

viewDonation7.addEventListener("click", (e) => {
  viewDonation7Screen.style.visibility = "visible";
  viewDonation7Screen.style.display = "";
});

const CloseDonation7 = document.getElementsByClassName("close-donation")[6];

CloseDonation7.addEventListener("click", (e) => {
  viewDonation7Screen.style.display = "none";
  viewDonation7Screen.style.visibility = "hidden";
});

// View Donation 1
const viewDonation8 = document.getElementById("vdonation8"); //
const viewDonation8Screen = document.getElementById("vdonation8-screen");

viewDonation8.addEventListener("click", (e) => {
  viewDonation8Screen.style.visibility = "visible";
  viewDonation8Screen.style.display = "";
});

const CloseDonation8 = document.getElementsByClassName("close-donation")[7];

CloseDonation8.addEventListener("click", (e) => {
  viewDonation8Screen.style.display = "none";
  viewDonation8Screen.style.visibility = "hidden";
});

//View Donation 2

const viewDonation9 = document.getElementById("vdonation9"); //
const viewDonation9Screen = document.getElementById("vdonation9-screen");

viewDonation9.addEventListener("click", (e) => {
  viewDonation9Screen.style.visibility = "visible";
  viewDonation9Screen.style.display = "";
});

const CloseDonation9 = document.getElementsByClassName("close-donation")[8];

CloseDonation9.addEventListener("click", (e) => {
  viewDonation9Screen.style.display = "none";
  viewDonation9Screen.style.visibility = "hidden";
});

//View Donation 3

const viewDonation10 = document.getElementById("vdonation10"); //
const viewDonation10Screen = document.getElementById("vdonation10-screen");

viewDonation10.addEventListener("click", (e) => {
  viewDonation10Screen.style.visibility = "visible";
  viewDonation10Screen.style.display = "";
});

const CloseDonation10 = document.getElementsByClassName("close-donation")[9];

CloseDonation10.addEventListener("click", (e) => {
  viewDonation10Screen.style.display = "none";
  viewDonation10Screen.style.visibility = "hidden";
});

const viewDonation11 = document.getElementById("vdonation11"); //
const viewDonation11Screen = document.getElementById("vdonation11-screen");

viewDonation11.addEventListener("click", (e) => {
  viewDonation11Screen.style.visibility = "visible";
  viewDonation11Screen.style.display = "";
});

const CloseDonation11 = document.getElementsByClassName("close-donation")[10];

CloseDonation11.addEventListener("click", (e) => {
  viewDonation11Screen.style.display = "none";
  viewDonation11Screen.style.visibility = "hidden";
});

//View Donation 3

const viewDonation12 = document.getElementById("vdonation12"); //
const viewDonation12Screen = document.getElementById("vdonation12-screen");

viewDonation12.addEventListener("click", (e) => {
  viewDonation12Screen.style.visibility = "visible";
  viewDonation12Screen.style.display = "";
});

const CloseDonation12 = document.getElementsByClassName("close-donation")[11];

CloseDonation12.addEventListener("click", (e) => {
  viewDonation12Screen.style.display = "none";
  viewDonation12Screen.style.visibility = "hidden";
});

//View Donation 13

const viewDonation13 = document.getElementById("vdonation13"); //
const viewDonation13Screen = document.getElementById("vdonation13-screen");

viewDonation13.addEventListener("click", (e) => {
  viewDonation13Screen.style.visibility = "visible";
  viewDonation13Screen.style.display = "";
});

const CloseDonation13 = document.getElementsByClassName("close-donation")[12];

CloseDonation13.addEventListener("click", (e) => {
  viewDonation13Screen.style.display = "none";
  viewDonation13Screen.style.visibility = "hidden";
});

//View Donation 14

const viewDonation14 = document.getElementById("vdonation14"); //
const viewDonation14Screen = document.getElementById("vdonation14-screen");

viewDonation14.addEventListener("click", (e) => {
  viewDonation14Screen.style.visibility = "visible";
  viewDonation14Screen.style.display = "";
});

const CloseDonation14 = document.getElementsByClassName("close-donation")[13];

CloseDonation14.addEventListener("click", (e) => {
  viewDonation14Screen.style.display = "none";
  viewDonation14Screen.style.visibility = "hidden";
});

//View Donation 15

const viewDonation15 = document.getElementById("vdonation15"); //
const viewDonation15Screen = document.getElementById("vdonation15-screen");

viewDonation15.addEventListener("click", (e) => {
  viewDonation15Screen.style.visibility = "visible";
  viewDonation15Screen.style.display = "";
});

const CloseDonation15 = document.getElementsByClassName("close-donation")[14];

CloseDonation15.addEventListener("click", (e) => {
  viewDonation15Screen.style.display = "none";
  viewDonation15Screen.style.visibility = "hidden";
});

//View Donation 16

const viewDonation16 = document.getElementById("vdonation16");
const viewDonation16Screen = document.getElementById("vdonation16-screen");

viewDonation16.addEventListener("click", (e) => {
  viewDonation16Screen.style.visibility = "visible";
  viewDonation16Screen.style.display = "";
});

const CloseDonation16 = document.getElementsByClassName("close-donation")[15];

CloseDonation16.addEventListener("click", (e) => {
  viewDonation16Screen.style.display = "none";
  viewDonation16Screen.style.visibility = "hidden";
});

//View Donation 17

const viewDonation17 = document.getElementById("vdonation17");
const viewDonation17Screen = document.getElementById("vdonation17-screen");

viewDonation17.addEventListener("click", (e) => {
  viewDonation17Screen.style.visibility = "visible";
  viewDonation17Screen.style.display = "";
});

const CloseDonation17 = document.getElementsByClassName("close-donation")[16];

CloseDonation17.addEventListener("click", (e) => {
  viewDonation17Screen.style.display = "none";
  viewDonation17Screen.style.visibility = "hidden";
});

//View Donation 18

const viewDonation18 = document.getElementById("vdonation18");
const viewDonation18Screen = document.getElementById("vdonation18-screen");

viewDonation18.addEventListener("click", (e) => {
  viewDonation18Screen.style.visibility = "visible";
  viewDonation18Screen.style.display = "";
});

const CloseDonation18 = document.getElementsByClassName("close-donation")[17];

CloseDonation18.addEventListener("click", (e) => {
  viewDonation18Screen.style.display = "none";
  viewDonation18Screen.style.visibility = "hidden";
});

//View Donation 19

const viewDonation19 = document.getElementById("vdonation19");
const viewDonation19Screen = document.getElementById("vdonation19-screen");

viewDonation19.addEventListener("click", (e) => {
  viewDonation19Screen.style.visibility = "visible";
  viewDonation19Screen.style.display = "";
});

const CloseDonation19 = document.getElementsByClassName("close-donation")[18];

CloseDonation19.addEventListener("click", (e) => {
  viewDonation19Screen.style.display = "none";
  viewDonation19Screen.style.visibility = "hidden";
});

//View Donation 20

const viewDonation20 = document.getElementById("vdonation20");
const viewDonation20Screen = document.getElementById("vdonation20-screen");

viewDonation20.addEventListener("click", (e) => {
  viewDonation20Screen.style.visibility = "visible";
  viewDonation20Screen.style.display = "";
});

const CloseDonation20 = document.getElementsByClassName("close-donation")[19];

CloseDonation20.addEventListener("click", (e) => {
  viewDonation20Screen.style.display = "none";
  viewDonation20Screen.style.visibility = "hidden";
});

//View Donation 21

const viewDonation21 = document.getElementById("vdonation21");
const viewDonation21Screen = document.getElementById("vdonation21-screen");

viewDonation21.addEventListener("click", (e) => {
  viewDonation21Screen.style.visibility = "visible";
  viewDonation21Screen.style.display = "";
});

const CloseDonation21 = document.getElementsByClassName("close-donation")[20];

CloseDonation21.addEventListener("click", (e) => {
  viewDonation21Screen.style.display = "none";
  viewDonation21Screen.style.visibility = "hidden";
});
