"use strict";
// problem1
function max(num1, num2){
    if(num1 > num2){
        return num1;
    }else {
        return num2;
    }    
}
// problem2
function maxOfThree(num1, num2, num3){
    if(num1 > num2 && num1 > num3){
        return num1;
    }else if(num2 > num1 && num2 > num3) {
        return num2;
    }else{
        return num3;
    }    
}
// problem3
function isVowel(c){
    if(c === "A" || c === "a" || c === "E" || c === "e" || c === "I" || c === "i" || c === "O" || c === "o" || c === "U" || c === "u")
    {
        return true;
    }
    return false;
}
// problem4
function sum(array){
    let sum = 0;
    for (let i = 0; i < array.length; i++) {
        sum  += array[i];        
    }
    return sum;
}

function multiply(array){
    let product = 1;
    for(let num in array){
        product *= array[num];
    }
    return product;
}
//problem5
function reverse(string){
    let result = "";
    for (let i = string.length-1; i >= 0 ; i--) {
        result += string[i];        
    }
    return result;
}

//problem6
function findLongestWord(arrayOfWords){
    let lengthOfLongestWord = 0;
    for (let i = 0; i < arrayOfWords.length; i++) {
        let len = arrayOfWords[i].length;
        if(len > lengthOfLongestWord){
            lengthOfLongestWord = len;
        }
                
    }
    return lengthOfLongestWord;
}
// problem7
function filterLongWords(arrayOfWords, i) {
    let arr = [];
    if(arrayOfWords == null) {
        return null;
    }
    if(arrayOfWords.length == 0){
        return arr;
    }
    arrayOfWords.forEach(function (str) {
        if (i <= str.length) {
            arr.push(str.substring(i));
        }
    });
    return arr;
}
// problem8
function computeSumOfSquares(arrayNumbers){   
    return arrayNumbers.map( num => num*num).reduce((a,b)=> a+b,0);
}
// problem9
function printOddNumbersOnly(arrayNumbers){
    arrayNumbers.filter(num => num % 2 != 0).forEach(element => {
        console.log(element);
    });
}
//problem10
function computeSumOfSquaresOfEvensOnly(arrayOfNumbers){
    return arrayOfNumbers.filter(num => num % 2 == 0).map(num => num * num).reduce((a,b)=>a+b,0);
}
// problem11
function sum(array){   
    return array.reduce((a,b) => a+b,0);
}

function multiply(array){    
    return array.reduce((a,b) => a * b, 1);
}
// problem12
function findSecondBiggest(arr) {
    if(arr == null || arr.length == 0){
        return null;
    }
    if(arr.length == 1){
        return arr[0];
    }
    let max =arr[0], secondMax =arr[0];
    for (const element of arr) {
        if (element > max) {
            [secondMax, max] = [max, element];
        } else if (element < max && element > secondMax) {
            secondMax = element;
        }
    }
    return secondMax;
}
// problem13
function printFibo(n, a, b ){
    if(n>0){
        console.log(a);
    }
    if(n>1){
        console.log(b);
    }
    for (let i = 2; i < n; i++) {
        let sum = a+b;
        a=b;
        b=sum;
        console.log(sum);
    }
}