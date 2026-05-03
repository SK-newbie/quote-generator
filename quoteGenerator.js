const famousQuote = document.querySelector('#famous-quotes');
const famousQuoteAuthor = document.querySelector('.person');
const quoteButton = document.querySelector('.quote-generator-btn');
const quoteYear = document.querySelector('.year-of-quote')

const famousQuotesList = [
    {
        person: "Abraham Lincoln",
        year: 1863,
        quote: "Government of the people, by the people, for the people, shall not perish from the earth."
    },
    {
        person: "Winston Churchill",
        year: 1941,
        quote: "Never give in, never, never, never, never—in nothing, great or small, large or petty—never give in except to convictions of honour and good sense."
    },
    {
        person: "Martin Luther King Jr.",
        year: 1963,
        quote: "I have a dream that my four little children will one day live in a nation where they will not be judged by the color of their skin but by the content of their character."
    },
    {
        person: "John F. Kennedy",
        year: 1961,
        quote: "Ask not what your country can do for you; ask what you can do for your country."
    },
    {
        person: "Albert Einstein",
        year: 1952,
        quote: "I have no special talent. I am only passionately curious."
    },
    {
        person: "Nelson Mandela",
        year: 1994,
        quote: "The greatest glory in living lies not in never falling, but in rising every time we fall."
    },
    {
        person: "Steve Jobs",
        year: 2005,
        quote: "Your time is limited, so don't waste it living someone else's life."
    },
    {
        person: "Neil Armstrong",
        year: 1969,
        quote: "That's one small step for a man, one giant leap for mankind."
    },
    {
        person: "Franklin D. Roosevelt",
        year: 1933,
        quote: "The only thing we have to fear is fear itself."
    },
    {
        person: "Malala Yousafzai",
        year: 2013,
        quote: "One child, one teacher, one book, one pen can change the world."
    },
    {
        person: "Mahatma Gandhi",
        year: 1947,
        quote: "You must be the change you wish to see in the world."
    },
    {
        person: "Maya Angelou",
        year: 1978,
        quote: "You may encounter many defeats, but you must not be defeated."
    },
    {
        person: "Oscar Wilde",
        year: 1891,
        quote: "Be yourself; everyone else is already taken."
    },
    {
        person: "Margaret Thatcher",
        year: 1980,
        quote: "The lady's not for turning."
    },
    {
        person: "Henry Ford",
        year: 1922,
        quote: "Whether you think you can, or you think you can't—you're right."
    },
    {
        person: "Walt Disney",
        year: 1955,
        quote: "The way to get started is to quit talking and begin doing."
    },
    {
        person: "Eleanor Roosevelt",
        year: 1960,
        quote: "The future belongs to those who believe in the beauty of their dreams."
    },
    {
        person: "Muhammad Ali",
        year: 1964,
        quote: "Float like a butterfly, sting like a bee."
    },
    {
        person: "Mother Teresa",
        year: 1979,
        quote: "Spread love everywhere you go. Let no one ever come to you without leaving happier."
    },
    {
        person: "Stephen Hawking",
        year: 2018,
        quote: "Intelligence is the ability to adapt to change."
    },
    {
        person: "Marie Curie",
        year: 1923,
        quote: "Nothing in life is to be feared, it is only to be understood. Now is the time to understand more, so that we may fear less."
    },
    {
        person: "Leonardo da Vinci",
        year: 1500,
        quote: "Simplicity is the ultimate sophistication."
    },
    {
        person: "Mark Twain",
        year: 1900,
        quote: "The secret of getting ahead is getting started."
    },
    {
        person: "Jane Austen",
        year: 1813,
        quote: "I declare after all there is no enjoyment like reading!"
    },
    {
        person: "Charles Dickens",
        year: 1859,
        quote: "It was the best of times, it was the worst of times."
    },
    {
        person: "Robert Frost",
        year: 1916,
        quote: "Two roads diverged in a wood, and I—I took the one less traveled by, and that has made all the difference."
    },
    {
        person: "George Orwell",
        year: 1949,
        quote: "Big Brother is watching you."
    },
    {
        person: "Toni Morrison",
        year: 1993,
        quote: "If there's a book that you want to read, but it hasn't been written yet, then you must write it."
    },
    {
        person: "Bill Gates",
        year: 1996,
        quote: "Content is king."
    },
    {
        person: "Elon Musk",
        year: 2013,
        quote: "When something is important enough, you do it even if the odds are not in your favor."
    },
    {
        person: "Sheryl Sandberg",
        year: 2013,
        quote: "Done is better than perfect."
    },
    {
        person: "Michelle Obama",
        year: 2016,
        quote: "When they go low, we go high."
    },
    {
        person: "Barack Obama",
        year: 2008,
        quote: "Yes we can."
    },
    {
        person: "Ronald Reagan",
        year: 1987,
        quote: "Mr. Gorbachev, tear down this wall!"
    },
    {
        person: "Susan B. Anthony",
        year: 1873,
        quote: "Failure is impossible."
    },
    {
        person: "Rosa Parks",
        year: 1955,
        quote: "The only tired I was, was tired of giving in."
    },
    {
        person: "Amelia Earhart",
        year: 1932,
        quote: "The most effective way to do it, is to do it."
    },
    {
        person: "Alan Turing",
        year: 1950,
        quote: "We can only see a short distance ahead, but we can see plenty there that needs to be done."
    },
    {
        person: "Grace Hopper",
        year: 1987,
        quote: "A ship in port is safe, but that's not what ships are built for."
    },
    {
        person: "Socrates",
        year: "399 BC",
        quote: "The unexamined life is not worth living."
    }
];

quoteButton.addEventListener('click', function(){
    let randomQuote = Math.floor(Math.random() * famousQuotesList.length);
    famousQuote.textContent = famousQuotesList[randomQuote].quote;
    famousQuoteAuthor.textContent = famousQuotesList[randomQuote].person;
    quoteYear.textContent = famousQuotesList[randomQuote].year
})