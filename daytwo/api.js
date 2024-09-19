document.addEventListener('DOMContentLoaded', function() {
    const jokeBtn = document.getElementById('jokeBtn');
    const jokeDisplay = document.getElementById('jokeDisplay');

    jokeBtn.addEventListener('click', function() {
        // Fetch a new joke from the API
        fetch('https://v2.jokeapi.dev/joke/Any?format=json')
            .then(response => {
                if (!response.ok) {
                    throw new Error('Network response was not ok');
                }
                return response.json();
            })
            .then(data => {
                // Check if the joke is a single joke or a two-part joke
                if (data.type === 'single') {
                    jokeDisplay.textContent = data.joke;
                } else {
                    jokeDisplay.textContent = `${data.setup} ::::: ${data.delivery}`;
                }
            })
            .catch(error => {
                jokeDisplay.textContent = 'Oops! Something went wrong. Please try again later.';
                console.error('Error fetching joke:', error);
            });
    });
});
