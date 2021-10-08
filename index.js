const audio = new Audio('assets/scream.mp3');
const bubbleContainer = document.querySelector('.nav-pierre');

const menuPierre = document.querySelector('.floating-head')

menuPierre.addEventListener('click', function() {
    bubbleContainer.classList.toggle('active');
    audio.play()

});
