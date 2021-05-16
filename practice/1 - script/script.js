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

movies[lastViewFilms] = appraisalIs;

let lastViewFilms2 = prompt('Сколько фильмов Вы уже посмотрели?', '');
let appraisalIs2 = prompt('На сколько вы оцените его?', '');

movies[lastViewFilms2] = appraisalIs2;

console.log(moves)