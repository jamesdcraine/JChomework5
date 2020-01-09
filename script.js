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
var row = $ ('<div data-time=data-time={i}$ id=${i}' class= "row">');

//create column 1
var column1 = $('<div class="col-sm-4"> <p class = "hour">' + formatAMPM(i) + '</p>');

//create column 2
var column2 = $('<div class="col-sm-4"><textarea id=text${i} class="description" placeholder="Add your text here..."></textarea>');

//create column 3
var column3 = $(`<div class="col-sm-4"><button class="saveBtn" id=${i}><i class="fas fa-save"></i></button>`);

// add columns to row
row.append(column1);
row.append(column2);
row.append(column3);

$(".container").append(row);

getLocalStorage(i);

}
function formatAMPM(hours) {
    var ampm = hours >= 12 ? 'pm' : 'am';
    hours = hours % 12;
    hours = hours ? hours : 12;
    return hours + ampm;
}

var enterHours;
formatAMPM();

//save button

//somehow update colors based on current time
