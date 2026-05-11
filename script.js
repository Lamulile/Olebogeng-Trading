const menuToggle = document.getElementById("menuToggle");
const navLinks = document.getElementById("navLinks");
const navItems = document.querySelectorAll(".nav-links a");
const revealElements = document.querySelectorAll(".reveal");

menuToggle.addEventListener("click", () => {
  navLinks.classList.toggle("show");
});

navItems.forEach((item) => {
  item.addEventListener("click", () => {
    navLinks.classList.remove("show");
  });
});

window.addEventListener("scroll", () => {
  const scrollPosition = window.scrollY + 120;

  navItems.forEach((link) => {
    const section = document.querySelector(link.getAttribute("href"));

    if (!section) return;

    if (
      section.offsetTop <= scrollPosition &&
      section.offsetTop + section.offsetHeight > scrollPosition
    ) {
      navItems.forEach((item) => item.classList.remove("active"));
      link.classList.add("active");
    }
  });
});

const revealOnScroll = () => {
  const windowHeight = window.innerHeight;

  revealElements.forEach((element) => {
    const elementTop = element.getBoundingClientRect().top;

    if (elementTop < windowHeight - 80) {
      element.classList.add("visible");
    }
  });
};

window.addEventListener("scroll", revealOnScroll);
window.addEventListener("load", revealOnScroll);

const quoteForm = document.querySelector(".quote-form");

quoteForm.addEventListener("submit", (event) => {
  event.preventDefault();

  alert("Thank you. Your enquiry has been received. Olebogeng Trading Construction will contact you shortly.");

  quoteForm.reset();
});
