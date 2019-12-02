const menuButton = document.querySelector('.navbar__menu-button');
const navigation = document.querySelector('.navbar__main-nav');
const hamburger = document.querySelector('.fonticon-hamburger');
const hamburgerClose = document.querySelector('.fonticon-close');

hamburger.addEventListener('click', () => {
	hamburger.classList.toggle('hide-button');
	hamburgerClose.classList.remove('hide-button');
	navigation.classList.add('visible');
});
hamburgerClose.addEventListener('click', () => {
	hamburger.classList.toggle('hide-button');
	hamburgerClose.classList.add('hide-button');
	navigation.classList.remove('visible');
});
