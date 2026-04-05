//1

// Завдання 1. Лічильник подій 🔢

// Створіть функцію, яка рахує, скільки елементів масиву відповідають певній умові, використовуючи колбек-функцію для перевірки.



// Створіть функцію countItems(array, condition)
// Створіть змінну count = 0
// Пройдіться по масиву циклом for...of
// Для кожного елемента викличте condition(element)
// Якщо condition повертає true, збільште count на 1
// Поверніть кінцевий результат


// Початковий код:

// const numbers = [1, 5, 8, 12, 3, 15, 7, 20];
// const words = ['кіт', 'собака', 'миша', 'папуга', 'хомяк'];

// // Функція countItems тут

// // Умови для перевірки:
// const isEven = num => num % 2 === 0;
// const isLarge = num => num > 10;
// const isShort = word => word.length <= 3;

// // Тестування
// console.log('Парних чисел:', countItems(numbers, isEven));
// console.log('Чисел більше 10:', countItems(numbers, isLarge));
// console.log('Коротких слів:', countItems(words, isShort));









const numbers = [1, 5, 8, 12, 3, 15, 7, 20];
const words = ['кіт', 'собака', 'миша', 'папуга', 'хомяк'];

// Функція countItems
function countItems(array, condition) {
  let count = 0;

  for (const element of array) {
    if (condition(element)) {
      count++;
    }
  }

  return count;
}

// Умови для перевірки:
const isEven = num => num % 2 === 0;
const isLarge = num => num > 10;
const isShort = word => word.length <= 3;

// Тестування
console.log('Парних чисел:', countItems(numbers, isEven));
console.log('Чисел більше 10:', countItems(numbers, isLarge));
console.log('Коротких слів:', countItems(words, isShort));

//2
// Створіть універсальний калькулятор, який може виконувати різні математичні операції залежно від переданої колбек-функції.



// Створіть стрілкову функцію calculate(a, b, operation)
// Функція повинна викликати operation(a, b) та повернути результат
// Створіть 4 стрілкові функції для операцій: add, subtract, multiply, divide
// У функції divide додайте перевірку на ділення на нуль
// Протестуйте всі операції
// Початковий код:

// // Функція calculate тут

// // Стрілкові функції для операцій тут

// // Тестування
// console.log(calculate(10, 5, add));      // Повинно показати 15
// console.log(calculate(10, 5, subtract)); // Повинно показати 5
// console.log(calculate(10, 5, multiply)); // Повинно показати 50
// console.log(calculate(10, 5, divide));   // Повинно показати 2
// console.log(calculate(10, 0, divide));   // Повинно показати помилку
// // 
const add = (a, b) => a + b
const substract = (a, b) => a - b
const multiply = (a, b) => a * b
const divide = (a, b) => {
  if(b === 0){
    return Error("На нуль ділити неможна!!!")
    
  } else{
    return a / b
  }
}
const calculate = (a, b, operation) => {
return operation(a, b);

};



console.log(calculate(10, 5, add));      // Повинно показати 15
 console.log(calculate(10, 5, substract)); // Повинно показати 5
 console.log(calculate(10, 5, multiply)); // Повинно показати 50
 console.log(calculate(10, 5, divide));   // Повинно показати 2
 console.log(calculate(10, 0, divide));   // Повинно показати помилку

 //3
//  Створіть функцію, яка повторює певну дію задану кількість разів, використовуючи колбек-функцію для генерації повідомлень.



// Створіть функцію repeatMessage(times, messageCreator)
// Створіть цикл for від i = 0 до i < times
// На кожній ітерації викликайте messageCreator(i)
// Протестуйте з різними колбеками
const times = 5;
function repeatMessage(times, messageCreator){
  for (let i = 0; i < times.length; i++) {
   return messageCreator[i];
    
  }
}
console.log(repeatMessage(1, ))
