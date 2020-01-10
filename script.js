//set up local storage
function getLocalStorage(key) {
    let value = localStorage.getItem(key);
    if (value) {
        $(`#text${key}`).text(value);
    }
}
//pull up document
$(document).ready(function () {
    $("#currentDay").text(moment().format("h:mm A" + ", " + "dddd, MMMM Do" + ", " + "YYYY"));

    for (let i = 8; i < 18; i++) {

        //create 1 row
        var row = $(`<div data-time=${i} id='${i}' class="row">`);

        //create column 1
        var column1 = $('<div class="col-sm-3"> <p class = "hour">' + formatAMPM(i) + '</p>');

        //create column 2
        var column2 = $('<div class="col-sm-7 past"><textarea id=text${i} class="description" placeholder="Add   your   text   here  . . ."></textarea>');

        //create column 3
        var column3 = $(`<div class="col-sm-2"><button class="saveBtn" id=${i}><i class="fas fa-save"></i></button>`)

        // add columns to row
        row.append(column1);
        row.append(column2);
        row.append(column3);

        $(".container").append(row);

        getLocalStorage(i);

    }

    function formatAMPM(hours) {
        var ampm = hours >= 12 ? ' PM' : ' AM';
        hours = hours % 12;
        hours = hours ? hours : 12;
        return hours + ampm;
    }

    formatAMPM();

function updateColors(){
        var currentTime = new Date().getHours();
        for (var i = 9; i < 18; i++) { 
        console.log(currentTime, $(`#${i}`).data("time"));
         if ($(`#${i}`).data("time") == currentTime){
            $(`#text${i}`).addClass( "present");
        } else if (currentTime < $(`#${i}`).data("time")) {
            $(`#text${i}`).addClass( "future");
        }
    }
}

    setInterval(function () {
        updateColors();
    }, 1000);

    var saveBtn = $('.saveBtn');
    saveBtn.on('click', function () {
        let eventId = $(this).attr('id');
        let eventText = $(this).parent().siblings().children('.description').val();
        localStorage.setItem(eventId, eventText);
    });
});
