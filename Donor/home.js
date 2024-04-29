document.addEventListener("DOMContentLoaded", (e) => {
  const type = localStorage.getItem("type");
  const cardToBeChanged = document.getElementById("card-change");
  const dropDownToBeChanged = document.getElementById("dropdown-change");

  if (type == "teacher") {
    cardToBeChanged.innerHTML =
      "<h4>Provide Probono Services</h4> <p>Since you are a teacher, you can view posted requests for sessions that meet your expertise using the link below</p><a href='teacher.html'>View Teaching Posts <i class='fa fa-long-arrow-righ'></i> </a> <br>";

    dropDownToBeChanged.innerHTML =
      "<li><a href='allsectors.html'>All</a><a href='medicalsector.html'>Medical Supplies</a><a href='schoolsector.html'>School Supplies</a><a href='clothessector.html'>Clothes</a><a href='foodsector.html'>Food</a><a href='bloodsector.html'>Blood</a><a href='toyssector.html'>Toys</a><a href='teacher.html'>Pro-Bono Teaching Requests</a></ul>";
  }
});
