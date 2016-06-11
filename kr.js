/*var movies = require('./movies');

movies.favMovie = "Kal ho naa ho";
console.log("Kr: Favorite Movie : "+ movies.favMovie)*/


var movies = require('./movies');

var krmovies = movies();
krmovies.favMovie = "Kal ho naa ho";
krmovies.favMovie = "Kal ho naa ho2";
console.log("Kr: Favorite Movie : "+ krmovies.favMovie);