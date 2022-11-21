//given an array find the tgt number provided by add two numbers in array to equal to tgt
let arr = [1,3,7,9,2]; 
let tgt = 11;

function findTwoSum(arr,tgt){
    for(let p1 = 0; p1 < arr.length; p1++){
        let numToFind = tgt - arr[p1];
        for(let p2 = p1 + 1; p2 < arr.length; p2++){
            if(numToFind === arr[p2]){
                console.log([p1,p2], "expected output is 3,4")
            }
        }
    }
}
findTwoSum(arr,tgt);

