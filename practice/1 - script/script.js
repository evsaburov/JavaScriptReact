"use strict";

let numberIfFilms = prompt('Сколько фильмов Вы уже посмотрели?', '10');


const personalMovieDB = {
    count: 10,
    movies: {},
    actors: {},
    genres: [],
    private: false
};

const  movies = {};

let lastViewFilms = prompt('Сколько фильмов Вы уже посмотрели?', '');
let appraisalIs = prompt('На сколько вы оцените его?', '');

movies.lastViewFilms = appraisalIs;

let lastViewFilms2 = prompt('Сколько фильмов Вы уже посмотрели?', '');
let appraisalIs2 = prompt('На сколько вы оцените его?', '');

movies.lastViewFilms2 = appraisalIs2;

console.log(movies)

//-----------------------------------------
// Мы еще не знаем бует ли изменяться переменная, поэтому берем ее в const
// + пребразует текстовую переменную в число
const numberIfFilms = +prompt('Сколько фильмов Вы уже посмотрели?', '');


const personalMovieDB = {
    count: numberIfFilms,
    movies: {},
    actors: {},
    genres: [],
    private: false
};

const a = prompt('Сколько фильмов Вы уже посмотрели?', ''),
      b = prompt('а сколько вы оцените его?', ''),
      c = prompt('Сколько фильмов Вы уже посмотрели?', ''),
      d = prompt('а сколько вы оцените его', '');

      //записть через квадрасдные скобки самоя надежная
      personalMovieDB.movie[a] = b;
      personalMovieDB.movie[с] = в;

      