/* The basic 13 */
//print all the integers from 1 to 255
function allIntsfrom1to255(num) {
    for(let i = 0; i <= num; i++){
        console.log(i)
    }
}
//console.log(allIntsfrom1to255(255))
//print sum 0-255
function allSum() {
    let sum = 0;
    for(let i = 0; i <= 255; i++){
        sum  += i;
        console.log('sum is: ', sum)
    }
}
//console.log(allSum());
//print odds 1-255
function odds() {
    let num = 1;
    while (num <= 255){
        console.log(num)
        num = num +2;
    }
}
odds()

//find and print largest
//given an array find an print the largest element
let arr = [2,6,8,14]
function printArrMax(arr){
    //ensure array is not empty
    if(arr.length == 0){
        console.log('empty array')
    }
    //asgn max and loop thru array
    let max = arr[0];
    for(let i = 1; i < arr.length; i++){
        if(arr[i] > max){
            max = arr[i]
        }
        console.log('Max value is: ', max);
    }
}
console.log(printArrMax(arr));


//array with odds
//create an array with all the odd integers between 1 thru 255
function oddArr(){
    let arrOdds = [];
    for(let i = 1; i <= 255; i+=2){
        arrOdds.push(i)
    }
    console.log("start of odds array: ", arrOdds)
}
oddArr();

//iterate and print array
//iterate thru a given array, printing each value
function printArr(){
    let arr = [2,3,5,8,9]
    for(let i =0; i < arr.length; i++){
        console.log(arr[i])
    }
}
printArr();

//Get and Print average
//analyze an array's values and print the average
function getAvg(){
    let arr = [1,4,6,9];
    let sum = 0;
    for(let i = 0; i < arr.length; i++){
        sum += arr[i] 
    }
    let avg = sum / arr.length
    console.log('get average' , avg); 
}
getAvg(); //output is 4

//Greater than Y
//given an array and a value Y, count and print the number of array values greater than Y
let greaterArr = [2,8,12,14];

function greaterThanY(){
    let count = 0;
    let y = 10;
    for(let i = 0; i <= greaterArr.length; i++){
        if(greaterArr[i] > 10){
            count++
        }
    }
    console.log('number of values greater than y : ',count)
    
}
greaterThanY()
