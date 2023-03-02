new Swiper('.swiper-container-top',  {
    navigation: {
        prevEl: '.footer-arr-prev-top',
        nextEl: '.footer-arr-next-top',
    },

    pagination: {
        el: '.swiper-pagination-footer-top',
        type: 'fraction',
    },

    simulateTouch: false,
    loop: true,
})

new Swiper('.swiper-container-featured',  {
    navigation: {
        prevEl: '.footer-arr-prev-featured',
        nextEl: '.footer-arr-next-featured',
    },

    pagination: {
        el: '.swiper-pagination-footer-featured',
        type: 'fraction',
    },
    loop: true,
})

new Swiper('.swiper-container-editor',  {
    navigation: {
        prevEl: '.footer-arr-prev-editor',
        nextEl: '.footer-arr-next-editor',
    },

    pagination: {
        el: '.swiper-pagination-footer-editor',
        type: 'fraction',
    },
    loop: true,
})
