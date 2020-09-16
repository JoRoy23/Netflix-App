// Function to choose a random things in an array
function choice(arr) {
  return arr[Math.floor(Math.random() * arr.length)];
}

// Function to truncate a text to a certain number of words
function truncate(str, n) {
  return str?.length > n ? str.substr(0, n - 1) + "..." : str;
}

export { choice, truncate };
