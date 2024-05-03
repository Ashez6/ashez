const alertloc = document.getElementById("alertloctrack");
const urlParams = new URLSearchParams(window.location.search);
const reffrom = urlParams.get("reffrom");
if (reffrom === "sched") {
  alertloc.innerHTML =
    '<div class="alert alert-success alert-white rounded"><button type="button" data-dismiss="alert" aria-hidden="true" class="close">×</button><div class="icon"><i class="fa fa-check"></i></div> <strong>Success!</strong> Donation Fulfilled. Thanks for your generosity!</div>';
  const dontype = localStorage.getItem("dontype");
  var currentDate = new Date();
  var year = currentDate.getFullYear();
  var month = currentDate.getMonth() + 1; // Months are zero-based, so we add 1
  var day = currentDate.getDate();
  if (dontype == "item") {
    const box = document.getElementById("itembox");
    const title = document.getElementById("itemtitle");
    const photo = document.getElementById("itemphoto");
    const boxdate = document.getElementById("boxdate1");
    const boxquantity = document.getElementById("boxquantity1");
    const slot = document.getElementById("day");
    let time = "";
    const timing = localStorage.getItem("timeslot");
    if (timing == "morning") {
      time = "10:30 AM";
    } else if (timing == "afternoon") {
      time = "1:30 PM";
    } else if (timing == "evening") {
      time = "4:30 PM";
    } else {
      time = "7:30 PM";
    }
    slot.textContent = "Monday " + time;

    title.textContent = localStorage.getItem("title");
    photo.src = localStorage.getItem("photo");
    boxdate.textContent = "Date Fulfilled: " + day + "-" + month + "-" + year;
    boxquantity.textContent =
      "Quantity Donated: " + localStorage.getItem("quantity");
    box.style.display = "";
  } else if (dontype == "doc") {
    const box = document.getElementById("docbox");
    const title = document.getElementById("doctitle");
    const photo = document.getElementById("docphoto");
    const boxdate = document.getElementById("boxdate2");
    const boxpatient = document.getElementById("boxpatient");
    const date = document.getElementById("day1");
    const time = document.getElementById("time1");
    const dure = document.getElementById("dure1");

    date.textContent = "Day: " + localStorage.getItem("date");
    time.textContent = "Start Time: " + localStorage.getItem("time");
    dure.textContent =
      "Duration:" +
      localStorage.getItem("dhours") +
      "h " +
      localStorage.getItem("dminutes") +
      "m";

    title.textContent = localStorage.getItem("title");
    photo.src = localStorage.getItem("photo");
    boxdate.textContent = "Date Fulfilled: " + day + "-" + month + "-" + year;
    boxpatient.textContent =  localStorage.getItem("patient");
    box.style.display = "";
  } else {
    const box = document.getElementById("teacherbox");
    const title = document.getElementById("teachertitle");
    const photo = document.getElementById("teacherphoto");
    const boxdate = document.getElementById("boxdate3");
    const boxquantity = document.getElementById("boxquantity3");
    const boxaddress = document.getElementById("boxaddress");
    const date = document.getElementById("day2");
    const time = document.getElementById("time2");
    const dure = document.getElementById("dure2");

    date.textContent = "Day: " + localStorage.getItem("date");
    time.textContent = "Start Time: " + localStorage.getItem("time");
    dure.textContent =
      "Duration:" +
      localStorage.getItem("dhours") +
      "h " +
      localStorage.getItem("dminutes") +
      "m";

    title.textContent = localStorage.getItem("title");
    photo.src = localStorage.getItem("photo");
    boxdate.textContent = "Date Fulfilled: " + day + "-" + month + "-" + year;
    boxquantity.textContent =
      "Number of Students: " + localStorage.getItem("quantity");
    boxaddress.textContent = "Address: " + localStorage.getItem("address");
    box.style.display = "";
  }
}
