const confirm=document.getElementById("confirmbtn");
confirm.addEventListener('click',(e)=>{

    window.location.href = 'track.html?data=example';
    
});

const back=document.getElementById("backbtn");
back.addEventListener('click',(e)=>{
    window.history.back();
});