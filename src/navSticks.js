function stickNav() {
  const navContainer = document.getElementById('nav-container');
  const margin = -200;
  window.addEventListener('scroll', () => {
    if (window.innerHeight + margin <= window.scrollY) {
      navContainer.classList.add('stuckTop');
    } else {
      navContainer.classList.remove('stuckTop');
    }
  });
}

export default stickNav;
