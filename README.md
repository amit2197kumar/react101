# E5. Let's Get Hooked

## Learning

- Different ways to Export:`Named Export`, `Default Export` and `as export`
- File extension: like `app.js`& `app.jsx`
- config file (or constant file)
- what are `hooks`?
- `useState` hook in react & why we use it
- creating `local variable` vs `local state variable`
- Why do we need `state variable` ?
- Creating `filter function` for search functionality.

## Notes

**What is the `difference` between `Named export`, `Default export`, and `* as export`?**

ES6 provides us to import & export a module and use it in other files. ES6 provides two ways to export a module from a file: `named export` and `default export`.

1. **Named export**:
    - In `Named export`, one can have multiple named exports per file.
    - Then import the specific exports (these named export will be surrounded in `{}` braces)
    - The name of imported module has to be the same as the name of the exported module.
    - **Eg**: `Exporting` from MyComponent.js & `imported` to App.js like:
        
        **MyComponent.js**
        
        ```
         export const MyComponent = () => {}
         export const MyComponent2 = () => {}
        
        ```
        
        **App.js** (we must use `{}`, when importing component from MyComponent.js)
        
        ```
        import { MyComponent } from "./MyComponent";                    // ex. importing a single named export
        
        import { MyComponent, MyComponent2 } from "./MyComponent";      // ex. importing multiple named exports
        
        import { MyComponent2 as MyNewComponent } from "./MyComponent"; // ex. giving a named import a different name by using "as":
        
        ```
        
2. **Default export**:
    - In `Default export` one can have only one default export per file.
    - The naming of import is completely independent in default export and we can use any name we like.
    - **Eg**: `Exporting` from MyComponent.js & `imported` to App.js like:**MyComponent.jsApp.js** (we must omit `{}`, when importing component from MyComponent.js)
        
        ```
        const MyComponent = () => {}
        export default MyComponent;
        
        ```
        
        ```
        import MyComponent from "./MyComponent";
        
        ```
        
3. **In `as export`**:
    - In `as export` it is used to import the whole module as a component and access the components inside the module.
    - **Eg**: `Exporting` from MyComponent.js & `imported` to App.js like:
        
        **MyComponent.js**
        
        ```
        export const MyComponent = () => {}
        export const MyComponent2 = () => {}
        export const MyComponent3 = () => {}
        
        ```
        
        **App.js**
        
        ```
        import * as MainComponents from "./MyComponent";
        
        <MainComponents.MyComponent />
        <MainComponents.MyComponent2 />
        <MainComponents.MyComponent3 />
        
        ```
        
4. **Using `Named export` and `Default export` together** So you should export like:
    
    **MyComponent.js**
    
    ```
    export const MyComponent2 = () => {}
    
    const MyComponent = () => {}
    export default MyComponent;
    
    ```
    
    **App.js**
    
    `import MyComponent, {MyComponent2} from "./MyComponent";`

---

**What is the `importance` of `config.js` file?**

`config.js` (or `constant.js`) file can be used to store the hardcoded values in one file, so that when the value needs to be modified, it can be easy to do the modification in one file.

Example : All API Base URLs, CDN links, config data from backend, default values needed in the app, can be placed in `config.js` file.

---

**What are `React Hooks`?**

- React Hooks are new addition to React from `React 16.8` version.
- Earlier, state and other component features could be handled only using Class Components.
- But with version 16.8, React introduced a new pattern called `Hooks`.
- With React Hooks, we can use state, and other React features, in a `functional component` empowering functional programming in React.
- Hooks are JavaScript functions that manage the `state's behaviour` and `side effects` by isolating them from a component.

*MORE*:

- In React version 16.8, React introduced a new pattern called Hooks.
- React Hooks are simple JavaScript functions that we can use to isolate the reusable part from a functional component.
- Hooks can be stateful and can manage side-effects.
- Hooks allow you to reuse stateful logic without changing your component hierarchy. This makes it easy to share Hooks among many components or with the community.

**React provides a bunch of standard in-built hooks:**

- useState: To manage states. Returns a stateful value and an updater function to update it.
- useEffect: To manage side-effects like API calls, subscriptions, timers, mutations, and more.
- useContext: To return the current value for a context.
- useReducer: A useState alternative to help with complex state management.
- useCallback: It returns a memorized version of a callback to help a child component not re-render unnecessarily.
- useMemo: It returns a memoized value that helps in performance optimizations.
- useRef: It returns a ref object with a current property. The ref object is mutable. It is mainly used to access a child component imperatively.
- useLayoutEffect: It fires at the end of all DOM mutations. It's best to use useEffect as much as possible over this one as the useLayoutEffect fires synchronously.
- useDebugValue: Helps to display a label in React DevTools for custom hooks.

---

**Why do we need `useState Hook`?**

- `useState()` is one of the basic hooks functions which creates a state and assigns the initialState value passed in the parameter. It also provides a setState function, the state can be updated only using this function.`const [state, setState] = useState(initialState);`
- During initial render, the returned state (state) is the same as the value passed as the first argument (initialState).
- The setState function is used to update the state. It accepts a new state value and enqueues a re-render of the component. `setState(newState)`
- During subsequent re-renders, the `first value` returned by useState will always be the most recent state after applying updates.
- If we want to use the prev state value instead of the first value , we can pass a function to setState, it receives previous state and returns updated state.

*More*:

- `useState hook` is used to maintain the state in our React application.
- It keeps track of the state changes so basically useState has the ability to encapsulate local state in a functional component.
- The useState hook is a special function that takes the `initial state` as an `argument` and `returns an array` of two entries.
- UseState encapsulate only singular value from the state, for multiple state need to have useState calls.

**Syntax for useState hook**

```
const [state, setState] = useState(initialstate);

```

**Importing: To use useState you need to import useState from react as shown below:**

```
import React, { useState } from "react";

```

we can use Hooks in Functional Components

```
const Example = (props) => {
  // You can use Hooks here!
  return <div />;
}
```

---

**Why are useState variables `const` in react?**

*Question*:

```
My understanding is, when using `useState()`, we should declare the array as such:
const [someBooleanValue, setSomeBooleanValue] = useState(false)

Instead of
let [someBooleanValue, setSomeBooleanValue] = useState(false)

Normally, `const` is used on variables that won't be changing. Here, `someBooleanValue` will be changing. What is going on that allows us to use the `const` keyword in this case?

```

*Explaination*:

- In [React Hooks](https://reactjs.org/docs/hooks-state.html) with a Functional Component, your code gets a single value of state for each call into your functional component. React handles the storage separately and returns that current value via `useState` on each execution of your code, providing the latest state value.
- From the docs:
    
    > We declare a state variable called count, and set it to 0. React will remember its current value between re-renders, and provide the most recent one to our function. If we want to update the current count, we can call setCount.
    > 
- So in this case, we use `const` because the value should never be reassigned in our code.
- Reference: [stackoverflow](https://stackoverflow.com/questions/59395911/why-are-usestate-variables-const-in-react#:~:text=React%20will%20remember%20its%20current,be%20reassigned%20in%20our%20code.&text=Save%20this%20answer.,-Show%20activity%20on)

## Quick Revise

File structure in React
  - structure on the bases of `types` (i.e based on features & type of file)
  - Created folder structure 
    - src -> all code
    - components -> all components
    
     ```
     src 
      |-- components
      |   |-- Header.js
      |   |-- Body.js
      |   |--RestaurantCard.js
      |-- App.js
      |-- config.js
      
      ```

---

Different ways to export:
  - __export default__ Component - only one component can be exported in default - then in import we use default import
  - __export by name__ - then in import we use `named import`
  - Eg: there can be many components in the same file. So,
    - __Named export__ :
      ```
      import {Title, Header} from './components/Header';
      ```
    - __Default export__ :
      ```
      import Header from './components/Header';
      ```
    - Using both __Default export__ & __named export__ :
      ```
      import Header, {Title} from './components/Header';
      ```
    - Using __`* as "anyname"`__ 
      ```
      import * as Obj from './components/Header';
      
      Obj.Title
      ```
  - Note: `name` can be different when exporting component. 
    Eg: exporting `Header` component using `default export`
    ```
    import NewHeader from './components/Header';
    ```
  - __file name__ can be `.js` or `.jsx` (but generally .js is  prefered.)
    Eg: `Header.js` or `Header.jsx`
    - __without using extention__
      ```
      import Header, {Title} from './components/Header';
      ```
    - __using `.js` extention__
      ```
      import Header, {Title} from './components/Header.js';
      ```
    - __using `.jsx` extention__
      ```
      import Header, {Title} from './components/Header,jsx';
      ```
    

- Best convention :
  - export default ComponentName
  - import Component from '/Path'

---

- Create `config.js` (or `constant.js`) file & put all "hard coded" values & data in it using export.

---

- __One way binding__ in react

---

- If we need to change the value,
  - __Every componenet in react maintains a state__
  - So, You can put all variables in the state. Everytime you use local variable you should use state.

- __Hook__: just like normal function. 
  - Eg: `useState()`: is used to create state variable

- Why `hooks` ?
  - Hooks allow you to `reuse stateful logic` without changing your component hierarchy.
  - Hooks let you split one component into smaller functions based on what pieces are related (such as setting up a subscription or fetching data)

---

- `useState()` hook:
  - returns as array 
    - and first element is a `variable name` (which is local state variable) 
    - second arg is `function to modify the state variable`
    - Syntax: <br>
       [`variable name`, `function to update the variable`] = useState()

- __Every component in react maintains a state__

  | In Javascript | In React |
  | --- | --- |
  | - Local Variable <br>`let searchText` | - Local State Variable <br> `const [seacrhText, setSearchText] = useState()`  |
  | - Local Variable using default value <br> `let searchText = "Burger"`| - Local State Variable using default value <br> `const [searchText, setSearchText] = useState("Burger")` |
  |- __In HTML__ <br> `<input type="text" onchange="fun()"/>` <br> `<script>` <br> `fun(e){ searchText = e.target.value}`<br> `</script>` | - __InJSX__ <br> `<input type="text" onChange={e => setSearch(e.target.value)}/>` |

---
  
- __Syntactic events__ in React Eg: e in `(e) => e.target.value

- get { useState() } from 'react';
  ```
  const [searchText] = useState(value);
  const [searchText, setSearchText] = useState(value);

  const searchVariable = useState(value);
  const [searchText, setSearchText] = searchVariable;

  setSearchText(e.target.value)
  value = { searchText }
  ```

---

- __Why do we need state ?__ [Interview question]

- `Two way binding` Eg: updating state & displaying updated data on the fly (reading and writing )

- when `useState()` is used React __re-renders the whole component__ (i.e reconciliation happens & only that small portion is updated where data has changed)

- ```
  const [restaurants, setRestaurants] = useState(restaurantList);

  onclick()
  const data = filterData(searchText, restaurants)

  setRestaurants(data);

  funciton filterData(searchText, restaurants) 
  {
    restaurants.filter (res => {
      res.data.name
    })
  }
  ```

- Note: In react we are using useState like this `const [searchText, setSearchText] = useState("")` isn't is against javascript rule as we are able to change the value of searchText which is of type const

- When we change this state variable using setSearchText it forces the component to re-render. Every time the component re-renders, the const is a new version of const with updated value.

## Timeline

```
00:01:43 – React advantages discussed
00:03:51 – Create src folder
00:11:15 – Create components folder
00:12:45 – React File Structure
00:20:00 – Header component moved to component Header.js, importing to the main file
00:22:00 – Export the file
00:26:00 – Export & import body component
00:27:30 – Export & import Restaurant card component
00:32:00 – create a utils folder 
00:33:00 – create a file constants.js
00:35:00 – create a MockData.js in Utils folder
00:36:00 – export & import ‘resList’
00:37:15 – 2 types of Import & Export: named export & multiple exports
00:40:00 – Named Export
00:42:39 – how to import the Named Export
00:46:00 – Two types of Import & Export explained with examples
00:47:00 – the whole program (App.js)
00:47:50 – “can I use a default export along with named export?” – Home Work
00:50:15 – Make our app “Dynamic”(Interactive)
01:08:00 – filter() function
01:13:00 – React superpowers explained, Data layer & UI layer, Virtual DOM, Diff Algorithm, Reconciliation 
01:16:00 – Hooks introduced
01:21:00 – useState
01:31:00 – Hook Syntax
01:37:00 – React Hook Explanation
01:42:00 – Why React is popular?
01:45:00 – Diff Algorithm, Reconciliation Algorithm, React Fiber 
01:48:00 – Virtual DOM
01:53:00 – Diff Algorithm & React Fiber
01:59:00 – React Fiber Architecture (GitHub)
02:06:00 – Array Destructuring 
02:08:00 – Session Recap
```