$(document).ready(function() {

    // display current day/time

    $("#currentDay").text(moment().format("MMMM Do YYYY, h:mm:ss a"));

    // save button function for local storage

    $(".saveBtn").on("click", function() {
        let value = $(this).siblings(".description").val();
        let time = $(this).parent().attr("id");

        localStorage.setItem(time, value);

    })

    // pulling from local storage

    $("#hour-9 .description").val(localStorage.getItem("hour-9"));
    $("#hour-10 .description").val(localStorage.getItem("hour-10"));
    $("#hour-11 .description").val(localStorage.getItem("hour-11"));
    $("#hour-12 .description").val(localStorage.getItem("hour-12"));
    $("#hour-13 .description").val(localStorage.getItem("hour-13"));
    $("#hour-14 .description").val(localStorage.getItem("hour-14"));
    $("#hour-15 .description").val(localStorage.getItem("hour-15"));
    $("#hour-16 .description").val(localStorage.getItem("hour-16"));
    $("#hour-17 .description").val(localStorage.getItem("hour-17"));
    
    // changing block colors based on time

    console.log(moment());

    function compareTime(todoBlock) {

        let currentHour = moment().hour();
        
        if (todoBlock < currentHour) {
            $(this).addClass("past");
        }

        else if (todoBlock === currentHour) {
            $(this).addClass("present");
        }

        else if (todoBlock > currentHour) {
            $(this).addClass("future");
        }

    }


});
