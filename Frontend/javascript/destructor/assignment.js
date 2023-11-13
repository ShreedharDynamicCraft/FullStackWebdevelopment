// 1. Count the occurrences.
// You are building a word count generator that will take a large string of text as input and output the words and
// the number of times they are present in the string. Your task is to write a function that can count the
// occurrences of each word in the string and return a Map containing each word's count. For simplicity, you can
// assume that the string only contains alphabetic characters and spaces.


// function countWordOccurrences(str) {
//     const occ = new Map();
//     const words = str.toLowerCase().split(/\s+/);

//     for (const word of words) {
//         const letters = word.split('');

//         for (const letter of letters) {
//             if (occ.has(letter)) {
//                 occ.set(letter, occ.get(letter) + 1);
//             } else {
//                 occ.set(letter, 1);
//             }
//         }
//     }

//     return occ;
// }

// const inputText = "This is a sample text. This text will be used as a sample to demonstrate word count.";
// const letterOccurrences = countWordOccurrences(inputText);

// letterOccurrences.forEach((count, letter) => {
//     console.log(`${letter}: ${count}`);
// });



/*************************************************************************************************************************************** */



// 2. Only unique items are allowed.
// You are building a program that takes an array of numbers as input and you need to remove all the duplicates
// from the array. You want to write a function that can accomplish this task efficiently and returns a new set that
// contains only the unique elements.

// function removeDuplicates(inputArray) {
//     const uniqueSet = new Set(inputArray);
//     const uniqueArray = Array.from(uniqueSet);
//     return uniqueArray;
// }

// const inputArray = [1, 2, 2, 3, 4, 4, 5, 5, 6];
// const uniqueElements = removeDuplicates(inputArray);

// console.log(uniqueElements);

/*************************************************************************************************************************************** */

// 3. Swap the values.
// You are working on a project that requires you to swap the values of two variables without using a temporary
// variable. You decide to write a function that takes two variables as input and swaps their values using
// destructuring assignment with an array. The function should take the two variables as arguments, destructure
// them into an array, and then swap their positions within the array. Finally, the function should return an array
// with the swapped values. For example, if the function is called with the arguments x = 5 and y = 10, it should
// return an array [10, 5] with x now equal to 10 and y equal to 5.


// function swapValues(x, y) {
//     [x, y] = [y, x];
//     return [x, y];
// }

// let x = 5;
// let y = 10;

// [x, y] = swapValues(x, y);

// console.log(`x: ${x}, y: ${y}`);




/*************************************************************************************************************************************** */

// 4. Access random elements.
// You are building a program that takes an array of numbers as input and you need to extract the first, second,
// and last elements of the array. You decide to write a function that can accomplish this task using destructuring
// assignment with an array. The function should take the array as an argument, destructure it into three variables
// representing the first, second, and last elements, and then return an array with these three values. For example,
// if the input array is [1, 2, 3, 4, 5], the function should return an array [1, 2, 5].

// function extractElements(arr) {
//     const [first, second, , ...rest] = arr;
//     const last = rest.pop();
//     return [first, second, last];
// }

// const inputArray = [1, 2, 3, 4, 5];

// const [firstElement, secondElement, lastElement] = extractElements(inputArray);

// console.log([firstElement, secondElement, lastElement]);

/*************************************************************************************************************************************** */

// 5. Min and max values.
// You are building a program that needs to find the maximum and minimum values in an array of numbers. You
// decide to write a function that can accomplish this task by taking an array of numbers as input and using the
// spread operator with the Math methods max() and min(). The function should return an object with two
// properties, max, and min, representing the maximum and minimum values in the input array, respectively. For
// example, if the input array is [5, 2, 7, 1, 9], the function should return an object { max: 9, min: 1 }.

// function findMinMaxValues(arr) {
//     const max = Math.max(...arr);
//     const min = Math.min(...arr);
//     return { max, min };
// }

// const inputArray = [5, 2, 7, 1, 9];
// const result = findMinMaxValues(inputArray);

// console.log(result);


/*************************************************************************************************************************************** */


// 6. Nested Objects.
// Write a function that takes an object representing a person as input, and extracts the name and street
// properties from a nested object using object destructuring. The function should return an object with these two
// properties. A sample object is given below.


function extractNameAndStreet(person) {
    const { name, address: { street } ,address :{country}} = person;
    return { name, street ,country };
}

const person = {
    name: "John Doe",
    age: 30,
    address: {
        street: "123 Main St",
        city: "Cityville",
        country: "India"
    }
};

const result = extractNameAndStreet(person);

console.log(result);
