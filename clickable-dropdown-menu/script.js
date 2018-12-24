// when the user clicks on the button, toggle between hiding and showing the dropdown content.
const showDropdown = () => {
  document.getElementById('myDropdown').classList.toggle('show');
};

// close the dropdown if the user clicks outside of it
window.onclick = e => {
  if (!e.target.matches('.dropbtn')) {
    const myDropdown = document.getElementById('myDropdown');

    if (myDropdown.classList.contains('show')) {
      myDropdown.classList.remove('show');
    }
  }
};

document.querySelector('.dropbtn').addEventListener('click', showDropdown);
