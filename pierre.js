const menuContainer = document.querySelector('.menu-container');
const menuItem = document.querySelector('.menu-item');
const menuPierre = document.querySelector('.menu-pierre')

menuPierre.addEventListener('click', function() {
    menuContainer.classList.toggle('active');

})