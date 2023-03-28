const navbar = document.querySelector('.navbar');
const navbarOpenBtn = document.querySelector('.navbar-open-btn');
const navbarCloseBtn = document.querySelector('.navbar-cls-btn');
const navbarLinks = document.querySelectorAll('.navbar-link');

// ! Navbar opening and closing
navbarOpenBtn.addEventListener('click', () => {
  navbar.classList.remove("translate-x-[-100%]");
  navbar.classList.add("translate-x-0");
});

navbarCloseBtn.addEventListener('click', () => {
  navbar.classList.remove("translate-x-0");
  navbar.classList.add("translate-x-[-100%]");
});

// ! Loop through each filter link and add a click event listener
navbarLinks.forEach(link => {
  link.addEventListener("click", () => {
    navbarLinks.forEach(navLink => navLink.classList.remove('active'));
    link.classList.add("active");
  })
});

// ! Hero carousel
$('.hero-carousel-list').slick({
  autoplay: true,
  autoplaySpeed: 3000,
  arrows: false,
});