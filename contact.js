const formContact = document.getElementById('future-wilder');
const audioSent = new Audio('assets/send.mp3')


formContact.addEventListener('submit', (e) => {
    e.preventDefault();
    audioSent.play()
    console.log('form submitted')
})

  /*footer pierre*/

 const audio = new Audio('assets/scream.mp3');
const bubbleContainer = document.querySelector('.nav-pierre');

const menuPierre = document.querySelector('.floating-head')

menuPierre.addEventListener('click', function() {
    bubbleContainer.classList.toggle('active');
    audio.play()

});
