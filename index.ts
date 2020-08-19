// Import stylesheets
import './style.css';

// Write TypeScript code!
const appDiv: HTMLElement = document.getElementById('app');
appDiv.innerHTML = `<h1>The smallest number</h1>`;


function smallestNumber(num1:number,num2:number)
{
  let smallest;
  if(num1<num2)
  {
    smallest=num1;
  }
  else
  {
    smallest=num2;
  }
  return smallest;
}
console.log(smallestNumber(13,6));