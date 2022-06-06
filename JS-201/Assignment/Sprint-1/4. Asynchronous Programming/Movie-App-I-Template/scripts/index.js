
let index = 0;    //slideIndex
showSlides();

function showSlides(){
  let i;

  let slides = document.querySelectorAll(".img");

  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  index++;

  if (index > slides.length) {index = 1}

  slides[index-1].style.display = "block";

  setTimeout(showSlides, 3000); 
}
