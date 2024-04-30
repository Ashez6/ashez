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

const accept1 = document.getElementById("accept1");

  accept1.addEventListener("click", (e) => {
  alert("Organization accepted and removed from requesting organizations ");
  const hope = document.getElementById("hope-horizon-row");
  viewDonation1Screen.remove();
  hope.remove();
});

const delete1= document.getElementById("delete1");

  delete1.addEventListener("click", (e) => {
  alert("Organization rejected and removed from requesting organizations");
  const hope = document.getElementById("hope-horizon-row");
  viewDonation1Screen.remove();
  hope.remove();
});


const accept2 = document.getElementById("accept2");

  accept2.addEventListener("click", (e) => {
  alert("Organization accepted and removed from requesting organizations ");
  const ser = document.getElementById("ser-row");
  viewDonation2Screen.remove();
  ser.remove();
});

const delete2 = document.getElementById("delete2");

  delete2.addEventListener("click", (e) => {
  alert("Organization rejected and removed from requesting organizations");
  const ser = document.getElementById("ser-row");
  viewDonation2Screen.remove();
  ser.remove();
});

const accept3 = document.getElementById("accept3");

  accept3.addEventListener("click", (e) => {
  alert("Organization accepted and removed from requesting organizations ");
  const heart = document.getElementById("heart-row");
  viewDonation3Screen.remove();
  heart.remove();
});

const delete3 = document.getElementById("delete3");

  delete3.addEventListener("click", (e) => {
  alert("Organization rejected and removed from requesting organizations");
  const heart = document.getElementById("heart-row");
  viewDonation3Screen.remove();
  heart.remove();
});

const accept4 = document.getElementById("accept4");

  accept4.addEventListener("click", (e) => {
  alert("Organization accepted and removed from requesting organizations ");
  const harmony = document.getElementById("harmony-row");
  viewDonation4Screen.remove();
  harmony.remove();
});

const delete4 = document.getElementById("delete4");

  delete4.addEventListener("click", (e) => {
  alert("Organization rejected and removed from requesting organizations");
  const harmony = document.getElementById("harmony-row");
  viewDonation4Screen.remove();
  harmony.remove();
});
