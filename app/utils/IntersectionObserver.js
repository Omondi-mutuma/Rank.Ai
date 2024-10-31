// IntersectionObserver.js

document.addEventListener("DOMContentLoaded", () => {
  const options = {
    threshold: 0.2,
  };

  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("fade-in");
      }
    });
  }, options);

  document.querySelectorAll(".animate-on-scroll").forEach((element) => {
    observer.observe(element);
  });
});
