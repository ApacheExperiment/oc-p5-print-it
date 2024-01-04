const slides = [
	{
		"image":"slide1.jpg",
		"tagLine":"Impressions tous formats <span>en boutique et en ligne</span>"
	},
	{
		"image":"slide2.jpg",
		"tagLine":"Tirages haute définition grand format <span>pour vos bureaux et events</span>"
	},
	{
		"image":"slide3.jpg",
		"tagLine":"Grand choix de couleurs <span>de CMJN aux pantones</span>"
	},
	{
		"image":"slide4.png",
		"tagLine":"Autocollants <span>avec découpe laser sur mesure</span>"
	}
]
/*Création des bullet points*/
const banner = document.getElementById('banner');
const dotsContainer = document.createElement('div');
dotsContainer.classList.add('dots');

/*Boucle des slides*/
for (const slide of slides) {
  const dot = document.createElement('div');
  dot.classList.add('dot');
  dotsContainer.appendChild(dot);
}

banner.appendChild(dotsContainer);

/* Mets en surbrillance le point actif (premier point au démarrage)*/
const dots = document.querySelectorAll('.dot');
dots[0].classList.add('dot_selected');

/* Gestion des flèches du carrousel*/
/***Sélection des flèches***/
const arrowLeft = document.querySelector('.arrow_left');
const arrowRight = document.querySelector('.arrow_right');

let currentSlide = 0; // Initialisation à 0, l'index du slide actuel

/***Event Listeners***/
arrowLeft.addEventListener('click', () => {
  console.log('clic sur la flèche de gauche');
  currentSlide--;
  if (currentSlide < 0) {
    currentSlide = slides.length - 1; // Retourner au dernier slide si on est au premier
  }
  // Appel d'une fonction pour mettre à jour le slide
  updateSlide(currentSlide);
});

arrowRight.addEventListener('click', () => {
  console.log('clic sur la flèche de droite');
  currentSlide++;
  if (currentSlide === slides.length) {
    currentSlide = 0; // Revenir au premier slide si on est à la fin
  }
  // Appel d'une fonction pour mettre à jour le slide
  updateSlide(currentSlide);
});

/* Fonction pour mettre à jour le slide en fonction de l'index*/
function updateSlide(index) {
  const slideImage = document.querySelector('.banner-img');
  const slideText = document.querySelector('#banner p');

  slideImage.src = `./assets/images/slideshow/${slides[index].image}`;
  slideText.innerHTML = slides[index].tagLine;

  /* Mise à jour de la surbrillance des bullet points*/
  dots.forEach(dot => dot.classList.remove('dot_selected'));
  dots[index].classList.add('dot_selected');
}