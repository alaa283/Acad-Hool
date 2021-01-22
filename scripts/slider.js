var startslide = 1;
showSlides(startslide);

function nextSlide(n) {
  showSlides(startslide += n);
}

function currentSlide(n) {
  showSlides(startslide = n);
}

function showSlides(n) {
  var i;
  var slides = document.getElementsByClassName("slideeer");
  var dots = document.getElementsByClassName("pointer");

  if (n > slides.length) {
    startslide = 1
  }  

  if (n < 1) {
    startslide = slides.length
  }

  for (i = 0; i < slides.length; i++) {
      slides[i].style.display = "none";  
  }

  for (i = 0; i < dots.length; i++) {
      dots[i].className = dots[i].className.replace(" active", "");
  }

  slides[startslide-1].style.display = "block";  
  dots[startslide-1].className += " active";
}
