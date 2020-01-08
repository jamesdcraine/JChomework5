//set up local storage
function getLocalStorage(key) {
    let value = localStorage.getItem(key);
    if (value) {
        $(`#text${key}`).text(value);
    }
}
//pull up document
$(document).ready(function() {
    $("#currentDay").text(moment().format("dddd, MMMM Do" + ", 2020"));
    for (let i = 8; i < 24; i++) {

//create 1 row
var row = $ (<div data-time);

//create column 1
var column1 = $(<div class="col-sm-4">);

//create column 2
var column2 = $(<div class="col-sm-4">);

//create column 3
var column3 = $(<div class="col-sm-4">);

// add columns to row
row.append(column1);
row.append(column2);
row.append(column3);

$(".container").append(row);

//save button

//somehow update colors based on current time
