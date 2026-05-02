const quoteButton = document.querySelector('.quote-change');
let quotesOfTheDay = document.querySelector('.quote');
let ownerOfQuote = document.querySelector('.person-quote');


const quoteList =  [
  {
    person: "Albert Einstein",
    quote: "Life is like riding a bicycle. To keep your balance, you must keep moving."
  },
  {
    person: "Nelson Mandela",
    quote: "It always seems impossible until it's done."
  },
  {
    person: "Steve Jobs",
    quote: "Stay hungry, stay foolish."
  },
  {
    person: "Maya Angelou",
    quote: "You will face many defeats in life, but never let yourself be defeated."
  },
  {
    person: "Confucius",
    quote: "It does not matter how slowly you go as long as you do not stop."
  },
  {
    person: "Mark Twain",
    quote: "The secret of getting ahead is getting started."
  },
  {
    person: "Eleanor Roosevelt",
    quote: "Do one thing every day that scares you."
  },
  {
    person: "Bruce Lee",
    quote: "Be yourself; everyone else is already taken."
  },
  {
    person: "Winston Churchill",
    quote: "Success is not final, failure is not fatal: it is the courage to continue that counts."
  },
  {
    person: "Lao Tzu",
    quote: "A journey of a thousand miles begins with a single step."
  }
];

quoteButton.addEventListener('click', function(){
  let randomQuote = Math.floor(Math.random() * quoteList.length);

  quotesOfTheDay.innerText = quoteList[randomQuote].quote;
  ownerOfQuote.textContent = quoteList[randomQuote].person;
})



































/*

const images = [
  {
    id: 1,
    name: "Mountain View",
    url: "https://picsum.photos/id/1018/600/400"
  },
  {
    id: 2,
    name: "Forest Path",
    url: "https://picsum.photos/id/1015/600/400"
  },
  {
    id: 3,
    name: "City Skyline",
    url: "https://picsum.photos/id/1011/600/400"
  },
  {
    id: 4,
    name: "Beach Sunset",
    url: "https://picsum.photos/id/1003/600/400"
  },
  {
    id: 5,
    name: "Desert Dunes",
    url: "https://picsum.photos/id/1002/600/400"
  },
  {
    id: 6,
    name: "Snowy Mountains",
    url: "https://picsum.photos/id/1006/600/400"
  },
  {
    id: 7,
    name: "Waterfall",
    url: "https://picsum.photos/id/1016/600/400"
  },
  {
    id: 8,
    name: "Night Sky",
    url: "https://picsum.photos/id/1020/600/400"
  },
  {
    id: 9,
    name: "Bridge",
    url: "https://picsum.photos/id/1024/600/400"
  },
  {
    id: 10,
    name: "Green Hills",
    url: "https://picsum.photos/id/1025/600/400"
  }
];
*/