// const menuItems = document.querySelectorAll('.hide');
const hamburger = document.querySelector('.hamburger')
const menu = document.querySelector('.menu')

// event listeners
hamburger.addEventListener('click', showMenu)

// Functions
function showMenu(){
    menu.classList.toggle('hide')
}