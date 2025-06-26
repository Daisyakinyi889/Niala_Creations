// Scroll-to-top logic
const scrollBtn = document.getElementById("scrollTopBtn");
const navToggle = document.getElementById("nav-toggle");
const navLinks = document.getElementById("nav-links");


if (scrollBtn) {
  window.onscroll = () => {
    scrollBtn.style.display = (window.scrollY > 200) ? "block" : "none";
  };

  scrollBtn.onclick = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };
}


if (navToggle && navLinks) {
  navToggle.addEventListener("click", () => {
    navLinks.classList.toggle("show");
  });
}
