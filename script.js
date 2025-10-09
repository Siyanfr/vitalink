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

  // Animate hero background
  const heroSection = document.querySelector(".hero");
  if (heroSection) {
    heroSection.animate(
      [{ opacity: 0 }, { opacity: 1 }],
      {
        duration: 2000,
        easing: "ease-out",
        fill: "forwards"
      }
    );
  }

  // Animate hero heading
  const heroHeading = document.querySelector(".hero-text h1");
  if (heroHeading) {
    heroHeading.animate(
      [
        { opacity: 0, transform: "translateY(50px)" },
        { opacity: 1, transform: "translateY(0)" }
      ],
      {
        duration: 1000,
        easing: "ease-out",
        fill: "forwards"
      }
    );
  }

 // Animate hero background
  const heroSection = document.querySelector(".hero");
  if (heroSection) {
    heroSection.animate(
      [{ opacity: 0 }, { opacity: 1 }],
      {
        duration: 2000,
        easing: "ease-out",
        fill: "forwards"
      }
    );
  }

  // Animate hero heading
  const heroHeading = document.querySelector(".hero-text h1");
  if (heroHeading) {
    heroHeading.animate(
      [
        { opacity: 0, transform: "translateY(50px)" },
        { opacity: 1, transform: "translateY(0)" }
      ],
      {
        duration: 1000,
        easing: "ease-out",
        fill: "forwards"
      }
    );
  }

  // Animate hero paragraph
  const heroParagraph = document.querySelector(".hero-text p");
  if (heroParagraph) {
    heroParagraph.animate(
      [
        { opacity: 0, transform: "translateY(30px)" },
        { opacity: 1, transform: "translateY(0)" }
      ],
      {
        duration: 1200,
        delay: 300,
        easing: "ease-out",
        fill: "forwards"
      }
    );
  }
});