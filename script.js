// Get references to HTML elements
const quoteContainer = document.querySelector('.quote');
const newQuoteButton = document.getElementById('new-quote-btn');

// Function to fetch a random quote
const fetchRandomQuote = async () => {
  try {
    // Make an API request to get a random quote
    const response = await fetch('https://type.fit/api/quotes');
    if (response.ok) {
      const data = await response.json();
      
      // Get a random quote from the data
      const randomIndex = Math.floor(Math.random() * data.length);
      const randomQuote = data[randomIndex];

      // Update the HTML with the random quote
      quoteContainer.innerHTML = `
        <p>${randomQuote.text}</p>
        <p class="author">- ${randomQuote.author || 'Unknown'}</p>
      `;
    } else {
      quoteContainer.innerHTML = '<p>Failed to fetch a quote.</p>';
    }
  } catch (error) {
    console.error('Error fetching a quote:', error);
    quoteContainer.innerHTML = '<p>An error occurred while fetching a quote.</p>';
  }
};

// Add an event listener to fetch a new quote when the button is clicked
newQuoteButton.addEventListener('click', fetchRandomQuote);

// Fetch a random quote when the page loads
window.addEventListener('load', fetchRandomQuote);
