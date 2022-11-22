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
    return null
}
findTwoSum(arr,tgt);

/* given an array of positive integers where each integer represents
the height of a vertical line on a chart. Find two lines whic together with the x-axis
forms a container that would hold the greatest amount of water. Return the area of water it holds
hint: area = l x w
*/

let heightsArray = [7,1,2,3,9]; 
function getMaxWaterContainer(heights){
    let maxArea = 0;
    for(let p1 = 0; p1 < heights.length; p1++){
        for(let p2 = p1 + 1; p2 < heights.length; p2++){
            const height = Math.min(heights[p1], heights[p2]);
            const width = p2 - p1;
            const area = height * width;

            maxArea = Math.max(maxArea, area);
        }
    }
    
    return maxArea;
}
console.log(getMaxWaterContainer(heightsArray), 'expected 28');