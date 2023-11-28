const sliderReviews = document.querySelector('.swiper-container');

const swiperReviews = new Swiper('.swiper-container', {
    slidesPerView: 2,
    spaceBetween: 5,
    autoHeight: true,
    pagination: {
        el: '.swiper-pagination',
        type: 'bullets',
      },
    breakpoints: {
    992: {
        slidesPerView: 2,
        spaceBetween: 21,
    },
    991: {
        slidesPerView: 'auto',
        spaceBetween: 20,
    },
    768: {
        slidesPerView: 1,
        spaceBetween: 0,
    },
    576: {
        slidesPerView: 1,
        spaceBetween: 0,
    },
    320: {
        slidesPerView: 1,
        spaceBetween: 0,
    }
    }
});

// Hamburger
window.addEventListener('DOMContentLoaded', () => {
    const menu = document.querySelector('.menu'),
    menuItem = document.querySelectorAll('.menu__inner__nav__item__link'),
    hamburger = document.querySelector('.header__wrap__content__hamburger');

    hamburger.addEventListener('click', () => {
        hamburger.classList.toggle('hamburger_active');
        menu.classList.toggle('menu_active');
    });

    menuItem.forEach(item => {
        item.addEventListener('click', () => {
            hamburger.classList.toggle('hamburger_active');
            menu.classList.toggle('menu_active');
        });
    });
});