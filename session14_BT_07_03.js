let a = prompt(" nhập Keep Calm And Code On");
// Define constants for uppercase and lowercase letters
const UPPER = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
const LOWER = 'abcdefghijklmnopqrstuvwxyz';
// Initialize an array to store the result
const result = [];
// Iterate through each character in the input string
for (let x = 0; x < a.length; x++) {
  // Check if the current character is an uppercase letter
  if (UPPER.indexOf(a[x]) !== -1) {
    // Convert the uppercase letter to lowercase and add it to the result array
    result.push(a[x].toLowerCase());
  }
  // Check if the current character is a lowercase letter
  else if (LOWER.indexOf(a[x]) !== -1) {
    // Convert the lowercase letter to uppercase and add it to the result array
    result.push(a[x].toUpperCase());
  }
  // If the current character is neither uppercase nor lowercase, add it to the result array as is
  else {
    result.push(a[x]);
  }
}
for (let x = 0; x < a.length; x++) {
    document.write(result[x]);
  }

  