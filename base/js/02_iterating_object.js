/* Перебор свойст объекта */
'use strict';


options = {
  name: 'test',
  width: 1024,
  high: 1080,
  color: {
    border: 'black',
    bg: 'red'
  },
  makeTest: function(){
    console.log('Test');
  }
};

options.makeTest();

/* Перебор циклом for in */

for (let key in options) {
  /* Для перебора вложенных объектов используется услвоие */
  if (typeof(options[key]) === 'object'){
    for (let i in options[key]){
      console.log(`Свойство ${i} имеет значение ${options[key][i]}`);
    }
  } else {
    console.log(`Свойство ${key} имеет значение ${options[key]}`);
  }  
}

/* Получение всех ключей объекта - метод Object.keys() */
console.log(Object.keys(options));

/* Деструктуризация объекта  - получение свойств вложенных объектов*/
const {border, bg} = options.color;
console.log(border);