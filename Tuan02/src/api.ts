// C. Fetch API & Simulated I/O
// 21. Use fetch to get data from a public API (e.g.,
// https://jsonplaceholder.typicode.com/todos/1).
const fetchData = async (url: string): Promise<void> => {
    try {
        const response = await fetch(url);
        if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
        }
        const data = await response.json();
        console.log("==================Cau 21==================")
        console.log(data);
    } catch (err) {
        if (err instanceof Error) {
            console.error("Fetch error:", err.message);
        }
    }
};
fetchData("https://jsonplaceholder.typicode.com/todos/1");
// 22. Call the API multiple times and log the results.
// 23. Write an async function that fetches a list of todos and filters out those that are not
// completed.
// 24. Write an async function postData() that sends a POST request to a test API.
// 25. Create a function downloadFile that simulates downloading a file in 3 seconds and logs
// when done.
// 26. Use async/await with setTimeout to simulate a 5-second wait.

// 27. Write a function fetchWithRetry(url, retries) that retries up to retries times if
// the API call fails.
// 28. Write an async function batchProcess() that processes 5 async tasks at once (use
// Promise.all).
// 29. Write an async function queueProcess() that processes tasks sequentially in a queue.
// 30. Use async/await + Promise.allSettled() to handle multiple API calls and display their