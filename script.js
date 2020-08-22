$(document).ready(function() {

    // 

    let currentDay = document.querySelector("#currentDay");
    const hoursOfDay = [9, 10, 11, 12, 13, 14, 15, 16, 17];

    // getting live time to work

    function liveTime() {
        
        setInterval(function() {
            let now = moment();
            let currentTime = now.format("MMMM Do YYYY, h:mm:ss a");
            $("#currentDay").text(currentTime); 
            let i = 0;

            // compare function to display correct colored time-blocks
        
                $(".hour").each(function() {
                    let currentHour = moment().hour(hoursOfDay[i]);
                    currentHour.minutes(0);
        
                    if ( currentHour.hour() < now.hour()) {
                        $(this).parent().find("time-block").addClass("past");
                    }
            
                    else if (currentHour.hour === now.hour()) {
                        $(this).parent().find("time-block").addClass("present");
                    }
            
                    else if (currentHour.hour > now.hour()) {
                        $(this).parent().find("time-block").addClass("future");
                    }
                    i ++;
                });
            
        }, 1000);
        
    }
    
    liveTime();

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

});