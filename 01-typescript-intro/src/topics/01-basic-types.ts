const name = "John"; // TypeScript infers the type as string

let hpPoints: number | string = 95;

hpPoints= 'Full'; // Explicitly declaring the type as string
const isAlive: boolean = true;

console.log(`Name: ${name}, HP Points: ${hpPoints}, Is Alive: ${isAlive}`);

console.log({ name, hpPoints, isAlive });
export {};