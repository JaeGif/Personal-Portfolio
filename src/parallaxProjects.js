function projectParallax() {
  const projectCard = document.getElementsByClassName('positional-wrapper');

  window.addEventListener('scroll', () => {
    projectSectionFocused();
    for (let i = 0; i < projectCard.length; i++) {
      if (isElementInViewport(projectCard[i])) {
        parallaxMotionOfAccentAndDescription(i);
      }
    }
  });
}

function parallaxMotionOfAccentAndDescription(index) {
  const descriptionCard = document.getElementsByClassName('description-card');
  const underImageAccent = document.getElementsByClassName(
    'under-image-outline'
  );
  const descriptionCardVelocity = 0.27;
  const accentVelocity = 0.055;
  let scrollY = window.scrollY;
  const windowHeight = window.innerHeight;
  const initialDescriptionCardPosition = -200 - windowHeight * 0.2 * index;
  const initialUnderImageAccentPosition = -50 - index * 29;
  underImageAccent[index].style.top =
    initialUnderImageAccentPosition + scrollY * accentVelocity + 'px';
  descriptionCard[index].style.bottom =
    initialDescriptionCardPosition + scrollY * descriptionCardVelocity + 'px';
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
  const descriptionCard = document.getElementsByClassName('description-card');

  const projectEntireArea =
    document.getElementsByClassName('heading-section')[0];
  if (isProjectInViewport(projectEntireArea)) {
    projectsShownEffects();
    for (let i = 0; i < descriptionCard.length; i++) {
      descriptionCard[i].classList.add('description-in-focus');
    }
  } else {
    projectsOffScreenEffects();
  }
}

function projectsShownEffects() {
  const body = document.body;
  const navBar = document.getElementById('nav-container');
  const progressBar = document.getElementById('progress-container');

  body.classList.add('in-focus');
  navBar.classList.remove('uncolorNav');
  navBar.classList.add('nav-highlight');
  transformContactSectionBack();
  progressBar.style.display = 'flex';
}
function projectsOffScreenEffects() {
  const body = document.body;
  const navBar = document.getElementById('nav-container');
  body.classList.remove('in-focus');
  navBar.classList.add('uncolorNav');
  navBar.classList.remove('nav-highlight');
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
