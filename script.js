const scrollUp = document.querySelector('.scroll-up');
const navBar = document.querySelector('nav');

scrollUp.addEventListener('click', () => {
  navBar.scrollIntoView({ behavior: 'smooth' });
});
