function addNumbers(a: number, b: number): number {
  return a + b;
}

const addNumbersArrow = (a: number, b: number): string => {
  return `${a + b}`;
}

const multiplay = (a: number, b?: number, base:number = 2): number => a * (b?? base);

const result: number = addNumbers(5, 10);
const resultArrow: string = addNumbersArrow(5, 10);
const resultMultiplayBase: number = multiplay(5);
const resultMultiplay: number = multiplay(5, 10);

console.log({result, resultArrow, resultMultiplayBase, resultMultiplay});

export{};