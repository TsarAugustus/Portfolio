console.log('Main.js')
const wrapper = document.getElementById('wrapper');
const landingLink = document.getElementById('landingLink');
const aboutLink = document.getElementById('aboutLink');
const landing = document.getElementById('landing');
const about = document.getElementById('about');
const travel = document.getElementById('travel');

landingLink.onclick = function() {
  console.log('landing')
  wrapper.classList.add('showLanding');
  landing.classList.remove('dismissLanding');

  about.classList.add('dismissAbout');
  wrapper.classList.remove('showAbout');

  travel.classList.remove('animate');
}

aboutLink.onclick = function() {
  console.log('about')
  wrapper.classList.add('showAbout');
  about.classList.remove('dismissAbout');

  landing.classList.add('dismissLanding');
  wrapper.classList.remove('showLanding');

}

function main() {
  console.log('loaded');
  wrapper.classList.add('showLanding');
}
