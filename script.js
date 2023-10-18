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
const DRIVERDAILYRATE = 160;

// Arrays
var TRUCKWEIGHTARRAY = [30, 25, 20, 15, 10, 5];
var TRUCKTYPEARRAY = ["MAN TGX", "Freightliner 122SD", "Volvo VNX", "Kenworth W990", "Mack Anthem", "Ford F-550"];

//Variables

var userWeightChoice;
var userAge;
var userHireLength;
var userCost;
var userTruckChoice;
var userInsurance;
var userInsuranceResp;
var userDriverResp;
var userEmail;


//Validation variables (Booleans)
var nameValidation = true;
var ageValidation = true;
var weightValidation = true;
var daysValidation = true;
var insuranceValidation = true;
var driverValidation = true;

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

btn.onclick = function() {
  modal.style.display = "block";
}

span.onclick = function() {
  modal.style.display = "none";
}

window.onclick = function(event) {
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
  if (n > slides.length) { slidePosition = 1 }
  if (n < 1) { slidePosition = slides.length }
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  for (i = 0; i < circles.length; i++) {
    circles[i].className = circles[i].className.replace(" enable", "");
  }
  slides[slidePosition - 1].style.display = "block";
  circles[slidePosition - 1].className += " enable";
}

setTimeout(() => {
  SlideShow(slidePosition);
}, 1000);


//RENTAL FORM CODE STARTS HERE 

/**********************************************************************************/
// MAIN CODE - GLOBAL VARIABLES DECLARED AT TOP OF script.js
/**********************************************************************************/

function start() {

  //HTML user input values 
  userFirstName = document.getElementById("firstName").value;
  userLastName = document.getElementById("lastName").value;
  userAge = document.getElementById("userAge").value;
  userWeightChoice = document.getElementById("weightLoad").value;
  userEmail = document.getElementById("userEmail").value;
  userDriverResp = document.getElementById("driver").value;
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
  console.log(userLastName);
  console.log(userAge);
  console.log(userWeightChoice);
  console.log(userHireLength);
  console.log(userInsuranceResp);

  // Name validation 
  const regExpName = /^[a-zA-Z]+$/;
  var userFirstName = userFirstName.trim();
  var firstNameInput = document.getElementById("firstName");
  if (regExpName.test(userFirstName) == true) {
    // If name input is valid
    var nameValidation = true;
    firstNameInput.classList.remove("error-border");
  } else {
    var nameValidation = false;
    firstNameInput.classList.add("error-border");
  }

  // Last Name validation 
  const regExpLastName = /^[a-zA-Z]+$/;
  var userLastName = userLastName.trim();
  var lastNameInput = document.getElementById("lastName");
  if (regExpLastName.test(userLastName) == true) {
    // If name input is valid
    var lastNameValidation = true;
    lastNameInput.classList.remove("error-border");
  } else {
    var lastNameValidation = false;
    lastNameInput.classList.add("error-border");
  }


  //Age validation 
  const regExpAge = /^[0-9]+$/;
  var userAge = userAge.trim();
  var userAgeInput = document.getElementById("userAge");
  console.log(regExpAge.test(userAge))
  if (regExpAge.test(userAge) == true && userAge >= MINAGE && userAge <= MAXAGE) {
    // If age input is valid
    var ageValidation = true;
    userAgeInput.classList.remove("error-border");
  } else {
    var ageValidation = false;
    userAgeInput.classList.add("error-border");
  }


  // email validation
var userEmailInput = document.getElementById("userEmail");
    userEmail = userEmail.trim();

  //checking email isnt empty string
  if (userEmail !=='') {
    var emailValidation = true;
    userEmailInput.classList.remove("error-border");
  } else {
    var emailValidation = false;
    userEmailInput.classList.add("error-border");
    
  }
  
  //Hire Length validation 
  const regExpHire = /^[0-9]+$/;
  // var userHireLength = userHireLength.trim();
  console.log(regExpHire.test(userHireLength))
  if (regExpHire.test(userHireLength) == true && userHireLength > MINRENTDAYS && userHireLength <= MAXRENTDAYS) {
    // If days input is valid
    var daysValidation = true;
  } else {
    var daysValidation = false;
  }

  //Weight Selection validation
  const regExpWeight = /^[0-9]+$/;
  var userWeightInput = document.getElementById("weightLoad");
  // var userWeightChoice = userWeightChoice.trim();
  console.log(regExpWeight.test(userWeightChoice))
  if (regExpWeight.test(userWeightChoice) == true && userWeightChoice >= MINWEIGHT && userWeightChoice <= MAXWEIGHT) {
    // If seats input is valid
    weightValidation = true;
    userWeightInput.classList.remove("error-border");
  } else {
    weightValidation = false;
    userWeightInput.classList.add("error-border");
  }

  // Insurance validation
  const regExpInsure = /^(?:Yes\b|No\b)+$/i;
  var userInsuranceResp = userInsuranceResp.trim();
  var userInsuranceInput = document.getElementById("insurance");

  console.log(regExpInsure.test(userInsuranceResp))
  if (regExpInsure.test(userInsuranceResp) == true) {
    // if insurance input is valid
    var insuranceValidation = true;
    userInsuranceInput.classList.remove("error-border");
  } else {
    var insuranceValidation = false;
    userInsuranceInput.classList.add("error-border");

  }

  //Driver validation
  // Insurance validation
  const regExpDriver = /^(?:Yes\b|No\b)+$/i;
  var userDriverResp = userDriverResp.trim();
  var userDriverInput = document.getElementById("driver");

  console.log(regExpDriver.test(userDriverResp))
  if (regExpDriver.test(userDriverResp) == true) {
    // if insurance input is valid
    var driverValidation = true;
    userDriverInput.classList.remove("error-border");
  } else {
    var driverValidation = false;
    userDriverInput.classList.add("error-border");

  }

  // Checking validation and continuing if true, else invalid message
  if (nameValidation == true && lastNameValidation && ageValidation == true && daysValidation == true && weightValidation == true && insuranceValidation == true) {
    truckSelection();
  } else {
    validationFailed();
  }
  /**********************************************************************************/
  // Functions
  /**********************************************************************************/

  // Matching vehicle based off number of car seats
  function truckSelection() {

    var closestWeight = TRUCKWEIGHTARRAY.reduce(function(prev, curr) {
      return Math.abs(curr - userWeightChoice) < Math.abs(prev - userWeightChoice) ? curr : prev;
    });

    for (i = 0; i < TRUCKWEIGHTARRAY.length; i++) {
      if (closestWeight >= TRUCKWEIGHTARRAY[i]) {
        userTruckChoice = TRUCKTYPEARRAY[i]
        userWeightChoice = TRUCKWEIGHTARRAY[i]
        console.log(userTruckChoice);
        console.log(userWeightChoice);
        break;
      }
    }

    //Cost Calculation 
    if (userInsuranceResp == 'Yes' || userInsuranceResp == 'yes' || userInsuranceResp == 'YES') {
      //calculate insurance
      userInsurance = Number(userHireLength * INSURANCERATE);
      //final cost including insurance
      userCost = Number(userHireLength * userWeightChoice * FLATRATE + userInsurance);
      console.log(userCost);
    } else if (userInsuranceResp == 'Yes' || userInsuranceResp == 'yes' || userInsuranceResp == 'YES' && userDriverResp == 'Yes') {
      // User selects yes for insurance and driver
      userInsurance = Number(userHireLength * INSURANCERATE);
      //final cost including driver pay AND insurance
      userCost = Number(userHireLength * userWeightChoice * FLATRATE + userInsurance + (DRIVERDAILYRATE * userHireLength));
      console.log(userCost);
    } else if (userInsuranceResp == 'No' && userDriverResp == 'Yes') {
      //USER SELECTS YES FOR DRIVER NO FOR INSURANCE
      userCost = Number(userHireLength * userWeightChoice * FLATRATE + (DRIVERDAILYRATE * userHireLength));

    } else {
      //NO TO INSURANCE & DRIVER
      userCost = Number(userHireLength * userWeightChoice * FLATRATE);
      console.log(userCost);
    }

    // Recommendation prompt & Final order message
    //local variable - doesn't need to be called universely at the top.
    var userConfirmResp = confirm("We recommend that the " + userTruckChoice + " is the best vehicle for you! It can haul  " + userWeightChoice + " tonnes, making it the best option.\nPlease confirm if you'd like the " + userTruckChoice + ".");

    if (userConfirmResp == true) {
      showMessageRentalModal("YOUR ORDER: Hello " + userFirstName + " you've chosen the " + userTruckChoice + ". It can haul " + userWeightChoice + " tonnes and it will cost $" + userCost + " to hire for " + userHireLength + " day(s). You will pick it up on " + pickupDate + " and drop it off on " + dropoffDate + ". More details will be sent to your email address " + userEmail);
    } else {
      showMessageRentalModal("Your order has been canceled.");
    }
  }

  // Failed validation function 
  function validationFailed() {
    if (nameValidation !== true) {
      showMessageRentalModal("Please enter a valid name!");
    } else if (lastNameValidation !== true) {
      showMessageRentalModal("Please enter a valid last name!");

    } else if (ageValidation !== true) {
      showMessageRentalModal("Please enter a valid age! You must be between 25-80 years old to hire a vehicle.");
    } else if (emailValidation !==true) {
      showMessageRentalModal("Please enter a valid email!");
      
    }else if (weightValidation !== true) {

      showMessageRentalModal("Sorry, it looks like we don't have a vehicle that can haul that weight available!");

    } else if (daysValidation !== true) {
      showMessageRentalModal("Please enter valid number of days you'd like to hire for!");
    } else if (insuranceValidation !== true) {
      showMessageRentalModal("Invalid! Please make sure you've selected either 'Yes' or 'No' for insurance!");
    } else if (driverValidation !== true) {
      showMessageRentalModal("Invalid! Please make sure you've selected either 'Yes' or 'No' for driver!");
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
function closeRentalModal() {
  var rentalModal = document.getElementById("rentalModal");
  rentalModal.style.display = "none";
}

//display message 
function showMessageRentalModal(message) {
  var modalMessage = document.getElementById("modalMessage");
  modalMessage.textContent = message;
  openRentalModal();
}