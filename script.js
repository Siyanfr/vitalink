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
  
  // Animate buttons
  const buttons = document.querySelectorAll(".hero-buttons button");
  buttons.forEach((btn, i) => {
    btn.animate(
      [
        { opacity: 0, transform: "scale(0.8)" },
        { opacity: 1, transform: "scale(1)" }
      ],
      {
        duration: 800,
        delay: 500 + i * 200,
        easing: "ease-out",
        fill: "forwards"
      }
    );
  });

  // Animate stats with counting numbers
  const counters = document.querySelectorAll(".stat-item h2");
  counters.forEach(counter => {
    const span = counter.querySelector("span"); 
    const target = +counter.textContent.replace(/\D/g, ""); 
    counter.innerHTML = `0 ${span ? span.outerHTML : ""}`;

    const updateCount = () => {
      const current = +counter.textContent.replace(/\D/g, "");
      const increment = Math.ceil(target / 200);

      if (current < target) {
        counter.innerHTML = `${current + increment} ${span ? span.outerHTML : ""}`;
        setTimeout(updateCount, 20);
      } else {
        counter.innerHTML = `${target} ${span ? span.outerHTML : ""}`;
      }
    };

    updateCount();
  });

  // =============================
  // Animate sections on scroll
  // =============================
  const observer = new IntersectionObserver(
    entries => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.animate(
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
          observer.unobserve(entry.target); // animate once
        }
      });
    },
    { threshold: 0.2 }
  );

  // Observe sections
  document.querySelectorAll(
    ".our-mission, .featured-services, .explore-vitalink, .about-section, footer"
  ).forEach(section => observer.observe(section));


  
});