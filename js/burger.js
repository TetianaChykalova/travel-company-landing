const btn = document.querySelector('.header-name')
const nav = document.querySelector('.header-nav')

btn.addEventListener('click', function () {
    nav.classList.toggle('active')
    document.body.classList.toggle('overflow-hidden')
})