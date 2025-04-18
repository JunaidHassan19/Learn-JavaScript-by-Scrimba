// template strings/literals
// Template strings allow embedding expressions and creating multi-line strings easily.
// They use backticks (`) instead of single (') or double (") quotes.

const recipient = "James";
const sender = "Per";

// Refactor the email string to use template strings
// Old way using string concatenation:
// const email = "Hey " + recipient + "! How is it going? Cheers Per"

// New way using template strings:
// Variables or expressions can be embedded using the ${expression} syntax.
const email = `Hey ${recipient}! How is it going? Cheers ${sender}`;

console.log("Original example:");
console.log(email);

// --- More Examples ---

// Example 1: Multi-line strings
// Template strings preserve newlines, unlike traditional strings.
const multiLine = `This is the first line.
This is the second line.
And this is the third line.`;
console.log("\nMulti-line example:");
console.log(multiLine);

// Example 2: Embedding multiple variables
const item = "Coffee";
const price = 5;
const quantity = 2;

const receipt = `Item: ${item}
Price: $${price}
Quantity: ${quantity}
Total: $${price * quantity}`;
console.log("\nReceipt example:");
console.log(receipt);

// Example 3: Embedding expressions (like calculations or function calls)
function getGreeting(name) {
  return `Hello, ${name}!`;
}

const customGreeting = `${getGreeting(
  recipient
)}, welcome back! Your total is $${price * quantity}.`;
console.log("\nExpression embedding example:");
console.log(customGreeting);
