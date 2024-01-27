

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
console.log(slides);

// Déclaration des variables  globales et Récupération des éléments du DOM"
const arrowLeft = document.querySelector(".arrow_left");
const arrowRight = document.querySelector(".arrow_right");
const dotsContainer =document.querySelector(".dots");
const img = document.querySelector(".banner-img");
const tagLine= document.querySelector("#banner p");


 // index du diapositive actuellement affiché
let index = 0;


//Cette fonction crée des points indicateurs pour chaque diapositive.
function ajoutDot(){

	for(let i=0; i <slides.length; i++) { 
	const dot = document.createElement("span"); 
    dot.classList.add("dot"); 
	dotsContainer.appendChild(dot);

	
		if (i==index) {
			dot.classList.add("dot_selected") 
		} 
	}
}
ajoutDot(); //j'appelle la fonction  pour l'exécuter


// Ajout des écouteurs d'événements aux flèches pour déclencher les fonctions de mise à jour.
	arrowRight.addEventListener("click", () =>{
	updateSlide("right") 
})
	arrowLeft.addEventListener("click", () =>{
	updateSlide("left") 
})

//Cette fonction met à jour les points indicateurs.
function updateDot(){ //
	const tableauDot= document.querySelectorAll(".dots .dot");
	
	for(let i=0; i<tableauDot.length; i++){
		tableauDot[i].classList.remove("dot_selected")
	  }
	  	tableauDot[index].classList.add("dot_selected");  
		img.src =`./assets/images/slideshow/${slides[index].image}` 
		tagLine.innerHTML = slides[index].tagLine;
			
	}
//Cette fonction met à jour l'index de la diapositive lors du clic sur les flèches.
function updateSlide(buttonDirection){
	if(buttonDirection=="right"){ 
				
				index++; 
					if (index > slides.length -1) { 
						index=0;
					}				
	}
	else if(buttonDirection=="left"){
		
				index--;
				if (index < 0) {
					index = slides.length -1; 
				} 
	}
	updateDot()
}









