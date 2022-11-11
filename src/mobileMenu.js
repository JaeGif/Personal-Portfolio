function menuDropDown() {
  const menu = document.getElementsByClassName('menu')[0];
  const nav = document.getElementById('nav-container');
  menu.addEventListener('click', () => {
    if (nav.classList.contains('show-mobile')) {
      nav.classList.remove('show-mobile');
    } else {
      nav.classList.add('show-mobile');
    }
  });
}

export default menuDropDown;
