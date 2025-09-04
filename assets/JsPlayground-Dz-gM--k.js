import{r as s,j as t}from"./index-CrHNwBj-.js";import{P as L}from"./PlaygroundWrapper-BCWwELyH.js";const r=`
//Write React components, JSX, or pure JS. No need of any import statements.

function App() { 
  return ( 
    <div>
      <h1>Hello World!</h1>
    </div>
  );
}

export default App;
`.trim(),o=`
// Write vanilla JavaScript code here.

console.log('Hello World!');
`.trim(),d="empty-playground-react-code",i="empty-playground-js-code";function H(y){const{concept:O,conceptDescription:W,...b}=y,[R,u]=s.useState(()=>{try{const e=localStorage.getItem(d);return e!==null&&e.trim()!==""?e:r}catch{return r}}),[C,g]=s.useState(()=>{try{const e=localStorage.getItem(i);return e!==null&&e.trim()!==""?e:o}catch{return o}}),[m,x]=s.useState(R),[p,h]=s.useState(C),[S,j]=s.useState(null),[v,f]=s.useState(!1),[J,N]=s.useState(0),[w,n]=s.useState(!1),[c,l]=s.useState(null),T=(e,a)=>{try{localStorage.setItem(d,e),localStorage.setItem(i,a),u(e),g(a),j(new Date().toLocaleTimeString([],{hour:"2-digit",minute:"2-digit",second:"2-digit"})),f(!0),setTimeout(()=>f(!1),2e3)}catch{}},k=()=>{T(m,p)},E=e=>{l(e),n(!0)},A=()=>{c==="react"?(localStorage.removeItem(d),x(r),u(r)):c==="js"&&(localStorage.removeItem(i),h(o),g(o)),n(!1),l(null),N(e=>e+1)},I=()=>{n(!1),l(null)},_=(e,a)=>{a==="js"?h(e):x(e)},D=e=>E(e),P=w?t.jsx("div",{className:"fixed inset-0 z-50 flex items-center justify-center bg-black/40",children:t.jsxs("div",{className:"bg-white dark:bg-gray-800 rounded shadow-lg p-6 max-w-xs w-full",children:[t.jsx("div",{className:"font-bold mb-3 text-red-500 text-center text-lg",children:"Reset Code?"}),t.jsxs("div",{className:"mb-5 text-center text-gray-700 dark:text-gray-300",children:["Are you sure you want to reset the ",t.jsx("b",{children:c==="react"?"React":"JavaScript"})," code to its default value?"]}),t.jsxs("div",{className:"flex justify-center gap-4",children:[t.jsx("button",{onClick:I,className:"px-4 py-1 rounded bg-gray-200 dark:bg-gray-700 hover:bg-gray-300 dark:hover:bg-gray-600 text-gray-900 dark:text-gray-100",children:"Cancel"}),t.jsx("button",{onClick:A,className:"px-4 py-1 rounded bg-red-600 hover:bg-blue-700 text-white",children:"Reset"})]})]})}):null;return t.jsxs("div",{children:[P,s.createElement(L,{...b,key:J,title:"JavaScript Playground",description:"You can write React components, JSX, or pure JS. No imports.",defaultCode:m,defaultJsCode:p,onCodeChange:(e,a)=>_(e,a),onReset:D,customHeaderControls:t.jsxs("div",{className:"flex items-center space-x-2 text-sm",children:[t.jsxs("div",{className:"flex items-center space-x-1",children:[t.jsx("div",{className:`w-2 h-2 rounded-full transition-colors ${v?"bg-green-400 animate-pulse":"bg-gray-500"}`}),v&&t.jsx("span",{className:"text-green-400 text-xs",children:"Saved!"})]}),S&&t.jsxs("span",{className:"text-gray-400 text-xs",children:["Last: ",S]}),t.jsx("button",{onClick:k,className:"px-3 py-1 bg-green-600 hover:bg-green-700 text-white text-xs rounded transition-colors",title:"Save code to localStorage",children:"Save"})]})})]})}export{H as default};
