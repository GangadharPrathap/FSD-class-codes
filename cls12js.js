// Function that returns a Promise
function checkServerStatus() {
  return new Promise((resolve, reject) => {
    // Simulate an asynchronous operation (e.g., a network request)
    // using setTimeout to add a delay.
    setTimeout(() => {
      const serverIsUp = true; // Change this to 'false' to see the error case

      if (serverIsUp) {
        // If the operation is successful, call 'resolve' with the result.
        resolve("Success! Server is online.");
      } else {
        // If the operation fails, call 'reject' with an error.
        reject(new Error("Error! Server is offline."));
      }
    }, 2000); // Wait for 2 seconds
  });
}

// Consuming the promise
console.log("Checking server status...");

checkServerStatus()
  .then(message => {
    // This block runs if the promise is resolved (successful).
    console.log(message); // Output: "Success! Server is online."
  })
  .catch(error => {
    // This block runs if the promise is rejected (failed).
    console.error(error.message); // Output: "Error! Server is offline."
  });

console.log("Request sent. Waiting for response...");
