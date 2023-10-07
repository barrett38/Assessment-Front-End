// I try to make my code as condensed as possible
// That is the biggest thing I try to work on
// See https://ed.devmountain.com/materials/fah11/exercises/assessment-front-end-web/

// Section 1: Define buttons and messages
const button1 = document.getElementById('color');
const fc = `Emerald Green`;
const button2 = document.getElementById('place');
const fp = `Anywhere with my family`;
const button3 = document.getElementById('ritual');
const fr = `Reading a good book.`;
const msgs = {'color': fc, 'place': fp, 'ritual': fr};

// Section 2: Define messages for each button with function
const buttonClick = (ev) => alert(msgs[ev.target.id] || na);

// Section 3: Define function to handle button click
document.body.addEventListener('click', buttonClick);
