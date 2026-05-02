// //      <p class="quote">
//                 "Be who you are and say what you feel, because those who mind don't matter, and those who matter don't
//                 mind"
//             </p>
//             <div class="person-quote">Dr. Seuss</div>
//             <button class="quote-change">New Quote</button>

const quoteButton = document.querySelector('.quote-change');
let ownerOfQuote = document.querySelector('.person-quote');
let quoteOfTheDay = document.querySelector('.quote');
let yearOfQuote = document.querySelector('.year');

const quoteList  = [
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
  let randomQuotes = Math.floor(Math.random() * quoteList.length);
  quoteOfTheDay.textContent = quoteList[randomQuotes].quote;
  ownerOfQuote.textContent =quoteList[randomQuotes].person;
  yearOfQuote.textContent = quoteList[randomQuotes].year

})