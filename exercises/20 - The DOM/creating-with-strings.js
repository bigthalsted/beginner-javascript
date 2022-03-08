const item = document.querySelector('.item');

const src = `https://source.unsplash.com/random/200x200`;
const desc = `Cute Pup`;

const myHTML = `
    <div class="wrapper">
        <h2>${desc}</h2>
        <img src="${src}" alt="${desc}"/>
    </div>
`;

item.innerHTML = myHTML;
console.log(item.innerHTML);
