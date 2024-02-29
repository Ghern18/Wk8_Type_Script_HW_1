
// 1. For each of these values, what type will the TypeScript compiler infer?

let a = 118;
// A: number

let b = 'Thieves';
// A: string

let c = [true, false, false];
// A: boolean[]

let d = {age: number};
// A: { age: number; }

let e = [3];
// A: number[]

let f;
// A: undefined

let g = [];
// A: {}[]

let h: { age: number } = { age: 25 };
// A: { age: number }

let i: number[] = [3];
// A: number[]

let j: undefined;
// A: undefined

let k: {}.constructor[];
// A: FunctionConstructor



// 2. What are the compilation errors in each of the following code snippets?
let song: {
    title: string,
    releaseYear: number,
} = {
    title: 'Lose Yourself'
};

// A: 'releaseYear' is not initialized with a value.
// Property 'releaseYear' is missing in type '{ title: string; }' but requires an in type '{ title: string; releaseYear: number; }'.
// let song: {
//     title: string,
//     releaseYear: number,
// } = {
//     title: 'Lose Yourself',
//     releaseYear: 2002,
// };

let prices = [100, 200, 300];
prices[0] = '$100';
// A: prices because the  type does not match the assigned value. Type 100 is not assignable to the type number.
// let prices = [100, 200, 300];
// prices[0] = 100;

function myFunc(a: number, b: number): number {}
// A: The function of the body is empty, it will show a runtime error.
// function myFunc(a: number, b: number): number {
//     return a + b;
// }