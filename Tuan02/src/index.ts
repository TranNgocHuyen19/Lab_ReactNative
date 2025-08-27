// A. Basics with Promise
// 1. Create a Promise that returns the string 
// "Hello Async" after 2 seconds.
const helloAsync = new Promise<string>((resolve) => {
    setTimeout(() => {
        console.log("==================Cau 1==================")
        resolve("Hello Async");
    }, 2000);
});
helloAsync.then(console.log);

// 2. Write a function that returns a Promise resolving with 
// the number 10 after 1 second.
const returnTen = (): Promise<number> => {
    return new Promise<number>((resolve) => {
        console.log("==================Cau 2==================")
        setTimeout(() => {
            resolve(10);
        }, 1000);
    });
};
returnTen().then(console.log);

// 3. Write a function that rejects a Promise with the error 
// "Something went wrong" after 1 second.
const rejectWithError = (): Promise<string> => {
    return new Promise((_, reject) => {
        setTimeout(() => {
            console.log("==================Cau 3==================")
            reject(new Error("Something went wrong"))
        }, 1000)
    })
}
rejectWithError()
    .catch((err) => console.error(err.message));
// 4. Use .then() and .catch() to handle a Promi se that 
// returns a random number.
// 5. Create a function simulateTask(time) that 
// returns a Promise resolving with "Task
// done" after time ms.
// 6. Use Promise.all() to run 3 simulated Promises in 
// parallel and print the result.
// 7. Use Promise.race() to return whichever 
// Promise resolves first.
// 8. Create a Promise chain: square the number 2, 
// then double it, then add 5.
// 9. Write a Promise that reads an array after 1 second 
// and filters even numbers.
// 10. Use .finally() to log "Done" when a Promise 
// finishes (success or failure).