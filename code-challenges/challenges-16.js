'use strict';


// Combine methods

// -------------------------------------------------------------------------------------------------------
// Challenge 01:
// Required:
//
// Write a function that takes in a string and returns the reverse of this string .
//
// Input <= "Hello";
// Output => "olleH";

const reverseString = (string) => {
    let arr1=string.split('');
    let arr2=[];
    for(var i=arr1.length-1 ; i>=0 ; i--)
    {
        arr2.push(arr1[i]);
    }
    return arr2.join('');
}
// -------------------------------------------------------------------------------------------------------



// -------------------------------------------------------------------------------------------------------
// Challenge 02:
// Required:
//
// Write a function that takes an array of strings and returns only strings that contain ^_^.
//
// Ex :-
// Input <= ["hello ^_^ ","Hi ^_^" ,"What's up ^_-" ,"lol"] , Output => ["hello ^_^ ","Hi ^_^" ] ;

const detectFace = (arr) => {
    let arr1=[];
    arr.forEach(element => {
        let pos=element.indexOf("^_^");
        if(pos!=-1)
        {
            arr1.push(element);
        }
    });
    return arr1;
}
// -------------------------------------------------------------------------------------------------------


// -------------------------------------------------------------------------------------------------------
// Challenge 03:
// Optional:
//
// Write a function that takes in a string and returns a string contains only characters in even positions.
//
// Ex :-
// Input <= "coding" output =>"cdn"

const eveCharacter = (str) => {
    let arr2=[];
    for(var i=0 ; i<str.length ; i++)
    {
        if(i%2==0)
        {
            arr2.push(str[i]);
        }
    }
    return arr2.join('');
}
// -------------------------------------------------------------------------------------------------------


// -------------------------------------------------------------------------------------------------------
// Challenge 04
// Optional:

// Let us consider you are hired as a software developer in a tech company and you are assigned to work on a restaurant web application project .

// And you are assigned to write function to return only ingredients that contains chicken.
//
// Input:
// [["mushroom", "grilled chicken", "sauce"], ["Bread", "Potato", "baked chicken"], ["fried potato", "garlic sauce", "fried chicken"]];
//
// Output:
// [["grilled chicken"], ["baked chicken"], ["fried chicken"]];


const chickenGradients = (arr) => {
    let arrRes=[];
    arr.forEach(element=>{
        let arrIng=[];
        element.forEach(ing=>{
            if(ing.indexOf("chicken")!=-1)
            {
                arrIng.push(ing);
            }
        });
        arrRes.push(arrIng);
    });
    return arrRes;
}
// -------------------------------------------------------------------------------------------------------

module.exports = { reverseString, detectFace, eveCharacter, chickenGradients };
