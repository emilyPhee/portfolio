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

  const scrollTo = document.querySelector(link);
  scrollTo.scrollIntoView({
    behavior: 'smooth',
    block: 'start',
    inline: 'nearest',
  });
});

const homeContactBtn = document.querySelector('.home__contact');
const contact = document.getElementById('contact');
homeContactBtn.addEventListener('click', () => {
  contact.scrollIntoView();
});

navbarMenuItems.forEach(item => {
  item.addEventListener('click', () => {
    removeClassName();
    item.classList.add('active');
  });
});

const removeClassName = () => {
  navbarMenuItems.forEach(item => {
    item.classList.remove('active');
  });
};
