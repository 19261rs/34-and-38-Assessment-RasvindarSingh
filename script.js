//*********************************************************//
// WRITTEN BY: RASVINDAR SINGH 
// DATES: TERM 2 & 3, 2023
// script.js 
//*********************************************************//

//RENT PAGE GLOBAL VARIALBES 

//Constants
const FLATRATE = 10;
const MINWEIGHT = 5; 
const MAXWEIGHT = 30;
const INSURANCERATE = 20;
const MAXRENTDAYS = 14;
const MINRENTDAYS = 0;
const MINAGE = 25;
const MAXAGE = 80;

// Arrays
 var TRUCKWEIGHTARRAY = [30,25,20,15,10,5];
var TRUCKTYPEARRAY = ["MAN TGX", "Freightliner 122SD", "Volvo VNX", "Kenworth W990", "Mack Anthem", "Ford F-550"];

//Variables
var userName; 
var userWeightChoice;
var userAge;
var userHireLength; 
var userCost;
var userTruckChoice;
var userInsurance;
var userInsuranceResp;


//Validation variables (Booleans)
var nameValidation = true;
var ageValidation = true;
var weightValidation = true;
var daysValidation = true;
var insuranceValidation = true;

// END OF RENT PAGE GLOBAL VARIABLES 

//*********************************************************//
//NAVIGATION CODE - ALL PAGES
//*********************************************************//

$(document).ready(function() {
  $('.toggle').click(function() {
    $('#menu').toggleClass('open');
    $('.container').toggleClass('menu-open');
  });
});


//*********************************************************//
//MODAL CODE - ALL PAGES
//*********************************************************//

  // for some reason it doesnt work in the script.js file. Modal code
    var modal = document.getElementById("myModal");
    var btn = document.getElementById("myBtn");
    var span = document.getElementsByClassName("close")[0];

    btn.onclick = function () {
      modal.style.display = "block";
    }

    span.onclick = function () {
      modal.style.display = "none";
    }

    window.onclick = function (event) {
      if (event.target == modal) {
        modal.style.display = "none";
      }
    }



//*********************************************************//
//RENTAL PAGE
//*********************************************************//



// inventory page

//slideshow code (outsourced - w3)
var slidePosition = 1;

// forward/Back controls
function plusSlides(n) {
  SlideShow(slidePosition += n);
}

//  images controls
function currentSlide(n) {
  SlideShow(slidePosition = n);
}

var slides = document.getElementsByClassName("Containers");
var circles = document.getElementsByClassName("dots");

console.log(slides)
function SlideShow(n) {
  var i;
  if (n > slides.length) {slidePosition = 1}
  if (n < 1) {slidePosition = slides.length}
  for (i = 0; i < slides.length; i++) {
      slides[i].style.display = "none";
  }
  for (i = 0; i < circles.length; i++) {
      circles[i].className = circles[i].className.replace(" enable", "");
  }
  slides[slidePosition-1].style.display = "block";
  circles[slidePosition-1].className += " enable";
}

setTimeout(() => {
  SlideShow(slidePosition);
}, 1000);


//RENTAL FORM CODE STARTS HERE 

/**********************************************************************************/
// MAIN CODE
/**********************************************************************************/

// function start() {

// // Delcaring & assigning variables 
// var TRUCKWEIGHTARRAY = [30,25,20,15,10,5];
// var TRUCKTYPEARRAY = ["MAN TGX", "Freightliner 122SD", "Volvo VNX", "Kenworth W990", "Mack Anthem", "Ford F-550"];
// // var userLastName; 
// var userWeightChoice;
// var loop = true;
// var userHireLength 
// var userCost
// const FLATRATE = 100;
//  var userFirstName;

// // Main code

// userFirstName = document.getElementById("firstName").value;

//   //Name Validation
// while (loop) {
//   if (userFirstName === null) {
//     loop = false;

//   }
//   else if (userFirstName == "" || userFirstName == " " || !isNaN(Number(userFirstName))) {
//     userFirstName = prompt("Invalid! Enter a valid username please");
//   }
//   else {
//     break;

//   }
// }
//   //User Age and Weight Input
// userAge = document.getElementById("userAge").value;
// userWeightChoice = document.getElementById("weightLoad").value;

//   //Suggesting best truck for input
// for (i = 0; i < TRUCKWEIGHTARRAY.length; i++) {
//   if (userWeightChoice >= TRUCKWEIGHTARRAY[i]) {
//     alert("Hello " + userFirstName + " The " + TRUCKTYPEARRAY[i] + " looks like the best option for you!");
//     break;
//   }
// }

//   // Get the selected dates from the input fields
//   var pickupDate = new Date(document.getElementById('pickupDate').value);
//   var dropoffDate = new Date(document.getElementById('dropoffDate').value);

//   // Calculate the difference in milliseconds
//   var timeDifference = dropoffDate - pickupDate;

//   // Calculate the number of days
//   var numDays = timeDifference / (1000 * 3600 * 24);

//   // Display the result
//   userHireLength = numDays;
//   console.log(userHireLength);

// // Cost calculation
// userCost = Number(userHireLength * (userWeightChoice / 10000)* 10 * FLATRATE);
// console.log(userCost);

// //Order message
// alert("YOUR ORDER: \nYou will recieve a " + TRUCKTYPEARRAY[i] + " for " + userHireLength + " days and it'll cost you a total of $" + userCost + " to rent " + userFirstName);
// }
// /**********************************************************************************/
// // Functions
// /**********************************************************************************/

/*************************************************************/
//      END OF SHERGILL TRANSPORT APP
/*************************************************************/






/**********************************************************************************/
// MAIN CODE
/**********************************************************************************/

function start() {

  
  //HTML user input values 
  userFirstName = document.getElementById("firstName").value; 
  userAge = document.getElementById("userAge").value;
  userWeightChoice = document.getElementById("weightLoad").value; 
  // Get the selected dates from the input fields
  var pickupDate = new Date(document.getElementById('pickupDate').value);
  var dropoffDate = new Date(document.getElementById('dropoffDate').value);

  // Calculate the difference in milliseconds
  var timeDifference = dropoffDate - pickupDate;

  // Calculate the number of days
  var numDays = timeDifference / (1000 * 3600 * 24);

  // Display the result
  userHireLength = numDays;
  console.log(userHireLength);
  
  userInsuranceResp = document.getElementById("insurance").value;

  // Console log HTML values (testing purposes)
  console.log(userFirstName);
  console.log(userAge);
  console.log(userWeightChoice);
  console.log(userHireLength);
  console.log(userInsuranceResp);

  // Name validation 
  const regExpName = /^[a-zA-Z]+$/;
  var userFirstName = userFirstName.trim();
  if (regExpName.test(userFirstName) == true) {
    // If name input is valid
    var nameValidation = true;
  } 

  //Age validation 
  const regExpAge = /^[0-9]+$/;
  var userAge = userAge.trim();
  console.log(regExpAge.test(userAge))
  if (regExpAge.test(userAge) == true && userAge >= MINAGE && userAge <= MAXAGE){
  // If age input is valid
    var ageValidation = true;
  }

  //Hire Length validation 
  const regExpHire = /^[0-9]+$/;
  // var userHireLength = userHireLength.trim();
  console.log(regExpHire.test(userHireLength))
  if (regExpHire.test(userHireLength) == true && userHireLength >MINRENTDAYS && userHireLength <= MAXRENTDAYS){
    // If days input is valid
    var daysValidation = true;
  } 

  //Seat Selection validation
  const regExpWeight = /^[0-9]+$/;
  // var userWeightChoice = userWeightChoice.trim();
  console.log(regExpWeight.test(userWeightChoice))
  if (regExpWeight.test(userWeightChoice) == true && userWeightChoice  >= MINWEIGHT && userWeightChoice <= MAXWEIGHT) {
   // If seats input is valid
     weightValidation = true;
  } else {
    weightValidation = false;
  }

  // Insurance validation
  const regExpInsure = /^(?:Yes\b|No\b)+$/i;
  var userInsuranceResp = userInsuranceResp.trim();
  console.log(regExpInsure.test(userInsuranceResp))
  if (regExpInsure.test(userInsuranceResp) == true) {
    // if insurance input is valid
    var insuranceValidation = true;
  } 

  // Checking validation and continuing if true, else invalid message
  if (nameValidation == true && ageValidation == true && daysValidation == true && weightValidation == true && insuranceValidation == true) {
    truckSelection();
  } else {
    validationFailed();
  }
/**********************************************************************************/
// Functions
/**********************************************************************************/

// Matching vehicle based off number of car seats
  function truckSelection() {
    for (i = 0; i < TRUCKWEIGHTARRAY.length; i++) {
      if (userWeightChoice >= TRUCKWEIGHTARRAY[i]) { 
          userTruckChoice = TRUCKTYPEARRAY[i]
          userWeightChoice = TRUCKWEIGHTARRAY [i]
          console.log(userTruckChoice);
          console.log(userWeightChoice);
          break;
    }
  }

//Cost Calculation 
if (userInsuranceResp == 'Yes'|| userInsuranceResp == 'yes'|| userInsuranceResp == 'YES') {
   //calculate insurance
  userInsurance = Number(userHireLength * INSURANCERATE);
  //final cost including insurance
  userCost = Number(userHireLength * userWeightChoice * FLATRATE + userInsurance);
  console.log(userCost);
} else {
   userCost = Number(userHireLength * userWeightChoice * FLATRATE);
   console.log(userCost);
}

// Recommendation prompt & Final order message
//local variable - doesn't need to be called universely at the top.
var userConfirmResp = confirm("We recommend that the " + userTruckChoice + " is the best vehicle for you! It can haul  " + userWeightChoice + " tonnes, making it the best option.\nPlease confirm if you'd like the " + userTruckChoice + ".");

if (userConfirmResp == true){
      showMessageRentalModal("YOUR ORDER: Hello " + userFirstName + " you've chosen the " +  userTruckChoice + ". It can haul " + userWeightChoice +  " tonnes and it will cost $" + userCost + " to hire for " + userHireLength + " day(s).");
} else {
  showMessageRentalModal("Your order has been canceled.");
}
}

// Failed validation function 
function validationFailed() {
    if (nameValidation !==true) {
      showMessageRentalModal("Please enter a valid name!");
    } else if (ageValidation !==true) {
         showMessageRentalModal("Please enter a valid age! You must be between 25-80 years old to hire a vehicle.");
    } else if (weightValidation !==true){
        showMessageRentalModal("Sorry, it looks like we don't have a vehicle that can haul that weight available!");
    } else if(daysValidation !==true){
        showMessageRentalModal("Please enter valid number of days you'd like to hire for!"); 
    } else if (insuranceValidation !==true) {
        showMessageRentalModal("Invalid! Please make sure you've selected either 'Yes' or 'No' for insurance!"); 
    }
 }
}

//MODAL FOR RENTAL POPUP MESSAGES NOT GOOGLE FORM
// opening functionality
function openRentalModal() {
  var rentalModal = document.getElementById("rentalModal");
  rentalModal.style.display = "block";
}

//closing functionality
function closeRentalModal(){
  var rentalModal = document.getElementById("rentalModal");
  rentalModal.style.display = "none";
}

//display message 
function showMessageRentalModal(message) {
  var modalMessage = document.getElementById("modalMessage");
modalMessage.textContent = message;
  openRentalModal();
}