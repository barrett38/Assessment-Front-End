
// Section 1: Define buttons on site
const button1 = document.getElementById('color');
const button2 = document.getElementById('place');
const button3 = document.getElementById('ritual');

// Section 2: Define messages for each button
function handleButtonClick(event) {
    const messages = {
        'color': 'Emerald Green',
        'place': 'Anywhere with my family',
        'ritual': 'Reading a good book.'
    };
    const message = messages[event.target.id] || na;
    alert(message);
}

// Section 3: Define function to handle button click
document.body.addEventListener('click', handleButtonClick);
