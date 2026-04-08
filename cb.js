//1
const numbers = [1, 5, 8, 12, 3, 15, 7, 20];
const words = ['кіт', 'собака', 'миша', 'папуга', 'хомяк'];


function countItems(array, condition) {
  let count = 0;

  for (const element of array) {
    if (condition(element)) {
      count++;
    }
  }

  return count;
}


const isEven = num => num % 2 === 0;
const isLarge = num => num > 10;
const isShort = word => word.length <= 3;


console.log('Парних чисел:', countItems(numbers, isEven));
console.log('Чисел більше 10:', countItems(numbers, isLarge));
console.log('Коротких слів:', countItems(words, isShort));

//2

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



console.log(calculate(10, 5, add));     
 console.log(calculate(10, 5, substract)); 
 console.log(calculate(10, 5, multiply));
 console.log(calculate(10, 5, divide));
 console.log(calculate(10, 0, divide)); 

 //3

const greetingMessage = () => {
  return "Привіт, вітаю тебе!!!"
}

let times = 0;
function repeatMessage(times, messageCreator){
  for(let i1 = 0; i1 < times; i1++){
return messageCreator()
  }

}

console.log(repeatMessage(1, greetingMessage));
console.log(repeatMessage(2, greetingMessage));
console.log(repeatMessage(3, greetingMessage));