const slides = [
	{
		"image": "slide1.jpg",
		"tagLine": "Impressions tous formats <span>en boutique et en ligne</span>"
	},
	{
		"image": "slide2.jpg",
		"tagLine": "Tirages haute définition grand format <span>pour vos bureaux et events</span>"
	},
	{
		"image": "slide3.jpg",
		"tagLine": "Grand choix de couleurs <span>de CMJN aux pantones</span>"
	},
	{
		"image": "slide4.png",
		"tagLine": "Autocollants <span>avec découpe laser sur mesure</span>"
	},
]
console.log(slides[0]) // afficher le nombre d'element dans le tableau 

const arrowLeft = document.querySelector(".arrow_left") // appeler l'element html arrow_left 
console.log(arrowLeft);

const arrowRight = document.querySelector(".arrow_right") // appeler l'element html arrow_right 
console.log(arrowRight);

const lengthSlides = slides.length // variable est egale a la longueur du tableau
console.log(slides.length); // afficher la longueur du tableau //

const dots = document.querySelector(".dots") // appeler l'element html dots
console.log(dots);

function genererBullet() {
	for (let i = 0; i < lengthSlides; i++) { // condition (boucle) tant que i est inferieur a la longueur du tableau incrémenter de 1
		const dot = document.createElement("span"); // creer un element html
		dot.classList.add("dot") // ajouter une nouvelle classe
		dots.appendChild(dot) // dot est l'enfant de dots
	}
	dots.children[0].classList.add("dot_selected") // ajouter la classe au premier enfant de dots

}
genererBullet()

const image = document.querySelector(".banner-img") // appeler l'element html .banner-img
const tagLine = document.querySelector(".tagLine")
//const tagLine2 = document.querySelector("#banner p") = ciblage de l'element parent puis du p 
let indexSlide = 0 // attribuer la valeur 0

function deplacementDroite() {
	if (indexSlide === lengthSlides-1) { // si indexslide est egal a la longueur de mon tableau -1 alors indexslide revient a 0
		indexSlide = -1; // position de indexSlide
		dots.children[lengthSlides-1].classList.remove("dot_selected"); // retirer la class au 3eme enfant 
	}
		indexSlide += 1;
		image.src = `./assets/images/slideshow/${slides[indexSlide].image}`
		tagLine.innerHTML = slides[indexSlide].tagLine // changer le contenu en html //
		dots.children[indexSlide].classList.add("dot_selected") // ajoute la classe à l'enfant de dots
		dots.children[indexSlide -1].classList.remove("dot_selected"); // retire la classe à l'enfant de dots
}

function deplacementGauche() {
	if (indexSlide === 0) {
		indexSlide = lengthSlides;
		dots.children[0].classList.remove("dot_selected");
	}
	indexSlide -= 1
	image.src = `./assets/images/slideshow/${slides[indexSlide].image}`
	tagLine.innerHTML = slides[indexSlide].tagLine
	dots.children[indexSlide].classList.add("dot_selected")
	dots.children[indexSlide + 1].classList.remove("dot_selected")
	
}
arrowRight.addEventListener("click", deplacementDroite)
arrowLeft.addEventListener("click", deplacementGauche)
