// putting moment in a variable
var today = moment();

// putting the current date in a variable
var currentDay = moment().format("dddd, MMMM " + "Do, YYYY " + "-- HH:mm a");
var currentHour = moment().format("HH");

// setting the date
function insertCurrentDay() {
    $("#moment").text(currentDay);
};

insertCurrentDay();

// setting up local storage
function textNine(){
	var dataToSaveNine = document.getElementById("inputNine").value;	
	localStorage.setItem("data", dataToSaveNine);  
	console.log(dataToSaveNine)
}
function textTen(){
	var dataToSaveTen = document.getElementById("inputTen").value;
	localStorage.setItem("data", dataToSaveTen);
}
function textEleven(){
	var dataToSaveEleven = document.getElementById("inputEleven").value;
	localStorage.setItem("data", dataToSaveEleven);
}
function textTwelve(){
	var dataToSaveTwelve = document.getElementById("inputTwelve").value;
	localStorage.setItem("data", dataToSaveTwelve);
}
function textOne(){
	var dataToSaveOne = document.getElementById("inputOne").value;
	localStorage.setItem("data", dataToSaveOne);
}
function textTwo(){
	var dataToSaveTwo = document.getElementById("inputTwo").value;
	localStorage.setItem("data", dataToSaveTwo);
}
function textThree(){
	var dataToSaveThree = document.getElementById("inputThree").value;
	localStorage.setItem("data", dataToSaveThree);
}
function textFour(){
	var dataToSaveFour = document.getElementById("inputFour").value;
	localStorage.setItem("data", dataToSaveFour);
}
function textFive(){
	var dataToSaveFive = document.getElementById("inputFive").value;
	localStorage.setItem("data", dataToSaveFive);
	localStorage.getItem(dataToSaveFive);
	console.log(dataToSaveFive);
}

textNine();
textTen();
textEleven();
textTwelve();
textOne();
textTwo();
textThree();
textFour();
textFive();

// change background based on hour

if (currentHour > 9 ) {
	document.getElementById("nineAM").style.borderColor = "grey";
}
else if (currentHour == 9) {
	document.getElementById("nineAM").style.borderColor = "red";
}
else if (currentHour < 9) {
	document.getElementById("nineAM").style.borderColor = "green";
}
if (currentHour > 10 ) {
	document.getElementById("tenAM").style.borderColor = "grey";
}
else if (currentHour == 10) {
	document.getElementById("tenAM").style.borderColor = "red";
}
else if (currentHour < 10) {
	document.getElementById("tenAM").style.borderColor = "green";
}
if (currentHour > 11 ) {
	document.getElementById("elevenAM").style.borderColor = "grey";
}
else if (currentHour == 11) {
	document.getElementById("elevenAM").style.borderColor = "red";
}
else if (currentHour < 11) {
	document.getElementById("elevenAM").style.borderColor = "green";
}
if (currentHour > 12 ) {
	document.getElementById("twelvePM").style.borderColor = "grey";
}
else if (currentHour == 12) {
	document.getElementById("twelvePM").style.borderColor = "red";
}
else if (currentHour < 12) {
	document.getElementById("twelvePM").style.borderColor = "green";
}
if (currentHour > 13 ) {
	document.getElementById("onePM").style.borderColor = "grey";
}
else if (currentHour == 13) {
	document.getElementById("onePM").style.borderColor = "red";
}
else if (currentHour < 13) {
	document.getElementById("onePM").style.borderColor = "green";
}
if (currentHour > 14 ) {
	document.getElementById("twoPM").style.borderColor = "grey";
}
else if (currentHour == 14) {
	document.getElementById("twoPM").style.borderColor = "red";
}
else if (currentHour < 14) {
	document.getElementById("twoPM").style.borderColor = "green";
}
if (currentHour > 15 ) {
	document.getElementById("threePM").style.borderColor = "grey";
}
else if (currentHour == 15) {
	document.getElementById("threePM").style.borderColor = "red";
}
else if (currentHour < 15) {
	document.getElementById("threePM").style.borderColor = "green";
}
if (currentHour > 16 ) {
	document.getElementById("fourPM").style.borderColor = "grey";
}
else if (currentHour == 16) {
	document.getElementById("fourPM").style.borderColor = "red";
}
else if (currentHour < 16) {
	document.getElementById("fourPM").style.borderColor = "green";
}
if (currentHour > 17 ) {
	document.getElementById("fivePM").style.borderColor = "grey";
}
else if (currentHour == 17) {
	document.getElementById("fivePM").style.borderColor = "red";
}
else if (currentHour < 17) {
	document.getElementById("fivePM").style.borderColor = "green";
}