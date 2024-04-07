const h1 = React.createElement(  //TODO: What does React.createElement do?
  "h1",
  { className: "heading" }, // using class gives warning:  Invalid DOM property `class`. Did you mean `className`?
  "Hello World from React!"
);

// h1 is a React element, its an object
console.log(h1);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(h1); //TODO: What does render do?
