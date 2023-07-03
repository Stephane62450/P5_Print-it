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
console.log(slides[0])

const arrowLeft = document.querySelector(".arrow_left")
console.log(arrowLeft);

const arrowRight = document.querySelector(".arrow_right")
console.log(arrowRight);

const lengthSlides = slides.length
console.log(slides.length);

const dots = document.querySelector(".dots")
console.log(dots);

function genererBullet() {
	for (let i = 0; i < lengthSlides; i++) {
		const dot = document.createElement("span");
		dot.classList.add("dot")
		dots.appendChild(dot)
	}
	dots.children[0].classList.add("dot_selected")

}
genererBullet()

const image = document.querySelector(".banner-img")
const tagLine = document.querySelector(".tagLine")
//const tagLine2 = document.querySelector("#banner p") = ciblage de l'element parent puis du p// 
let indexSlide = 0

function deplacementDroite() {
	indexSlide += 1
	image.src = `./assets/images/slideshow/${slides[indexSlide].image}`
	tagLine.innerHTML = slides[indexSlide].tagLine
	dots.children[indexSlide].classList.add("dot_selected")
	dots.children[indexSlide - 1].classList.remove("dot_selected")
	
}

function deplacementGauche() {
	indexSlide -= 1
	image.src = `./assets/images/slideshow/${slides[indexSlide].image}`
	tagLine.innerHTML = slides[indexSlide].tagLine
	dots.children[indexSlide].classList.add("dot_selected")
	dots.children[indexSlide + 1].classList.remove("dot_selected")
	
}
arrowRight.addEventListener("click", deplacementDroite)
arrowLeft.addEventListener("click", deplacementGauche)
