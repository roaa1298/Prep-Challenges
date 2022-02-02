'use strict';

// Resource:
// split: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/split
// slice: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/slice
// splice: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/splice
// indexOf: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/indexOf
// lastIndexOf: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/lastIndexOf

// 1) ---------------------
// 
// Using the slice and indexOf/lastIndexOf methods, return the last word in a string
//
// Note: consider that the string may have one word but never empty
//
// Ex: "I did my waiting 12 years of it in Azkaban" ==> "Azkaban"
// Ex: "Impossible" ==> "Impossible"
//
// ------------------------

const LastWord = (str) => {
    let firstIndex=str.lastIndexOf(' ');
    return str.slice(firstIndex+1, str.length);
}

// 2) ---------------------
// 
//  Hopefully you struggled in the last code challenge, you can try to do the same task using the split method
//
//  EX: "you dare use my spells against me, potter" ===> "potter"
//
// ------------------------

const LastWord_2 = (str) => {
    let arr=str.split(" ");
    return arr[arr.length-1];
}

// 3) ---------------------
// 
// Number 2 was easy right?, ok then using the splice method replace all the "I" with "We", "am" with "are" and "was" with "were"
//
// Note: you may use another method for search (indexOf)
//
// Ex: "I thought you had a plan" ==> "We thought you had a plan"
// Ex: "I was there 3000 years ago" ==> "We were there 3000 years ago"
// Ex: "I am Venom" ==> "We are Venom"
//
// ------------------------

const replaceWords = (str) => {
    let i;
    let i2;
    let i3;
    let arr=[];
    arr=str.split(" ");
    if(arr.indexOf('I')!=-1)
    {
      i=arr.indexOf('I');
        arr.splice(i,1,'We');
    }

    if(arr.indexOf('am')!=-1)
    {
      i2=arr.indexOf('am');
        arr.splice(i2,1,'are');
    }  
     
    if(arr.indexOf('was')!=-1)
     {
       i3=arr.indexOf('was');
        arr.splice(i3,1,'were');
     }   

    return arr.join(' ');
}

// 4) ---------------------
// 
// Write a function that "joins" the array of words together and put a comma "," after every five words
// ["move","it","away","from","the","street"] ==> "move it away from the, street" 
//
// ------------------------

const arrToStr = (arr) => {
    arr[4]=`${arr[4]},`;
    return arr.join(' ');
}

// 5) ---------------------
// 
// Simon got a string manipulation question for his interview, it asked him to replace the duplicated letters in a string to an indicator and counter
// as in the example:
//
// "aaaa bbb sdf" ===> "a4 b3 s1d1f1"
//  "door" ==> "d1o2r1"
//
// help him by writing the function
//
// ------------------------

const letterCounter = (str) => {
    let letters=str.split(' ');
    let res=[];
    let resultArray=[];
    letters.forEach((letter)=>{
        let c={};
        let count;
        let result='';
        res=letter.split('');
        for(var i=0 ; i<res.length ; i++)
        {
            count=0;
            if(res[i]==res[i+1])
            {
                for(let j=i ; j<res.length ; j++)
                {
                    count++;
                    if(res[j+1]!=res[i])
                    break;
                }
                
                c[[res[i]]]=count;
            
            }
            else
            {
                count=1;
                c[[res[i]]]=count;
            }

        }

        for(let key of Object.keys(c))
            {
                result+=`${key}${c[key]}`;
            }

        resultArray.push(result);
        
    });
    return resultArray.join(' ');

}



module.exports = { LastWord, LastWord_2, replaceWords, arrToStr, letterCounter };