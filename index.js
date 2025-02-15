document.addEventListener('DOMContentLoaded', () => {
    const textElement = document.getElementById('text');
    const authorElement = document.getElementById('author');
    const newQuoteButton = document.getElementById('new-quote');
    const tweetQuoteLink = document.getElementById('tweet-quote');
    const body = document.body;

    let quotes = [
        { text: "The only way to do great work is to love what you do.", author: "Steve Jobs" },
        { text: "Innovation distinguishes between a leader and a follower.", author: "Steve Jobs" },
        { text: "The greatest glory in living lies not in never falling, but in rising every time we fall.", author: "Nelson Mandela" },
        { text: "Do what you can, with what you have, where you are.", author: "Theodore Roosevelt" },
        { text: "The future belongs to those who believe in the beauty of their dreams.", author: "Eleanor Roosevelt" }
    ];

    const colors = [
        "#FF5733", "#33FF57", "#3357FF", "#FF33A1", "#33FFF5", "#F5FF33", "#A133FF", "#FF3333"
    ];

    function getRandomColor() {
        const randomIndex = Math.floor(Math.random() * colors.length);
        return colors[randomIndex];
    }

    function displayQuote() {
        const randomIndex = Math.floor(Math.random() * quotes.length);
        const quote = quotes[randomIndex];

        textElement.textContent = `"${quote.text}"`;
        authorElement.textContent = `- ${quote.author}`;

        tweetQuoteLink.href = `https://x.com/Kihar_Youssf?text=${encodeURIComponent(`"${quote.text}" - ${quote.author}`)}`;

        const newColor = getRandomColor();
        body.style.backgroundColor = newColor;
        textElement.textContent = newColor; // عرض اسم اللون في مكان النص
    }

    newQuoteButton.addEventListener('click', displayQuote);

    displayQuote();
});
