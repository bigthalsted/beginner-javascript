// Make a div

const myDiv = document.createElement('div');

// add a class of wrapper to it

myDiv.classList.add('wrapper');

// put it into the body

document.body.appendChild(myDiv);

// make an unordered list

const myList = `
<ul>
    <li>one</li>
    <li>two</li>
    <li>three</li>
</ul>
`;

// add three list items with the words "one, two, three" in them
// put that list into the above wrapper

myDiv.innerHTML = myList;

// create an image

const myImage = document.createElement('img');

// set the source to an image

myImage.src = 'https://source.unsplash.com/random/300x300';

// set the width to 250
myImage.width = 250;
myImage.height = 250;
// add a class of cute
myImage.classList.add('cute');
// add an alt of Cute Puppy
myImage.alt = 'cute puppy';
// Append that image to the wrapper

myDiv.appendChild(myImage);

// with HTML string, make a div, with two paragraphs inside of it

const myHTML = `
<div class="myDiv">
    <p>paragraph one</p>
    <p>paragraph two</p>
</div>
`;

const ulElement = myDiv.querySelector('ul');

// put this div before the unordered list from above

ulElement.insertAdjacentHTML('beforebegin', myHTML);

// add a class to the second paragraph called warning

const myDiv2 = document.querySelector('.myDiv');

myDiv2.children[1].classList.add('warning');

// remove the first paragraph

myDiv2.firstElementChild.remove();

// create a function called generatePlayerCard that takes in three arguments: name, age, and height

function generatePlayerCard(name, age, height) {
  const html = `
    <div class="playerCard">
      <h2>${name} — ${age}</h2>
      <p>Their Height is ${height} and ${age} years old. In Dog years this person would be ${
    age * 7
  }. That would be a tall dog!
        <button class="delete" type="button">&times; Delete</button>
    </p>

    </div>
  `;
  return html;
}

// have that function return html that looks like this:
// <div class="playerCard">
//   <h2>NAME — AGE</h2>
//   <p>They are HEIGHT and AGE years old. In Dog years this person would be AGEINDOGYEARS. That would be a tall dog!</p>
// </div>

// make a new div with a class of cards
const cards = document.createElement('div');
cards.classList.add('cards');
// Have that function make 4 cards
let cardsHTML = generatePlayerCard('fia', 19, "5'5");
cardsHTML += generatePlayerCard('tommy', 21, "5'8");
cardsHTML += generatePlayerCard('tabi', 28, "5'3");
cardsHTML += generatePlayerCard('tom', 70, "5'7");

cards.innerHTML = cardsHTML;
myDiv.insertAdjacentElement('beforebegin', cards);
// append those cards to the div
// put the div into the DOM just before the wrapper element
// Bonus, put a delete Button on each card so when you click it, the whole card is removed

// select all the buttons!
const buttons = document.querySelectorAll('.delete');
// make out delete function
function deleteCard(event) {
  const buttonThatGotClicked = event.currentTarget;
  // buttonThatGotClicked.parentElement.remove();
  buttonThatGotClicked.closest('.playerCard').remove();
}
// loop over them and attach a listener
buttons.forEach((button) => button.addEventListener('click', deleteCard));
