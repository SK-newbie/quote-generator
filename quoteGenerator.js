const famousQuote = document.querySelector('#famous-quotes');
const famousQuoteAuthor = document.querySelector('.person');
const quoteButton = document.querySelector('.quote-generator-btn');
const quoteYear = document.querySelector('.year-of-quote')
const imageChange = document.body;

const famousQuotesList =  [
  {
    keyword: "stars",
    quote: "Across the sea of space, the stars are other suns.",
    person: "-Carl Sagan",
    year: 1980,
    image: "https://images.unsplash.com/photo-1462331940025-496dfbfc7564"
  },
  {
    keyword: "universe",
    quote: "The universe is under no obligation to make sense to you.",
    person: "-Neil deGrasse Tyson",
    year: 2014,
    image: "https://images.unsplash.com/photo-1502134249126-9f3755a50d78"
  },
  {
    keyword: "nature",
    quote: "Look deep into nature, and then you will understand everything better.",
    person: "-Albert Einstein",
    year: 1933,
    image: "https://images.unsplash.com/photo-1441974231531-c6227db76b6e"
  },
  {
    keyword: "moon",
    quote: "Shoot for the moon. Even if you miss, you'll land among the stars.",
    person: "-Norman Vincent Peale",
    year: 1952,
    image: "https://images.unsplash.com/photo-1532693322450-2cb5c511067d"
  },
  {
    keyword: "earth",
    quote: "The Earth is what we all have in common.",
    person: "-Wendell Berry",
    year: 1970,
    image: "https://images.unsplash.com/photo-1465101046530-73398c7f28ca"
  },
  {
    keyword: "galaxy",
    quote: "We are made of star-stuff.",
    person: "-Carl Sagan",
    year: 1980,
    image: "https://images.unsplash.com/photo-1465101178521-c1a9136a3b99"
  },
  {
    keyword: "forest",
    quote: "And into the forest I go, to lose my mind and find my soul.",
    person: "-John Muir",
    year: 1890,
    image: "https://images.unsplash.com/photo-1448375240586-882707db888b"
  },
  {
    keyword: "cosmos",
    quote: "Somewhere, something incredible is waiting to be known.",
    person: "-Carl Sagan",
    year: 1977,
    image: "https://images.unsplash.com/photo-1419242902214-272b3f66ee7a"
  },
  {
    keyword: "mountains",
    quote: "Climb the mountains and get their good tidings.",
    person: "-John Muir",
    year: 1894,
    image: "https://images.unsplash.com/photo-1464822759023-fed622ff2c3b"
  },
  {
    keyword: "night",
    quote: "I have loved the stars too fondly to be fearful of the night.",
    person: "-Sarah Williams",
    year: 1851,
    image: "https://images.unsplash.com/photo-1500530855697-b586d89ba3ee"
  },
  {
    keyword: "space",
    quote: "To confine our attention to terrestrial matters would be to limit the human spirit.",
    person: "-Stephen Hawking",
    year: 1988,
    image: "https://images.unsplash.com/photo-1451187580459-43490279c0fa"
  },
  {
    keyword: "ocean",
    quote: "The ocean stirs the heart, inspires the imagination.",
    person: "-Wyland",
    year: 1992,
    image: "https://images.unsplash.com/photo-1507525428034-b723cf961d3e"
  },
  {
    keyword: "sunrise",
    quote: "Every sunrise is an invitation for us to arise and brighten someone's day.",
    person: "-Jhiess Krieg",
    year: 2010,
    image: "https://images.unsplash.com/photo-1506744038136-46273834b3fb"
  },
  {
    keyword: "planets",
    quote: "Across the universe, we are all connected.",
    person: "-Unknown",
    year: 2001,
    image: "https://images.unsplash.com/photo-1446776811953-b23d57bd21aa"
  },
  {
    keyword: "trees",
    quote: "Trees are poems that the earth writes upon the sky.",
    person: "-Kahlil Gibran",
    year: 1926,
    image: "https://images.unsplash.com/photo-1441974231531-c6227db76b6e"
  },
  {
    keyword: "nebula",
    quote: "The cosmos is within us. We are a way for the universe to know itself.",
    person: "-Carl Sagan",
    year: 1980,
    image: "https://images.unsplash.com/photo-1462331321792-cc44368b8894"
  },
  {
    keyword: "rain",
    quote: "Nature always wears the colors of the spirit.",
    person: "-Ralph Waldo Emerson",
    year: 1849,
    image: "https://images.unsplash.com/photo-1501594907352-04cda38ebc29"
  },
  {
    keyword: "blackhole",
    quote: "Black holes ain't as black as they are painted.",
    person: "-Stephen Hawking",
    year: 1976,
    image: "https://images.unsplash.com/photo-1462331940025-496dfbfc7564"
  },
  {
    keyword: "river",
    quote: "No man ever steps in the same river twice.",
    person: "-Heraclitus",
    year: -500,
    image: "https://images.unsplash.com/photo-1437482078695-73f5ca6c96e2"
  },
  {
    keyword: "sky",
    quote: "The sky is the daily bread of the eyes.",
    person: "-Ralph Waldo Emerson",
    year: 1844,
    image: "https://images.unsplash.com/photo-1500534314209-a25ddb2bd429"
  },
  {
    keyword: "wildlife",
    quote: "In every walk with nature one receives far more than he seeks.",
    person: "-John Muir",
    year: 1877,
    image: "https://images.unsplash.com/photo-1470770841072-f978cf4d019e"
  },
  {
    keyword: "comet",
    quote: "We are travelers on a cosmic journey.",
    person: "-Deepak Chopra",
    year: 1993,
    image: "https://images.unsplash.com/photo-1462331321792-cc44368b8894"
  },
  {
    keyword: "desert",
    quote: "What makes the desert beautiful is that somewhere it hides a well.",
    person: "-Antoine de Saint-Exupéry",
    year: 1943,
    image: "https://images.unsplash.com/photo-1501785888041-af3ef285b470"
  },
  {
    keyword: "saturn",
    quote: "Equipped with his five senses, man explores the universe around him.",
    person: "-Edwin Hubble",
    year: 1936,
    image: "https://images.unsplash.com/photo-1451187580459-43490279c0fa"
  },
  {
    keyword: "flowers",
    quote: "The earth laughs in flowers.",
    person: "-Ralph Waldo Emerson",
    year: 1844,
    image: "https://images.unsplash.com/photo-1490750967868-88aa4486c946"
  },
  {
    keyword: "astronomy",
    quote: "Astronomy compels the soul to look upward.",
    person: "-Plato",
    year: -380,
    image: "https://images.unsplash.com/photo-1502134249126-9f3755a50d78"
  },
  {
    keyword: "waterfall",
    quote: "There is hope at the bottom of the biggest waterfall.",
    person: "-Patrick Ness",
    year: 2010,
    image: "https://images.unsplash.com/photo-1506744038136-46273834b3fb"
  },
  {
    keyword: "milkyway",
    quote: "The Milky Way is nothing else but a mass of innumerable stars.",
    person: "-Galileo Galilei",
    year: 1610,
    image: "https://images.unsplash.com/photo-1419242902214-272b3f66ee7a"
  },
  {
    keyword: "sunset",
    quote: "Sunsets are proof that endings can be beautiful too.",
    person: "-Beau Taplin",
    year: 2015,
    image: "https://images.unsplash.com/photo-1493246507139-91e8fad9978e"
  },
  {
    keyword: "gravity",
    quote: "Gravity explains the motions of the planets.",
    person: "-Isaac Newton",
    year: 1687,
    image: "https://images.unsplash.com/photo-1446776811953-b23d57bd21aa"
  },
  {
    keyword: "lake",
    quote: "A lake is the landscape's most beautiful feature.",
    person: "-Henry David Thoreau",
    year: 1854,
    image: "https://images.unsplash.com/photo-1501785888041-af3ef285b470"
  },
  {
    keyword: "solar",
    quote: "The Sun, with all those planets revolving around it, still ripens a bunch of grapes.",
    person: "-Galileo Galilei",
    year: 1632,
    image: "https://images.unsplash.com/photo-1500530855697-b586d89ba3ee"
  },
  {
    keyword: "starscape",
    quote: "Keep your eyes on the stars, and your feet on the ground.",
    person: "-Theodore Roosevelt",
    year: 1900,
    image: "https://images.unsplash.com/photo-1462331940025-496dfbfc7564"
  },
  {
    keyword: "green",
    quote: "Heaven is under our feet as well as over our heads.",
    person: "-Henry David Thoreau",
    year: 1862,
    image: "https://images.unsplash.com/photo-1470770841072-f978cf4d019e"
  },
  {
    keyword: "orbit",
    quote: "That's one small step for man, one giant leap for mankind.",
    person: "-Neil Armstrong",
    year: 1969,
    image: "https://images.unsplash.com/photo-1451187580459-43490279c0fa"
  },
  {
    keyword: "clouds",
    quote: "Clouds come floating into my life, no longer to carry rain.",
    person: "-Rabindranath Tagore",
    year: 1916,
    image: "https://images.unsplash.com/photo-1500534314209-a25ddb2bd429"
  },
  {
    keyword: "starlight",
    quote: "For small creatures such as we, the vastness is bearable only through love.",
    person: "-Carl Sagan",
    year: 1985,
    image: "./img/logan-voss-491-UMRKHR8-unsplash.jpg"
  },
  {
    keyword: "adventure",
    quote: "The mountains are calling and I must go.",
    person: "-John Muir",
    year: 1873,
    image: "https://images.unsplash.com/photo-1464822759023-fed622ff2c3b"
  },
  {
    keyword: "universal",
    quote: "We are all in the gutter, but some of us are looking at the stars.",
    person: "-Oscar Wilde",
    year: 1892,
    image: "https://images.unsplash.com/photo-1419242902214-272b3f66ee7a"
  },
  {
    keyword: "infinity",
    quote: "Two things are infinite: the universe and human stupidity.",
    person: "-Albert Einstein",
    year: 1940,
    image: "https://images.unsplash.com/photo-1502134249126-9f3755a50d78"
  }
];

quoteButton.addEventListener('click', function(){
  let randomQuotes = Math.floor(Math.random() * famousQuotesList.length);
  famousQuote.innerText = famousQuotesList[randomQuotes].quote;
  famousQuoteAuthor.textContent = famousQuotesList[randomQuotes].person;
  quoteYear.textContent = famousQuotesList[randomQuotes].year;
  imageChange.style.backgroundImage =  `URL("$famousQuotesList[randomQuotes].image")`;
})