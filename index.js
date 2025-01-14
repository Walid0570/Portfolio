// Sélectionner l'élément avec les données
const typedElement = document.querySelector('.typed');
const items = typedElement.getAttribute('data-typed-items').split(',');

// Initialiser Typed.js
new Typed('.typed', {
  strings: items, // Liste des éléments à afficher
  typeSpeed: 50, // Vitesse de frappe
  backSpeed: 120,  // Vitesse d'effacement
  backDelay: 500, // Temps avant effacement
  loop: true       // Boucle l'animation
});


let currentSlide = 0;
const slides = document.querySelectorAll('.slide');
let carouselInterval; // Variable pour l'intervalle
let isPaused = false; // Variable pour suivre l'état du carrousel

// Fonction pour afficher une slide spécifique
function showSlide(index) {
    const carousel = document.querySelector('.carousel');
    carousel.style.transform = `translateX(-${index * 100}%)`;
}

// Fonction pour passer à la slide suivante
function nextSlide() {
    if (!isPaused) { // Ne change de slide que si le carrousel n'est pas en pause
        currentSlide = (currentSlide + 1) % slides.length;
        showSlide(currentSlide);
    }
}

// Fonction pour passer à la slide précédente
function prevSlide() {
    if (!isPaused) { // Ne change de slide que si le carrousel n'est pas en pause
        currentSlide = (currentSlide - 1 + slides.length) % slides.length;
        showSlide(currentSlide);
    }
}

// Fonction pour afficher les détails d'une slide
function showDetails(index) {
    // Affiche la bulle de détails
    document.getElementById(`details-${index}`).style.display = 'block';

    // Arrête le carrousel
    clearInterval(carouselInterval); // Arrête l'intervalle
    isPaused = true; // Met en pause le carrousel
}

// Fonction pour masquer les détails d'une slide
function hideDetails(index) {
    // Masque la bulle de détails
    document.getElementById(`details-${index}`).style.display = 'none';

    // Relance le carrousel
    carouselInterval = setInterval(nextSlide, 5000); // Relance l'intervalle
    isPaused = false; // Désactive la pause
}

// Initialiser le carrousel
carouselInterval = setInterval(nextSlide, 5000);
