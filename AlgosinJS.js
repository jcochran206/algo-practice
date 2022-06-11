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