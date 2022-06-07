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

  navbarMenu.classList.remove('open');
  scrollIntoView(link);
});

// Navbar toggle button for small screen
const navbarToggleBtn = document.querySelector('.navbar__toggle-btn');
navbarToggleBtn.addEventListener('click', () => {
  navbarMenu.classList.toggle('open');
});

// Handle click on "Contact me" button on home
const homeContactBtn = document.querySelector('.home__contact');
homeContactBtn.addEventListener('click', () => {
  scrollIntoView('#contact');
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

// Filter selected category on projects
const projects = document.querySelectorAll('.project');
const categoryBtns = document.querySelectorAll('.category__btn');
const projectContainer = document.querySelector('.work__projects');

categoryBtns.forEach(btn => {
  btn.addEventListener('click', () => {
    projectContainer.classList.add('anim-out');

    // Remove animation out class after 300ms to delay to show the filtered projects
    setTimeout(() => {
      removeClassName(projects, 'display');
      removeClassName(categoryBtns, 'active');

      btn.classList.add('active');

      displayWork();
      projectContainer.classList.remove('anim-out');
    }, 300);
  });
});

// Set initial Projects display (all)
displayWork();

function displayWork() {
  categoryBtns.forEach(btn => {
    if (btn.classList.contains('active')) {
      const activeBtn = btn.innerText.toLowerCase().slice(0, -1);

      // Select everything when all button clicks
      if (activeBtn === 'all') {
        projects.forEach(project => {
          project.classList.add('display');
        });
      }

      // Add class name according to category & display
      exportProjectCategory(activeBtn).forEach(category => {
        category.classList.add('display');
      });
    }
  });
}

function exportProjectCategory(category) {
  const projectsCategory = document.querySelectorAll(`[data-${category}]`);
  return projectsCategory;
}

function removeClassName(array, className) {
  array.forEach(item => {
    item.classList.remove(className);
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
