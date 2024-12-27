keywords.pop(); // Removes the last element
console.log(keywords); // Output: ["vega", "data", "visualization", "component", "embed"]

keywords.shift(); // Removes the first element
console.log(keywords); // Output: ["data", "visualization", "component", "embed"]

keywords.splice(1, 1); // Removes one element at index 1
console.log(keywords); // Output: ["data", "component", "embed"]
