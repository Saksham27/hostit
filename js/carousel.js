const track = document.querySelector('.carousel__track');
const slides = Array.from(track.children);

const dotsNav = document.querySelector('.carousel__nav');
const dots = Array.from(dotsNav.children);

// get width of one slide
const slideWidth = slides[0].getBoundingClientRect().width;

// Arrange slides side by side ---- becuse of position:absloute they stack on top of each other
const setSlidePosition = (slide, index) => {
	slide.style.left = slideWidth * index + 'px';
};
slides.forEach(setSlidePosition);

// FUNCTION TO move to the target slide
const moveToSlide = (track, currentSlide, targetSlide) => {
	// move to the next slide
	if (targetSlide.style.left === null) {
		targetSlide = slides[0];
	}
	track.style.transform = 'translateX(-' + targetSlide.style.left + ')';
	currentSlide.classList.remove('current-slide');
	targetSlide.classList.add('current-slide');
};

// FCUNTION to update the slide no indicator blue dot
const updateDots = (currentDot, targetDot) => {
	currentDot.classList.remove('current');
	targetDot.classList.add('current');
};

dotsNav.addEventListener('click', (e) => {
	const targetDot = e.target.closest('button');

	if (!targetDot) return;

	const currentSlide = track.querySelector('.current-slide');
	const currentDot = dotsNav.querySelector('.current');
	const targetIndex = dots.findIndex((dot) => dot === targetDot);
	const targetSlide = slides[targetIndex];

	moveToSlide(track, currentSlide, targetSlide);
	updateDots(currentDot, targetDot);
});
