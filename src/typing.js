const aText = new Array('Fullstack Developer');
const iSpeed = 100; // time delay of print out
let iIndex = 0; // start printing array at this posision
const iArrLength = aText[0].length;

let iTextPos = 0; // initialise text position
let sContents = ''; // initialise contents variable

function typewriter() {
  const title = document.getElementsByClassName('name-h1')[1];

  title.innerHTML = sContents + aText[iIndex].substring(0, iTextPos) + '_';
  console.log(sContents);
  if (iTextPos++ == iArrLength) {
    iTextPos = 0;
    iIndex++;
    if (iIndex != aText.length) {
      iArrLength = aText[iIndex].length;
      setTimeout(typewriter, 500);
    }
  } else {
    setTimeout(typewriter, iSpeed);
  }
}

export { typewriter };
