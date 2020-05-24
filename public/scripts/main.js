console.log('Main.js')
const wrapper = document.getElementById('wrapper');
const landingLink = document.getElementById('landingLink');
const aboutLink = document.getElementById('aboutLink');
const landing = document.getElementById('landing');


landingLink.onclick = function() {
  wrapper.classList.add('showLanding');
  landing.classList.remove('dismissAnimation');
}

aboutLink.onclick = function() {
  landing.classList.add('dismissAnimation');
  wrapper.classList.remove('showLanding');
}


function main() {
  console.log('loaded');
  wrapper.classList.add('showLanding');
}
