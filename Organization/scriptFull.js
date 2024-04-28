const deleteButts = document.querySelectorAll(".delete-button");
const jobBox = document.querySelectorAll(".job-box");

for (let i = 0; i < deleteButts.length; i++) {
  deleteButts[i].addEventListener("click", (e) => {
    jobBox[i].remove();
  });
}

const viewDonation1 = document.getElementById("vdonation1"); //
const viewDonation1Screen = document.getElementById("vdonation1-screen");

viewDonation1.addEventListener("click", (e) => {
  viewDonation1Screen.style.visibility = "visible";
  viewDonation1Screen.style.display = "";
});

const CloseDonation1 = document.getElementById("close-donation-1");

CloseDonation1.addEventListener("click", (e) => {
  viewDonation1Screen.style.display = "none";
  viewDonation1Screen.style.visibility = "hidden";
});
