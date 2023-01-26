// Get all the navigation links
const navLinks = document.querySelectorAll("nav a");

// Add event listeners to the navigation links
navLinks.forEach(link => {
  link.addEventListener("click", e => {
    e.preventDefault();
    // Get the id of the section to show
    const sectionId = link.getAttribute("href");
    // Show the section
    document.querySelector(sectionId).style.display = "block";
    // Hide all other sections
    const sections = document.querySelectorAll("main > *:not(" + sectionId + ")");
    sections.forEach(s => {
      s.style.display = "none";
    });
  });
});
