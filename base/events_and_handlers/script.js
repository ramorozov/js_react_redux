/* События и их обработчики 
1 Назначить обработчик события можно:
 - через html-тег,
 - с использованием DOM дерева
 - использование обработчика событий:
  - назначается через addEventListener
  - удаляется через removeEventListener
2 Всплытие события - переход события по иерархии
3 Отмена стандартного повденения браузера preventDefault()
4 Обработчик события на елементы псевдомассива (установка обработчика события на все элементы)
5 У обработчиков собятия в качестве 3го аргумента можно установить опцию (см. документацию):
btn.addEventListener('click', getTarget, {once: true})
*/
'use strict';

/* С использование DOM дерева  - редко используется!!!*/
const btn =document.querySelector('button');

btn.onclick = function() {
  console.log('Жмяк');
};

/* Через обработчик события - слушатель событий
элемент.слушатель(название_события, (call-back функция обработчика)*/

btn.addEventListener('click', () => {
  console.log('Жмяк-жмяк');
});

/* Получене данных об элемене события */

btn.addEventListener('click', (event) => {
  console.log(event);
});

/* Действие над элементом через событие */

btn.addEventListener('click', (event) => {
  console.log(event.target);
  //Удаление элемента
  event.target.remove();
});


/* Отмена стандартного поведения браузера
- метод события preventDefault()  */
const link = document.querySelector('a');

link.addEventListener('click', (event) => {
  //Отмена стандартного поведения браузера
  event.preventDefault();

  console.log(event.target);
});


/* Установка обработчика событий на одинаковые элементы выполняется через forEach() */

//Получаем все элементы button со страницы
const btns =document.querySelectorAll('button');

//Записываем функцию getTarget обработчика события
const getTarget = (e) => {
  console.log(e.target);
};

//Перебором псевдомассива btns устанавливаем обработчик события на каждый элемент
btns.forEach(btn => {
  btn.addEventListener('click', getTarget);
});