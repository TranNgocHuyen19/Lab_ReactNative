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
const randomNumber = (): Promise<number> => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            console.log("==================Cau 4==================")
            const num = Math.random();
            if(num < 5)
                resolve(num)
            else {
                reject(new Error("Something went wrong"))
            }
        }, 1000)
    })
}
randomNumber()
    .then(console.log)
    .catch((err) => console.error(err.message));
// 5. Create a function simulateTask(time) that 
// returns a Promise resolving with "Task
// done" after time ms.
const simulateTask = (time: number): Promise<string> => {
    return new Promise((resolve) => {
        setTimeout(() => {
            // console.log("==================Cau 5==================")
            resolve("Task done")
        }, time)
    })
}
simulateTask(1000)
    .then(console.log)
// 6. Use Promise.all() to run 3 simulated Promises in 
// parallel and print the result.
Promise.all([
    simulateTask(2000),
    simulateTask(1500),
    simulateTask(2500),
]).then(results => {
    console.log("==================Cau 6==================")
    console.log(results)
})
// 7. Use Promise.race() to return whichever 
// Promise resolves first.
Promise.race([
    simulateTask(1000),
    simulateTask(1500),
    simulateTask(2000)
]).then(result => {
    console.log("==================Cau 7==================")
    console.log("First to finish:", result);
});
// 8. Create a Promise chain: square the number 2, 
// then double it, then add 5.
Promise.resolve(2)
    .then(num => {
        console.log("==================Cau 8==================")
        return num * num
    })
    .then(square => square * 2)
    .then(doubled => doubled + 5)
    .then(result => console.log("Final result:", result));

// 9. Write a Promise that reads an array after 1 second 
// and filters even numbers.
const filterEvenNumbers = (): Promise<number[]> => {
    return new Promise((resolve) => {
        setTimeout(() => {
            console.log("==================Cau 9==================")
            const arr = [1, 2, 3, 4, 5, 6, 7]
            const evens = arr.filter(num => num % 2 == 0)
            resolve(evens)
        }, 1000)
    })
}
filterEvenNumbers()
    .then(console.log)
// 10. Use .finally() to log "Done" when a Promise 
// finishes (success or failure).
const taskWithFinally = new Promise((resolve, reject) => {
    setTimeout(() => {
        console.log("==================Cau 10==================")
        const success = Math.random() > 0.3;
        if (success) resolve("Completed successfully");
        else reject("Failed");
    }, 1000);
});
taskWithFinally
    .then(console.log)
    .catch(console.error)
    .finally(() => console.log("Done"));

//  B. Async/Await
// 11. Convert Exercise 1 into async/await.
const asyncHelloAsync = async (): Promise<void> => {
    const result = await new Promise<string>((resolve) => {
        setTimeout(() => {
            console.log("==================Cau 11==================")
            resolve("Hello Async");
        }, 2000);
    });
    console.log(result);
};
asyncHelloAsync();

// 12. Write an async function that calls simulateTask(2000) and 
// logs the result.
const asyncSimulateTask = async (): Promise<void> => {
    const result = await simulateTask(2000);
    console.log("==================Cau 12==================")
    console.log(result);
};
asyncSimulateTask();
// 13. Handle errors using try/catch with async/await.
const asyncWithErrorHandling = async (): Promise<void> => {
    try {
        const result = await rejectWithError();
        console.log(result);
    } catch (err) {
        console.log("==================Cau 13==================")
        if (err instanceof Error) {
            console.error(err.message);
        }
    }
};
asyncWithErrorHandling();
// 14. Write an async function that takes a number, waits 1 second, 
// and returns the number × 3.
const multiplyByThree = async (num: number): Promise<number> => {
    return new Promise((resolve) => {
        setTimeout(() => {
            // console.log("==================Cau 14==================")
            resolve(num * 3);
        }, 1000);
    });
};
multiplyByThree(5).then(console.log);
// 15. Call multiple async functions sequentially using await.
const sequentialCalls = async (): Promise<void> => {
    const first = await multiplyByThree(2);
    console.log("Cau 15: First call result:", first);
    const second = await multiplyByThree(first);
    console.log("Cau 15: Second call result:", second);
    const third = await multiplyByThree(second);
    console.log("Cau 15: Third call result:", third);
};
sequentialCalls();
// 16. Call multiple async functions in parallel using Promise.all().
const parallelCalls = async (): Promise<void> => {
    const results = await Promise.all([
        multiplyByThree(2),
        multiplyByThree(3),
        multiplyByThree(4),
    ]);
    console.log("==================Cau 16==================")
    console.log("Parallel results:", results);
};
parallelCalls();
// 17. Use for await...of to iterate over an array of Promises.
// 18. Write an async function fetchUser(id) that simulates an API call (resolves a user
// object after 1 second).
// 19. Create an async function fetchUsers(ids: number[]) that calls fetchUser for each
// ID.
// 20. Add a timeout: if the API call takes more than 2 seconds, throw an error.