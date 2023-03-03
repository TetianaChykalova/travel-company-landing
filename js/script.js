const textElems = document.querySelectorAll('.data-featured-text');

textElems.forEach(elem => {
    const text = elem.textContent;
    console.log(text)
    const truncatedText = text.slice(0, 170);
    elem.textContent = text.length > 170 ? truncatedText + '...' : truncatedText
})



const popUpUser = document.querySelector('#pop-up-user')
const popUpUserImg = document.querySelector('.header-user-img')

popUpUserImg.addEventListener('click', function() {
    popUpUser.classList.toggle('active')
    document.body.classList.toggle('overflow-hidden')
})