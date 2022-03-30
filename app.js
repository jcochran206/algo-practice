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