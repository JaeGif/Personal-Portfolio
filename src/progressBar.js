function fillProgressBar() {
  let windowSizeInPx = window.innerWidth;
  if (windowSizeInPx >= 500) {
    const fillBar = document.getElementById('fill-bar');
    const navEl = document.getElementById('nav-container');
    const progressContainer = document.getElementById('progress-container');

    window.addEventListener('scroll', () => {
      let pageHeight = document.documentElement.scrollHeight;

      let currentYPosition = window.scrollY;
      let currentScrollPercent =
        (currentYPosition / (pageHeight - window.innerHeight)) * 100;

      fillBar.style.width = currentScrollPercent + 'vw';
      if (isNavAtTop(navEl)) {
        progressContainer.style.display = 'flex';
        if (currentScrollPercent >= 100) {
          fillBar.classList.add('finished');
        } else {
          fillBar.classList.remove('finished');
        }
      } else {
        progressContainer.style.display = 'none';
      }
    });
  }
}

function isNavAtTop(nav) {
  let rect = nav.getBoundingClientRect();
  return rect.top === 0;
}

export default fillProgressBar;
