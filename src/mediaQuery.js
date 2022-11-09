function mediaQueryWidth1100px(windowWidth) {
  if (windowWidth.matches) {
    // stuff at this size
  } else {
    // stuff at bigger sizes
  }
}
let windowMaxWidth1100px = window.matchMedia('(max-width: 1100px)');
windowMaxWidth1100px.addEventListener(mediaSize);
