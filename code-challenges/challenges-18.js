'use strict';

// -------------------------------------------------------------------------------------------------------
// Challenge 01:
// Required:
//
// Given a string find the length of the middle word in the sentence
//
// Ex:
// Input: "You can't handle the truth!"
// Output: 6
//
// Input: "You're gonna need a bigger boat"
// Output: 1
//

const wordLength = (str) => {
    let arr =str.split(' ');
    if(arr.length%2==0)
    {
        let pos=(arr.length/2)
        return arr[pos].length;
    }
    else{
        let pos=(Math.floor(arr.length/2))
        return arr[pos].length;
    }
}
// -------------------------------------------------------------------------------------------------------


// -------------------------------------------------------------------------------------------------------
// Challenge 02:
// Required:
//
// Write a function that takes two strings and checks if the two strings contain the same combination of letters
//
// Ex:
// Input: "dad", "add"
// Output: true
//
// Input: "dad", "aadd"
// Output: false
//
// Input: "table", "label"
// Output: false
//
// Input: "cat", "rat"
// Output: false

const wordLetters = (str1, str2) => {
    let first=str1.split("").sort();
    let second=str2.split("").sort();
    let flag;
    for(var i=0 ; i<first.length ; i++)
    {
        if(first[i]==second[i])
        {
            flag=true;
        }
        else{
            flag=false;
            break;
        }
    }
    return flag;
}
// -------------------------------------------------------------------------------------------------------

// -------------------------------------------------------------------------------------------------------
// Challenge 03:
// Optional:
//
// Write a function that takes an integer and a sorted array
// The function returns the index of the integer in the array
// If the integer was not there, the function returns where it could have been
//
// Ex:
// Input: [1,3,5,6], 5
// Output: 2
//
// Input: [1,3,5,6], 2
// Output: 1
//
// Input: [1,3,5,6], 7
// Output: 4
//

const targetIndex = (arr, int) => {
    let pos=arr.indexOf(int);
    if(pos==-1)
  {
    arr.push(int);
    arr.sort();
    pos=arr.indexOf(int);
  }

    return pos;
}
// -------------------------------------------------------------------------------------------------------

module.exports = { wordLength, wordLetters, targetIndex };