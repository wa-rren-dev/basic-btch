const darkMode = document.querySelector('#dark-mode');
const superDarkMode = document.querySelector('#super-dark-mode');

if (darkMode) {
  darkMode.addEventListener('click', function() {
    alert('Grow up, just read it.');
  });
}

if (superDarkMode) {
  superDarkMode.addEventListener('click', function() {
    document.querySelectorAll('*').forEach((i) => {
      i.style.color='black';
      i.style.backgroundColor = 'black';
    });
    alert('You asked for it');
  });
}
