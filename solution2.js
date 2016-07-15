var fib1 = 1;
var fib2 = 1;
var result = 0;
var summed = 0;
 
while (result < 4000000) {
    if ((result % 2) === 0) {
        summed += result;
    }
 
    result = fib1 + fib2;
    fib2 = fib1;
    fib1 = result;
}

console.log(summed);
