const button1=document.getElementById("option1");
const button2=document.getElementById("option2");
const button3=document.getElementById("option3");
const div=document.getElementById("verror");

button1.addEventListener('click',(e)=>{
    div.innerHTML='';
});

button2.addEventListener('click',(e)=>{
    div.innerHTML='';
});

button3.addEventListener('click',(e)=>{
    div.innerHTML='';
});


const confirm=document.getElementById("confirmbtn");
confirm.addEventListener('click',(e)=>{
    if(!button1.checked && !button2.checked && !button3.checked){
        div.innerHTML='<h6 style="text-align: center; color: red;">Please choose delivery vehicle type.</h6>';
    }
    else{
        div.innerHTML='';
        localStorage.setItem('timeslot',document.getElementById("time-slot-select").value);
        window.location.href = 'track.html?reffrom=sched';
    }
});

const back=document.getElementById("backbtn");
back.addEventListener('click',(e)=>{
    window.history.back();
});

console.log(localStorage.getItem('title'));
console.log(localStorage.getItem('photo'));
console.log(localStorage.getItem('quantity'));