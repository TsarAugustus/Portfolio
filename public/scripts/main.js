console.log('Main.js')
const wrapper = document.getElementById('wrapper');
const landingLink = document.getElementById('landingLink');
const aboutLink = document.getElementById('aboutLink');
const landing = document.getElementById('landing');
const about = document.getElementById('about');


landingLink.onclick = function() {
  wrapper.classList.add('showLanding');
  landing.classList.remove('dismissLanding');

  about.classList.add('dismissAbout');
  wrapper.classList.remove('showAbout');
}

aboutLink.onclick = function() {
  landing.classList.add('dismissLanding');
  wrapper.classList.remove('showLanding');

  wrapper.classList.add('showAbout');
  about.classList.remove('dismissAbout');
}


function main() {
  console.log('loaded');
  wrapper.classList.add('showLanding');
}
