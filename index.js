const quote = document.getElementById("quote");
const author = document.getElementById("author");

// Buttons
const btn = document.getElementById("twitter");
const newBtn = document.getElementById("new-quote");


// Quotes
const quotes = [
    { quote: "A room without books is like a body without a soul.", author: "Marcus Tullius Cicero" },
    { quote: "Be who you are and say what you feel, because those who mind don't matter, and those who matter don't mind.", author: "Bernard M. Baruch" },
    { quote: "You only live once, but if you do it right, once is enough.", author: "Mae West" },
    { quote: "The world is a book, and those who do not travel read only one page.", author: "Saint Augustine" },
    { quote: "Travel makes one modest. You see what a tiny place you occupy in the world.", author: "Gustave Flaubert" },
    { quote: "Life is either a daring adventure or nothing at all.", author: " Helen Keller" },
    { quote: "Well done is better than well said.", author: "Benjamin Franklin" },
    { quote: "The journey of a thousand miles begins with a single step.", author: "Lao Tzu" },
    { quote: "Wherever you go becomes a part of you somehow.", author: "Anita Desai" },
    { quote: "We travel not to escape life, but for life not to escape us.", author: "Anonymous" },
    { quote: "Take only memories, leave only footprints.", author: "Chief Seattle" },
    { quote: "The real voyage of discovery consists not in seeking new landscapes, but in having new eyes.", author: "Marcel Proust" },
    { quote: "Travel is fatal to prejudice, bigotry, and narrow-mindedness.", author: "Mark Twain" },
    { quote: "Not all those who wander are lost.", author: "J.R.R. Tolkien" },
    { quote: "Adventure is worthwhile in itself.", author: "Amelia Earhart" },
    { quote: "Little by little, one travels far.", author: "J.R.R. Tolkien" },
    { quote: "A journey is best measured in friends, not in miles.", author: "Pablo Tim Cahill" }
];





// Loader
function showLoading() {
    quote.innerHTML = `<span class="loader">Loading...</span>`;
    author.textContent = "";
}


// Display quote and author
function showQuotes(quoteF) {
    quote.textContent = quoteF.quote;
    author.textContent = `— ${quoteF.author}`;
}



// Fetch quote
function fetchQuotes() {

    return new Promise((resolve) => {

        const random = quotes[Math.floor(Math.random() * quotes.length)];

        setTimeout(() => {
            resolve(random);
        }, 2000);

    });
}



// Generate quote
async function generateQuotes() {

    newBtn.disabled = true;

    btn.disabled = true;

    showLoading();

    const quoteF = await fetchQuotes();

    showQuotes(quoteF);

    newBtn.disabled = false;
}


// New Quote button
newBtn.addEventListener("click", generateQuotes);