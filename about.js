const consoleLog = console.log("hello world");

// PNG image of Purrloin
const catImage = document.querySelector('img[src="./purrloin.png"]');

// querySelector referring to home.html
const form = document.querySelector('#contact');

// Functions to handle form submission and mouseover events
function handleSubmit(evt) {
	evt.preventDefault();
	alert('Form has been submitted successfully!');
}

function handleMouseOver(evt) {
	alert('You have great taste in pictures!');
}

form.addEventListener('submit', handleSubmit);
catImage.addEventListener('mouseover', handleMouseOver);
