// Select the button and joke container elements from the HTML
const jokeBtn = document.getElementById('joke-btn');
const setup = document.getElementById('setup');
const punchline = document.getElementById('punchline');

// Add an event listener to the button
jokeBtn.addEventListener('click', function() {
  console.log('Getting a joke...');

  // Show a quick loading message while the joke is being fetched
  setup.textContent = 'Loading joke...';
  punchline.textContent = '';

  // Fetch one random programming joke from the Official Joke API
  fetch('https://official-joke-api.appspot.com/jokes/programming/random')
    .then(function(response) {
      return response.json();
    })
    .then(function(data) {
      // This endpoint returns an array with one joke object
      const joke = data[0];

      // Display the joke on the page
      setup.textContent = joke.setup;
      punchline.textContent = joke.punchline;
    });
});