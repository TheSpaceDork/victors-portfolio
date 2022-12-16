let menuBtn = document.getElementById("menuBtn");
let navMenu = document.getElementById("navMenu");
let closeBtn = document.getElementById("closeBtn");
menuBtn.onclick = () => {
  navMenu.classList.toggle("openMenu");
};
closeBtn.onclick = () => {
  navMenu.classList.toggle("openMenu");
};

// change navbar style on scroll
window.addEventListener("scroll", () => {
  document
    .querySelector(".nav")
    .classList.toggle("window-scroll", window.scrollY > 450);
});
// Scrolling animations
ScrollReveal({
  reset: true,
  distance: "30px",
  duration: 1000,
  delay: 300,
});

ScrollReveal().reveal(".down", {
  origin: "bottom",
  opacity: "1",
});

ScrollReveal().reveal(".right", {
  origin: "right",
  opacity: "1",
});
ScrollReveal().reveal(".left", {
  origin: "left",
  opacity: "1",
});

ScrollReveal().reveal(".scale", {
  scale: 0.5,
  reset: false,
});
("");
