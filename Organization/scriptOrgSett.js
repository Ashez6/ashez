const updateButt = document.getElementById("update-button");

let count = 0;

updateButt.addEventListener("click", (e) => {
  const fromTime = document.getElementById("from-time");
  const toTime = document.getElementById("to-time");
  const newDiv = document.createElement("div");
  newDiv.id = "new-div";
  const addText = document.getElementById("add-update");
  addText.appendChild(newDiv);

  fromTime.style.border = "";
  toTime.style.border = "";

  if (fromTime.value == "" || toTime.value == "") {
    addText.removeChild(document.getElementById("new-div"));
    if (count == 1) count--;
    if (fromTime.value == "") {
      alert("Please enter the 'From Time' ");
      fromTime.style.border = "3px solid red";
    }
    if (toTime.value == "") {
      alert("please enter the 'To Time'");
      toTime.style.border = "3px solid red";
    }
  } else {
    if (count == 0) {
      newDiv.style.color = "green";
      newDiv.innerText = "Confirmed";
      addText.appendChild(newDiv);
      count++;
    }
  }
});
