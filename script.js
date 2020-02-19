var today = moment();

var currentDay = moment().format("dddd, MMMM " + "Do, YYYY " + "-- h:mm a");

function insertCurrentDay() {
    $("#moment").text(currentDay);
};

insertCurrentDay();


