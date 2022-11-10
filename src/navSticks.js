function stickNav() {
  const navContainer = document.getElementById('nav-container');
  const margin = -200; // margin to the top of the page from the nav
  const homeLogo = document.getElementsByClassName('logo')[0];
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

function navPageScroll() {
  const projectBtn = document.getElementById('project-nav');
  const contactBtn = document.getElementById('contact-nav');
  const resumeBtn = document.getElementById('resume-nav');

  projectBtn.addEventListener('click', () => {
    let windowSizeInPx = window.innerWidth;
    let projectTitleWidthVw = 0;
    console.log(windowSizeInPx);
    if (windowSizeInPx >= 1100) {
      projectTitleWidthVw = -10; // vw
    } else if (windowSizeInPx >= 950) {
      projectTitleWidthVw = -15;
    }

    let pxPerVw = windowSizeInPx / 100;
    let projectTitleWidthPx = projectTitleWidthVw * pxPerVw;

    window.scroll({
      top: window.innerHeight + projectTitleWidthPx,
      behavior: 'smooth',
    });
  });
  contactBtn.addEventListener('click', () => {
    scrollAndShift();
  });
  resumeBtn.addEventListener('click', () => {
    console.log('resume download');
  });
}

function scrollAndShift() {
  window.scroll({
    top: document.body.scrollHeight,
    behavior: 'smooth',
  });
}

export { stickNav, navPageScroll };
