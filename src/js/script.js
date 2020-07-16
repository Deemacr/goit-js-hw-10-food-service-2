'use strict'

const Theme = {
	LIGHT: 'light-theme',
	DARK: 'dark-theme',
};

const btnSwitch = document.querySelector('.js-switch-input')
const themeSwitch = document.querySelector('body')

themeSwitch.classList.add(Theme.LIGHT)

const savedTheme = localStorage.getItem('checked');


const checkBox = () => {
	if (savedTheme === 'true') {
		themeSwitch.classList.replace(Theme.LIGHT, Theme.DARK);
		document.getElementById("theme-switch-control").checked = true;
		return
	} else {
		themeSwitch.classList.replace(Theme.DARK, Theme.LIGHT);
		document.getElementById("theme-switch-control").checked = false;
	}
}
checkBox()

const changeTheme = () => {
	if (themeSwitch.classList.contains(Theme.LIGHT)) {
		themeSwitch.classList.replace(Theme.LIGHT, Theme.DARK);
		document.getElementById("theme-switch-control").checked = true;
		localStorage.setItem('checked', 'true');
	}
	else {
		themeSwitch.classList.replace(Theme.DARK, Theme.LIGHT);
		document.getElementById("theme-switch-control").checked = false;
		localStorage.setItem('checked', 'false');
	}
};


btnSwitch.addEventListener('change', changeTheme);


