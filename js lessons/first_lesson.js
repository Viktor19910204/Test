let numberOfFilms = +prompt('Сколько фильмов вы уже посмотрели', '');
for (let i = 0; i < 1; i++) {
    if (numberOfFilms === 0 || isNaN(numberOfFilms) ) {
        i--;
        numberOfFilms = +prompt('Сколько фильмов вы уже посмотрели', '');
    } 
     
}


let lastFilm = prompt('Один из последних просмотренных фильмов?', '');
while (true) {
    if (lastFilm !== '' && lastFilm !== null && lastFilm.length < 50) {
        break;
    }
    lastFilm = prompt('Один из последних просмотренных фильмов?', '');
}

let markFilm = prompt('На сколько оцените его?');
do {
    if (markFilm !== '' && markFilm !== null && markFilm.length < 50 && !isNaN(+markFilm) && +markFilm <= 10) {
        break;
    }
    markFilm = prompt('На сколько оцените его?');
}
while (true);







const personalMovieDB = {
    count: numberOfFilms,
    movies: {},
    actors: {},
    genres: [],
    privat: false,
};

personalMovieDB.movies[lastFilm] = markFilm;

if (personalMovieDB.count < 10) {
    alert('Просмотрено двольно мало фильмов');
} else if (personalMovieDB.count >= 10 && personalMovieDB.count <= 30) {
    alert('Вы классический зритель');
} else if (personalMovieDB.count > 30) {
    alert('Вы киноман');
} else {
    alert('Произошла ошибка');
}