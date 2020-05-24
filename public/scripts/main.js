console.log('Main.js')
const landingLink = document.getElementById('landingLink');
const aboutLink = document.getElementById('aboutLink');
const landing = document.getElementById('landing');


landingLink.onclick = function() {
  landing.classList.add('showAnimation');
}

aboutLink.onclick = function() {
  console.log('about')
}


function main() {
  console.log('loaded');
  // document.getElementById("landing").classList.add('showAnimation');
}
