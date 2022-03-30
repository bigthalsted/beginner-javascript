const textarea = document.querySelector('[name="text"]');
const result = document.querySelector('.result');
const inputs = document.querySelectorAll('[name="filter"]');
console.log(textarea, result, inputs);

const filters = {
  sarcastic(letter, index) {
    if (index % 2) {
      return letter.toUpperCase();
    }
    // if it is even, it will return zero and we will lowercase it
    return letter.toLowerCase();
  },
  funky() {},
  unable() {},
};

function transformText(text) {
  const filter = document.querySelector('[name="filter"]:checked').value;
  const mod = Array.from(text).map(filters.sarcastic);
  console.log(mod);
  result.textContent = mod.join('');
}

textarea.addEventListener('input', (e) => transformText(e.target.value));
