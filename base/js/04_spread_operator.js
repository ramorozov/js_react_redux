/* Оператор разворота spread-оператор ...*/
'use strict';

/* Spread-оператор в массивах */
const stringArr = ['abc', 'def', 'ghj'],
      intArr = [1, 2, 3, 4, 5, 6],
      randomArr = ['roman', '12345', true, 0.25],
      sumArr = [...stringArr, ...intArr, ...randomArr, 1024, 'hihg']

console.log(sumArr);

/* Spread-оператор в объектах */
const newObj = {
  name: 'test',
  high: 1080,
  width: 1920,
  color: {
    text: 'red',
    bg: 'black'
  }
}

/* Можно использовать для поверхностного копирования массивов и объектов */
const copyNewObj = {...newObj};
console.log(copyNewObj);