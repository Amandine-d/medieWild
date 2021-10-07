const formContact = document.getElementById('future-wilder');
const audioSent = new Audio('assets/send.mp3')


formContact.addEventListener('submit', (e) => {
    e.preventDefault();
    audioSent.play()
    console.log('form submitted')
})
