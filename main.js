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
};

openBtn.addEventListener("click", openNav);

const closeNav = () => {
	nav.style.opacity = 0;
	nav.style.visibility = "hidden";
	closeBtn.style.display = "none";
	openBtn.style.display = "inline-block";
};

closeBtn.addEventListener("click", closeNav);

if (document.body.clientWidth < 1024) {
	nav.querySelectorAll("li a").forEach((navLink) => {
		navLink.addEventListener("click", closeNav);
	});
}

/* GSAP ANIMATION */
gsap.to("header .empty", {
    width: "18rem",
    duration: 1.5,
	ease: "none",
});

gsap.to(".header__right h1", {
	opacity: 1,
	transform: "translateY(0)",
	ease: "none",
});

gsap.to(".header__right p", {
	opacity: 1,
	transform: "translateY(0)",
	delay: 0.2,
	ease: "none",
});

gsap.to(".about__image-sm", {
	y: 75,
	ease: "none",
	scrollTrigger: {
		trigger: "#about",
		start: "top center",
		end: "bottom+=200 center",
		scrub: true,
	},
});

gsap.to(".about__image-lg", {
	y: -75,
	ease: "none",
	scrollTrigger: {
		trigger: "#about",
		start: "top center",
		end: "bottom+=200 center",
		scrub: true,
	},
});

gsap.to("#about .empty", {
	width: "18rem",
	ease: "none",
	scrollTrigger: {
		trigger: "#about",
		start: "top-=400 center",
		end: "bottom+=-100 center",
		scrub: true,
	},
});

gsap.to("#gallery .empty", {
	width: "18rem",
	ease: "none",
	scrollTrigger: {
		trigger: "#gallery",
		start: "top-=400 center",
		end: "bottom+=-500 center",
		scrub: true,
	},
});

gsap.to(".swiper-slide", {
    translateY: "0",
    opacity: 1,
	ease: "none",
	scrollTrigger: {
		trigger: "#gallery",
		start: "top-=50 center",
		end: "bottom+=-100 center",
	},
    stagger: .1,
});

gsap.to("#exhibitions .empty", {
    width: "18rem",
	ease: "none",
	scrollTrigger: {
		trigger: "#exhibitions",
		start: "top-=400 center",
		end: "top+=200 center",
        scrub: true,
	},
});

gsap.to(".exhibitions__gallery article", {
    translateY: 0,
    opacity: 1,
    ease: "none",
    scrollTrigger: {
        trigger: "#exhibitions",
        start: "top center",
        end: "bottom-=100 center",
    },
    stagger: .2,
});    