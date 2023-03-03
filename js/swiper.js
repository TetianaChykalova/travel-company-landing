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

    autoplay: {
        delay: 3000,
        disableOnInteraction: false,
    },
    speed: 1000,
    effect: 'fade',
    fadeEffect: {
        crossFade: true,
    },
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

    simulateTouch: false,
    watchOverFlow: true,

    spaceBetween: 40,

    slidesPerGroup: 1,

    breakpoints: {
        320: {
            slidesPerView: 1,
        },
        767: {
            slidesPerView: 'auto'
        }
    },

    freeMode: true,
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
    simulateTouch: false,

    watchOverFlow: true,

    spaceBetween: 20,

    slidesPerGroup: 1,
    slidesPerView: 1,

    freeMode: true,
})
