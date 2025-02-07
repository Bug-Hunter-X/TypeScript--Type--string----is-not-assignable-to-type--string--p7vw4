# TypeScript Type Error: 'string[]' is not assignable to type 'string'

This example demonstrates a common TypeScript error: passing an array to a function that expects a string. The code attempts to use the `greeter` function, which expects a single string, with an array of strings.  This results in a type error because TypeScript's type system correctly identifies the type mismatch.

The solution involves ensuring the correct type is passed to the function, for example, by using array destructuring or selecting the appropriate array element.