// Creating a promise (Promise One)
const promiseOne = new Promise(function(resolve, reject) {
   // Simulate an async operation with a setTimeout
   setTimeout(function() {
     console.log('Async task is complete');
     resolve(); // Resolve the promise
   }, 1000); // Wait for 1 second
 });
 
 // Consuming Promise One
 promiseOne.then(function() {
   console.log('Promise One consumed');
 });
 
 // Creating and consuming a second promise (Promise Two)
 new Promise(function(resolve, reject) {
   // Simulate another async operation with a setTimeout
   setTimeout(function() {
     console.log('Async task 2');
     resolve(); // Resolve the second promise
   }, 2000); // Wait for 2 seconds
 }).then(function() {
   console.log('Promise Two consumed');
 });
 
 // Creating a promise with user data (Promise Three)
 const promiseThree = new Promise(function(resolve, reject) {
   // Simulate an async operation, like a database call
   setTimeout(function() {
     resolve({ username: "shree", email: "anand@gmail.com" });
   }, 3000); // Wait for 3 seconds
 });
 
 // Consuming Promise Three
 promiseThree.then(function(user) {
   console.log('Promise Three consumed:');
   console.log(user);
 });
 
 // Creating a promise with error handling (Promise Four)
 const promiseFour = new Promise(function(resolve, reject) {
   setTimeout(function() {
     let error = true;
     if (!error) {
       resolve({ username: "ankt", email: "s@pw.live" });
     } else {
       reject('Error, something went wrong');
     }
   }, 5000); // Wait for 5 seconds
 });
 
 // Consuming Promise Four with error handling
 promiseFour
   .then(function(user) {
     console.log('Promise Four resolved:');
     console.log(user);
   })
   .catch(function(error) {
     console.log('Promise Four rejected:');
     console.log(error);
   })
   .finally(function() {
     console.log('Promise Four has been resolved or rejected');
   });
 
 // Creating a promise with error handling (Promise Five)
 const promiseFive = new Promise(function(resolve, reject) {
   setTimeout(function() {
     let error = true;
     if (error) {
       resolve({ username: "rama", email: "s@pw.live" });
     } else {
       reject('Error, something went wrong');
     }
   }, 6000); // Wait for 6 seconds
 });
 
 // Consuming Promise Five using an async function
 async function consumePromiseFive() {
   try {
     const response = await promiseFive;
     console.log('Promise Five resolved:');
     console.log(response);
   } catch (error) {
     console.log('Promise Five rejected:');
     console.log(error);
   }
 }
 
 consumePromiseFive(); // Call the async function to consume Promise Five
 