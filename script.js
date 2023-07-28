// Smooth scrolling for navigation links
document.addEventListener("DOMContentLoaded", function () {
    const navLinks = document.querySelectorAll("nav a");
  
    for (const link of navLinks) {
      link.addEventListener("click", function (event) {
        event.preventDefault();
        const targetSection = document.querySelector(link.getAttribute("href"));
        const offsetTop = targetSection.getBoundingClientRect().top + window.pageYOffset;
        
        window.scroll({
          top: offsetTop,
          behavior: "smooth"
        });
      });
    }
  });
// JavaScript for hamburger menu toggle
document.addEventListener("DOMContentLoaded", function () {
    const hamburger = document.querySelector(".hamburger-menu");
    const navLinks = document.querySelector("nav ul");
  
    hamburger.addEventListener("click", function () {
      navLinks.classList.toggle("show");
    });
  });
  

  