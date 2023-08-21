/*function sumOfTwoNum(a,b){
    return a + b;
}



function doubleTheNum(num){
    return num * 2;
}
let a = 6;
let b = 5;

let sumOfNumbers = sumOfTwoNum(a,b);
let multiple=doubleTheNum(sumOfNumbers);

console.log(multiple); 

let arr = ["a","b", "c", "d", "e"];
for(let i = 0; i<arr.length; i++){
    console.log(arr[i]); 
}

let array = [3, 7, 2, 1, 7, 9, 10, 13];
let largeEvenNum = -Infinity;
for(let i = 0; i<array.length; i++){
    if(array[i] % 2 === 0 && array[i] > largeEvenNum){
        largeEvenNum = array[i]
    }
    
}

console.log(largeEvenNum); 

function removeDuplicate(arr){
    let uniqueNum = [];
    for(let i = 0; i<arr.length; i++){
        for(let j = i + 1; j<=arr.length; j++){
            if(arr[i] === arr[j] ){
                uniqueNum.push(arr[i]);
            }
        }
    }
    return uniqueNum;
}
console.log(removeDuplicate([1,2,3,1,2,4,5,4]))  

function missingAlphabets(str){
    let vowels = 'aeiou';
    let missedVowels = '';

    for(let i = 0; i < vowels.length; i++){
        let found = false;

        for(let j = 0; j < str.length; j++){
            if(vowels[i] === str[j]){
                found = true;
                break;

            }
        }
        if(!found){
            missedVowels += vowels[i]
        }
    }
    return missedVowels;
}

console.log(missingAlphabets('suhail')) 

function designingRugs(width, height){
    let rug = '';

    for(let i = 1; i < width; i++){
        for(let j = i ; j < height; j++){
          console.log('#');
          rug += 
        }
    }
    return rug;
}
console.log(designingRugs(3, 5))

function table(num){
    let tab = [];
    for(let i = num; i<=num*10; i+=num){
        tab.push(i);
    }
    return tab;
}
console.log(table(4)); 

function reversedStr(str){
    let str1 = '';
    for(let i = str.length-1; i>=0; i--){
        str1+=str[i]
    }
    return str1;
}
console.log(reversedStr('suhail')) 

function factorial(num){
    let fact = 1;
    for(let i = 2; i<=num; i++){
        fact = fact * i;
    }
    return fact;
}
console.log(factorial(5)) 

function checkPallindrome(str) {
  let reversedStr = "";
  for (let i = str.length - 1; i >= 0; i--) {
    reversedStr += str[i];
  }
  if (reversedStr === str) {
    return true;
  } else {
    return false;
  }
}
console.log(checkPallindrome("suhail")); */

function fibbonacciSeries(arr){
    let fib = [0,1];
    for(let i = 2; i<arr; i++){
        let n = fib[i-1] + fib[i-2];
        fib.push(n);
    }
    return fib;
}
console.log(fibbonacciSeries(10));
 