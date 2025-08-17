const nav = document.getElementById('header-nav')
const ol = document.getElementById('header-ol')

nav.addEventListener('click',() =>{
    ol.classList.toggle('active')
})