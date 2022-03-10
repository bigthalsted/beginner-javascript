const item = document.querySelector('.item');

const width = '500x500';
const src = `https://source.unsplash.com/random/${width}`;
const desc = `Cute pup <img onload="alert('HACKED')" src="https://source.unsplash.com/random/50x50"/>`;

const myHTML = `
<div class="wrapper">
    <h2>${desc}</h2>
    <img src="${src}" alt="${desc}"/>
</div>`;

// turn a string into a DOM element
const myFragment = document.createRange().createContextualFragment(myHTML);

document.body.appendChild(myFragment);
