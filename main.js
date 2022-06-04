'use strict';

// Make navbar transparent when it is on the top
const navBar = document.getElementById('navbar');
const navbarHeight = navBar.getBoundingClientRect().height;

document.addEventListener('scroll', () => {
  if (window.scrollY > navbarHeight) {
    navBar.classList.add('navbar--dark');
  } else {
    navBar.classList.remove('navbar--dark');
  }
});

// Handle scrolling when tapping on the navbar menu
const navbarMenu = document.querySelector('.navbar__menu');
const navbarMenuItems = document.querySelectorAll('.navbar__menu__item');

navbarMenu.addEventListener('click', event => {
  const link = event.target.dataset.link;
  if (link == null) return;
  scrollIntoView(link);
});

// Handle click on "Contact me" button on home
const homeContactBtn = document.querySelector('.home__contact');
homeContactBtn.addEventListener('click', () => {
  scrollIntoView('#contact');
});

navbarMenuItems.forEach(item => {
  item.addEventListener('click', () => {
    removeClassName();
    item.classList.add('active');
  });
});

// Make home transparent when it is scrolling
const homeContainer = document.querySelector('.home__container');
const homeHeight = homeContainer.getBoundingClientRect().height;

document.addEventListener('scroll', () => {
  const scrollYHeight = window.scrollY;
  homeContainer.style.opacity = `${1 - scrollYHeight / homeHeight}`;
});

// Handle Arrow up button
const arrowUpBtn = document.querySelector('.arrow-up');
document.addEventListener('scroll', () => {
  if (window.scrollY > homeHeight / 2) {
    arrowUpBtn.classList.add('visible');
  } else {
    arrowUpBtn.classList.remove('visible');
  }
});

arrowUpBtn.addEventListener('click', () => {
  scrollIntoView('#home');
});

function removeClassName() {
  navbarMenuItems.forEach(item => {
    item.classList.remove('active');
  });
}

function scrollIntoView(selector) {
  const scrollTo = document.querySelector(selector);
  scrollTo.scrollIntoView({
    behavior: 'smooth',
    block: 'start',
    inline: 'nearest',
  });
}
