const menuToggle = document.getElementById("menu-toggle");
const navMenu = document.getElementById("nav-menu");
const navLinks = document.querySelectorAll(".nav-link");

menuToggle.addEventListener("click", () => {
    navMenu.classList.toggle("show");

    if (navMenu.classList.contains("show")) {
        menuToggle.textContent = "✕";
    } else {
        menuToggle.textContent = "☰";
    }
});

navLinks.forEach((link) => {

    link.addEventListener("click", () => {

        navMenu.classList.remove("show");

        menuToggle.textContent = "☰";

    });

});

// =========================
// ACTIVE NAVIGATION
// =========================

const sections = document.querySelectorAll("section");

window.addEventListener("scroll", () => {

    let current = "";

    sections.forEach((section) => {

        const sectionTop = section.offsetTop - 120;

        if (window.scrollY >= sectionTop) {
            current = section.getAttribute("id");
        }

    });

    navLinks.forEach((link) => {

        link.classList.remove("active");

        if (link.getAttribute("href") === `#${current}`) {
            link.classList.add("active");
        }

    });

});

const revealElements = document.querySelectorAll(
    ".hero-text, .hero-image, .about-text, .about-image, .menu-card, .why-card, .contact-box"
);

const revealObserver = new IntersectionObserver(
    (entries, observer) => {

        entries.forEach((entry) => {

            if (entry.isIntersecting) {

                entry.target.classList.add("show");

                observer.unobserve(entry.target);

            }

        });

    },
    {
        threshold: 0.15
    }
);


revealElements.forEach((element) => {

    element.classList.add("reveal");

    revealObserver.observe(element);

});

// =========================
// ACTIVE ANIMATION
// =========================
const element = document.querySelectorAll(".contact-box,.menu-card,.why-card,.hero-text,.image-card,.about-grid,.about-image,.about-text,.section-heading");

  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("active");
      }
    });
  }, {
    threshold: 0.2
  });

  element.forEach((element) => {
    observer.observe(element);
  });
