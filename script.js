const numbersA = [1, 5, 8, 12, 3, 15, 7, 20];
const words = ['кіт', 'собака', 'миша', 'папуга', 'хомяк'];

function countItems(array, condition){
    let count = 0;

    for (let element of array) {
        let passed = condition(element);

        if (passed) {
            count += 1;
        }
    }

    return count;

}


const isEven = num => num % 2 === 0;
const isLarge = num => num > 10;
const isShort = word => word.length <= 3;

console.log('Парних чисел:', countItems(numbersA, isEven));
console.log('Чисел більше 10:', countItems(numbersA, isLarge));
console.log('Коротких слів:', countItems(words, isShort));

const calculate = (a, b, operation) => operation(a, b);

const add = (num1, num2) => num1 + num2;
const subtract = (num1, num2) => num1 - num2;
const multiply = (num1, num2) => num1 * num2;
const divide = (num1, num2) => {
    if (num1 === 0 || num2 === 0) {
        return 'помилка';
    }
    else {
        return num1 / num2;
    }
}


console.log(calculate(10, 5, add)); 
console.log(calculate(10, 5, subtract));
console.log(calculate(10, 5, multiply));
console.log(calculate(10, 5, divide)); 
console.log(calculate(10, 0, divide));

function repeatMessage(times, messageCreator) {
    for (let i = 0; i < times; i++) {
        messageCreator(i);
    }
}

function numbers(num) {
    console.log(num);
}

repeatMessage(6, numbers);

