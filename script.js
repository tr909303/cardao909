// Select the navigation links
const navLinks = document.querySelectorAll("nav a");

// Add an event listener to each link
navLinks.forEach(link => {
  link.addEventListener("click", e => {
    e.preventDefault();
    // Get the id of the section to show
    const sectionId = e.target.getAttribute("href");
    // Get the section
    const section = document.querySelector(sectionId);
    // Show the section
    section.style.display = "block";
    // Hide all other sections
    const sections = document.querySelectorAll("main > *:not(#" + sectionId.slice(1) + ")");
    sections.forEach(s => {
      s.style.display = "none";
    });
  });
});
