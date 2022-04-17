// window.onload = function () {
// 	window.scrollTo(0, 0);
// };
gsap.registerPlugin(ScrollTrigger);

const nav = document.querySelector('.nav');
const navList = document.querySelectorAll('.nav-list');
const logo = document.querySelector('.logo');
const logoImg = document.querySelector('.logo img');

window.addEventListener('scroll', sizeNav);

// function smallLogo() {
// 	if (window.innerWidth < '650px') {
// 		logo.style.width == '150px';
// 		nav.style.paddingLeft = '0';
// 	}
// }

function sizeNav() {
	if (window.scrollY > nav.offsetHeight - 30) {
		nav.classList.add('active');
		// logo.style.width = '150px';
		logo.classList.add('active');
		// nav.style.paddingLeft = '0';
	} else {
		nav.classList.remove('active');
		// logo.classList.remove('active');
		// logo.style.width = '220px';
	}
	// smallLogo();
	//! ADDED
	if ((nav.classList = 'active')) {
		logo.style.width = '150px';
	} else {
		logo.style.width = '220px';
	}
}

//~ mobile nav
const navSlide = () => {
	const burger = document.querySelector('.burger');
	const navList = document.querySelector('.nav-list');
	const navItem = document.querySelectorAll('.nav-list a');

	burger.addEventListener('click', () => {
		navList.classList.toggle('open');
		burger.classList.toggle('toggle');
	});
	//close mobile nav when nav-link clicked
	for (let i = 0; i < navItem.length; i++) {
		let closeNav = navItem[i];

		closeNav.addEventListener('click', () => {
			navList.classList.toggle('open');
			burger.classList.toggle('toggle');
		});
	}
};
navSlide();

//~ mobile vh toolbar fix
let vh = window.innerHeight * 0.01;
document.documentElement.style.setProperty('--vh', `${vh}px`);

window.addEventListener('resize', () => {
	let vh = window.innerHeight * 0.01;
	document.documentElement.style.setProperty('--vh', `${vh}px`);
});

//*~~~* GSAP REUSABLES;
gsap.to('.nav a', {
	x: 0,
	duration: 0.5,
	ease: 'power2.out',
	opacity: 1,
	stagger: 0.08,
});
const btns = document.querySelectorAll('button');
for (let i = 0; i < btns.length; i++) {
	let btn = btns[i];

	gsap.to(btn, {
		scrollTrigger: {
			trigger: btn,
		},
		start: '20px 80%',
		duration: 0.3,
		fontSize: 16,
	});
}

const banners = document.querySelectorAll('.banner-container img');
for (let i = 0; i < banners.length; i++) {
	let banner = banners[i];

	gsap.from(banner, {
		scrollTrigger: {
			trigger: banner,
		},
		y: 200,
		opacity: 0,
		start: '20px 80%',
		duration: 0.7,
	});
}

const fadeBackground = document.querySelectorAll('.fade-background');
for (let i = 0; i < fadeBackground.length; i++) {
	let fadeBack = fadeBackground[i];

	gsap.from(fadeBack, {
		scrollTrigger: {
			trigger: fadeBack,
		},
		opacity: 0,
		start: '20px 80%',
		duration: 0.7,
	});
}

gsap.from('.banner-text p', {
	scrollTrigger: {
		trigger: '.banner-text',
		start: '20px 80%',
	},
	opacity: 0,
	y: 200,
	stagger: 0.5,
	duration: 0.8,
});

// * ===== HOME PAGE SLIDER =====

console.clear();
let count = 0;
const homeImages = document.querySelectorAll('.img-content');
const homeText = document.querySelectorAll('.text-container');

gsap.set(homeImages, { xPercent: -100, opacity: 1, scale: 1 });
gsap.set(homeImages[0], { xPercent: 0, opacity: 1, scale: 1 });

function slideIt() {
	gsap.to(homeImages[count], { xPercent: 100, opacity: 0.8, scale: 0.7 });
	count = count < homeImages.length - 1 ? ++count : 0;
	gsap.fromTo(
		homeImages[count],
		{ xPercent: -100 },
		{ xPercent: 0, opacity: 1, scale: 1 }
	);
	gsap.fromTo(
		homeText[count],
		{ 'clip-path': 'polygon(0 0, 0 0, 0 100%, 0 100%)' },
		{
			'clip-path': 'polygon(100% 0, 0 0, 0 100%, 100% 100%)',
			delay: 0.5,
			duration: 2,
		}
	);
	gsap.to({}, { duration: 4, onComplete: slideIt });
	// console.clear();  //! uncomment out
}

// * ===== HOME =====

if (document.body.classList == 'home-page') {
	gsap.delayedCall(4, () => slideIt());

	const homeCol = gsap.utils.toArray('.home-column');
	for (let i = 0; i < homeCol.length; i++) {
		let hCol = homeCol[i];

		gsap.to(hCol, {
			scrollTrigger: {
				trigger: hCol,
				start: '20px 80%',
			},
			opacity: 1,
			stagger: 0.8,
			duration: 0.8,
			'clip-path': 'polygon(0 0, 100% 0, 100% 100%, 0 100%)',
		});
	}
	gsap.to('.home-row', {
		scrollTrigger: {
			trigger: '.home-row',
			start: '20px 80%',
		},
		ease: 'power2.out',
		opacity: 1,
		duration: 0.5,
		// stagger: 1.6,
		'clip-path': 'polygon(0 0, 100% 0, 100% 100%, 0 100%)',
	});
	gsap.from('.home-testimonials h3, .home-testimonials p', {
		scrollTrigger: {
			trigger: '.home-testimonials',
			start: '20px 80%',
		},
		opacity: 0,
		x: -200,
	});
}

let tlSlider = gsap.timeline({
	defaults: {
		opacity: 0,
		y: 0,
		duration: 0.2,
	},
});

// tlSlider.from('homeText', {});

// const homeCol = gsap.utils.toArray('.home-column');
// for (let i = 0; i < homeCol.length; i++) {
// 	let hCol = homeCol[i];

// 	gsap.to(hCol, {
// 		scrollTrigger: {
// 			trigger: hCol,
// 			start: '20px 80%',
// 		},
// 		opacity: 1,
// 		stagger: 0.8,
// 		duration: 0.8,
// 		'clip-path': 'polygon(0 0, 100% 0, 100% 100%, 0 100%)',
// 	});
// }

// gsap.from('.banner-text p', {
// 	scrollTrigger: {
// 		trigger: '.banner-text',
// 	},
// 	opacity: 0,
// 	y: 200,
// 	stagger: 0.5,
// 	duration: 0.8,
// });

const largeMedia = window.matchMedia('(min-width: 956px)');
const smallMedia = window.matchMedia('(max-width: 955px)');

//* ===== SERVICES =====

if (document.body.classList == 'services-page') {
	// * LARGER SCREENS FOR .BOX ELEMENTS

	if (largeMedia.matches) {
		gsap.to('.top-box', {
			scrollTrigger: {
				trigger: '.top-box',
				start: '20px 80%',
			},
			delay: 0.4,
			stagger: 0.5,
			duration: 0.8,
			'clip-path': 'polygon(0 0, 100% 0, 100% 100%, 0 100%)',
			boxShadow: '5px 15px 20px rgba(0, 0, 0, 0.464)',
		});
		gsap.to('.top-box h4', {
			scrollTrigger: {
				trigger: '.top-box h4',
				start: '20px 80%',
			},
			y: 0,
			opacity: 1,
			delay: 0.4,
			stagger: 0.5,
			duration: 0.5,
		});
		gsap.to(
			'.top-box p',
			{
				scrollTrigger: {
					trigger: '.top-box p',
				},
				y: 0,
				opacity: 1,
				delay: 0.5,
				stagger: 0.5,
				duration: 0.5,
			},
			'-=.3'
		);
		gsap.to('.mid-box', {
			scrollTrigger: {
				trigger: '.mid-box',
				start: '20px 80%',
			},
			delay: 0.4,
			stagger: 0.5,
			duration: 0.8,
			'clip-path': 'polygon(0 0, 100% 0, 100% 100%, 0 100%)',
		});
		gsap.to('.mid-box h4', {
			scrollTrigger: {
				trigger: '.mid-box h4',
				start: '20px 80%',
			},
			y: 0,
			opacity: 1,
			delay: 0.4,
			stagger: 0.5,
			duration: 0.5,
		});
		gsap.to(
			'.mid-box p',
			{
				scrollTrigger: {
					trigger: '.mid-box p',
				},
				y: 0,
				opacity: 1,
				delay: 0.5,
				stagger: 0.5,
				duration: 0.5,
			},
			'-=.3'
		);
		gsap.to('.bottom-box', {
			scrollTrigger: {
				trigger: '.bottom-box',
				start: '20px 80%',
			},
			delay: 0.4,
			stagger: 0.5,
			duration: 0.8,
			'clip-path': 'polygon(0 0, 100% 0, 100% 100%, 0 100%)',
		});
		gsap.to('.bottom-box h4', {
			scrollTrigger: {
				trigger: '.bottom-box h4',
				start: '20px 80%',
			},
			y: 0,
			opacity: 1,
			delay: 0.4,
			stagger: 0.5,
			duration: 0.5,
		});
		gsap.to(
			'.bottom-box p',
			{
				scrollTrigger: {
					trigger: '.bottom-box p',
				},
				y: 0,
				opacity: 1,
				delay: 0.5,
				stagger: 0.5,
				duration: 0.5,
			},
			'-=.3'
		);
	}

	//*  SMALLER SCREENS FOR .BOX ELEMENTS

	const boxes = gsap.utils.toArray('.box');
	const boxHeaders = gsap.utils.toArray('.box h4');
	const boxPs = gsap.utils.toArray('.box p');

	for (let i = 0; i < boxes.length; i++) {
		let box = boxes[i];

		if (smallMedia.matches) {
			gsap.to(box, {
				scrollTrigger: {
					trigger: box,
					start: '20px 80%',
				},
				delay: 0.4,
				duration: 0.8,
				'clip-path': 'polygon(0 0, 100% 0, 100% 100%, 0 100%)',
			});
		}
	}
	for (let i = 0; i < boxHeaders.length; i++) {
		let boxHeader = boxHeaders[i];

		if (smallMedia.matches) {
			gsap.to(boxHeader, {
				scrollTrigger: {
					trigger: boxHeader,
					start: '20px 80%',
				},
				y: 0,
				opacity: 1,
				delay: 0.4,
				duration: 0.5,
			});
		}
	}
	for (let i = 0; i < boxPs.length; i++) {
		let boxP = boxPs[i];

		if (smallMedia.matches) {
			gsap.to(boxP, {
				scrollTrigger: {
					trigger: boxP,
				},
				y: 0,
				opacity: 1,
				delay: 0.5,
				// stagger: 0.6,
				duration: 0.5,
			});
		}
	}
}

gsap.from('.zoom-in', {
	scrollTrigger: {
		trigger: '.testimonial-img-container',
		start: '20px 80%',
	},
	scale: 0.1,
	duration: 1.3,
	ease: 'power2.out',
});

const accordion = document.querySelectorAll('.question-btn');
let i;

for (i = 0; i < accordion.length; i++) {
	let acc = accordion[i];

	acc.addEventListener('click', function () {
		this.classList.toggle('.faq-active');

		let panel = this.nextElementSibling;
		if (panel.style.display == 'block') {
			panel.style.display = 'none';

			acc.style.backgroundColor = '#f2f2f2';
			acc.style.color = 'var(--dark-blue)';
		} else {
			panel.style.display = 'block';
			acc.style.backgroundColor = 'var(--dark-blue)';
			acc.style.color = '#f2f2f2';
		}
	});
}

//* ===== ABOUT =====

if (document.body.classList == 'about-page') {
	let tlAbout = gsap.timeline({
		defaults: {
			ease: 'power2.out',
			opacity: 1,
			duration: 0.5,
		},
	});
	tlAbout
		.from(
			'.top p',
			{
				y: 200,
				opacity: 0,
				duration: 0.8,
				stagger: 0.14,
			},
			'-=.4'
		)
		.to('.about-line:first-of-type', {
			x: -2000,
			duration: 2,
		})
		.to(
			'.about-line:last-of-type',
			{
				x: 2000,
				duration: 2,
			},
			'-=1.5'
		)
		.to(
			'.row',
			{
				duration: 2.5,
			},
			'-=4'
		)
		.to(
			'.about-column',
			{
				'clip-path': 'polygon(0 0, 100% 0, 100% 100%, 0 100%)',
				duration: 0.4,
				stagger: 0.4,
				ease: 'none',
			},
			'-=2.5'
		);
}

const slideUp = gsap.utils.toArray('.slide-up');
for (let i = 0; i < slideUp.length; i++) {
	let slide = slideUp[i];

	gsap.from(slide, {
		scrollTrigger: {
			trigger: slide,
			start: '10px 90%',
		},
		y: 100,
		opacity: 0,
		stagger: 0.5,
		duration: 0.8,
	});
}

//* ===== WHY WORK WITH LNC =====
if (document.body.classList == 'sub-page') {
	let tlWhy = gsap.timeline({
		defaults: {
			ease: 'power3.out',
			opacity: 1,
		},
	});
	tlWhy
		.to('.img-box', {
			duration: 1,
			'clip-path': 'polygon(0 0, 100% 0, 100% 100%, 0% 100%)',
		})
		.to('.block', {
			duration: 2.6,
			delay: 2.2,
			'clip-path': 'polygon(0 0, 100% 0, 100% 100%, 0% 100%)',
		});

	// SMALL MEDIA

	gsap.to('.block', {
		scrollTrigger: {
			trigger: '.block',
			start: '10px 90%',
		},
		opacity: 1,
		duration: 1.3,
		x: 1,
		ease: 'none',
		'clip-path': 'polygon(0 0, 100% 0, 100% 100%, 0% 100%)',
	});

	const tlDif = gsap.timeline({
		scrollTrigger: {
			trigger: '#different',
			start: '20px 80%',
		},
	});
	tlDif
		.to('.fade', {
			opacity: 1,
			duration: 2,
		})
		.to(
			'.clip-right',
			{
				duration: 0.5,
				stagger: 0.4,
				'clip-path': 'polygon(0 0, 100% 0, 100% 100%, 0 100%)',
			},
			'-=.5'
		);
}

//* About, Sub-page, and Contact Page
if (document.body.classList == 'about-page' || 'sub-page' || 'contact-page') {
	let clipper = gsap.timeline({
		defaults: {
			ease: 'power3.out',
			opacity: 1,
		},
	});
	clipper
		.from('.header', {
			x: 200,
			opacity: 0,
			duration: 1,
		})
		.to(
			'.head-clip',
			{
				'clip-path': 'polygon(0 0, 100% 0, 100% 100%, 0 100%)',
				duration: 1.2,
			},
			'-=.5'
		);
}

//* ===== CONTACT =====
if (document.body.classList == 'contact-page') {
	gsap.from('.form-container h3', {
		scrollTrigger: {
			trigger: '.form-container h3',
			start: '20px 80%',
		},
		y: -100,
		duration: 1.3,
		opacity: 0,
		ease: 'power3.out',
	});
	gsap.to('.clip-right', {
		scrollTrigger: {
			trigger: '.form-container',
			start: '20px 80%',
		},
		duration: 1.5,
		stagger: 0.4,
		'clip-path': 'polygon(0 0, 100% 0, 100% 100%, 0 100%)',
	});
	const infos = gsap.utils.toArray('.info-work p');
	infos.forEach((info) => {
		gsap.from(info, {
			scrollTrigger: {
				trigger: info,
				start: '20px 80%',
			},
			x: -200,
			opacity: 0,
			duration: 1,
			// 'clip-path': 'polygon(0 0, 100% 0, 100% 100%, 0% 100%)',
		});
	});

	// gsap.to('.info-work p', {
	// 	scrollTrigger: {
	// 		trigger: '.info-work p'
	// 	}
	// })
}

// ! ========= ERASE ==========
// gsap.from('.hire-header', {
// 	scrollTrigger: {
// 		trigger: '.hire-header',
// 		start: '20px 80%',
// 	},
// 	opacity: 0,
// 	x: 150,
// 	duration: 1.2,
// 	scrub: true,
// 	// ease: 'elastic',
// });
// const blocks = gsap.utils.toArray('.block');
// blocks.forEach((block) => {
// 	gsap.to(block, {
// 		scrollTrigger: {
// 			trigger: block,
// 			start: '10px 90%',
// 		},
// 		x: 0,
// 		opacity: 1,
// 		duration: 1.3,
// 		'clip-path': 'polygon(0 0, 100% 0, 100% 100%, 0% 100%)',
// 	});
// });

// // * LARGER SCREENS FOR .BOX ELEMENTS
// const largeMedia = window.matchMedia('(min-width: 956px)');
// if (largeMedia.matches) {
// 	gsap.to('.box', {
// 		scrollTrigger: {
// 			trigger: '.box',
// 			start: '10px 90%',
// 		},
// 		delay: 0.4,
// 		stagger: 0.5,
// 		duration: 0.5,
// 		'clip-path': 'polygon(0 0, 100% 0, 100% 100%, 0 100%)',
// 	});
// }
// if (largeMedia.matches) {
// 	gsap.to('.box h4', {
// 		scrollTrigger: {
// 			trigger: '.box h4',
// 			start: '10px 90%',
// 		},
// 		y: 0,
// 		opacity: 1,
// 		delay: 0.4,
// 		stagger: 0.5,
// 		duration: 0.5,
// 	});
// }
// if (largeMedia.matches) {
// 	gsap.to(
// 		'.box p',
// 		{
// 			scrollTrigger: {
// 				trigger: '.box p',
// 			},
// 			y: 0,
// 			opacity: 1,
// 			delay: 0.5,
// 			stagger: 0.5,
// 			duration: 0.5,
// 		},
// 		'-=.3'
// 	);
// }
// // * SMALLER SCREENS FOR .BOX ELEMENTS
// const smallMedia = window.matchMedia('(max-width: 955px)');

// const boxes = gsap.utils.toArray('.box');
// const boxHeaders = gsap.utils.toArray('.box h4');
// const boxPs = gsap.utils.toArray('.box p');

// for (let i = 0; i < boxes.length; i++) {
// 	let box = boxes[i];

// 	if (smallMedia.matches) {
// 		gsap.to(box, {
// 			scrollTrigger: {
// 				trigger: box,
// 				start: '10px 90%',
// 			},
// 			delay: 0.4,
// 			// stagger: 0.5,
// 			duration: 0.8,
// 			'clip-path': 'polygon(0 0, 100% 0, 100% 100%, 0 100%)',
// 		});
// 	}
// }
// for (let i = 0; i < boxHeaders.length; i++) {
// 	let boxHeader = boxHeaders[i];

// 	if (smallMedia.matches) {
// 		gsap.to(boxHeader, {
// 			scrollTrigger: {
// 				trigger: boxHeader,
// 				start: '10px 90%',
// 			},
// 			y: 0,
// 			opacity: 1,
// 			delay: 0.4,
// 			// stagger: 0.5,
// 			duration: 0.5,
// 		});
// 	}
// }
// for (let i = 0; i < boxPs.length; i++) {
// 	let boxP = boxPs[i];

// 	if (smallMedia.matches) {
// 		gsap.to(boxP, {
// 			scrollTrigger: {
// 				trigger: boxP,
// 			},
// 			y: 0,
// 			opacity: 1,
// 			delay: 0.5,
// 			stagger: 0.6,
// 			duration: 0.5,
// 		});
// 	}
// }

// const servicesTL = gsap.timeline({
// 	ease: 'power1.out',
// 	scrollTrigger: {
// 		trigger: '#services',
// 		start: 'top center',
// 		duration: 0.5,
// 		toggleActions: 'play none play none',
// 	},
// });
// servicesTL
// 	.from('.services-flag-container', { opacity: 0, x: 1200 })
// 	.from('.video-container', {
// 		x: 1200,
// 		rotate: 720,
// 		width: -500,
// 		duration: 1,
// 	})
// 	.from('.video-container .video', { height: 50, delay: 1.2 })
// 	.from('.services-text', { opacity: 0, y: 500 })
// 	.from('.services-text p', { opacity: 0, duration: 0.8 });
