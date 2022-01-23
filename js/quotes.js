const quotes = [
    {
        quotes: "Don't let the fear of losing be greater than the excitement of winning.",
        author: "- Robert Kiyosaki -",
    },
    {
        quotes: "Develop success from failures. Discouragement and failure are two of the surest stepping stones to success.",
        author: "- Dale Carnegie -",
    },
    {
        quotes: "Action is the foundational key to all success.",
        author: "- Pablo Picasso -",
    },
    {
        quotes: "It is your determination and persistence that will make you a successful person.",
        author: "- Kenneth J Hutchins -",
    },
    {
        quotes: "You can waste your life drawing lines. Or you can live your life crossing them.",
        author: "- Shonda Rhimes -",
    },
    {
        quotes: "Be poor, humble and driven. Don't be afraid to shift or pivot.",
        author: "- Alex Rodriguez -",
    },
    {
        quotes: "Get busy living or get busy dying.",
        author: "- Stephen Edwin King -",
    },
    {
        quotes: "Those who dare to fail miserably can achieve greatly.",
        author: "- John F. Kennedy -",
    },
    {
        quotes: "It is hard to fail, but it is worse never to have tried to succeed.",
        author: "- Theodore Roosevelt -",
    },
    {
        quotes: "Challenges are what make life interesting and overcoming them is what makes life meaningful.",
        author: "- Joshua J. Marine -",
    },
    {
        quotes: "Live in the sunshine, wim the sea, drink the wild air.",
        author: "- Ralph Waldo Emerson -",
    },
    {
        quotes: "Success is how high you bounce when you hit bottom.",
        author: "- George S. Patton -",
    },
    {
        quotes: "Lay a firm foundation with the bricks that others throw at you.",
        author: "- David Brinkley -",
    },
    {
        quotes: "If you run you stand a chance of losing, but if you don't run you've already lost.",
        author: "- Barack Obama -",
    },
    {
        quotes: "The greatest mistake you can make in life is to be continually fearing you will make one.",
        author: "- Elebert Hubbard -",
    },
    {
        quotes: "Only I can change my life. No one can do it for me.",
        author: "- Carol Burnett -",
    }
]

const quote = document.querySelector("#quote span:first-child");
const author = document.querySelector("#quote span:last-child");

const todaysQuote = quotes[Math.floor(Math.random() * quotes.length)]

quote.innerText = todaysQuote.quotes;
author.innerText = todaysQuote.author;