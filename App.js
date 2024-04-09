import React from "react";
import ReactDOM from "react-dom/client";

const heading = React.createElement(
  "h1",
  { id: "heading", className: "heading" },
  "Episode 3 of Namaste React 🙏🏼"
);

const headingInJSX = (
  <h1 id="heading" className="heading">
    Episode 3 of Namaste React 🙏🏼
  </h1>
);

console.log(heading); // Object
console.log(headingInJSX); // Same Object as above

//JSX is transpiled to React.createElement() function calls by Babel
/**********************************************************************************/

// React element
const Heading1 = <h1 id="heading" className="heading">Episode 3 of Namaste React 🙏🏼</h1>;

// React element in multiple lines
const Heading2 = (
  <h1 id="heading" className="heading">
    Episode 3 of Namaste React 🙏🏼
  </h1>
);

// React Fuctional Component with return statement
const Heading3 = () => {
  return (
    <h1 id="heading" className="heading">
      Episode 3 of Namaste React 🙏🏼
    </h1>
  );
};

// React Fuctional Component without return statement
const Heading4 = () => (
  <h1 id="heading" className="heading">
    Episode 3 of Namaste React 🙏🏼
  </h1>
);

/**********************************************************************************/

// React element
const content = <p>Hey everyone! I am trying to understand and learn React</p>;

// React element in multiple lines
const h2inJSX = (
  <div>
    <h1 id="heading2" className="heading2">
      Episode 3 of Namaste React 🙏🏼
    </h1>
    {content}
  </div>
);

// React component with return statement
const WhatNext = () => {
  return (
    <ul>
      <li>JSX</li>
      <li>React.createElement vs JSX</li>
      <li>Benefits of JSX</li>
      <li>Behind the Scenes of JSX</li>
      <li>Babel & parcel role in JSX</li>
      <li>Components</li>
      <li>Composing Components</li>
    </ul>
  );
};

function wishes() {
  return "Good Luck To Me In This Journey!";
}

// React component without return statement
const Component = () => (
  <div id="container" className="container">
    {h2inJSX}                        {/* Attaching React element in react component */}
    <h2>What's Next?</h2>            {/* Attaching plain JSX in react component */}
    <WhatNext />                     {/* Attaching React component in react component */}
    Days to go: {20 - 5 + 0.5 * 5}   {/* Attaching expression in react component */}
    {<br/>}
    {wishes()}                       {/* Attaching JS function in react component */}
  </div>
);
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<Component />);


/*
CHECK OUTPUT IN ATTACHED PNG
*/