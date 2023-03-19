const toggleButton = document.getElementById('toggle');
const background = document.getElementById('corpo');
const containerHeader = document.getElementById('header-bg');
const h1Text = document.getElementById('h1-dark');

toggleButton.addEventListener('click', function () {
   background.classList.toggle('dark-background');
   background.classList.toggle('dark-card');
   background.classList.toggle('dark-main');
   background.classList.toggle('dark-footer');
   background.classList.toggle('dark-hr');
   containerHeader.classList.toggle('dark-header');
   h1Text.classList.toggle('dark-text');
});