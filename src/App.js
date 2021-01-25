import React, { useEffect } from "react";
import Navbar from "./Navbar";
import Jumbotron from "./Jumbotron";
import About from "./About";
import Skills from "./Skills";
import FixedBg from "./FixedBg";
import Projects from "./Projects";

// import Carousel from "./Carousel";
//
// import Experience from "./Experience";
//
//
// import Footer from "./Footer";

function App() {
  useEffect(() => {
    const script = document.createElement("script");

    script.src = "Script.js";
    script.async = true;

    document.body.appendChild(script);

    return () => {
      document.body.removeChild(script);
    };
  });
  return (
    <>
      <Navbar />
      <Jumbotron />
      <About />
      <Skills />
      <FixedBg />
      <Projects />
    </>
  );
}

export default App;

{
  /* <script>
        $(document).ready(function () {
  // Add smooth scrolling to all links in navbar + footer link
  $(".navbar a, footer a[href='#myPage']").on("click", function (event) {
    // Make sure this.hash has a value before overriding default behavior
    if (this.hash !== "") {
      // Prevent default anchor click behavior
      event.preventDefault();

      // Store hash
      var hash = this.hash;

      // Using jQuery's animate() method to add smooth page scroll
      // The optional number (900) specifies the number of milliseconds it takes to scroll to the specified area
      $("html, body").animate(
        {
          scrollTop: $(hash).offset().top,
        },
        900,
        function () {
          // Add hash (#) to URL when done scrolling (default click behavior)
          window.location.hash = hash;
        }
      );
    } // End if
  });

  $(window).scroll(function () {
    $(".slideanim").each(function () {
      var pos = $(this).offset().top;

      var winTop = $(window).scrollTop();
      if (pos < winTop + 600) {
        $(this).addClass("slide");
      }
    });
  });
});

</script> */
}
