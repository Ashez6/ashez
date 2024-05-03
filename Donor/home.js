document.addEventListener("DOMContentLoaded", (e) => {
  const type = localStorage.getItem("type");
  const dropDownToBeChanged = document.getElementById("dropdown-change");

  if (type == "teacher") {
    dropDownToBeChanged.innerHTML =
      "<li><a href='allsectors.html'>All</a><a href='medicalsector.html'>Medical Supplies</a><a href='schoolsector.html'>School Supplies</a><a href='clothessector.html'>Clothes</a><a href='foodsector.html'>Food</a><a href='bloodsector.html'>Blood</a><a href='toyssector.html'>Toys</a><a href='teacher.html'>Pro-Bono Teaching Requests</a></ul>";
  }

  if (type == "doctor") {
    dropDownToBeChanged.innerHTML =
      "<li><a href='allsectors.html'>All</a><a href='medicalsector.html'>Medical Supplies</a><a href='schoolsector.html'>School Supplies</a><a href='clothessector.html'>Clothes</a><a href='foodsector.html'>Food</a><a href='bloodsector.html'>Blood</a><a href='toyssector.html'>Toys</a><a href='doctor.html'>Pro-Bono Cases Requests</a></ul>";
  }
});
