/* Задания на урок:

1) Удалить все рекламные блоки со страницы (правая часть сайта)

2) Изменить жанр фильма, поменять "комедия" на "драма"

3) Изменить задний фон постера с фильмом на изображение "bg.jpg". Оно лежит в папке img.
Реализовать только при помощи JS

4) Список фильмов на странице сформировать на основании данных из этого JS файла.
Отсортировать их по алфавиту 

5) Добавить нумерацию выведенных фильмов */

'use strict';

const movieDB = {
    movies: [
        "Логан",
        "Лига справедливости",
        "Ла-ла лэнд",
        "Одержимость",
        "Скотт Пилигрим против..."
    ]
};


// Получаем элементы со страницы

const adv = document.querySelectorAll('.promo__adv img'),
      promoBg = document.querySelector('.promo__bg'),
      genre = promoBg.querySelector('.promo__genre'),
      promoList = document.querySelector('.promo__interactive-list'),
      promoItem = promoList.querySelectorAll('.promo__interactive-item');


// 1) Удалить все рекламные блоки со страницы (правая часть сайта)

adv.forEach(item => {
    item.remove();
});


// 2) Изменить жанр фильма, поменять "комедия" на "драма"

genre.textContent = 'Драма';


// 3) Изменить задний фон постера с фильмом на изображение "bg.jpg". Оно лежит в папке img.
// Реализовать только при помощи JS
promoBg.style.backgroundImage = 'url("img/bg.jpg")';


// 4) Список фильмов на странице сформировать на основании данных из этого JS файла.
// Отсортировать их по алфавиту

// Удалем статический список фильмов со страницы
promoItem.forEach(item => {
    item.remove();
}); 

//Сортируем фильмы
movieDB.movies.sort();

//Формируем динамический список фильмов и добавляем нумерацию
movieDB.movies.forEach((item, i) => {
    promoList.innerHTML += `
        <li class="promo__interactive-item">${i+1} ${item}
            <div class="delete"></div>
        </li>
    `;
});