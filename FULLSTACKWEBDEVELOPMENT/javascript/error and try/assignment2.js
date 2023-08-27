// Write a function that takes in an array of integers and a callback function, and returns a new array where each
// element is doubled using the callback.

//  function finddouble(arr)
//  {
//     const numb=arr.map((num)=>{
//     return callback(num);
//     });
//     return numb;
//  }
// function callback(num)
// {
//     return num*2;
// }

// const arr=[6,7,8,3,2];
// const double=finddouble(arr);
// console.log(double);


/******************************************************************************************************************************* */

// 2. String Manipulation.
// Write a function “manipulateString” that takes in a string and converts the characters to uppercase letters. The
// Write a function "manipulateString" that takes in a string and converts the characters to uppercase letters. The
// function should return a callback function "logString" that logs the sentence "The manipulated string is: " along
// with the manipulated string or the new string to the console.


// function manipulateString(str,callback)
// {
//     const manipulatedString = str.toUpperCase();
//     return callback(manipulatedString);
// }

// function logString(manipulatedString)
// {
//     console.log(`The Manipulated string is : ${manipulatedString}`);
// }


// const str="Shreedharanand";
// manipulateString(str,logString);


/******************************************************************************************************************************* */


// 3. Age in Days.
// Write a function that takes in an array of integers and a callback function, and returns a new array where each
// Write a JavaScript function called ageInDays that accepts an object containing a person's first name, last
// name, and age in years as input. The function should concatenate the first and last name into a single string
// and store it in a variable called fullName. It should then calculate the person's age in days and store it in a
// variable called ageInDays.
// The ageInDays function should then return a callback function that logs a message to the console. The
// message should include the person's full name and age in days, and should be in the format: "The person's full
// name is [full name] and their age in days is [age in days]."
// Note that the ageInDays function should not log the message to the console directly, but should instead return
// a callback function that can be used to log the message at a later time.

  const person={
    firstname:"Shreedhar",
    lastname:"Anand",
    age:20,
  }

  function ageInDays(person,callback)
  {
    const fullName=`${[person.firstname]} ${[person.lastname]}`;
    const days=person.age*365;
    callback(fullName,days);
  }

  function logresult(fullName,days){
    console.log(`The person's fullname is ${fullName} and their age in days is ${days}.`);
  }
 ageInDays(person,logresult)


/******************************************************************************************************************************* */

// 4. Arrange in alphabetical order.
// Write a program that accepts a list of objects representing books [ title, author, and year] and a callback
// function. The program should use the map function to create a new list containing only the titles of the books,
// and then pass this new list to the callback function. The callback function should then log the titles to the
// console in alphabetical order.

// function printTitlesAlphabetically(books, callback) {
//     const titles = books.map(book => book.title);
//     const sortedTitles = titles.sort();
//     callback(sortedTitles);
// }

// function logTitles(titles) {
//     console.log("Titles in alphabetical order:");
//     titles.forEach(title => {
//         console.log(title);
//     });
// }

// const books = [
//     { title: "The Catcher in the Rye", author: "J.D. Salinger", year: 1951 },
//     { title: "To Kill a Mockingbird", author: "Harper Lee", year: 1960 },
//     { title: "1984", author: "George Orwell", year: 1949 },
//     // Add more books here
// ];

// printTitlesAlphabetically(books, logTitles);





/******************************************************************************************************************************* */

// 5. Greeting Promise.
// You need to write a function that takes a name as input and returns a promise that resolves with a greeting
// message. The function should greet the person using their name, with a message in the format "Hello, {name}!".
// For example, if the input to the function is "Mithun", the promise should resolve with the string "Hello, Mithun!".


// function greet(name){
//     return new Promise((resolve)=>{
//         const greeting=`Hello ,${name}`;
//         resolve(greeting);

//     });
// }

// const name="shreedhar"
// greet(name).then((message)=>console.log(message));

/******************************************************************************************************************************* */



// 6. Fetch results asynchronously.
// Write a function that asynchronously fetches data from an API
// [ https://jsonplaceholder.typicode.com/todos/1 ]and logs the result to the console.

// async function catchdata(){
//     const response =await
//     fetch("https://jsonplaceholder.typicode.com/todos/1");
//     const data= await response.json();
//     console.log(fetch);
// }

// catchdata();





/******************************************************************************************************************************* */


// 7. Multiple requests.
// Create an asynchronous function that retrieves data from two different API endpoints: "https://
// jsonplaceholder.typicode.com/todos/1" and "https://jsonplaceholder.typicode.com/posts/1". The first API returns
// a to-do task, while the second API provides post details. The function should combine the results from both APIs
// and log them as an object, where the keys are "todo" and "post", and the corresponding values are the
// responses from the respective APIs.

async function getCombinedData() {
    try {
        const [data1, data2] = await Promise.all([
            fetch("https://jsonplaceholder.typicode.com/todos/1").then(response => response.json()),
            fetch("https://jsonplaceholder.typicode.com/posts/1").then(response => response.json())
        ]);

        const combinedData = {
            todo: data1,
            post: data2
        };

        console.log(combinedData);
    } catch (error) {
        console.error("An error occurred:", error);
    }
}

// Call the asynchronous function to retrieve and combine data from the two APIs
getCombinedData().then((data)=>console.log(data));



/******************************************************************************************************************************* */

// <!DOCTYPE html>
// <html lang="en">
// <head>
//     <meta charset="UTF-8">
//     <meta name="viewport" content="width=device-width, initial-scale=1.0">
//     <title>Get Data from API and Display it on the browser console.</title>
// </head>
// <body>
//     <script>
//         fetch("https://jsonplaceholder.typicode.com/posts").then((response)=>response.json).then((data)=>console.log(data)).catch((err)=>console.log(err));
//     </script>
// </body>
// </html>


/******************************************************************************************************************************* */
/******************************************************************************************************************************* */
/******************************************************************************************************************************* */
/******************************************************************************************************************************* */
