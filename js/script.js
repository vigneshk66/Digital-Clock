const current =document.querySelector(".clock");

function startClock(){
    var time=new Date();
    var hours=time.getHours();
    var minutes=time.getMinutes();
    var seconds=time.getSeconds();
    var session="AM";
    if(hours>12){
        hours=hours-12;
        session="PM";
    }else if(hours==0){
        hours=12;
        session="AM";
    }
    hours=hours<10?"0"+hours:hours;
    minutes=minutes<10?"0"+minutes:minutes;
    seconds=seconds<10?"0"+seconds:seconds;

    current.innerHTML=`${hours} : ${minutes} : ${seconds} ${session}`;
  
}
startClock();
setInterval(startClock,1000);