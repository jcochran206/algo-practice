//practice algorithm problems 
/* FizzBuzz
Write code that will go through each number from 1 to 100 and:
For each number that is a multiple of 3, print "Fizz"
For each number that is a multiple of 5, print "Buzz"
For numbers which are a multiple of both 3 and 5, print "FizzBuzz"
All other numbers should just print normally
*/
let arr = [];
function fizzBuzz(num){
    for(let i=1; i <= num; i++){
        if(i % 3 === 0 && i % 5 === 0){
            arr.push('Fizzbuzz')
        }else if(i % 3 === 0){
            arr.push('fizz')
        }else if(i % 5 === 0){
            arr.push('buzz')
        }else{
            arr.push(i);
        }

    }  
}
fizzBuzz(15) // expected output is: 1 2 fizz 4 buzz ... 14 fizzbuzz
console.log(arr);
// Odds function 
/* 
create a loop function that will console.log all the odd values of a given number
*/
function odds(num){
    for(let i = 0; i <= num; i++){
        if(i % 2 == 1){
            console.log(i)
        }
    }
}
odds(20) // expected output is 1 3 5 7 .. 19

//Decreasing Multiples of 3 
// create a function that will console.log all of the values that are evenly divisible by 3 from 100 to 0
function multiplesby3(num){
    for(let i = num; i >- 1; i--){
        if(i % 3 == 0){
            console.log(i)
        }
    }
}
multiplesby3(100);

//print the sequence 
//Using a loop to write the sequence 4, 2.5, 1, -0.5, -2, -3.5
function sequence(num){
    for(let i = num; i >-num; i -=1.5){
        console.log(i)
    }
}
sequence(4);


//use a loop and added 
let sum = 0;
function summarized(num){
    for(let i = 0;  i<num; i++){
        sum += i;
    }
    console.log(sum);
}
summarized(101); // 5050

//factorial
function factorial(num){
    for(let i = 1; i<num; i++){
        num *= i; 
        console.log(num);
    }
}
factorial(13);

/*
Write a function that is given an array and each time the value is "food" it should console log "yummy". 
If "food" was not present in the array console log "I'm hungry" once.
*/

function alwaysHungry(arr) {
    let foodCount = 0;
    for(let i = 0; i <= arr.length; i++){
        if(arr[i] == "food"){
            console.log("yummy");
            foodCount++;
        }
    }
    if(foodCount == 0){
        console.log("I am hungry")
    }
}
   
alwaysHungry([3.14, "food", "pie", true, "food"]);
// this should console log "yummy", "yummy"
alwaysHungry([4, 1, 5, 7, 2]);
// this should console log "I'm hungry"

/*
Given an array and a value cutoff, return a new array 
containing only the values larger than cutoff.
*/

function highPass(arr, cutoff) {
    var filteredArr = [];
    for(let i = 0; i <= arr.length; i++){
        if(arr[i] > cutoff){
            filteredArr.push(arr[i]);
        }
    }
    return filteredArr;
}
var result = highPass([6, 8, 3, 10, -2, 5, 9], 5);
console.log(result); // we expect back [6, 8, 10, 9]

/* 
Given an array of numbers return a count of 
how many of the numbers are larger than the average.
*/
function betterThanAverage(arr) {
    var sum = 0;
    for(let i = 0; i < arr.length; i++){
        sum += arr[i]; 
    }
    var avg = sum / arr.length;
    var count = 0
    for(let i = 0; i<arr.length; i++){
        if(arr[i] > avg){
            count++;
        }
    }
    return count;
}
var result = betterThanAverage([6, 8, 3, 10, -2, 5, 9]);
console.log(result); // we expect back 4

//write a function that will reverse the values an array and return them
function rev(arr){
    let left = 0; 
    let right = arr.length - 1; 
    while(left<right){
        let temp = arr[left];
        arr[left] = arr[right];
        arr[right] = temp;
        left++;
        right--;
    }
    return arr;
}
var result = rev(["a", "b", "c", "d", "e"]);
console.log(result);

//write a function that will return fibonacci numbers up to given length;

function fib(n){
    let fibArr = [0,1];
    while(fibArr.length < n){
        let prev = fibArr[fibArr.length - 1];
        let last = fibArr[fibArr.length-2];
        fibArr.push(prev + last);
    }
    return fibArr
}

let result = fib(10);
console.log(result); 
