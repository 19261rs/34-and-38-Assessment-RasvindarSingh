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




var userFirstName; 







/**********************************************************************************/
// MAIN CODE
/**********************************************************************************/

function start() {

// Delcaring & assigning variables 
var TRUCKWEIGHTARRAY = [8,7,5,4,2,1];
var TRUCKTYPEARRAY = ["Estima", "Outlander", "Falcon", "Mini", "MX5", "BAC Mono"];
// var userLastName; 
var userWeightChoice;
var loop = true;
var userHireLength 
var userCost
const FLATRATE = 100;

// Main code
alert("Welcome to raz's Rentals!");

userFirstName = prompt("What is your name?");
while (loop) {
  if (userFirstName === null) {
    loop = false;

  }
  else if (userFirstName == "" || userFirstName == " " || !isNaN(Number(userFirstName))) {
    userFirstName = prompt("Invalid! Enter a valid username please");
  }
  else {
    break;

  }
}
userAge = prompt("How old are you?", 25);
userWeightChoice = prompt("How much does your load weigh " + userFirstName + "?");

for (i = 0; i < TRUCKWEIGHTARRAY.length; i++) {
  if (userWeightChoice >= TRUCKWEIGHTARRAY[i]) {
    alert("Hello " + userFirstName + " The " + TRUCKTYPEARRAY[i] + " looks like the best option for you!");
    break;
  }
}

}
/**********************************************************************************/
// Functions
/**********************************************************************************/

/*************************************************************/
//      END OF SHERGILL TRANSPORT APP
/*************************************************************/