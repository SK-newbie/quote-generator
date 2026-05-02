const quoteButton = document.querySelector('.quote-change');
const ownerOfQuote = document.querySelector('.person-quote');
const quoteOfTheDay = document.querySelector('.quote');
const yearOfQuote = document.querySelector('.year');

let quoteList  = [
  {
    person: "Albert Einstein",
    year: 1921,
    quote: "Life is like riding a bicycle. To keep your balance you must keep moving."
  },
  {
    person: "Nelson Mandela",
    year: 1994,
    quote: "It always seems impossible until it’s done."
  },
  {
    person: "Steve Jobs",
    year: 2005,
    quote: "Stay hungry, stay foolish."
  },
  {
    person: "Martin Luther King Jr.",
    year: 1963,
    quote: "I have a dream."
  },
  {
    person: "Mark Twain",
    year: 1894,
    quote: "The secret of getting ahead is getting started."
  },
  {
    person: "Maya Angelou",
    year: 1993,
    quote: "You will face many defeats in life, but never let yourself be defeated."
  },
  {
    person: "Winston Churchill",
    year: 1941,
    quote: "Success is not final, failure is not fatal: it is the courage to continue that counts."
  },
  {
    person: "Confucius",
    year: 500,
    quote: "It does not matter how slowly you go as long as you do not stop."
  },
  {
    person: "Eleanor Roosevelt",
    year: 1960,
    quote: "The future belongs to those who believe in the beauty of their dreams."
  },
  {
    person: "Abraham Lincoln",
    year: 1863,
    quote: "Whatever you are, be a good one."
  }
];

quoteButton.addEventListener('click', function(){
  const randomQuotes = Math.floor(Math.random() * quoteList.length);
  quoteOfTheDay.textContent = quoteList[randomQuotes].quote;
  ownerOfQuote.textContent =quoteList[randomQuotes].person;
  yearOfQuote.textContent = quoteList[randomQuotes].year;

})