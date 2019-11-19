// The app should display standard business hours (9 a.m. to 5 p.m.).
//  Each time slot should represent one hour and contain the following:

// * The time

// * A field to hold user input

// * A save button

// Clicking on the save button will store the time and user input in `localStorage`.



$(document).ready(function () {

    //add current day into jumbotron
    let currentDate = moment().format('LLLL');
    $("#currentDay").text(currentDate);

    //getting current hour in normal time
    let now = moment();
    let hour = now.hour();
    let formatHour = now.format('ha');
    console.log(formatHour);

    let timeBlocks = $(".time-block");

    for (let i = 0; i < timeBlocks.length; i++) {
        let blockTime = $(timeBlocks[i]);
        let hourId = blockTime.attr("id");
        console.log(hourId);
        
        
        if (hourId === formatHour) {
            $(blockTime).children(".row").addClass("present");
        }
        if (moment(hourId,"ha").isBefore()) {
            $(blockTime).children(".row").addClass("past");
        } else
            if (moment(hourId,"ha").isAfter()) {
                $(blockTime).children(".row").addClass("future");
            }
    }
    let textArea = $("#text-area"); //comment input

    let saveBtn = $("#saveBtn"); //save button



    let storedValue = JSON.parse(localStorage.getItem('text'));
    if (storedValue) {
        textArea.html(storedValue);

    }
    $(".saveBtn").on("click", function (event) {
        event.preventDefault();
        localStorage.setItem('text', JSON.stringify(textArea.val()));

    });























































































})