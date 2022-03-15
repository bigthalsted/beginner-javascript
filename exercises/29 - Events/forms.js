const wes = document.querySelector('.wes');

wes.addEventListener('click', (e) => {
  const shouldChangePage = confirm(
    'this website might be malicious do you wish to proceed'
  );
  if (!shouldChangePage) {
    e.preventDefault();
  }
});

const signupForm = document.querySelector('[name = "signup"]');

signupForm.addEventListener('submit', (e) => {
  const name = e.currentTarget.name.value;
  if (name.includes('chad')) {
    alert('stupid name');
    e.preventDefault();
  }
});

function logEvent(e) {
  console.log(e.type);
  console.log(e.currentTarget.value);
}

signupForm.name.addEventListener('keyup', logEvent);
signupForm.name.addEventListener('keydown', logEvent);
signupForm.name.addEventListener('focus', logEvent);
signupForm.name.addEventListener('blur', logEvent);

const photo = document.querySelector('.photo');

function handlePhotoClick(e) {
  if (e.type === 'click' || e.key === 'enter') {
    console.log('you clicked the photo');
  }
}

photo.addEventListener('click', handlePhotoClick);
photo.addEventListener('keyup', handlePhotoClick);
