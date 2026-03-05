import './style.css'
import './topics/01-basic-types';
const app = document.querySelector<HTMLDivElement>('#app')!;

app.innerHTML = `
  <h1>Hello TypeScript!</h1>
  <p>Open the console to see the output.</p>
`;


console.log('Hello from TypeScript!');