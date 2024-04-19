# E6. Exploring The World

## Learning
- `create-router-dom` package
    - `createBrowserRoute` function
    - `RouterProvider` component
    - `< Link to="">`
    - `Outlet`
    - `useRouteError`
    - `useParams`
- `Nesting Routing`
- `Dynamic Routing`

## Notes

**What would happen if we do `console.log(useState())`?**

If we do console.log(useState()), we get an array [undefined, function] where first item in an array is state is undefined and the second item in an array is setState function is bound dispatchSetState.

---

**How will `useEffect` behave if we `don't add` a `dependency array`?**

- Syntax of `useEffect` is:
    
    ```
    useEffect(() => {}, []);
    
    ```
    
- Case 1 : When the `dependency array is not included` in the arguments of `useEffect() hook`, the callback function will be executed `every time` the component is rendered and re-rendered.
    
    ```
    useEffect(() => {
        console.log("I run everytime this component rerenders")
    });
    
    ```
    
- Case 2 : When the `dependency array is empty` in the arguments of `useEffect() hook`, the callback function will be executed `only one time` during the initial render of the component.
    
    ```
    useEffect(() => {
        console.log("I Only run once (When the component gets mounted)")
    }, []);
    
    ```
    
- Case 3 : When the `dependency array contains a condition`, the callback function will be executed `one time` during the initial render of the component and also rerender if there is a `change in the condition`.
    
    ```
    useEffect(() => {
        console.log("I run every-time when my condition changed")
    }, [condition]);
    ```

---

**What is `SPA`?**

Single Page Application (SPA) is a web application that dynamically updates the webpage with data from web server without reloading/refreshing the entire page. All the HTML, CSS, JS are retrieved in the initial load and other data/resources can be loaded dynamically whenever required. An SPA is sometimes referred to as a single-page interface (SPI).

---

**What is the `difference` between `Client Side Routing` and `Server Side Routing`?**

In `Server-side routing or rendering (SSR)`, for every change in URL, `http request` is made to the server to fetch the webpage, and replace the current webpage with the older one.

In `Client-side routing or rendering (CSR)`, during the first load, the webapp is loaded from server to client, after which whenever there is a change in URL, the router library navigates the user to the new page without sending any request to backend. All `Single Page Applications` uses `client-side routing`.

---

**What are various ways to `add images` into our App? Explain with `code examples`.**

- Using the `full URL of the image` for the web (CDN) or any public images. Example :
    
    ```
    <img src="https://reactjs.org/logo-og.png" alt="React Image" />
    
    ```
    
- Adding the image into the project `Drag your image into your project` and `import it` into the desired component
    
    ```
    import reactLogo from "./reactLogo.png";
    export default function App() {
      return <img src={reactLogo} alt="react logo" />
    }
    
    ```
    
- The correct way to structure images in your project is to add them in an `images` folder. If you are using other `assets` than just images, you might want to add all in the `assets` folders.
    
    ```
    import reactLogo from "../../assets/images/reactLogo.png";
    export default function App() {
      return <img src={reactLogo} alt="react logo" />
    }
    ```

## Quick Revise

- **useEffect(callback, [dependencies])**
  - `useEffect(callback)`: If dependency array [], is not passed in useEffect.
    - then, it is called after **every render**
  - `useEffect(callback,[])`: If "empty" dependency array [], is passed in useEffect.
    - then, it is called **once during initial render**
  - `useEffect(callback, [serachText])`: If "state variable" is passed in dependency array of useEffect.
    - then useEffact() is called **during first render** & then **every time after "searchText" state changes**

- **NEVER DO THIS**
  - Never create a component inside a component. 
    - because the component will be created after every render.
  - Never use useState() inside if...else 
    - because it leads to inconsistency.
  - Never write useState() inside for loop

- React gives useState() to create a local state variable inside a functional component

- When to use npm library 
  - When the process of creating the actual code is difficult. Eg : Formik
  - Homework : Login page with formik

- **React Routes** 
  - create route to different pages of the application.
    - Install a npm package, `npm i react-router-dom`
  - **`Emmet`** for creating a functional component is `rafce`
  - `import { createBrowserRouter } from "react-router-dom"` into `App.js` for enabling **router** in `App.js`
  - `<RouterProvider router ={appRouter} />` to render in root where router is the props passed to RouterProvider Component

- SPA (Single Page Application)

- Types of routing:
  - **client side routing**: load a different compoenent for each page without reloading
  - **server side routing**: network call to fetch every page

- react router dom 
  - Keep track of all anchor tags using `<Link />` but its converted to <a></a> which is understandable by browser

- Why **Nested routing**
  - As it, only load parts of the page (components) without reloading the page

- Create children of routes inside the parent
  ```
  [{
    path: "/"
    element: "/appLayout"
  }] 
  ```
- All children component will go into the `<Outlet/>` component of the parent component

- **Dynamic Routing**
 - Read dynamic URL param

- `Object.values()`: It returns ARRAY of object values

> **NOTE: **
> - In initial render, if the useState is initialised to {}, the map will throw error -> no data to loop through
> - Fix : initialise to null and if condition to early return

- `useRouteError `Hook:  to show error status and statusText

## Timeline

```
00:03:00 – useEffect hook explanation, Dependency Array
00:15:40 – React Router 
00:19:00 – Create Routing Configuration
00:22:00 – Create About Component
00:30:00 – Rafce
00:33:00 – error (404 not found)
00:37:00 – useRouteError Hook
00:41:55 – Error.js
00:44:20 – Children Routes
00:51:00 – Outlet Keyword
00:56:00 – Create links to Header Menu
00:58:18 – Link Component 
01:00:00 – Observe the performance
01:03:55 – Single Page Applications (SPA)
01:05:35 – 2 types of Routing: Client Side Routing & Server-side Routing
01:08:00 – Session Recap till now 
01:11:50 – Dynamic Routing
01:13:35 – JSON Viewer
01:40:30 – GraphQL Introduction
01:52:40 – Dynamic Data coding 
01:57:50 – Map function and its usage with a key 
01:59:00 – Changing Restaurant ID’s
02:00:00 – New SuperPower Hook: UseParams
02:02:30 – Move API to constants.js
02:04:00 - Dynamic Cards- to be clickable
02:08:00 – Link Component
02:13:00 – Session Recap
```