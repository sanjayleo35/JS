const slides = document.querySelectorAll(".slider img");
let slideIndex = 0;
let intervalId = null;

document.addEventListener("DOMContentLoaded", InitialSlider);

function InitialSlider() {
    if (slides.length > 0) {
        slides[slideIndex].classList.add("displaySlide"); 
        intervalId = setInterval(next, 5000); 
    }
}

function showSlides(index) {
    
    const nextIndex = (index + slides.length) % slides.length;

   
    slides[slideIndex].classList.remove("displaySlide");
    slides[slideIndex].classList.add("exitSlide");

   
    setTimeout(() => {
        slides[slideIndex].classList.remove("exitSlide");
    }, 1000);

    
    slides[nextIndex].classList.add("displaySlide");

    
    slideIndex = nextIndex;
}

function prev() {
    clearInterval(intervalId);
    slideIndex--;
    showSlides(slideIndex);
    intervalId = setInterval(next, 5000); 
}

function next() {
    clearInterval(intervalId);
    slideIndex++;
    showSlides(slideIndex);
    intervalId = setInterval(next, 5000); 
}