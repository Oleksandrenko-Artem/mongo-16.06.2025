const movies = [
  {
    title: 'Interstellar',
    releaseYear: 2014,
    isAdult: true,
    genres: ['Science Fiction', 'Drama', 'Adventure'],
    director: { name: 'Christopher Nolan', age: 53, nationality: 'British' },
    ratingImdb: 8.7,
    mainActors: [
      { name: 'Matthew McConaughey', role: 'Cooper' },
      { name: 'Anne Hathaway', role: 'Amelia Brand' },
      { name: 'Jessica Chastain', role: 'Murph Cooper' },
    ],
  },
  {
    title: 'Inception',
    releaseYear: 2010,
    isAdult: true,
    genres: ['Science Fiction', 'Action', 'Adventure'],
    director: { name: 'Christopher Nolan', age: 53, nationality: 'British' },
    ratingImdb: 8.8,
    mainActors: [
      { name: 'Leonardo DiCaprio', role: 'Dom Cobb' },
      { name: 'Joseph Gordon-Levitt', role: 'Arthur' },
      { name: 'Elliot Page', role: 'Ariadne' },
    ],
  },
  {
    title: 'Pulp Fiction',
    releaseYear: 1994,
    isAdult: true,
    genres: ['Crime', 'Drama'],
    director: { name: 'Quentin Tarantino', age: 60, nationality: 'American' },
    ratingImdb: 8.9,
    mainActors: [
      { name: 'John Travolta', role: 'Vincent Vega' },
      { name: 'Samuel L. Jackson', role: 'Jules Winnfield' },
      { name: 'Uma Thurman', role: 'Mia Wallace' },
    ],
  },
  {
    title: 'Fight Club',
    releaseYear: 1999,
    isAdult: true,
    genres: ['Drama'],
    director: { name: 'David Fincher', age: 61, nationality: 'American' },
    ratingImdb: 8.8,
    mainActors: [
      { name: 'Edward Norton', role: 'The Narrator' },
      { name: 'Brad Pitt', role: 'Tyler Durden' },
      { name: 'Helena Bonham Carter', role: 'Marla Singer' },
    ],
  },
  {
    title: 'The Shawshank Redemption',
    releaseYear: 1994,
    isAdult: true,
    genres: ['Drama'],
    director: { name: 'Frank Darabont', age: 65, nationality: 'American' },
    ratingImdb: 9.3,
    mainActors: [
      { name: 'Tim Robbins', role: 'Andy Dufresne' },
      { name: 'Morgan Freeman', role: 'Ellis Redding' },
      { name: 'Bob Gunton', role: 'Warden Norton' },
    ],
  },
  {
    title: 'The Godfather',
    releaseYear: 1972,
    isAdult: true,
    genres: ['Crime', 'Drama'],
    director: {
      name: 'Francis Ford Coppola',
      age: 84,
      nationality: 'American',
    },
    ratingImdb: 9.2,
    mainActors: [
      { name: 'Marlon Brando', role: 'Vito Corleone' },
      { name: 'Al Pacino', role: 'Michael Corleone' },
      { name: 'James Caan', role: 'Sonny Corleone' },
    ],
  },
  {
    title: 'Forrest Gump',
    releaseYear: 1994,
    isAdult: false,
    genres: ['Drama', 'Romance'],
    director: { name: 'Robert Zemeckis', age: 72, nationality: 'American' },
    ratingImdb: 8.8,
    mainActors: [
      { name: 'Tom Hanks', role: 'Forrest Gump' },
      { name: 'Robin Wright', role: 'Jenny Curran' },
      { name: 'Gary Sinise', role: 'Lieutenant Dan' },
    ],
  },
  {
    title: 'The Wolf of Wall Street',
    releaseYear: 2013,
    isAdult: true,
    genres: ['Biography', 'Crime', 'Drama'],
    director: { name: 'Martin Scorsese', age: 81, nationality: 'American' },
    ratingImdb: 8.2,
    mainActors: [
      { name: 'Leonardo DiCaprio', role: 'Jordan Belfort' },
      { name: 'Jonah Hill', role: 'Donnie Azoff' },
      { name: 'Margot Robbie', role: 'Naomi Lapaglia' },
    ],
  },
  {
    title: 'The Lord of the Rings: The Return of the King',
    releaseYear: 2003,
    isAdult: false,
    genres: ['Adventure', 'Drama', 'Fantasy'],
    director: { name: 'Peter Jackson', age: 62, nationality: 'New Zealander' },
    ratingImdb: 9.0,
    mainActors: [
      { name: 'Elijah Wood', role: 'Frodo Baggins' },
      { name: 'Viggo Mortensen', role: 'Aragorn' },
      { name: 'Ian McKellen', role: 'Gandalf' },
    ],
  },
  {
    title: 'Gladiator',
    releaseYear: 2000,
    isAdult: true,
    genres: ['Action', 'Drama'],
    director: { name: 'Ridley Scott', age: 86, nationality: 'British' },
    ratingImdb: 8.5,
    mainActors: [
      { name: 'Russell Crowe', role: 'Maximus' },
      { name: 'Joaquin Phoenix', role: 'Commodus' },
      { name: 'Connie Nielsen', role: 'Lucilla' },
    ],
  },
  {
    title: 'Titanic',
    releaseYear: 1997,
    isAdult: false,
    genres: ['Drama', 'Romance'],
    director: { name: 'James Cameron', age: 69, nationality: 'Canadian' },
    ratingImdb: 7.9,
    mainActors: [
      { name: 'Leonardo DiCaprio', role: 'Jack Dawson' },
      { name: 'Kate Winslet', role: 'Rose DeWitt Bukater' },
      { name: 'Billy Zane', role: 'Cal Hockley' },
    ],
  },
  {
    title: 'The Dark Knight',
    releaseYear: 2008,
    isAdult: true,
    genres: ['Action', 'Crime', 'Drama'],
    director: { name: 'Christopher Nolan', age: 53, nationality: 'British' },
    ratingImdb: 9.0,
    mainActors: [
      { name: 'Christian Bale', role: 'Bruce Wayne / Batman' },
      { name: 'Heath Ledger', role: 'Joker' },
      { name: 'Aaron Eckhart', role: 'Harvey Dent' },
    ],
  },
  {
    title: 'The Matrix',
    releaseYear: 1999,
    isAdult: true,
    genres: ['Science Fiction', 'Action'],
    director: { name: 'Lana Wachowski', age: 58, nationality: 'American' },
    ratingImdb: 8.7,
    mainActors: [
      { name: 'Keanu Reeves', role: 'Neo' },
      { name: 'Laurence Fishburne', role: 'Morpheus' },
      { name: 'Carrie-Anne Moss', role: 'Trinity' },
    ],
  },
  {
    title: 'The Silence of the Lambs',
    releaseYear: 1991,
    isAdult: true,
    genres: ['Crime', 'Drama', 'Thriller'],
    director: { name: 'Jonathan Demme', age: 73, nationality: 'American' },
    ratingImdb: 8.6,
    mainActors: [
      { name: 'Jodie Foster', role: 'Clarice Starling' },
      { name: 'Anthony Hopkins', role: 'Hannibal Lecter' },
      { name: 'Scott Glenn', role: 'Jack Crawford' },
    ],
  },
  {
    title: "Schindler's List",
    releaseYear: 1993,
    isAdult: true,
    genres: ['Biography', 'Drama', 'History'],
    director: { name: 'Steven Spielberg', age: 77, nationality: 'American' },
    ratingImdb: 9.0,
    mainActors: [
      { name: 'Liam Neeson', role: 'Oskar Schindler' },
      { name: 'Ralph Fiennes', role: 'Amon Goeth' },
      { name: 'Ben Kingsley', role: 'Itzhak Stern' },
    ],
  },
  {
    title: 'Saving Private Ryan',
    releaseYear: 1998,
    isAdult: true,
    genres: ['Drama', 'War'],
    director: { name: 'Steven Spielberg', age: 77, nationality: 'American' },
    ratingImdb: 8.6,
    mainActors: [
      { name: 'Tom Hanks', role: 'Captain John Miller' },
      { name: 'Matt Damon', role: 'Private Ryan' },
      { name: 'Vin Diesel', role: 'Private Caparzo' },
    ],
  },
  {
    title: 'Se7en',
    releaseYear: 1995,
    isAdult: true,
    genres: ['Crime', 'Drama', 'Mystery'],
    director: { name: 'David Fincher', age: 61, nationality: 'American' },
    ratingImdb: 8.6,
    mainActors: [
      { name: 'Morgan Freeman', role: 'Detective Somerset' },
      { name: 'Brad Pitt', role: 'Detective Mills' },
      { name: 'Kevin Spacey', role: 'John Doe' },
    ],
  },
  {
    title: 'The Green Mile',
    releaseYear: 1999,
    isAdult: true,
    genres: ['Crime', 'Drama', 'Fantasy'],
    director: { name: 'Frank Darabont', age: 65, nationality: 'American' },
    ratingImdb: 8.6,
    mainActors: [
      { name: 'Tom Hanks', role: 'Paul Edgecomb' },
      { name: 'Michael Clarke Duncan', role: 'John Coffey' },
      { name: 'David Morse', role: 'Brutus Howell' },
    ],
  },
  {
    title: 'The Departed',
    releaseYear: 2006,
    isAdult: true,
    genres: ['Crime', 'Drama', 'Thriller'],
    director: { name: 'Martin Scorsese', age: 81, nationality: 'American' },
    ratingImdb: 8.5,
    mainActors: [
      { name: 'Leonardo DiCaprio', role: 'Billy Costigan' },
      { name: 'Matt Damon', role: 'Colin Sullivan' },
      { name: 'Jack Nicholson', role: 'Frank Costello' },
    ],
  },
  {
    title: 'Django Unchained',
    releaseYear: 2012,
    isAdult: true,
    genres: ['Drama', 'Western'],
    director: { name: 'Quentin Tarantino', age: 60, nationality: 'American' },
    ratingImdb: 8.4,
    mainActors: [
      { name: 'Jamie Foxx', role: 'Django' },
      { name: 'Christoph Waltz', role: 'Dr. King Schultz' },
      { name: 'Leonardo DiCaprio', role: 'Calvin Candie' },
    ],
  },
];