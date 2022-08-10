/* NAVBAR SCROLL */
window.addEventListener("scroll", () => {
	document
		.querySelector("nav")
		.classList.toggle("window-scrolled", window.scrollY > 0);
});

/* CONTACT BUTTONS CIRCULAR TEXT */
const textButtons = document.querySelectorAll(".contact__btn");
textButtons.forEach((textButton) => {
	let text = textButton.querySelector("p");
	text.innerHTML = text.innerHTML
		.split("")
		.map(
			(character, index) =>
				`<span style="transform: rotate(${index * 12}deg)">${character}</span>`
		)
		.join("");
});

/* SWIPER */
var swiper = new Swiper(".mySwiper", {
	slidesPerView: 1,
	speed: 900,
	spaceBetween: 20,
	pagination: {
		el: ".swiper-pagination",
		clickable: true,
	},
	breakpoints: {
		599: {
			slidesPerView: 2,
			spaceBetween: 40,
		},
        1023: {
			slidesPerView: 3,
			spaceBetween: 60,
		},
	},
});

/* HAMBURGER MENU */
const nav = document.querySelector(".nav__links");
const openBtn = document.querySelector("#nav__toggle-open");
const closeBtn = document.querySelector("#nav__toggle-close");

const openNav = () => {
    nav.style.opacity = 1;
    nav.style.visibility = "visible";
    nav.style.pointerEvents = "visible";
    openBtn.style.display = "none";
    closeBtn.style.display = "inline-block";
}

openBtn.addEventListener("click", openNav);

const closeNav = () => {
    nav.style.opacity = 0;
    nav.style.visibility = "hidden";
    closeBtn.style.display = "none";
    openBtn.style.display = "inline-block";
}

closeBtn.addEventListener("click", closeNav);

nav.querySelectorAll("li a").forEach(navLink => {
    navLink.addEventListener("click", closeNav);
});

