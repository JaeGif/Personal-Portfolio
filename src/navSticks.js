function stickNav() {
  const navContainer = document.getElementById('nav-container');
  const margin = -200; // margin to the top of the page from the nav
  const homeLogo = document.getElementsByClassName('logo')[0];
  let windowSizeInPx = window.innerWidth;
  if (windowSizeInPx >= 350) {
    window.addEventListener('scroll', () => {
      if (window.innerHeight + margin <= window.scrollY) {
        navContainer.classList.add('stuckTop');
        homeLogo.classList.add('show-logo');
      } else {
        navContainer.classList.remove('stuckTop');
        homeLogo.classList.remove('show-logo');
      }
    });
  }
}

function navPageScroll() {
  const projectBtn = document.getElementById('project-nav');
  const contactBtn = document.getElementById('contact-nav');
  const resumeBtn = document.getElementById('resume-nav');
  const logoHomeBtn = document.getElementsByClassName('logo')[0];
  const nav = document.getElementById('nav-container');

  logoHomeBtn.addEventListener('click', () => {
    scrollToTop();
  });
  projectBtn.addEventListener('click', () => {
    if (nav.classList.contains('show-mobile')) {
      nav.classList.remove('show-mobile');
    }
    let windowSizeInPx = window.innerWidth;
    let projectTitleWidthVw = 0;
    if (windowSizeInPx >= 1100) {
      projectTitleWidthVw = -10; // vw
    } else if (windowSizeInPx >= 950) {
      projectTitleWidthVw = -15;
    } else if (windowSizeInPx >= 750) {
      projectTitleWidthVw = -20;
    } else if (windowSizeInPx >= 550) {
      projectTitleWidthVw = -25;
    } else if (windowSizeInPx >= 350) {
      projectTitleWidthVw = -30;
    } else {
      projectTitleWidthVw = -32.5;
    }

    let pxPerVw = windowSizeInPx / 100;
    let projectTitleWidthPx = projectTitleWidthVw * pxPerVw;

    window.scroll({
      top: window.innerHeight + projectTitleWidthPx,
      behavior: 'smooth',
    });
  });
  contactBtn.addEventListener('click', () => {
    if (nav.classList.contains('show-mobile')) {
      nav.classList.remove('show-mobile');
    }
    scrollToContact();
  });
}

function scrollToContact() {
  window.scroll({
    top: document.body.scrollHeight,
    behavior: 'smooth',
  });
}
function scrollToTop() {
  window.scroll({
    top: 0,
    behavior: 'smooth',
  });
}

export { stickNav, navPageScroll };
