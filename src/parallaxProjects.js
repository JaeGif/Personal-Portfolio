function projectParallax() {
  const projectCard = document.getElementsByClassName('positional-wrapper');
  const descriptionCard = document.getElementsByClassName('description-card');
  const underImageAccent = document.getElementsByClassName(
    'under-image-outline'
  );
  const descriptionCardVelocity = 0.25;
  const accentVelocity = 0.05;
  const projectEntireArea =
    document.getElementsByClassName('heading-section')[0];

  window.addEventListener('scroll', () => {
    let scrollY = window.scrollY;
    const windowHeight = window.innerHeight;
    projectSectionFocused();
    for (let i = 0; i < projectCard.length; i++) {
      if (isElementInViewport(projectCard[i])) {
        const initialDescriptionCardPosition = -200 - windowHeight * 0.2 * i;
        const initialUnderImageAccentPosition = -50 - i * 25;
        underImageAccent[i].style.top =
          initialUnderImageAccentPosition + scrollY * accentVelocity + 'px';
        descriptionCard[i].style.bottom =
          initialDescriptionCardPosition +
          scrollY * descriptionCardVelocity +
          'px';
      }
    }
  });
}
function isElementInViewport(el) {
  let rect = el.getBoundingClientRect();
  return rect.top >= -375 && rect.bottom <= window.innerHeight + 375;
}
function isProjectInViewport(el) {
  let rect = el.getBoundingClientRect();
  let bottomBound = rect.bottom - window.innerHeight;

  return (
    rect.top <= window.innerHeight / 2 &&
    rect.bottom >= bottomBound &&
    bottomBound >= -550
  );
}
function projectSectionFocused() {
  const body = document.body;
  const descriptionCard = document.getElementsByClassName('description-card');
  const navBar = document.getElementById('nav-container');
  const progressBar = document.getElementById('progress-container');

  const projectEntireArea =
    document.getElementsByClassName('heading-section')[0];
  if (isProjectInViewport(projectEntireArea)) {
    for (let i = 0; i < descriptionCard.length; i++) {
      descriptionCard[i].classList.add('description-in-focus');
    }
    body.classList.add('in-focus');
    navBar.classList.remove('uncolorNav');
    transformContactSectionBack();
    progressBar.style.display = 'flex';
  } else {
    body.classList.remove('in-focus');
    navBar.classList.add('uncolorNav');
    progressBar.style.display = 'none';
  }
}
function transformContactSectionBack() {
  const contactCallToAction = document.getElementsByClassName(
    'contact-outer-wrapper'
  )[0];
  const contactForm = document.getElementsByClassName('form-wrapper')[0];

  contactCallToAction.classList.add('showSlide');
  contactCallToAction.classList.remove('hidden');
  contactForm.classList.add('hidden');
  contactForm.classList.remove('show');
}
export default projectParallax;
