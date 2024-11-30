const toggle = document.querySelector(".menu-toggle");
const navlink = document.querySelector(".nav-link");

toggle.addEventListener("click", () => {
    navlink.classList.toggle('active'); 
    toggle.classList.toggle('open');  
});

// Function to show a section and hide all others
// function showSection(sectionId) {
//   const sections = document.querySelectorAll('.section');
  
//   sections.forEach(section => {
//       section.style.display = 'none';
//   });
  
//   // Show the selected section
//   const sectionToShow = document.getElementById(sectionId);
//   if (sectionToShow) {
//       sectionToShow.style.display = 'block';
//   }
// }

// document.addEventListener("DOMContentLoaded", () => {
//   showSection('home');  // Show the Home section by default when the page loads
// });


