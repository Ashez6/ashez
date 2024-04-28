const deleteButts = document.querySelectorAll(".delete-button");
const jobBox = document.querySelectorAll(".job-box");

for (let i = 0; i < deleteButts.length; i++) {
  deleteButts[i].addEventListener("click", (e) => {
    jobBox[i].remove();
  });
}

const popup1 = document.getElementById("pop-out1");

popup1.addEventListener("click", (e) => {});
