import{j as t}from"./index-DoYSeZSO.js";import{P as e}from"./PlaygroundWrapper-B26a1wkb.js";const i=`
//Write React components, JSX, or pure JS. No need of any import statements.

function ClosureSetTimeout() {
  const handleRun = () => {
    for (let i = 1; i <= 5; i++) {
      setTimeout(() => {
        console.log(i);
      }, i * 1000);
    }
  };

  return (
    <div>
      <button onClick={handleRun}>Run Closure Demo</button>
    </div>
  );
}

export default ClosureSetTimeout;
`.trim(),n=`
//Write React components, JSX, or pure JS. No need of any import statements.
// Async code will not run

// Using let → block scoped, prints 1..5
function closureWithLet() {
  for (let i = 1; i <= 5; i++) {
    setTimeout(function() {
      console.log(i);
    }, i * 1000);
  }
}

// Using var → function scoped, fix with IIFE (function close)
function closureWithVar() {
  for (var i = 1; i <= 5; i++) {
    (function(i) {
      setTimeout(function() {
        console.log(i);
      }, i * 1000);
    })(i);
  }
}

closureWithLet();
closureWithVar();
`.trim();function s(o){return t.jsx(e,{defaultCode:i,defaultJsCode:n,...o})}export{s as default};
