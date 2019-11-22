
$(document).ready(function () {

    //add current day into jumbotron
    let currentDate = moment().format('LLLL');
    $("#currentDay").text(currentDate);

    //getting current hour in normal time
    let now = moment();
    let hour = now.hour();
    let formatHour = now.format('ha');
    let timeBlocks = $(".time-block");


    //setting colors to relevant time
    for (let i = 0; i < timeBlocks.length; i++) {
        let blockTime = $(timeBlocks[i]);
        let hourId = blockTime.attr("id");

        if (hourId === formatHour) {
            $(blockTime).children(".row").addClass("present");
        }
        if (moment(hourId, "ha").isBefore()) {
            $(blockTime).children(".row").addClass("past");
        } else
            if (moment(hourId, "ha").isAfter()) {
                $(blockTime).children(".row").addClass("future");
            }
    }

    // let textArea = $("#text-area"); //comment input
    let saveBtn = $(".saveBtn"); //save button

    //setting a function for save button clicked  to store relevant text area input
    function saveInput(event) {
        event.preventDefault();
        let hour = $(this).parent().parent().attr("id");
        let input = $(this).siblings("textarea").val();
        localStorage.setItem(hour, input);
    };

    // setting variables that target the specific textarea
    let nine = $("#9am").children(".row").children("textarea");
    let ten = $("#10am").children(".row").children("textarea");
    let eleven = $("#11am").children(".row").children("textarea");
    let twelve = $("#12pm").children(".row").children("textarea");
    let one = $("#1pm").children(".row").children("textarea");
    let two = $("#2pm").children(".row").children("textarea");
    let three = $("#3pm").children(".row").children("textarea");
    let four = $("#4pm").children(".row").children("textarea");
    let five = $("#5pm").children(".row").children("textarea");

    // displaying the stored value into the text area
    nine.text(localStorage.getItem("9am"));
    ten.text(localStorage.getItem("10am"));
    eleven.text(localStorage.getItem("11am"));
    twelve.text(localStorage.getItem("12pm"));
    one.text(localStorage.getItem("1pm"));
    two.text(localStorage.getItem("2pm"));
    three.text(localStorage.getItem("3pm"));
    four.text(localStorage.getItem("4pm"));
    five.text(localStorage.getItem("5pm"));

    saveBtn.on('click', saveInput);
    // calling the saveInput function when save button is clicked


    $(".reset").on("click", function () {
        localStorage.clear();
        location.reload();
    })













































































})