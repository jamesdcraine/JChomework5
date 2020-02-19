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

function textNine(){
	var dataToSaveNine = document.getElementById("inputNine").value;	
	localStorage.setItem("data", dataToSaveNine);
	console.log(dataToSaveNine);
}
function textTen(){
	var dataToSaveTen = document.getElementById("inputTen").value;
	localStorage.setItem("data", dataToSaveTen);
	console.log(dataToSaveTen);
}
function textEleven(){
	var dataToSaveEleven = document.getElementById("inputEleven").value;
	localStorage.setItem("data", dataToSaveEleven);
	console.log(dataToSaveEleven);
}
function textTwelve(){
	var dataToSaveTwelve = document.getElementById("inputTwelve").value;
	localStorage.setItem("data", dataToSaveTwelve);
	console.log(dataToSaveTwelve);
}
function textOne(){
	var dataToSaveOne = document.getElementById("inputOne").value;
	localStorage.setItem("data", dataToSaveOne);
	console.log(dataToSaveOne);
}
function textTwo(){
	var dataToSaveTwo = document.getElementById("inputTwo").value;
	localStorage.setItem("data", dataToSaveTwo);
	console.log(dataToSaveTwo);
}
function textThree(){
	var dataToSaveThree = document.getElementById("inputThree").value;
	localStorage.setItem("data", dataToSaveThree);
	console.log(dataToSaveThree);
}
function textFour(){
	var dataToSaveFour = document.getElementById("inputFour").value;
	localStorage.setItem("data", dataToSaveFour);
	console.log(dataToSaveFour);
}
function textFive(){
	var dataToSaveFive = document.getElementById("inputFive").value;
	localStorage.setItem("data", dataToSaveFive);
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