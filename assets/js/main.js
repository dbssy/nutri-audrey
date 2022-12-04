const swiper = new Swiper('.mySwiper', {
  slidesPerView: 3,
  spaceBetween: 30,
  autoplay: {
    delay: 2500,
    disableOnInteraction: false,
  },
  breakpoints: {
    320: {
      slidesPerView: 1,
      spaceBetween: 30,
    },
    768: {
      slidesPerView: 2,
      spaceBetween: 30,
    },
    1024: {
      slidesPerView: 3,
      spaceBetween: 30,
    },
  },
});

const date = new Date();
const year = date.getFullYear();
document.getElementById('showYear').innerHTML = year;

function handleScrollToTop() {
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
}

function handleActiveNavbarOnMobile(buttonIcon, navbar) {
  const button = document.querySelector(buttonIcon);
  const nav = document.querySelector(navbar);
  const activeClass = 'active';

  if (buttonIcon) {
    button.addEventListener('click', () => {
      document.body.classList.toggle('no-scroll');
      nav.classList.toggle(activeClass);
      button.classList.toggle(activeClass);
    });
  }
}

handleActiveNavbarOnMobile('.navbar-btn-mobile', '.navbar');
