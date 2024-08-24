/* Перебор элементов массива */
'use strict';

const arr = [1, 2, 3, 4, 5, 6, 7]

/* Перебор элементов массива в цикле for */
for (let i = 0; i < arr.length; i++){
  console.log(arr[i]);
}

/* Перебор элементов массива в цикле for of*/
for (let value of arr){
  console.log(value);
}

/* Перебор элементов массива методом forEach()
forEach() принимает call-back функцию,
call-back функция имеет три необязательных аргумента:
 элемент массива,
 номер по порядку,
 перебираемый массив*/
arr.forEach(function(item, i, arr){
  console.log(`${i}: ${item} массива ${arr}`)
});