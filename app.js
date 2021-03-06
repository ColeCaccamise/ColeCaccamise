const navbar = document.querySelector(".navbar");

// add shadow to navbar
window.onscroll = () => {
  if (window.pageYOffset > 30) {
    navbar.classList.add("navbar-shadow");
  } else {
    navbar.classList.remove("navbar-shadow");
  }
};

// smoothscroll
function SmoothVerticalScrolling(e, time, where) {
  var eTop = e.getBoundingClientRect().top;
  var eAmt = eTop / 100;
  var curTime = 0;
  while (curTime <= time) {
    window.setTimeout(SVS_B, curTime, eAmt, where);
    curTime += time / 100;
  }
}

function SVS_B(eAmt, where) {
  if (where == "center" || where == "") window.scrollBy(0, eAmt / 2);
  if (where == "top") window.scrollBy(0, eAmt);
}
