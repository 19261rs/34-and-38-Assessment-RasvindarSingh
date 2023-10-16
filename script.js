//*********************************************************//
// WRITTEN BY: RASVINDAR SINGH 
// DATES: TERM 2 & 3, 2023
// script.js 
//*********************************************************//

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

// Arrays
const CARSEATSARRAY = [8,7,5,4,2,1];
const CARTYPEARRAY = ["Estima", "Outlander", "Falcon", "Mini", "MX5", "BAC Mono"];

//Variables
var userName; 
var userSeatChoice;
var userAge;
var userHireLength; 
var userCost;
var userCarChoice;
var userInsurance;
var userInsuranceResp;

//Constants
const FLATRATE = 10;
const MINAGE = 25;
const MAXAGE = 80;
const MINSEATS = 1; 
const MAXSEATS = 8;
const INSURANCERATE = 20;
const MAXRENTDAYS = 14;
const MINRENTDAYS = 0;

//Validation variables (Booleans)
var nameValidation = true;
var ageValidation = true;
var seatValidation = true;
var daysValidation = true;
var insuranceValidation = true;

/**********************************************************************************/
// MAIN CODE
/**********************************************************************************/

function start() {
  //HTML user input values 
  userName = document.getElementById("i_name").value; 
  userAge = document.getElementById("i_age").value;
  userSeatChoice = document.getElementById("i_seats").value; 
  userHireLength = document.getElementById("i_days").value;
  userInsuranceResp = document.getElementById("i_insurance").value;

  // Console log HTML values (testing purposes)
  console.log(userName);
  console.log(userAge);
  console.log(userSeatChoice);
  console.log(userHireLength);
  console.log(userInsuranceResp);
 
  // Name validation 
  const regExpName = /^[a-zA-Z]+$/;
  var userName = userName.trim();
  if (regExpName.test(userName) == true) {
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
  var userHireLength = userHireLength.trim();
  console.log(regExpHire.test(userHireLength))
  if (regExpHire.test(userHireLength) == true && userHireLength >MINRENTDAYS && userHireLength <= MAXRENTDAYS){
    // If days input is valid
    var daysValidation = true;
  } 
  
  //Seat Selection validation
  const regExpSeat = /^[0-9]+$/;
  var userSeatChoice = userSeatChoice.trim();
  console.log(regExpSeat.test(userSeatChoice))
  if (regExpSeat.test(userSeatChoice) == true && userSeatChoice  >= MINSEATS && userSeatChoice <= MAXSEATS && userSeatChoice != 3 && userSeatChoice !=6) {
   // If seats input is valid
    var seatValidation = true;
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
  if (nameValidation == true && ageValidation == true && daysValidation == true && seatValidation == true && insuranceValidation == true) {
    carSelection();
  } else {
    validationFailed();
  }
/**********************************************************************************/
// Functions
/**********************************************************************************/

// Matching vehicle based off number of car seats
  function carSelection() {
    for (i = 0; i < CARSEATSARRAY.length; i++) {
      if (userSeatChoice >= CARSEATSARRAY[i]) { 
          userCarChoice = CARTYPEARRAY[i]
          userSeatChoice = CARSEATSARRAY [i]
          console.log(userCarChoice);
          console.log(userSeatChoice);
          break;
    }
  }
  
//Cost Calculation 
if (userInsuranceResp == 'Yes'|| userInsuranceResp == 'yes'|| userInsuranceResp == 'YES') {
   //calculate insurance
  userInsurance = Number(userHireLength * INSURANCERATE);
  //final cost including insurance
  userCost = Number(userHireLength * userSeatChoice * FLATRATE + userInsurance);
  console.log(userCost);
} else {
   userCost = Number(userHireLength * userSeatChoice * FLATRATE);
   console.log(userCost);
}
  
// Recommendation prompt & Final order message
//local variable - doesn't need to be called universely at the top.
var userConfirmResp = confirm("We recommend that the " + userCarChoice + " is the best vehicle for you! It is equipped with " + userSeatChoice + " seats, making it the best option.\nPlease confirm if you'd like the " + userCarChoice + ".");

if (userConfirmResp == true){
    document.getElementById('u_response').innerHTML = "YOUR ORDER: Hello " + userName + " you've chosen the " +  userCarChoice + ". It comes with " + userSeatChoice +  " seats and it will cost $" + userCost + " to hire for " + userHireLength + " day(s).";
} else {
 document.getElementById('u_response').innerHTML = "Your order has been canceled.";
}
}

// Failed validation function 
function validationFailed() {
    if (nameValidation !==true) {
      document.getElementById('u_response').innerHTML = "Please enter a valid name!";
    } else if (ageValidation !==true) {
       document.getElementById('u_response').innerHTML = "Please enter a valid age! You must be between 25-80 years old to hire a vehicle.";
    } else if (seatValidation !==true){
      document.getElementById('u_response').innerHTML = "Sorry, it looks like we don't have a vehicle with that many seats available!";
    } else if(daysValidation !==true){
      document.getElementById('u_response').innerHTML = "Please enter valid number of days you'd like to hire for!"; 
    } else if (insuranceValidation !==true) {
      document.getElementById('u_response').innerHTML = "Invalid! Please make sure you've selected either 'Yes' or 'No' for insurance!"; 
    }
 }
}
/*************************************************************/
//      END OF SHERGILL TRANSPORT APP
/*************************************************************/