// loop through all dropdown buttons to toggle between hiding and
// showing its dropdown content

// This allows the user to have multiple dropdowns without conflict

const dropdown = document.getElementsByClassName('dropdown-btn');

for (let i = 0; i < dropdown.length; i++) {
  dropdown[i].addEventListener('click', function() {
    this.classList.toggle('active');

    let dropdownContent = this.nextElementSibling;
    if (dropdownContent.style.display === 'block') {
      dropdownContent.style.display = 'none';
    } else {
      dropdownContent.style.display = 'block';
    }
  });
}

const openNav = () => {
  document.getElementById('mySidenav').style.width = '300px';
  document.getElementById('main').style.marginLeft = '300px';
};

const closeNav = () => {
  document.getElementById('mySidenav').style.width = '0';
  document.getElementById('main').style.marginLeft = '0';
};

document.querySelector('.closebtn').addEventListener('click', closeNav);
document.querySelector('span').addEventListener('click', openNav);

const openInfo = (event, infoName) => {
  const tabContent = document.getElementsByClassName('tabcontent');
  for (let i = 0; i < tabContent.length; i++) {
    tabContent[i].style.display = 'none';
  }

  const tablinks = document.getElementsByClassName('tablinks');
  for (let i = 0; i < tablinks.length; i++) {
    tablinks[i].className = tablinks[i].className.replace('active', '');
  }

  document.getElementById(infoName).style.display = 'block';
  event.currentTarget.className += ' active';
};

// get the element with id="defaultOpen" and click on it
document.getElementById('defaultOpen').click();

// When the user scrolls down 20px from the top of the document, show the button
window.onscroll = function() {
  scrollFunction();
};

function scrollFunction() {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    document.getElementById('myBtn').style.display = 'block';
  } else {
    document.getElementById('myBtn').style.display = 'none';
  }
}

// When the user clicks on the button, scroll to the top of the document
function topFunction() {
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
}
