/* Given two strings S and T, return if they are equal 
when both are typed out. Any "#" that appears in the string coount
as a backspace
*/
let S = "ab#z"; let T = "az#z"
const buildString = function(string){
    const buildString = [];
    for(let p = 0; p < string.length; p++){
        if(string[p] !== '#'){
           buildString.push(string[p]) 
        }else{
            buildString.pop()
        }
    }
    return buildString;
}

function backSpaceCompare(S,T){
    const finalS = buildString(S);
    const finalT = buildString(T);
    if(finalS.length !== finalT.length){
        return false;
    }else {
        for(let p = 0; p<finalS.length; p++){
            if(finalS[p] !== finalT[p]){
                return false;
            }
        }
    }
    console.log(buildString(S));
    console.log(buildString(T));
    return true;
}
console.log(backSpaceCompare(S,T), 'expected: true output is az' ); 

/* Given a string, find the length of the lognest substring with repeating characters */
function lengthOfLongestSubstring(s) {
    if(s.length <= 1) return s.length;
    let longest = 0;
    for(let left = 0; left < s.length; left++){
        let seenChar = {}, currentLength =0;
        for(let right = left; right < s.length; right++){
            const currentChar = s[right];
            if(!seenChar[currentChar]){
                currentLength ++;
                seenChar[currentChar] = true;
                longest = Math.max(longest, currentLength);
            } else {
                break;
            }
        }
    }
    return longest;
};
s = "abcabcbb";
console.log(lengthOfLongestSubstring(s), 'expected 3');
/* 
Given a string determine if its is a palindrome 
considering only alphanumeric characters and ignoring case sensitivity
*/ 
let x = "A man, a plan, a canal: Panama"
function IsPalindrome(x){
    x = x.replace(/[^A-Za-z0-9]/g, "").toLowerCase();
    let left = 0; right = x.length -1;

    while(left<right){
        if(x[left] !== x[right]){
            return false
        }
        left++;
        right--;
    }
    return true
}
console.log(IsPalindrome(x), ': expecting true');

//other option 
let z = 'tacocat';
var isPalindrome = function(z) {
    z = z.replace(/[^A-Za-z0-9]/g, "").toLowerCase();
    let reversedString = '';
    for(let i = z.length - 1; i >= 0;  i--){
        reversedString += z[i];
    }
    return z === reversedString;
};
console.log(isPalindrome(z), ': expect true')