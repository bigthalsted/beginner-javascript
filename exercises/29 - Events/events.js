const butts = document.querySelector('.butts');
const coolButton = document.querySelector('.cool');

function handleClick() {
  console.log('IT GOT CLICKED!!!');
}
butts.addEventListener('click', handleClick);
coolButton.addEventListener('click', handleClick);

butts.removeEventListener('click', handleClick);

// Listen on multiple items

const buyButtons = document.querySelectorAll('button.buy');

function handleBuyButtonClick(event) {
  const button = event.target;
  //   console.log(button.textContent);
  //   console.log(parseFloat(event.target.dataset.price));
  console.log(event.target);
  console.log(event.currentTarget);
  console.log(event.target === event.currentTarget);
  // stop this event from bubbling up
}

buyButtons.forEach((buyButton) => {
  buyButton.addEventListener('click', handleBuyButtonClick);
});

window.addEventListener(
  'click',
  (event) => {
    console.log('you clicked the window');
    console.log(event.target);
    console.log(event.type);
    console.log(event.bubbles);
  },
  { capture: true }
);

const photoEl = document.querySelector('.photo');

photoEl.addEventListener('mouseenter', function (e) {
  console.log(e.currentTarget);
  console.log(this);
});
