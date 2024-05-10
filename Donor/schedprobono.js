const confirm = document.getElementById("confirmbtn");
confirm.addEventListener('click', (e) => {
    const datePicker = document.getElementById("date-picker");
    const timePicker = document.getElementById("time-picker");
    const durationHours = document.getElementById("duration-hours");
    const durationMinutes = document.getElementById("duration-minutes");
    const div1 = document.getElementById("date-alert");
    const div2 = document.getElementById("time-alert");
    const div3 = document.getElementById("duration-alert");

    const selectedDate = new Date(datePicker.value + "T" + timePicker.value);
    let flag=false;
    const currentDate=new Date();

    const threeMonthsFromNow = new Date();
    threeMonthsFromNow.setMonth(currentDate.getMonth() + 3);

    div2.innerHTML="";
    div1.innerHTML="";
    div3.innerHTML="";

    if(selectedDate>threeMonthsFromNow){
        div1.innerHTML = "Please select a date within the next 3 months.";
        confirm.disabled = true;
        flag = true;
    }


    if(selectedDate.getFullYear()<currentDate.getFullYear()){
        div1.innerHTML="Please select a valid date.";
        confirm.disabled = true;
        flag=true;
    }
    else if(selectedDate.getFullYear()==currentDate.getFullYear()){
        if(selectedDate.getMonth()<currentDate.getMonth()){
            div1.innerHTML="Please select a valid date.";
            confirm.disabled = true;
            flag=true;
        }
        else if(selectedDate.getMonth()==currentDate.getMonth()){
            if(selectedDate.getDate()<currentDate.getDate()){
                div1.innerHTML="Please select a valid date.";
                confirm.disabled = true;
                flag=true;
            }
            else if(selectedDate.getDate()==currentDate.getDate()){
                if(selectedDate.getTime()<=currentDate.getTime()){
                    div2.innerHTML="Please select a valid timing.";
                    confirm.disabled = true;
                    flag=true;
                }
            }
        }
    }


    if( durationHours.value < 0 || durationHours.value>24
            || durationMinutes.value<0 || durationMinutes.value>59 )
    {
        div3.innerHTML="Please select a valid duration."
        confirm.disabled = true;
        flag=true;
    }

    if(!flag){
        localStorage.setItem("date", datePicker.value);
        localStorage.setItem("time", timePicker.value);
        localStorage.setItem("dhours", durationHours.value);
        localStorage.setItem("dminutes", durationMinutes.value);
        window.location.href = 'track.html?reffrom=sched';
    }


});

const back = document.getElementById("backbtn");
back.addEventListener('click', (e) => {
    window.history.back();
});


document.addEventListener("DOMContentLoaded", function() {
    const datePicker = document.getElementById("date-picker");
    const today = new Date();
    const todayFormatted = today.toISOString().split("T")[0];
    datePicker.setAttribute("min", todayFormatted);
    const threeMonthsFromNow=new Date();
    threeMonthsFromNow.setMonth(today.getMonth() + 3);
    datePicker.setAttribute("max", threeMonthsFromNow.toISOString().split("T")[0]);

});
