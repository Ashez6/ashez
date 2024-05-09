const fulfill1 = document.getElementById("fullfill1");
const fulfill2 = document.getElementById("fullfill2");

fulfill1.addEventListener("click", (e) => {
  localStorage.setItem("title", document.getElementById("title1").innerText);
  localStorage.setItem(
    "photo",
    document.getElementById("photo1").getAttribute("src")
  );
  localStorage.setItem(
    "patient",
    document.getElementById("patient1").innerText
  );
  localStorage.setItem("dontype","doc");
  window.location.href = "schedprobono.html";
});

fulfill2.addEventListener("click", (e) => {
  localStorage.setItem("title", document.getElementById("title2").innerText);
  localStorage.setItem(
    "photo",
    document.getElementById("photo2").getAttribute("src")
  );
  localStorage.setItem(
    "patient",
    document.getElementById("patient2").innerText
  );
  localStorage.setItem("dontype","doc");
  window.location.href = "schedprobono.html";
});

//Filter

const keywordsInput = document.getElementById("keywords");
const filter1Checkboxes = document.querySelectorAll(".filter1");
const filter2Checkboxes = document.querySelectorAll(".filter2");
const filter3Checkboxes = document.querySelectorAll(".filter3");
const filter4Checkboxes = document.querySelectorAll(".filter4");

const filterButton = document.getElementById("contact-submit");
function applyFilters() {
  const keywords = keywordsInput.value.toLowerCase();
  const selected1 = Array.from(filter1Checkboxes)
    .filter((checkbox) => checkbox.checked)
    .map((checkbox) => checkbox.value.toLowerCase());
  const selected2 = Array.from(filter2Checkboxes)
    .filter((checkbox) => checkbox.checked)
    .map((checkbox) => checkbox.value.toLowerCase());
  const selected3 = Array.from(filter3Checkboxes)
    .filter((checkbox) => checkbox.checked)
    .map((checkbox) => checkbox.value.toLowerCase());
  const selected4 = Array.from(filter4Checkboxes)
    .filter((checkbox) => checkbox.checked)
    .map((checkbox) => checkbox.value.toLowerCase());

  // Filter logic here
  const jobBoxes = document.querySelectorAll(".job-box");
  jobBoxes.forEach((jobBox) => {
    const Name = jobBox.querySelector(".job-content").textContent.toLowerCase();
    const shouldDisplay =
      matchKeywords(keywords, Name) &&
      matchSelected(selected1, Name) &&
      matchSelected(selected2, Name) &&
      matchSelected(selected3, Name) &&
      matchSelected(selected4, Name);
    jobBox.style.display = shouldDisplay ? "" : "none";
  });
}

function matchKeywords(keywords, text) {
  return keywords === "" || text.includes(keywords);
}

function matchSelected(selected, Name) {
  if (selected.length === 0) {
    return true;
  }
  for (let i = 0; i < selected.length; i++) {
    if (Name.includes(selected[i])) {
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

filterButton.addEventListener("click", applyFilters);

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
