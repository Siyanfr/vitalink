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

  // Animate service/explore cards individually
  const cardObserver = new IntersectionObserver(
    entries => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.animate(
            [
              { opacity: 0, transform: "scale(0.9)" },
              { opacity: 1, transform: "scale(1)" }
            ],
            {
              duration: 800,
              easing: "ease-out",
              fill: "forwards"
            }
          );
          cardObserver.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.2 }
  );

  document
    .querySelectorAll(".service-card, .explore-card")
    .forEach(card => cardObserver.observe(card));
});


// =============================
  // HEALTH SERVICES CARDS
  // =============================
  const serviceCards = document.querySelectorAll(".healthservice");
  const serviceObserver = new IntersectionObserver(
    entries => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          serviceCards.forEach((card, i) => {
            setTimeout(() => {
              card.animate(
                [
                  { opacity: 0, transform: "scale(0.9)" },
                  { opacity: 1, transform: "scale(1)" }
                ],
                {
                  duration: 800,
                  easing: "ease-out",
                  fill: "forwards"
                }
              );
            }, i * 150); 
          });
          serviceObserver.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.2 }
  );
  if (serviceCards.length) serviceObserver.observe(serviceCards[0]);

  // =============================
  // PROVIDERS CARDS
  // =============================
  const providerCards = document.querySelectorAll(".provider-card");
  const providerObserver = new IntersectionObserver(
    entries => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          providerCards.forEach((card, i) => {
            setTimeout(() => {
              card.animate(
                [
                  { opacity: 0, transform: "translateY(30px)" },
                  { opacity: 1, transform: "translateY(0)" }
                ],
                {
                  duration: 700,
                  easing: "ease-out",
                  fill: "forwards"
                }
              );
            }, i * 200);
          });
          providerObserver.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.2 }
  );
  if (providerCards.length) providerObserver.observe(providerCards[0]);

  // =============================
// HEALTH TOPICS CARDS (.topic-card)
// =============================
const topicCards = document.querySelectorAll(".topic-card");
if (topicCards.length) {
    const topicCardObserver = new IntersectionObserver(
        entries => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    topicCards.forEach((card, i) => {
                        // Use a short timeout to stagger the animation for each card
                        setTimeout(() => {
                            card.animate(
                                [
                                    // Pop-in keyframes (fade in and slight scale up)
                                    { opacity: 0, transform: "scale(0.95)" },
                                    { opacity: 1, transform: "scale(1)" }
                                ],
                                {
                                    duration: 700,
                                    easing: "ease-out",
                                    fill: "forwards"
                                }
                            );
                        }, i * 150); 
                    });
                    
                    topicCardObserver.unobserve(entry.target);
                }
            });
        },
        { threshold: 0.2 }
    );
    topicCardObserver.observe(topicCards[0]);
}

// =============================
// OUR VISION SECTION ANIMATION
// =============================
const visionSection = document.querySelector(".our-vision");
if (visionSection) {
    const visionObserver = new IntersectionObserver(
        entries => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    const content = visionSection.querySelector(".vision-content");
                    if (content) {
                         content.animate(
                            [
                                { opacity: 0, transform: "translateY(40px)" },
                                { opacity: 1, transform: "translateY(0)" }
                            ],
                            {
                                duration: 800,
                                easing: "ease-out",
                                fill: "forwards"
                            }
                        );
                    }
                    visionObserver.unobserve(entry.target);
                }
            });
        },
        { threshold: 0.2 }
    );
    visionObserver.observe(visionSection);
}
  