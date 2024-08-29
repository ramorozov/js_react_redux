'use strict';

const box = document.getElementById('box'),
      btns = document.getElementsByTagName('button'),
      circles = document.getElementsByClassName('circle'),
      hearts = document.querySelectorAll('.heart'),
      oneHeart = document.querySelector('.heart'),
      wrapper = document.querySelector('.wrapper');

/* Замена инлайн стилей элемента
- значения необходимо передавать в виде строки, например, '500px' */
box.style.backgroundColor = 'blue';
box.style.width = '500px';
btns[1].style.borderRadius = '100%';

/* Назначение нескольких инлайн стилей
- используется свойство cssText
- значения записываются в виде совйств css 
- для работы с несколькими элементами можно использовать циклы*/
box.style.cssText = 'background-color: red; width: 300px';


/* Создание новых элементов из JS скриптов:
const название_переменной = document.createElement('название_создаваемого_элемента');
 - созданный элемент существует только внутри JS  */
 const div = document.createElement('div');

//Добавление текста на страницу (малоиспользуемый способ)
const text = document.createTextNode('Тут был я');

/* Работа с css классами элементов:
изменяемый_элемент.classList.add('имя_класса');
- add() - метод который добавляет класс */
div.classList.add('black');

/* Расположение созданного в JS элемента на странице:
document.место_установки.append(название_элемента);
- append() - метод добавления элемента в конец родителя,
- prepand() - метод добавления элемента в начало родителяб
- перед_чем_добавить.befor(добавляемый_элемент) - метод добавления элемента до какого-то элемента,
- after() - метод добавления элемента до послекакого-то элемента,
- удаляемый_элемент.remove()- удаление элемента со траницы,
- заменяемый_элемент.replaceWith(заменяющий_элемент)*/
document.body.append(div);
hearts[0].before(div);
circles[1].remove();
hearts[0].replaceWith(circles[1]);