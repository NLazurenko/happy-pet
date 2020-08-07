const navSlide = () => {
	const burger = document.querySelector('.burger')
	const nav = document.querySelector('.menu__list')
	const navLinks = document.querySelectorAll('.menu__list li')

	burger.addEventListener('click', () => {
		//Toggle Nav
		nav.classList.toggle('nav-active')

		//Animate Links
		navLinks.forEach((link, index) => {
			if (link.style.animation) {
				link.style.animation = ''
			} else {
				link.style.animation = `navLinkFade .5s ease forwards ${index / 4 + 0.2}s`
			}
		})

		//Burger Animations
		burger.classList.toggle('toggle')
	})

}

navSlide()