// About page fade-in on scroll
const aboutSections = document.querySelectorAll(".about-section");

if (aboutSections.length > 0) {
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add("visible");
      }
    });
  });

  aboutSections.forEach(section => observer.observe(section));
}
