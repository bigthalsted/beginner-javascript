const wes = document.querySelector('.wes');

//  <p class="wes">I am Wes, I <em>love</em> to bbq and <strong>Make websites</strong></p>

// Element properties

console.log(wes.children); // [em, strong]
console.log(wes.childNodes); // [text, em, text, strong]
console.log(wes.firstElementChild); // em
console.log(wes.lastElementChild); // strong
console.log(wes.previousElementSibling); // null
console.log(wes.nextElementSibling); // img.nice.cool
console.log(wes.parentElement); // body

// Node properties

console.log(wes.childNodes);
console.log(wes.firstChild);
console.log(wes.lastChild);
console.log(wes.previousSibling);
console.log(wes.nextSibling);
console.log(wes.parentNode);

// removing elements

const p = document.createElement('p');
p.textContent = 'I will be removed';
document.body.appendChild(p);

p.remove();

console.log(p);

document.body.appendChild(p);
