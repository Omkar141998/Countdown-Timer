const endDate = "20 March 2023 12:30 PM"

document.getElementById("end-date").innerText = endDate;
 const inputs = document.querySelectorAll("input");

/*const clock = () => {

}*/

function clock(){
    const end = new Date (endDate);
    const now = new Date();
    const diff = (end - now)/ 1000;

// this condition is use to stop the timer to 0  -->  not yet come negative value
    if(diff < 0)
    return TimeExpired;
    
    // Convert into days **/ imp
    //inputs[0].value ---wrote to add the reamianing days value in the first input box
    inputs[0].value = Math.floor(diff / 3600 / 24); // this calculation is wrote to print Remaining Days
    // use .Floor to removing Decimal Number
    inputs[1].value = Math.floor(diff / 3600) % 24; // this calculation is wrote to print Remaining Hours

    //console.log(Math.floor(diff / 60) % 60);  --> This line use to calculate remaining minutes 
    inputs[2].value = Math.floor(diff / 60) % 60; // this calculation is wrote to print Remaining Minutes
    //console.log(Math.floor(diff) % 60);  --> This line use to calculate remaining minutes 
    inputs[3].value = Math.floor(diff) % 60; // this calculation is wrote to print Remaining Seconds
}
//initial call
clock();

/*
  *   1 day  = 24 hours
  *   1 hour = 60 min
  *   60 min =  3600 sec
  * */

setInterval(
    () => {
         clock();
    },
    1000
)