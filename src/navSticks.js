function stickNav() {
  const navContainer = document.getElementById('nav-container');
  const margin = -200; // margin to the top of the page from the nav
  window.addEventListener('scroll', () => {
    if (window.innerHeight + margin <= window.scrollY) {
      navContainer.classList.add('stuckTop');
    } else {
      navContainer.classList.remove('stuckTop');
    }
  });
}

function navPageScroll() {
  const projectBtn = document.getElementById('project-nav');
  const contactBtn = document.getElementById('contact-nav');
  const resumeBtn = document.getElementById('resume-nav');

  projectBtn.addEventListener('click', () => {
    const projectTitleWidthVw = -10; // vw
    if (window.innerWidth <= 1100) {
      const windowSizeInPx = window.innerWidth;
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
