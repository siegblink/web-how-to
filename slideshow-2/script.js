let slideIndex = 0;

const showSlides = () => {
  const slides = document.getElementsByClassName('mySlides');
  for (let i = 0; i < slides.length; i++) {
    slides[i].style.display = 'none';
  }

  slideIndex++;
  if (slideIndex > slides.length) {
    slideIndex = 1;
  }
  slides[slideIndex - 1].style.display = 'block';
  
  // change image every 2 seconds
  setTimeout(showSlides, 2000);
};

showSlides();