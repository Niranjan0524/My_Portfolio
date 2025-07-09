const cursor = document.querySelector(".cursor");
document.addEventListener("mousemove", (e) => {
  cursor.style.left = `${e.clientX}px`;
  cursor.style.top = `${e.clientY}px`;
});

document.addEventListener("mousemove", (e) => {
  const trail = document.createElement("div");
  trail.classList.add("trail");
  document.body.appendChild(trail);

  trail.style.left = `${e.clientX}px`;
  trail.style.top = `${e.clientY}px`;

  setTimeout(() => {
    trail.style.opacity = "0";
    setTimeout(() => {
      trail.remove();
    }, 300);
  }, 100);
});


/*===== MENU SHOW =====*/
const showMenu = (toggleId, navId) => {
  const toggle = document.getElementById(toggleId),
    nav = document.getElementById(navId);

  if (toggle && nav) {
    toggle.addEventListener("click", () => {
      nav.classList.toggle("show");
    });
  }
};
showMenu("nav-toggle", "nav-menu");

/*==================== REMOVE MENU MOBILE ====================*/
const navLink = document.querySelectorAll(".nav__link");

function linkAction() {
  const navMenu = document.getElementById("nav-menu");
  // When we click on each nav__link, we remove the show-menu class
  navMenu.classList.remove("show");
}
navLink.forEach((n) => n.addEventListener("click", linkAction));

/*==================== SCROLL SECTIONS ACTIVE LINK ====================*/
const sections = document.querySelectorAll("section[id]");

const scrollActive = () => {
  const scrollDown = window.scrollY;

  sections.forEach((current) => {
    const sectionHeight = current.offsetHeight,
      sectionTop = current.offsetTop - 58,
      sectionId = current.getAttribute("id"),
      sectionsClass = document.querySelector(
        ".nav__menu a[href*=" + sectionId + "]"
      );

    if (scrollDown > sectionTop && scrollDown <= sectionTop + sectionHeight) {
      sectionsClass.classList.add("active-link");
    } else {
      sectionsClass.classList.remove("active-link");
    }
  });
};
window.addEventListener("scroll", scrollActive);

/*===== SCROLL REVEAL ANIMATION =====*/
const sr = ScrollReveal({
  origin: "top",
  distance: "60px",
  duration: 2000,
  delay: 200,
  //     reset: true
});

sr.reveal(".home__data, .about__img, .skills__subtitle, .skills__text", {});
sr.reveal(".home__img, .about__subtitle, .about__text, .skills__img", {
  delay: 400,
});
sr.reveal(".home__social-icon", { interval: 200 });
sr.reveal(".skills__data, .work__img, .contact__input", { interval: 200 });

// Function to scroll projects timeline
function scrollProjects(direction) {
  const timeline = document.getElementById('projects-timeline');
  const scrollAmount = 450; // Width of one card plus gap
  
  if (direction === 'left') {
    timeline.scrollBy({
      left: -scrollAmount,
      behavior: 'smooth'
    });
  } else if (direction === 'right') {
    timeline.scrollBy({
      left: scrollAmount,
      behavior: 'smooth'
    });
  }
}

// Auto-hide scroll indicators when not needed
document.addEventListener('DOMContentLoaded', function() {
  const timeline = document.getElementById('projects-timeline');
  const leftIndicator = document.querySelector('.work__scroll-indicator--left');
  const rightIndicator = document.querySelector('.work__scroll-indicator--right');
  
  // Ensure timeline starts at the beginning (first card fully visible)
  timeline.scrollLeft = 0;
  
  function updateScrollIndicators() {
    if (timeline.scrollLeft <= 10) { // Small threshold for better UX
      leftIndicator.style.opacity = '0.3';
    } else {
      leftIndicator.style.opacity = '1';
    }
    
    if (timeline.scrollLeft >= timeline.scrollWidth - timeline.clientWidth - 10) {
      rightIndicator.style.opacity = '0.3';
    } else {
      rightIndicator.style.opacity = '1';
    }
  }
  
  timeline.addEventListener('scroll', updateScrollIndicators);
  updateScrollIndicators(); // Initial call
});
