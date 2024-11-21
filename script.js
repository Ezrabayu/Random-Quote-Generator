// Array that store a list of quotes and their author
const quotes = [
    { text: "I am not a product of my circumstances. I am a product of my decisions.", author:"Stephen Covey"},
    { text: "Every child is an artist. The problem is how to remain an artist once he grows up.", author:"Pablo Picasso"},
    { text: "You can never cross the ocean until you have the courage to lose sight of the shore.", author:"Christopher Columbus"},
    { text: "When everything seems to be going against you, remember that the airplane takes off against the wind, not with it.", author:"Henry Ford"},
    { text: "You can’t connect the dots looking forward; you can only connect them looking backward. So you have to trust that the dots will somehow connect in your future.", author:"Steve Jobs"},
    { text: "It’s not the years in your life that count. It’s the life in your years.", author:"Abraham Lincoln"},
    { text: "Change your thoughts and you change your world.", author:"Norman Vincent Peale"},
    { text: "Many of life’s failures are people who did not realize how close they were to success when they gave up.", author:"Thomas Edison"},
    { text: "It always seems imposibble until it’s done.", author:"Nelson Mandela"},
    { text: "Whatever the mind of man can conceive and believe, it can achieve.", author:"Napoleon Hill"},
    { text: "Two roads diverged in a wood, and I took the one less traveled by, And that has made all the difference.", author:"Robert Frost"},
    { text: "I attribute my success to this: I never gave or took any excuse.", author:"Florence Nightingale"},
    { text: "Strive not to be a success, but rather to be of value.", author:"Albert Einstein"},
    { text: "Jangan kasih kesempatan kedua bagi orang yang mendua. Paham!!!", author:"Kak Gem"}
    ];

    // get html element by id
    const quoteText = document.getElementById('quote');
    const quoteAuthor = document.getElementById('author');
    const newQuoteButton = document.getElementById('newQuote');

    // function to generate a random quote
    function generateQuote(){
        // get a random index from the quotes array
        const randomIndex = Math.floor(Math.random() * quotes.length);
        const randomQuote = quotes[randomIndex];
            // update the quote text and author in the element html
        quoteText.textContent = `"${randomQuote.text}"`;
        quoteAuthor.textContent = `"${randomQuote.author}"`;
    }

    // add event listener for the button
    newQuoteButton.addEventListener('click', generateQuote);

    // call generate quote when page first loaded
    generateQuote();


