var slideIndex = 0;
showSlides();

function showSlides() {
  var i;
  var slides = document.getElementsByClassName("mySlides");
  var dots = document.getElementsByClassName("dot");
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  slideIndex++;
  if (slideIndex > slides.length) {
    slideIndex = 1;
  }
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex - 1].style.display = "block";
  dots[slideIndex - 1].className += " active";
  setTimeout(showSlides, 3000); // Change image every 2 seconds
}
// // <!DOCTYPE html>
// // <html>

// // <head>
// //     <title>SCHOOL</title>
// //     <meta name="viewport" content="width=device-width, initial-scale=1.0">
// //     <link rel="stylesheet" href="style.css">
// //     <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css">
// // </head>

// // <body>
// //     <div class="logo">
// //         <h3>Oceanic schools</h3>
// //         <img src="logo.webp" width="150" height="180">
// //         <ul>

// //             <li><a href="home.html">Home</a></li>
// //             <li><a href="kindergarten.html">Kindergarten</a></li>
// //             <li><a href="primary.html">Primary</a></li>
// //             <li><a href="highchool.html">Highchool</a></li>
// //             <form class="example" action="/action_page.php" style="margin: 5px;max-width:150px">
// //                 <input type="text" placeholder="Search.." name="search2">
// //                 <button type="submit"><i class="fa fa-search"></i></button>
// //             </form>

// //         </ul>
// //         <br>
// //     </div>

//     <div class="slideshow-container">

//         <div class="mySlides fade">
//             <div class="numbertext">1 / 3</div>
//             <img src="kindergarten1.jpg" width="2000" height="400">
//             <div class="text">Caption Text</div>
//         </div>

//         <div class="mySlides fade">
//             <div class="numbertext">2 / 3</div>
//             <img src="kindergarten2.jpg" width="2000" height="400">
//             <div class="text">Caption Two</div>
//         </div>

//         <div class="mySlides fade">
//             <div class="numbertext">3 / 3</div>
//             <img src="kindergarten3.jpg" width="2000" height="400">
//             <div class="text">Caption Three</div>
//         </div>

//     </div>
//     <br>

//     <div style="text-align:center">
//         <span class="dot"></span>
//         <span class="dot"></span>
//         <span class="dot"></span>
//     </div>

//     <br>

//     <div class="row">
//         <div class="column" style="background-color:rgb(6, 4, 37);">
//             <h2>Co-curricular activities</h2>
//             <p></p>
//         </div>
//         <div class="column" style="background-color:rgb(13, 10, 49)">
//             <h2>Statement</h2>
//             <h4>Mission</h4>
//             <p>walk in the light</p>
//             <h4>Vision</h4>
//             <p>To produce wholesome students</p>
//         </div>
//         <div class="column" style="background-color:rgb(24, 22, 61)">
//             <h2>Achievements</h2>
//             <p>Some text..</p>
//         </div>
//     </div>

// </body>
// <script src="main.js">
// </script>

// </html>

//     ul {
//         list-style-type: none;
//         overflow: none;
//         background-color: beige;
//         position: absolute;
//         top: 8px;
//         left: 700px;
//         right: 0px
//     }

//     li {
//         float: left;
//     }

//     li a {
//         display: block;
//         color: black;
//         text-align: center;
//         padding: 14px 16px;
//         text-decoration: solid;
//     }

//     @import url('https://fonts.googleapis.com/css2?family=Roboto:ital,wght@0,100;0,300;0,400;1,300;1,400&display=swap');
//     li a.active {
//         color: white;
//         background-color: maroon;
//     }

//     * {
//         box-sizing: border-box;
//     }
//     /* Style the search field */

//     form.example input[type=text] {
//         padding: 10px;
//         font-size: 17px;
//         border: 1px solid grey;
//         float: left;
//         width: 50%;
//         background: #f1f1f1;
//     }
//     /* Style the submit button */

//     form.example button {
//         float: left;
//         width: 30%;
//         padding: 10px;
//         background: rgb(13, 10, 49);
//         color: white;
//         font-size: 17px;
//         border: 1px solid grey;
//         border-left: none;
//         /* Prevent double borders */
//         cursor: pointer;
//     }

//     form.example button:hover {
//         background: #0b7dda;
//     }
//     /* Clear floats */

//     form.example::after {
//         content: "";
//         clear: both;
//         display: table;
//     }

//     h1 {
//         font-family: Trebuchet MS;
//         font-size: 20px;
//         color: black;
//         text-align: left;
//         top: 100px;
//         bottom: 100px;
//     }

//     .logo {
//         margin: 0px;
//         float: left;
//     }

//     * {
//         box-sizing: border-box;
//     }

//     body {
//         font-family: Verdana, sans-serif;
//     }

//     .mySlides {
//         display: none;
//     }

//     img {
//         vertical-align: auto;
//     }
//     /* Slideshow container */

//     .slideshow-container {
//         max-width: 10000px;
//         position: relative;
//         margin-top: 10px;
//     }
//     /* Caption text */

//     .text {
//         color: #f2f2f2;
//         font-size: 15px;
//         padding: 8px 12px;
//         position: absolute;
//         bottom: 8px;
//         width: 100%;
//         text-align: center;
//     }
//     /* Number text (1/3 etc) */

//     .numbertext {
//         color: #f2f2f2;
//         font-size: 12px;
//         padding: 8px 12px;
//         position: absolute;
//         top: 0;
//     }
//     /* The dots/bullets/indicators */

//     .dot {
//         height: 15px;
//         width: 15px;
//         margin: 0 2px;
//         background-color: #bbb;
//         border-radius: 50%;
//         display: inline-block;
//         transition: background-color 0.6s ease;
//     }

//     .active {
//         background-color: #717171;
//     }
//     /* Fading animation */

//     .fade {
//         -webkit-animation-name: fade;
//         -webkit-animation-duration: 1.5s;
//         animation-name: fade;
//         animation-duration: 1.5s;
//     }

//     @-webkit-keyframes fade {
//         from {
//             opacity: .4
//         }
//         to {
//             opacity: 1
//         }
//     }

//     @keyframes fade {
//         from {
//             opacity: .4
//         }
//         to {
//             opacity: 1
//         }
//     }
//     /* On smaller screens, decrease text size */

//     @media only screen and (max-width: 300px) {
//         .text {
//             font-size: 11px
//         }
//     }

//     * {
//         box-sizing: border-box;
//     }
//     /* Create three equal columns that floats next to each other */

//     .column {
//         float: left;
//         width: 33.33%;
//         padding: 10px;
//         height: 300px;
//         /* Should be removed. Only for demonstration */
//     }
//     /* Clear floats after the columns */

//     .row:after {
//         content: "";
//         display: table;
//         clear: both;
//     }

//     h4 {
//         color: white;
//     }

//     h2 {
//         color: white;
//     }

//     p {
//         color: white;
//     }
