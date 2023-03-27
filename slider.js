var slideIndex = 0;
showSlides(slideIndex);

function plusSlides(n) {
  showSlides(slideIndex += n);
}

function currentSlide(n) {
  showSlides(slideIndex = n);
  
}

function showSlides(n) {
  var i;
  let City = ["Rostov-on-Don LCD admiral", "Sochi Thieves", "Rostov-on-Don Patriotic"];
  let App = ["81 m2", "105 m2", "93 m2"];
  let repTime = ["3.5 months", "4 months", "3 months"];
  let repCost = ["Upon request", "Upon request", "Upon request"];
  var slides = document.getElementsByClassName("img");
  var dots = document.getElementsByClassName("dot");
  var bubu = document.getElementsByClassName("bubu");
  if (n > slides.length) {slideIndex = 1}    
  if (n < 1) {slideIndex = slides.length} 
  for (let i = 0; i < City.length; i++) {
    document.getElementsByClassName("City").textContent  = City[i];
    
  }
  for (i = 0; i < slides.length; i++) {
      slides[i].style.display = "none"; 
      dots[i].className = dots[i].className.replace(" active", "");  
      bubu[i].className = bubu[i].className.replace(" dyrak", "");
  }
 
  slides[slideIndex-1].style.display = "block";  
  dots[slideIndex-1].className += " active";
  bubu[slideIndex-1].className += " dyrak";
}

