function contactSlide() {
  const startAnimationButton =
    document.getElementsByClassName('contact-slide')[0];
  const returnToMainButton = document.getElementById('contact-back');
  startAnimationButton.addEventListener('click', transformPageLeft);
}

function transformPageLeft() {
  const contactCallToAction = document.getElementsByClassName(
    'contact-outer-wrapper'
  )[0];
  const contactForm = document.getElementsByClassName('form-wrapper')[0];

  contactCallToAction.classList.add('hidden');
  contactCallToAction.classList.remove('showSlide');
  contactForm.classList.add('show');
  contactForm.classList.remove('hidden');
}

export default contactSlide;
