const menuToggle = document.querySelector('.menu-toggle input');
const nav = document.querySelector('nav .nav-bottom ul');

menuToggle.addEventListener('click', function() {
	nav.classList.toggle('slide');
})

const menuLogin = document.querySelector('loginIcon');
const login = document.querySelector('.container-login')

menuLogin.addEventListener('click', function() {
	login.classList.toggle('active')
})

// Narik
window.addEventListener('scroll', reveal);

function reveal() {
	var reveals = document.querySelectorAll('.reveal');

	for(var i = 0 ; i < reveals.length; i++)
	{
		var windowheigth = window.innerHeight;
		var revealtop = reveals[i].getBoundingClientRect().top;
		var revealpoint = 150;

		if(revealtop < windowheigth - revealpoint)
		{
			reveals[i].classList.add('active');
		}
		else
		{
			reveals[i].classList.add('active');
		}
	}
}