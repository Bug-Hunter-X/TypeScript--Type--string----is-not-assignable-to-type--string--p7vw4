function greeter(person: string): string {
  return "Hello, " + person;
}

let user = ["Jane", "Doe"];

// Solution 1: Array destructuring
let [firstName] = user;
console.log(greeter(firstName)); // Output: Hello, Jane

// Solution 2: Accessing array element
console.log(greeter(user[0])); // Output: Hello, Jane

//Solution 3: Type assertion (Use with caution)
console.log(greeter(user[0] as string)); //Output: Hello, Jane

//Solution 4:  Overload the function to handle arrays
function greeter(person: string): string;
function greeter(person: string[]): string; 
function greeter(person: string | string[]): string {
    if (typeof person === 'string') {
        return "Hello, " + person;
    } else {
        return "Hello, " + person.join(' ');
    }
}
console.log(greeter(user)); //Output: Hello, Jane Doe