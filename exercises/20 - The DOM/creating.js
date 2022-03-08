const myParagraph = document.createElement('p');
myParagraph.textContent = 'I am a P';
myParagraph.classList.add('special');
// console.log(myParagraph);

const myImage = document.createElement('img');
myImage.src = 'https://source.unsplash.com/random/300x300';
myImage.alt = 'Nice photo';

const myDiv = document.createElement('div');
myDiv.classList.add('wrapper');
// console.log(myDiv);

myDiv.appendChild(myParagraph);
myDiv.appendChild(myImage);

document.body.appendChild(myDiv);

const heading = document.createElement('h2');
heading.textContent = 'Cool things';

myDiv.insertAdjacentElement('afterbegin', heading);

// How I did it

// const listItem1 = document.createElement('li');
// listItem1.textContent = 'one';

// const listItem2 = document.createElement('li');
// listItem2.textContent = 'two';

// const listItem3 = document.createElement('li');
// listItem3.textContent = 'three';

// const listItem4 = document.createElement('li');
// listItem4.textContent = 'four';

// const listItem5 = document.createElement('li');
// listItem5.textContent = 'five';

// const myList = document.createElement('ul');
// myList.appendChild(listItem3);
// myList.insertAdjacentElement('afterbegin', listItem2);
// myList.insertAdjacentElement('afterbegin', listItem1);

// myList.insertAdjacentElement('beforeend', listItem4);
// myList.insertAdjacentElement('beforeend', listItem5);
// console.log(myList);

// document.body.appendChild(myList);

// How i did it pt. 2

// const list = document.createElement('ul');

// const li3 = document.createElement('li');
// li3.textContent = 'three';
// list.appendChild(li3);

// const li2 = document.createElement('li');
// li2.textContent = 'two';
// list.insertAdjacentElement('afterbegin', li2);

// const li = document.createElement('li');
// li.textContent = 'one';
// list.insertAdjacentElement('afterbegin', li);

// const li4 = document.createElement('li');
// li4.textContent = 'four';
// list.insertAdjacentElement('beforeend', li4);

// const li5 = document.createElement('li');
// li5.textContent = 'five';
// list.insertAdjacentElement('beforeend', li5);

// console.log(list);

// document.body.insertAdjacentElement('afterbegin', list);

// Mr Bos' way

const list = document.createElement('ul');
const li = document.createElement('li');
li.textContent = 'three';
list.appendChild(li);

document.body.insertAdjacentElement('afterbegin', list);

const li5 = document.createElement('li');
li5.textContent = 'Five';
list.append(li5);

const li1 = li5.cloneNode(true);
li1.textContent = 'one';
list.insertAdjacentElement('afterbegin', li1);

const li4 = document.createElement('li');
li4.textContent = 'four';
li5.insertAdjacentElement('beforebegin', li4);

const li2 = document.createElement('li');
li2.textContent = 'two';
li1.insertAdjacentElement('beforeend', li2);
