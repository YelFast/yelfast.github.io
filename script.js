const navSlide = () => {
	const burgerBtn = document.querySelector(".burger-btn");
	const navMenu = document.querySelector(".nav-menu");
	const navLinks = document.querySelectorAll(".nav-menu li");

	burgerBtn.addEventListener("click", () => {
		// Toggle burgerBtn
		burgerBtn.classList.toggle("active")

		// Toggle navMenu
		navMenu.classList.toggle("active");

		// Animate navLinks
		navLinks.forEach((link, index) => {
			if (link.style.animation) {
				link.style.animation = "";
			} else {
				link.style.animation = `navLinkFade 0.5s ease forwards ${index / 5 + 0.5}s`;
			}
		});
	});
}

navSlide();