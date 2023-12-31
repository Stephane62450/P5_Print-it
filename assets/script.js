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
console.log(slides[0]) // afficher le premier élément du tableau

const arrowLeft = document.querySelector(".arrow_left") // appeler l'element html arrow_left 
console.log(arrowLeft); // afficher le contenu dans la console du navigateur

const arrowRight = document.querySelector(".arrow_right") // appeler l'element html arrow_right 
console.log(arrowRight); // afficher le contenu dans la console du navigateur

const lengthSlides = slides.length // variable est egale a la longueur du tableau
console.log(slides.length); // afficher la longueur du tableau //

const dots = document.querySelector(".dots") // appeler l'element html dots
console.log(dots); // afficher le contenu dans la console du navigateur

function genererBullet() {
	for (let i = 0; i < lengthSlides; i++) { // Boucle tant que i est inferieur a la longueur du tableau incrémenter de 1
		const dot = document.createElement("span"); // creer un element html
		dot.classList.add("dot") // ajouter une nouvelle classe
		dots.appendChild(dot) // dot est l'enfant de dots
	}
	dots.children[0].classList.add("dot_selected") // ajouter la classe au premier enfant de dots

}
genererBullet()

const image = document.querySelector(".banner-img") // appeler l'element html .banner-img
const tagLine = document.querySelector(".tagLine") // appeler l'element html .tagLine
//const tagLine2 = document.querySelector("#banner p") = ciblage de l'element parent puis du p 
let indexSlide = 0 // attribuer la valeur 0

function deplacementDroite() {
	if (indexSlide === lengthSlides - 1) { // si indexslide est egal a la longueur de mon tableau -1 alors indexslide revient a 0
		indexSlide = 0; // position de indexSlide
		dots.children[lengthSlides - 1].classList.remove("dot_selected"); // retirer la class au dernier enfant 
	} else {
		indexSlide += 1; // incrémente la valeur de la variable de 1
		dots.children[indexSlide - 1].classList.remove("dot_selected"); // retire la classe à l'enfant de dots
	}
	image.src = `./assets/images/slideshow/${slides[indexSlide].image}` // mettre a jour l'attribut src et changer l'image
	tagLine.innerHTML = slides[indexSlide].tagLine // changer le contenu en html //
	dots.children[indexSlide].classList.add("dot_selected") // ajoute la classe à l'enfant de dots
}

function deplacementGauche() {
	if (indexSlide === 0) { //indexslide est strictement egale a 0
		indexSlide = lengthSlides - 1; // pointer indexslide vers le dernier element de lengthslides
		dots.children[0].classList.remove("dot_selected"); // retirer la classe a l'enfant dots
	} else {
		indexSlide -= 1 // decremente la valeur de la variable de 1
		dots.children[indexSlide + 1].classList.remove("dot_selected") // supprime la classe à l'élément précédent
	}
	image.src = `./assets/images/slideshow/${slides[indexSlide].image}` // mettre à jour l'attribut src et changer l'image 
	tagLine.innerHTML = slides[indexSlide].tagLine // permet de mettre à jour le contenu html 
	dots.children[indexSlide].classList.add("dot_selected") // ajoute la classe à l'élément actuel

}
arrowRight.addEventListener("click", deplacementDroite) // écouteur d'événement au clic sur la flèche droite la fonction est appelée.
arrowLeft.addEventListener("click", deplacementGauche) // écouteur d'événement au clic sur la flèche gauche la fonction est appelée.
