
const button = document.getElementById('theme_button');


if (localStorage.getItem('theme') === 'dark') {
  document.body.classList.add('dark_mode');
  button.textContent = 'Switch to Light Mode'; 
} else {
  button.textContent = 'Switch to Dark Mode';
}

button.addEventListener('click', () => {
  document.body.classList.toggle('dark_mode');

  if (document.body.classList.contains('dark_mode')) {
    localStorage.setItem('theme', 'dark');
    button.textContent = 'Switch to Light Mode'; 
  } else {
    localStorage.setItem('theme', 'light');
    button.textContent = 'Switch to Dark Mode'; 
  }
});



const commentsField = document.getElementById('comments');
const errorMessage = document.getElementById('error-message');

commentsField.addEventListener('input', function() {
  const regex = /[^a-zA-Z0-9\s.,!?'-]/; 
  
  if (regex.test(commentsField.value)) {
    errorMessage.style.display = 'block';
    errorMessage.innerText = 'You have typed an illegal character. Please remove it.';
  } 
  else {
    errorMessage.style.display = 'none';
  }

  const length = commentsField.value.length;
  const charactersLeft = 500 - length;

  const charCount = document.getElementById('character_count');

  charCount.textContent = `${charactersLeft} characters remaining`;

});

