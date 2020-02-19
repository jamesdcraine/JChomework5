// putting moment in a variable
var today = moment();

// putting the current date in a variable
var currentDay = moment().format("dddd, MMMM " + "Do, YYYY " + "-- h:mm a");

// setting the date
function insertCurrentDay() {
    $("#moment").text(currentDay);
};

insertCurrentDay();

// setting up local storage

saveActivity.addEventListener('saveBtn', function (event) {
	if (saveActivity.value.length < 1) return;
	localStorage.setItem('saveActivity', saveActivity.innerHTML);
}, false);

var saved = localStorage.getItem('saveActivity');
if (saved) {
	saveActivity.innerHTML = saved;
}