# E3. Laying The Foundation

## Learning
1. `JSX`
2. `React.createElement` vs `JSX`
3. `Benefits of JSX`
4. `Behind the Scenes of JSX`
5. `Babel` & `parcel` role in JSX
6. `Components`
7. `Functional Components`
8. `Composing Components`
9. `react element`

## Notes

**What is `JSX`?**

`JSX` stands for JavaScript XML.

`JSX` is neither a string nor a html tag but a **syntactic sugar** for the React object. It is a `html-like syntax` inside `js` code for creating react elements. By using JSX, instead of writting markup (html) and logic(js) separately, the separation of concerns (SoC) is emphasized based on loosely coupled units called 'Components' which contains both.

**Broswer does not understand JSX** and a transpiler/compiler is required to convert this to browser understandable js code. Eg: `Babel`

`JSX` --> `React.createElement()` --> `React element` --> `Object to be rendered in the DOM`

**Eg: using JSX:**

```
const myElement = <h1>I Love JSX!</h1>;
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(myElement);

```

**Eg: Without JSX:**

```
const myElement = React.createElement('h1', {}, 'I do not use JSX!');
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(myElement);

```

Benefits:-

- Easy to maintain
- Secure
- Easy to debug

---

**Superpowers of `JSX`**

Using JSX, you can write markup inside Javascript, providing you with a superpower to write logic and markup of a component inside a single .jsx file. JSX is easy to maintain and debug.

**Example**

```
function greeting(user) {
//JSX
  return <h1>{user}, How are you!!!</h1>;
}

```

More:-

- JSX as `variables` : markup (html-like) syntax can be set in a variable. This creates a react element (object).
- `javascript expressions` in JSX : JSX supports all js expressions by wrapping them in {}
- `Attributes` in JSX : We can pass all the html attributes inside jsx tag (attributes must be CamelCased). Even, custom attributes can be created, but it must not use CamelCase.
- `Props` in JSX : The values of each attribute can be passed as properties (props) to a react element. This is my favourite superpower of jsx, since it can handle dynamic data to create react elements.

---

**Role of type `attribute` in script tag? What `options can I use` there?**

The `type` attribute in the script tag defines the type of script that we we want to run inside our app. `type` attribute can be of the following types:

- `text/javascript` : It is the basic standard of writing javascript code inside the `<script>` tag.
    
    ```
    <script type="text/javascript">
        const a = "Hello";
        const b = "World!";
        console.log(a + " " + b); // Hello World!
    </script>
    
    ```
    
- `module`: This value tells the browser that the script is a module that can import or export other files or modules inside it
    
    ```
    <script type="module" src="app.js"></script>
    
    ```
    
- `importmap`: If the type attribute is set `importmap`, the body of the element contains importmap ie an JSON object using which the browser can resolve the module specifiers while importing modules.
    
    ```
    <script type="importmap" src="app.js"></script>
    
    ```
    
- `text/ecmascript` : this value indicates that the script is following the `EcmaScript` standards.
- `text/babel` : This value indicates that the script is a babel type and required bable to transpile it.
- `text/typescript`: As the name suggest the script is written in `TypeScript`.
- *NOTE*: In HTML5, type attribute is not mandatory. If type attribute is not present(default), or an empty string (type="") or javascript MIME type (text/javascript or application/ecmascript), it is treated as classic "javascript" file.
    
    `<script type="" src="app.js"></script>`

    ---

    **{TitleComponent}` vs `{< TitleComponent/>}` vs `{< TitleComponent>< /TitleComponent>}` in `JSX`**

    The Difference is stated below:

- `{TitleComponent}`: This value describes the `TitleComponent` as a javascript expression or a variable. The `{}` can embed a javascript expression or a variable inside it.
- `<TitleComponent/>` : This value represents a Component that is basically returning Some JSX value. In simple terms `TitleComponent` a function that is returning a JSX value. A component is written inside the `{< />}` expression.
- `<TitleComponent></TitleComponent>` : `<TitleComponent />` and `<TitleComponent></TitleComponent>` are equivalent only when `< TitleComponent />` has no child components. The opening and closing tags are created to include the child components.

**Example**

```
<TitleComponent>
    <FirstChildComponent />
    <SecondChildComponent />
    <ThirdChildComponent />
</TitleComponent>

```

OR

- `{ TitleComponent }` - This value in jsx is considered as jsx expression or variable. If no such variable is present, no output will be shown in the browser. Console throws the following warning
    
    ```
     index.js:1 Warning: Functions are not valid as a React child. This may happen if you return a Component instead of <Component /> from render. Or maybe you meant to call this function rather than return it.
    
    ```
    
- `{ <TitleComponent /> }` - This value in jsx is meant for rendering a component (i.e) function that return jsx. This is self closing tag.
- `{ <TitleComponent> </TitleComponent> }` - This is same as `{ <TitleComponent /> }` if there are no child inside TitleComponent. If there are children, then those values come inside `{ <TitleComponent>}`  and `</TitleComponent> }`.

---

**What is Babel and what is its purpose in a React project?**

Babel is a toolchain that is mainly used to convert ECMAScript 2015+ (ES6+) code into a backwards-compatible version of JavaScript that can be run in older browsers or environments. It essentially allows developers to use the latest JavaScript features without worrying about compatibility issues.

1. **Transpiling JSX**: Babel can transform JSX syntax used in React components into regular JavaScript code that browsers can understand. JSX is a syntax extension that allows developers to write HTML-like code within JavaScript.
2. **Support for ES6+ Features**: Babel allows developers to use the latest JavaScript features like arrow functions, template literals, destructuring, and more, even in environments that don't support them natively.
3. **Integration with Build Tools**: Babel is often integrated into build tools like webpack, Rollup, or Parcel as part of the build process. This integration allows developers to automatically transpile and bundle their code during development and deployment.

Overall, Babel plays a crucial role in modern web development, particularly in React projects, by enabling developers to write cleaner, more expressive code using the latest JavaScript features while ensuring compatibility with a wide range of browsers and environments.

## Quick Revise

- `git init` It can be used to convert an existing, unversioned project to a Git repository or initialize a new, empty repository. 

-  Adding **script** in package.json 
   ```
   In package.json
   {
   "script": {
     "start": parcel index.html"
     "build": parcel build index.html"
     }
   }


-  npx ~= npm run 
   > Will `npm run parcel index.html` work ???
   
   > No, It will not work. It will give error:
   ```
   npm ERR! Missing script: "parcel index.html"
   npm ERR! 
   npm ERR! To see a list of scripts, run:
   npm ERR!   npm run
   ```
   
   Because `npm run` will run a script, To run the package directly use `npx`:-  
   ```
   npx parcel index.html   
   or
   npm run start      // where "start" is script. (i.e "start": parcel index.html")
   
   ```
   
 - parcel * Babel, itself does not remove console.log. For that we need a babel plugin 
   ```
   npm install babel-plugin-transform-remove-console --save-dev
   ```
   Now, create a babel conifuration file: `.babelrc`   

- In **Props** we pass **Key**. 
- Why do we pass Key? (Read: React Concilliation key)

- **JSX**
- Is JSX, HTML into javascript?
  > No, JSX is NOT html into javascript. It is HTML Like Syntex.
  ```
  const heading = <h1> Hello Everyone </h1>
  ```
  
- How does JSX executes?
  > **Babel** (which is a complier), takes the JSX code & gives back JS code
  > Babels reads our code word by word & creates an AST(Abstract Syntax Tree)
  >  JSX -> React.createElement() -> React Object => HTML(DOM)

- visit [babeljs.io](https://babeljs.io/)
  > JSX uses react.createElement() behind the scenes.
  > Babel is doing this for us.
  > Babel understand JSX & covert JSX COde into React.createElement Code
  > JSX is not a package. So, its not imported
  > JSX is a syntax

- JSX Expression
  ```
  const h1 = (
  <h1 id="title" key="123">
    Hello Everyone
  </h1>
  );
  ```
- **React Element**:

- **React Component**: Everything is a Component in react.

- Different ways to write Functional Compoment?

- Ways to render _React Element_ Vs _React Component_ ?

- How to use React Element isside React Component ?

- **Component Composition** ???
  > passing Component inside conponent is known as Component Composition


## Code Practice

**Create a `Nested header Element` using `React.createElement`(h1,h2,h3 inside a div with class "title")**
```
const header = React.createElement(
  "div",
  {
    className: "Title",
    key: "title",
  },
  [
    React.createElement(
      "h1",
      {
        key: "h1",
      },
      "This is h1 Tag"
    ),
    React.createElement(
        "h2",
        {
          key: "h2",
        },
        "This is h2 Tag"
      ),
      React.createElement(
        "h3",
        {
          key: "h3",
        },
        "This is h3 Tag"
      )
  ]
);
```
---

**Create the `same element using JSX`**
```
const header = (
  <div className="Title" key="title">
    <h1 key="h1">This is h1 tag</h1>
    <h2 key="h2">This is h2 tag</h2>
    <h3 key="h3">This is h3 tag</h3>
  </div>
);
```
---

**Create a `functional component of the same with JSX`**
```
const Header = () => {
  return (
    <div className="Title" key="title">
      <h1 key="h1">This is h1 tag</h1>
      <h2 key="h2">This is h2 tag</h2>
      <h3 key="h3">This is h3 tag</h3>
    </div>
  );
};
```
---

**Pass `attribute into the tag in JSX`**
```
const Header = () => {
  return (
    <div className="Title" key="title">
      <h1 style={{color:"blue"}} key="h1">This is h1 tag</h1>
      <h2 style={{color:"palevioletred"}} key="h2">This is h2 tag</h2>
      <h3 style={{color:"green"}} key="h3">This is h3 tag</h3>
    </div>
  );
};
```
---

**`Composition of Component` (Add a component inside another)**
```
const AnotherComponent = function(){
    return <h2> This is Another Component</h2>
}

const Header = () => {
  return (
    <div className="Title" key="title">
      <h1 style={{color:"blue"}} key="h1">This is h1 tag</h1>
      <h2 style={{color:"palevioletred"}} key="h2">This is h2 tag</h2>
      <AnotherComponent/>
      <h3 style={{color:"green"}} key="h3">This is h3 tag</h3>
    </div>
  );
};
```
---

**`{TitleComponent}` vs `{<TitleComponent/>}` vs `{<TitleComponent></TitleComponent>}` in JSX**
```
const element = <h1>This is React Element</h1>; // This is React element or {TitleComponent}

const TitleElement = () => {
  return <h2 style={{ color: "red" }}>This Title Element</h2>;
}; // This is Title Component

const Header = () => {
  return (
    <div className="Title" key="title">
      {/* This is {TitleComponent} */}
      {element}
      <h1 style={{ color: "blue" }} key="h1">
        This is h1 tag
      </h1>
      {/* This is {<TitleComponent/>} */}
      <TitleElement/>
      <h2 style={{ color: "palevioletred" }} key="h2">
        This is h2 tag
      </h2>
      {/* This is {<TitleComponent></TitleComponent>}*/}
      <TitleElement></TitleElement>
      <h3 style={{ color: "green" }} key="h3">
        This is h3 tag
      </h3>
    </div>
  );
};
```
---

**All Attachments in a Component**

```
const Component = () => (
  <div id="container" className="container">
    {h2inJSX}                       {/* Attaching React element */}
    <h2>What's Next?</h2>           {/* Attaching plain JSX */}
    <WhatNext />                    {/* Attaching React component */}
    Days to go: {20 - 5 + 0.5 * 5}  {/* Attaching expression */}
    {<br/>}
    {wishes()}                      {/* Attaching JS function */}
  </div>
);
```

## Timeline

```
00:01:04 – starting the project by using terminal
00:03:00 – create a npm script for starting the project in dev world
00:06:00 – Tips to start a project when you joined a new company 
         – scripts in package.json discussion
00:20:58 – JSX Introduced & its usage
00:38:00 – Transpiling the JSX
00:40:35 – Babel explanation
         – JSX code
00:45:00 – Babel’s explanation again but its more concise
00:53:30 – usage of class & className in JSX
00:58:00 – Visual Studio Code Extensions
         – Prettier
         – “Bracket Pair Colorization” Toggler
         – ES Lint and “Better Comments”
01:01:13 – React Component & its 2 ways of writing (Class based & Functional)
01:16:00 – Nested Functional Component
         – React Element
         – React Component
01:18:45 – Rendering a functional component 
         – root.render(<HeadingComponent/>);
01:22:30 – How to render a component inside another component
01:25:05 – Component Composition 
01:27:00 – Component without Arrow function
         – Other ways of writing a component
01:35:00 – How to put a react element inside a component?
01:37:25 – How to put a React element inside a React element?
01:46:55 – Cross Site Scripting, JSX Expressions, React Fragments
02:05:00 – Session Recap 
```
