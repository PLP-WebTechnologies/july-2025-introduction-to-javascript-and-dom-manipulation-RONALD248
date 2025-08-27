// Part 1: Basics
// Variables & Conditionals
document.getElementById("checkAgeBtn").addEventListener("click", () => {
  const age = parseInt(document.getElementById("ageInput").value);
  let result;

  if (age >= 18) {
    result = " You are an adult!";
  } else if (age > 0) {
    result = "You are still a child!";
  } else {
    result = "Age can't be negative!!! Please enter valid positive value.";
  }

  document.getElementById("ageResult").textContent = result;
});


// Part 2: Functions

// Function 1: Calculate sum
function calculateSum(a, b) {
  return a + b;
}

// Function 2: Format a greeting
function greetUser(name) {
  return `Hello, ${name}! Welcome to our website.`;
}

// Use the function on button click
document.getElementById("sumBtn").addEventListener("click", () => {
  const num1 = parseFloat(document.getElementById("num1").value);
  const num2 = parseFloat(document.getElementById("num2").value);

  if (isNaN(num1) || isNaN(num2)) {
    document.getElementById("sumResult").textContent = "Please enter valid numbers.";
    return;
  }

  const sum = calculateSum(num1, num2);
  document.getElementById("sumResult").textContent = "Sum is: " + sum;
});

console.log(greetUser("Ronald")); // Example usage in console


// Part 3: Loops
// While loop countdown
document.getElementById("countdownBtn").addEventListener("click", () => {
  let countdownText = "";
  let num = 5; // start from 5

  while (num >= 0) {
    countdownText += num + " ";
    num--;
  }

  document.getElementById("countdownResult").textContent = countdownText;
});

// For loop example: Display fruits in console
const fruits = ["Apple", "Banana", "Orange", "Mango", "Grapes"];
for (let i = 0; i < fruits.length; i++) {
  console.log(fruits[i]);
}

// Part 4: DOM Manipulation

// Toggle highlight class
document.getElementById("toggleBtn").addEventListener("click", () => {
  document.getElementById("domText").classList.toggle("highlight");
});

// Add new list items dynamically
document.getElementById("addItemBtn").addEventListener("click", () => {
  const ul = document.getElementById("itemList");
  const li = document.createElement("li");
  li.textContent = "List Item " + (ul.children.length + 1);
  ul.appendChild(li);
});
// End of script.js