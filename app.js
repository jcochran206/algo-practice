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