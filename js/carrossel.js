const slider = document.querySelector(".slider");
const slides = document.querySelectorAll(".slide");
const prevButton = document.querySelector(".prev");
const nextButton = document.querySelector(".next");
const dots = document.querySelectorAll(".dot");
let currentIndex = 0;

prevButton.addEventListener("click", () => {
  currentIndex = (currentIndex - 1 + slides.length) % slides.length;
  updateSlider();
  updateDots("left");
});

nextButton.addEventListener("click", () => {
  currentIndex = (currentIndex + 1) % slides.length;
  updateSlider();
  updateDots("right");
});

dots.forEach((dot, index) => {
  dot.addEventListener("click", () => {
    currentIndex = index;
    updateSlider();
    updateDots();
  });
});

function updateSlider() {
  slides.forEach((slide, index) => {
    if (index === currentIndex) {
      slide.classList.remove("hide");
    } else {
      slide.classList.add("hide");
    }
  });

  slider.style.transform = `translateX(${
    -currentIndex * slides[0].offsetWidth
  }px)`;
}

function updateDots(direction) {
  dots.forEach((dot, index) => {
    dot.classList.remove("active");

    if (index === currentIndex) {
      dot.classList.add("active");
    }
  });
}
