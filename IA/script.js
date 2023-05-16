// Get all the slider images and captions
const sliderImages = document.querySelectorAll('.slider img');
const sliderCaptions = document.querySelectorAll('.slider .caption');

// Set the index of the active slide
let activeIndex = 0;

// Set the interval between slides
const interval = 5000;

// Create a function to show the next slide
function showNextSlide() {
  // Set the opacity of the current active slide to 0
  sliderImages[activeIndex].style.opacity = 0;
  sliderCaptions[activeIndex].classList.remove('active');
  sliderCaptions[activeIndex].classList.add('inactive');
  
  // Increment the active index
  activeIndex++;

  // If the active index is greater than or equal to the number of slides, reset to 0
  if (activeIndex >= sliderImages.length) {
    activeIndex = 0;
  }

  // Set the opacity of the new active slide to 1
  sliderImages[activeIndex].style.opacity = 1;
  sliderCaptions[activeIndex].classList.remove('inactive');
  sliderCaptions[activeIndex].classList.add('active');
}

// Create a function to show the previous slide
function showPrevSlide() {
  // Set the opacity of the current active slide to 0
  sliderImages[activeIndex].style.opacity = 0;
  sliderCaptions[activeIndex].classList.remove('active');
  sliderCaptions[activeIndex].classList.add('inactive');

  // Decrement the active index
  activeIndex--;

  // If the active index is less than 0, set it to the last slide index
  if (activeIndex < 0) {
    activeIndex = sliderImages.length - 1;
  }

  // Set the opacity of the new active slide to 1
  sliderImages[activeIndex].style.opacity = 1;
  sliderCaptions[activeIndex].classList.remove('inactive');
  sliderCaptions[activeIndex].classList.add('active');
}

// Call the showNextSlide function every interval
setInterval(showNextSlide, interval);

// Add click event listeners to the "next" and "prev" buttons
document.getElementById("next").addEventListener('click', showNextSlide);
document.getElementById("prev").addEventListener('click', showPrevSlide);