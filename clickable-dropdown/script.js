// when the user clicks on the button,
// toggle between hiding and showing the dropdown content
const dropdownToggle = () => {
  document.getElementById('myDropdown').classList.toggle('show');
};

// close the dropdown if the user clicks outside outside of it
window.onclick = event => {
  if (!event.target.matches('.dropbtn')) {
    const dropdowns = document.getElementsByClassName('dropdown-content');

    for (let i = 0; i < dropdowns.length; i++) {
      let openDropdown = dropdowns[i];

      if (openDropdown.classList.contains('show')) {
        openDropdown.classList.remove('show');
      }
    }
  }
};
