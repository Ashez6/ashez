const confirm=document.getElementById("confirmbtn");
confirm.addEventListener('click',(e)=>{
    localStorage.setItem("date",document.getElementById("date-picker").value);
    localStorage.setItem("time",document.getElementById("time-picker").value);
    localStorage.setItem("dhours",document.getElementById("duration-hours").value);
    localStorage.setItem("dminutes",document.getElementById("duration-minutes").value);
    window.location.href = 'track.html?reffrom=sched';
    
});

const back=document.getElementById("backbtn");
back.addEventListener('click',(e)=>{
    window.history.back();
});

console.log(localStorage.getItem('title'));
console.log(localStorage.getItem('photo'));
console.log(localStorage.getItem('patient'));
