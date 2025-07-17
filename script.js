document.addEventListener("DOMContentLoaded", function () {
  const dropdowns = document.querySelectorAll(".dropdown");

  dropdowns.forEach((drop) => {
    drop.addEventListener("click", function (e) {
      e.preventDefault();
      const menu = this.querySelector(".dropdown-menu");
      if (menu) {
        menu.classList.toggle("show");
      }
    });
  });

  const sectionLinks = document.querySelectorAll("[data-section]");
  const sections = document.querySelectorAll(".page-section");

  sectionLinks.forEach((link) => {
    link.addEventListener("click", function (e) {
      e.preventDefault();
      const targetId = this.getAttribute("data-section");

      // Hide all sections
      sections.forEach((sec) => sec.classList.add("hidden"));

      // Show selected one
      const targetSection = document.getElementById(targetId);
      if (targetSection) {
        targetSection.classList.remove("hidden");
      }
    });
  });

  // Close dropdown if clicked outside
  document.addEventListener("click", function (e) {
    dropdowns.forEach((drop) => {
      const menu = drop.querySelector(".dropdown-menu");
      if (menu && !drop.contains(e.target)) {
        menu.classList.remove("show");
      }
    });
  });
});
