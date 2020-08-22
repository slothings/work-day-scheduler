var timeBlockTemp = `
    < div class="row">
        <div class="col-md-2 hour">12:00AM</div>
        <div class="time-block col-md-8"><textarea class="time-block></textarea></div>
    <div class="col-md-2"><button class="saveBtn"></button></div >
</div >`;

var currentDay = document.querySelector("#currentDay");

$(document).ready(function () {

    function date() {

        setInterval(function () {
            var currentDate = moment().format('MMMM Do YYYY, h:mm:ss a');
            $("#currentDate").text(currentDate);
            console.log(currentDate);
        }, 1000);
    }

    date();

    for (var i = 0; i < 8; i++) {
        var timeBlock = $($.parseHTML(timeBlockTemp));
        $("#timeBlockTemp").append(timeBlock);
    };

})