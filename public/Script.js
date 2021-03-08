// $(document).ready(function () {
//   // Add smooth scrolling to all links in navbar + footer link

//   $(window).scroll(function () {
//     $(".slideanim").each(function () {
//       var pos = $(this).offset().top;

//       var winTop = $(window).scrollTop();
//       if (pos < winTop + 600) {
//         $(this).addClass("slide");
//       }
//     });
//   });
// });
// $(".navbar a, footer a[href='#myPage']").on("click", function (event) {
//   // Make sure this.hash has a value before overriding default behavior
//   if (this.hash !== "") {
//     // Prevent default anchor click behavior
//     event.preventDefault();

//     // Store hash
//     var hash = this.hash;

//     // Using jQuery's animate() method to add smooth page scroll
//     // The optional number (900) specifies the number of milliseconds it takes to scroll to the specified area
//     $("html, body").animate(
//       {
//         scrollTop: $(hash).offset().top,
//       },
//       900,
//       function () {
//         // Add hash (#) to URL when done scrolling (default click behavior)
//         window.location.hash = hash;
//       }
//     );
//   } // End if
// });
// $(".navbar-nav>li>a").on("click", function () {
//   $(".navbar-collapse").collapse("hide");
// });

/*!
 * Start Bootstrap - Creative v6.0.4 (https://startbootstrap.com/theme/creative)
 * Copyright 2013-2020 Start Bootstrap
 * Licensed under MIT (https://github.com/StartBootstrap/startbootstrap-creative/blob/master/LICENSE)
 */
(function ($) {
  "use strict"; // Start of use strict

  // Smooth scrolling using jQuery easing
  $('a.js-scroll-trigger[href*="#"]:not([href="#"])').click(function () {
    if (
      location.pathname.replace(/^\//, "") ==
        this.pathname.replace(/^\//, "") &&
      location.hostname == this.hostname
    ) {
      var target = $(this.hash);
      target = target.length ? target : $("[name=" + this.hash.slice(1) + "]");
      if (target.length) {
        $("html, body").animate(
          {
            scrollTop: target.offset().top - 72,
          },
          1000,
          "easeInOutExpo"
        );
        return false;
      }
    }
  });

  // Closes responsive menu when a scroll trigger link is clicked
  $(".js-scroll-trigger").click(function () {
    $(".navbar-collapse").collapse("hide");
  });

  // Activate scrollspy to add active class to navbar items on scroll
  $("body").scrollspy({
    target: "#mainNav",
    offset: 75,
  });

  // Collapse Navbar
  var navbarCollapse = function () {
    if ($("#mainNav").offset().top > 100) {
      $("#mainNav").addClass("navbar-scrolled");
    } else {
      $("#mainNav").removeClass("navbar-scrolled");
    }
  };
  // Collapse now if page is not at top
  navbarCollapse();
  // Collapse the navbar when page is scrolled
  $(window).scroll(navbarCollapse);

  // Magnific popup calls
  $("#portfolio").magnificPopup({
    delegate: "a",
    type: "image",
    tLoading: "Loading image #%curr%...",
    mainClass: "mfp-img-mobile",
    gallery: {
      enabled: true,
      navigateByImgClick: true,
      preload: [0, 1],
    },
    image: {
      tError: '<a href="%url%">The image #%curr%</a> could not be loaded.',
    },
  });
})(jQuery); // End of use strict
