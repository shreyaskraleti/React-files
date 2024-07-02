import React, {useState} from 'react';
const quotes = [
    "Never let the fear of striking out keep you from playing the game. - Babe Ruth",
    "Don’t settle for what life gives you; make life better and build something. - Ashton Kutcher",
    "The only way to do great work is to love what you do. - Steve Jobs",
    "The best way to predict your future is to create it. - Abraham Lincoln",
    "If you want to live a happy life, tie it to a goal, not to people or things. - Albert Einstein",
    "Your time is limited, dont waste it living someone else's life. - Steve Jobs",
    "If you look at what you have in life, you'll always have more. - Oprah Winfrey",
];

function Quotes() {
    const[quote, setQuote] = useState(quotes[0]);


const getNewQuote = () => {
    const randomIndex = Math.floor(Math.random() * quotes.length);
    setQuote(quotes[randomIndex]);
};

return (
    <div>
        <p>{quote}</p>
        <button onClick={getNewQuote}>Get New Quote</button>
    </div>
);
}

export default Quotes;