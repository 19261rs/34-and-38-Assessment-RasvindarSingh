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



//Variables
var userFirstName; 
var userLastName; 
var loop = true;



/**********************************************************************************/
// MAIN CODE
/**********************************************************************************/

function start() {
  //HTML user input values 
  userFirstName = document.getElementById("firstName").value; 
  userLastName = document.getElementById("lastName").value;
  
  // Console log HTML values (testing purposes)
  console.log(userFirstName);
  console.log(userLastName);


  alert("Hello " + userFirstName + userLastName);
}
/**********************************************************************************/
// Functions
/**********************************************************************************/

/*************************************************************/
//      END OF SHERGILL TRANSPORT APP
/*************************************************************/