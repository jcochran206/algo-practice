//practice algorithm problems
//Fizzbuzz 
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
console.log(arr)