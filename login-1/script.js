const clickLogin = () => {
  document.getElementById('id01').style.display = 'block';
};

const clickClose = () => {
  document.getElementById('id01').style.display = 'none';
};

// get the modal
const modal = document.getElementById('id01');

// when the user clicks anywhere outside of the modal, close it
window.onclick = event => {
  if (event.target == modal) {
    modal.style.display = 'none';
  }
};
