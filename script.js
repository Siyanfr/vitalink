// script.js
document.addEventListener("DOMContentLoaded", () => {
  // Animate header
  const header = document.querySelector("nav.navbar");
  if (header) {
    header.animate(
      [
        { opacity: 0, transform: "translateY(-50px)" },
        { opacity: 1, transform: "translateY(0)" }
      ],
      {
        duration: 800,
        easing: "ease-out",
        fill: "forwards"
      }
    );
  }
});