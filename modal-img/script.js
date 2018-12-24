// Get the modal
const modal = document.getElementById('myModal');

// Get the image and insert it inside the modal - use its "alt" text as caption
const img = document.getElementById('myImg');
const modalImg = document.getElementById('img01');
const captionText = document.getElementById('caption');

img.onclick = () => {
  modal.style.display = 'block';
  modalImg.src = img.src;
  captionText.innerHTML = img.alt;
};

// Get the <span> element that closes the modal
const span = document.querySelector('.close');

// When the use clicks on <span> (x), close the modal
span.onclick = () => {
  modal.style.display = 'none';
};

// When the user clicks outside the image, close the modal
modal.onclick = event => {
  if (event.target === modal) {
    modal.style.display = 'none';
  }
};
