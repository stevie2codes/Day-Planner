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
    let formatHour = now.format('h');
    console.log(formatHour);


    let timeBlocks = $(".time-block");
    for (let i = 0; i < timeBlocks.length; i++) {
        let blockTime = $(timeBlocks[i]);
        let hourId = blockTime.attr("id");

        if (hourId === formatHour) {
            $(blockTime).addClass("present");
        } 
            if (moment(hourId).isBefore(formatHour)) {
                $(blockTime).addClass("past");
            } 
                if (moment(hourId).isAfter(formatHour)) {
                    $(blockTime).addClass("future");
                }
    }

    let textArea = $("#text-area"); //comment input
    let timeBlock = $(".time-block"); //comment placement
    let saveBtn = $("#saveBtn"); //save button

    

    let storedValue = JSON.parse(localStorage.getItem('text'));
        if(storedValue) {
            textArea.html(storedValue);
            
        }
        $(".saveBtn").on("click",function(event){
            event.preventDefault();
            localStorage.setItem('text', JSON.stringify(textArea.val()));
             
        });


      




















































































})