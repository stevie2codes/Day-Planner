// The app should display standard business hours (9 a.m. to 5 p.m.).
//  Each time slot should represent one hour and contain the following:

// * The time

// * A field to hold user input

// * A save button

// Clicking on the save button will store the time and user input in `localStorage`.



$(document).ready(function(){
 
    //add current day into jumbotron
    let currentDate = moment().format('LLLL');
    $("#currentDay").text(currentDate);

    //getting current hour in normal time
    let now = moment();
   let hour = now.hour();
   let formatHour = now.format('h');
   console.log(formatHour);






















































































})