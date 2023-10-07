// console.log(`hello world`);
// See https://ed.devmountain.com/materials/fah11/exercises/assessment-front-end-web/

// Functions to handle form submission and mouseover events
const sub = `Form has been submitted successfully!`;
const handleSubmit = (evt) => {alert(sub), evt.preventDefault()};

const pic = `Nice picture!`;
const handleMouseOver = (evt) => {alert(pic);};

// Finding elements in the DOM and adding event listeners
const form = document.querySelector(`#contact`);
form.addEventListener(`submit`, handleSubmit);

const catImage = document.querySelector(`img[src="./purrloin.png"]`);
catImage.addEventListener(`mouseover`, handleMouseOver);
