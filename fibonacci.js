// elample of fibonacci number: 0, 1, 1, 2, 3, 5, 8, 13, 21, 34, 55...etc
// so we understand that
/* 3rd = 2nd + 1st
4th = 3rd + 2nd
5h = 4th + 3rd
6th = 5th + 4th
nth = (n-1)th + (n-2)th

and first and second has come from heaven! haha!
*/


function fibonacciSeries(num) {
    if (typeof num != 'number') {
        return 'Please give a number'
    }
    if (num < 2) {
        return 'Please enter a positive number greater than 1'
    }
    const fibo = [0, 1];
    for (let i = 2; i < num; i++) {
        fibo[i] = fibo[i - 1] + fibo[i - 2];
    }
    return fibo;
}
const fiboSeries = fibonacciSeries(10);
console.log(fiboSeries);





// practice fibonacci
/* function getFibonacci(parameter) {
    if (typeof parameter != 'number') {
        return 'Pleage enter a number'
    }
    if (parameter < 2) {
        return 'Please inter a positive number grater than 1'
    }
    var fibo = [0, 1];
    for (var i = 2; i < parameter; i++) {
        fibo[i] = fibo[i - 1] + fibo[i - 2];
    }
    return fibo
}
var result = getFibonacci(2);
console.log(result); */


// practice fibonacci one more
/* function findFibonacci(parameter) {
    if (typeof parameter != 'number') {
        return 'Please enter a number'
    }
    if (parameter < 2) {
        return 'Please enter a positive number greater than 1'
    }
    var fibo = [0, 1];
    for (var i = 2; i < parameter; i++) {
        fibo[i] = fibo[i - 1] + fibo[i - 2]
    }
    return fibo;
}
var result = findFibonacci(5);
console.log(result); */