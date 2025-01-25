// Carrusel de imágenes
let currentSlide = 0;
const slides = document.querySelectorAll('.carousel-slide');
const totalSlides = slides.length;

function showNextSlide() {
    slides[currentSlide].classList.remove('active');
    currentSlide = (currentSlide + 1) % totalSlides;
    slides[currentSlide].classList.add('active');
    document.querySelector('.carousel-container').style.transform = `translateX(-${currentSlide * 100}%)`;
}

setInterval(showNextSlide, 3000);

document.addEventListener("DOMContentLoaded", () => {
    const slides = document.querySelectorAll(".slide");
    let currentIndex = 0;
  
    function showNextSlide() {
      slides[currentIndex].classList.remove("active");
      currentIndex = (currentIndex + 1) % slides.length; // Cambia al siguiente slide, vuelve al inicio si es el último
      slides[currentIndex].classList.add("active");
    }
  
    setInterval(showNextSlide, 5000); // Cambia cada 5 segundos
  });
  