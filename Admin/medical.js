
const deldiv= document.getElementById("deldiv");
const newdiv=document.createElement("div");
deldiv.append(newdiv);

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
  newdiv.innerHTML="";
  CloseDonation4.addEventListener("click", (e) => {
  viewDonation4Screen.style.display = "none";
  viewDonation4Screen.style.visibility = "hidden";
});


const accept1 = document.getElementById("accept1");

  accept1.addEventListener("click", (e) => {
  const acc = document.getElementById("doctor1");
  viewDonation1Screen.remove();
  acc.remove();
  newdiv.innerHTML='<div class="alert alert-success alert-white rounded" id="successful"><button type="button" data-dismiss="alert" aria-hidden="true" class="close">×</button><div class="icon"><i class="fa fa-check"></i></div><strong>Success!</strong> Doctor Request is accepted and removed from pending requests  .</div>';
  window.scrollTo(0,0);
});

const reject1 = document.getElementById("reject1");

  reject1.addEventListener("click", (e) => {
  const rej= document.getElementById("doctor1");
  viewDonation1Screen.remove();
  rej.remove();
  newdiv.innerHTML='<div class="alert alert-success alert-white rounded" id="successful"><button type="button" data-dismiss="alert" aria-hidden="true" class="close">×</button><div class="icon"><i class="fa fa-check"></i></div><strong>Success!</strong> Doctor Request is rejected and removed from pending requests  .</div>';
  window.scrollTo(0,0);
});




const accept2 = document.getElementById("accept2");

  accept2.addEventListener("click", (e) => {
  const acc = document.getElementById("doctor2");
  viewDonation2Screen.remove();
  acc.remove();
  newdiv.innerHTML='<div class="alert alert-success alert-white rounded" id="successful"><button type="button" data-dismiss="alert" aria-hidden="true" class="close">×</button><div class="icon"><i class="fa fa-check"></i></div><strong>Success!</strong> Doctor Request is accepted and removed from pending requests  .</div>';
  window.scrollTo(0,0);
});

const reject2 = document.getElementById("reject2");

  reject2.addEventListener("click", (e) => {
  const rej= document.getElementById("doctor2");
  viewDonation2Screen.remove();
  rej.remove();
  newdiv.innerHTML='<div class="alert alert-success alert-white rounded" id="successful"><button type="button" data-dismiss="alert" aria-hidden="true" class="close">×</button><div class="icon"><i class="fa fa-check"></i></div><strong>Success!</strong> Doctor Request is rejected and removed from pending requests  .</div>';
  window.scrollTo(0,0);
});


const accept3 = document.getElementById("accept3");

  accept3.addEventListener("click", (e) => {
  const acc = document.getElementById("doctor3");
  viewDonation3Screen.remove();
  acc.remove();
  newdiv.innerHTML='<div class="alert alert-success alert-white rounded" id="successful"><button type="button" data-dismiss="alert" aria-hidden="true" class="close">×</button><div class="icon"><i class="fa fa-check"></i></div><strong>Success!</strong> Doctor Request is accepted and removed from pending requests  .</div>';
  window.scrollTo(0,0);
});

const reject3 = document.getElementById("reject3");

  reject3.addEventListener("click", (e) => {
  const rej= document.getElementById("doctor3");
  viewDonation3Screen.remove();
  rej.remove();
  newdiv.innerHTML='<div class="alert alert-success alert-white rounded" id="successful"><button type="button" data-dismiss="alert" aria-hidden="true" class="close">×</button><div class="icon"><i class="fa fa-check"></i></div><strong>Success!</strong> Doctor Request is rejected and removed from pending requests  .</div>';
  window.scrollTo(0,0);
});



const accept4 = document.getElementById("accept4");

  accept4.addEventListener("click", (e) => {
  const acc = document.getElementById("doctor4");
  viewDonation4Screen.remove();
  acc.remove();
  newdiv.innerHTML='<div class="alert alert-success alert-white rounded" id="successful"><button type="button" data-dismiss="alert" aria-hidden="true" class="close">×</button><div class="icon"><i class="fa fa-check"></i></div><strong>Success!</strong> Doctor Request is accepted and removed from pending requests  .</div>';
  window.scrollTo(0,0);
});

const reject4 = document.getElementById("reject4");

  reject4.addEventListener("click", (e) => {
  const rej= document.getElementById("doctor4");
  viewDonation4Screen.remove();
  rej.remove();
  newdiv.innerHTML='<div class="alert alert-success alert-white rounded" id="successful"><button type="button" data-dismiss="alert" aria-hidden="true" class="close">×</button><div class="icon"><i class="fa fa-check"></i></div><strong>Success!</strong> Doctor Request is rejected and removed from pending requests  .</div>';
  window.scrollTo(0,0);
});

