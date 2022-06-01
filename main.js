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

const homeContactBtn = document.querySelector('.home__contact');
const navbarMenuItems = document.querySelectorAll('.navbar__menu__item');

// Sections
const home = document.getElementById('home');
const about = document.getElementById('about');
const skills = document.getElementById('skills');
const work = document.getElementById('work');
const contact = document.getElementById('contact');

homeContactBtn.addEventListener('click', () => {
  contact.scrollIntoView();
});

navbarMenuItems.forEach(item => {
  item.addEventListener('click', () => {
    removeClassName();
    item.classList.add('active');

    // check which section should go
    const menuName = item.innerHTML.toLowerCase();
    if (menuName.includes(home.id)) {
      home.scrollIntoView({
        behavior: 'smooth',
        block: 'start',
        inline: 'nearest',
      });
    }

    if (menuName.includes(about.id)) {
      about.scrollIntoView({
        behavior: 'smooth',
        block: 'start',
        inline: 'nearest',
      });
    }

    if (menuName.includes(skills.id)) {
      skills.scrollIntoView({
        behavior: 'smooth',
        block: 'start',
        inline: 'nearest',
      });
    }

    if (menuName.includes(work.id)) {
      work.scrollIntoView({
        behavior: 'smooth',
        block: 'start',
        inline: 'nearest',
      });
    }

    if (menuName.includes(contact.id)) {
      contact.scrollIntoView({
        behavior: 'smooth',
        block: 'start',
        inline: 'nearest',
      });
    }
  });
});

const removeClassName = () => {
  navbarMenuItems.forEach(item => {
    item.classList.remove('active');
  });
};
