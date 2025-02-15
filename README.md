# MachineBuild-a-Random-Quote-App

# Random Quote Machine

This project is a Random Quote Machine, built as part of the FreeCodeCamp Front End Development Libraries certification. It displays a random quote and its author, with the option to tweet the quote. The background color also changes randomly with each new quote.

## Features

*   **Random Quote Display:** Shows a random quote from a predefined list.
*   **Author Attribution:** Displays the author of the quote.
*   **Tweet Functionality:** Provides a link to tweet the current quote.
*   **Dynamic Background:** Changes the background color randomly with each new quote.

## Technologies Used

*   **HTML:** Structure of the webpage.
*   **CSS:** Styling of the elements.
*   **JavaScript:** Logic for displaying quotes, generating random colors, and handling the tweet functionality.

## How to Run

1.  Save the `index.html`, `style.css`, and `script.js` files in the same directory.
2.  Open the `index.html` file in your web browser.

## Usage

*   Click the "New Quote" button to display a new random quote.
*   Click the "Tweet Quote" button to share the current quote on X (formerly Twitter).

## Code Explanation

*   **`script.js`:**
    *   An array `quotes` stores the quotes and their authors.
    *   An array `colors` stores the background colors.
    *   `getRandomColor()` function generates a random color from the `colors` array.
    *   `displayQuote()` function selects a random quote, updates the HTML elements, and sets the tweet link. It also sets the background color.
    *   An event listener on the "New Quote" button calls the `displayQuote()` function.
    *   The `DOMContentLoaded` event listener ensures the script runs after the HTML is fully loaded.
*   **`style.css`:** Contains the styling for the quote box, text, author, buttons, and background.
*   **`index.html`:** Sets up the basic HTML structure, including the elements for the quote, author, buttons, and includes the necessary JavaScript files. It also includes the FreeCodeCamp test suite.

## FreeCodeCamp Certification

This project fulfills the requirements for the FreeCodeCamp Front End Development Libraries certification. The included FreeCodeCamp test suite can be used to verify the project's functionality.

## Developer

Yousef Kaihar ([@Kihar_Youssf](https://x.com/Kihar_Youssf)) - [LinkedIn](https://www.linkedin.com/in/YOUR_LINKEDIN_PROFILE)

