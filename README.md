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
---

**What is React Router?**

React Router is a library that provides navigational components for React developers to create Single-Page Applications (SPAs) with dynamic, client-side routing.

Applications that use React-Router can benefit from the separation of content afforded to multi-page applications without the break in the user-experience caused by page reloads.

---

**What is `route`, `<Route>` and  `createbrowserrouter`?**

Routes are perhaps the most important part of a React Router app. They couple URL segments to components, data loading and data mutations. Through route nesting, complex application layouts and data dependencies become simple and declarative.

Routes are objects passed to the router creation functions:

```
const router = createBrowserRouter([
  {
    // it renders this element
    element: <Team />,

    // when the URL matches this segment
    path: "teams/:teamId",

    // with this data loaded before rendering
    loader: async ({ request, params }) => {
      return fetch(
        `/fake/api/teams/${params.teamId}.json`,
        { signal: request.signal }
      );
    },

    // performing this mutation when data is submitted to it
    action: async ({ request }) => {
      return updateFakeTeam(await request.formData());
    },

    // and renders this element in case something went wrong
    errorElement: <ErrorBoundary />,
  },
]);
```

You can also declare your routes with JSX and createroutesfromelements, the props to the element are identical to the properties of the route objects:

```
const router = createBrowserRouter(
  createRoutesFromElements(
    <Route
      element={<Team />}
      path="teams/:teamId"
      loader={async ({ params }) => {
        return fetch(
          `/fake/api/teams/${params.teamId}.json`
        );
      }}
      action={async ({ request }) => {
        return updateFakeTeam(await request.formData());
      }}
      errorElement={<ErrorBoundary />}
    />
  )
);
```

`createbrowserrouter` is the recommended router for all React Router web projects.

---

**What is React `<RouterProvider>`**

React Router can be provided to the entire application using the <RouterProvider> component (from react-router-dom) and including a router attribute. In the given example React Router is provided to the entire application using a <RouterProvider> component in the main App component.

```
import { RouterProvider } from 'react-router-dom';

function App() {
  return (
    <RouterProvider router={ /* initialized router object */}/>
  );
}

export default App;
```

---

**What is `<Link>`**

React Router’s `<Link>` component can be used to create links for navigation. The to prop specifies the location to which the user will be redirected after clicking on the `<Link>`.

Rendering a `<Link>` will insert an anchor tag (`<a>`) in your HTML document, but the anchor’s default behavior (triggering a page reload) will be disabled. This allows the application’s `<Router>` to respond to URL changes by rendering the appropriate content.

```
<Link to="/about">About</Link>
```

---

**What is URL Parameters in React Router**

URL parameters are dynamic (ie. non-constant) segments of a `<Route>` component’s `path` prop. They can be used to dynamically serve resources based on the current window location.

A URL parameter begins with a colon and is followed by the name of the parameter, like so: `:parameter`. To specify that a URL parameter is optional, append a question mark, like so: `:parameter?`.

```
import { BrowserRouter as Router, Route } from "react-router-dom"
import Book from "../features/books/Book"

function App () {
  return (
    <Router>
      {/* bookId is required to render <Book /> */}
      {/* page is not required to render <Book /> */}
      <Route path="/books/:bookId/:page?">
        <Book />
      </Route>
    </Router>
  )
}
```

---

**What is hook `useParams()`**

React Router’s `useParams()` hook can be used by a component rendered by a `<Route>` with a dynamic path to get the names and values of the current URL’s parameters.

This function returns an object containing a key/value pair for each URL parameter where the key is the URL parameter’s name and the value is the parameter’s current value.

```
import React from "react";
import { useParams } from "react-router-dom";

// assume this component is rendered by a <Route> with the path "/users/:userName" 
export default const UserProfile () {
  const { userName } = useParams()
  return (
    <h1> Welcome {userName}! </h1>
  )
  /* 
  If the user visits /users/Codey, the following will be rendered:
  
  <h1> Welcome Codey!
  */
}
```

---

**What is React Router `<Navigate>`**

The React Router `<Navigate to=''>` component (from `react-router-dom`) is used to declaratively navigate to the URL path specified by the `to` prop. In the given example a user is declaratively redirected to the `/home` URL path if they are not authenticated.

```
import { Navigate } from 'react-router-dom';

function Profile({ isAuthenticated }) {
  if (!isAuthenticated) {
    <Navigate to='/home' />
  }
    
  return (
  	<h1>
    	Welcome
    </h1>
  );
}
  
export default Profile;
```
---

**What is React Router `useNavigate()`**

The React Router `useNavigate()` hook (from `react-router-dom`) is used to imperatively redirect to a specified URL path or integer delta in the history stack. The given example renders 3 buttons:

- `Home` - which navigates to the URL path `/home`
- `Back` - which navigates 1 URL path back in the history stack
- `Forward` - which navigates 1 URL path forward in the history stack.

```
import { useNavigate } from 'react-router-dom';

function Actions() {
  const navigate = useNavigate();
  
  function goHome() {
    navigate("/home");	// navigate to exact path
  }
  
  function goBack() {
    navigate(-1);  // navigate 1 URL path back in the history stack
  }
  
  function goForward() {
    navigate(1);  // navigate 1 URL path forward in the history stack
  }
  
  return (
    <div>
  		<button onClick={ goHome }>Home</button>
    	<button onClick={ goBack }>Back</button>
    	<button onCLick={ goForward }>Forward</button>
    </div>
  );
}

export default Actions;
```

---

**More on Creating A React Router(JSX)**

The React Router utility methods `createBrowserRouter()` and `createRoutesFromElements()` (from `react-router-dom`) are used to create and initialize a router object using JSX routes. `createBrowserRouter()` is used to create a router object by passing a list of route objects. `createRoutesFromElements()` is used to turn JSX routes (created using `<Route>`) into route objects.

The given example defines and initializes an object called `appRouter` with React Router routes using `createBrowserRouter()` and `createRoutesFromElements()`.

```
import { createBrowserRouter, createRoutesFromElements, Route } from 'react-router-dom';

const appRouter = createBrowserRouter(createRoutesFromElements(
  <Route path='/' element={ <Home/> }/>
));
```

---

**What is `React Router Nested Routes`**

In React Router `<Route>` components can be nested within other `<Route>` components by enclosing them in their opening and closing tags. A `<Route>` that contains other `<Route>` components is known as the parent route and a `<Route>` within another `<Route>` is called the child route. The child routes `path` attribute is relative to its parents.

The given example creates a parent route on the root path `/` and a couple of nested child routes with the paths `/home` and `/about`.

```
import { createBrowserRouter, createRoutesFromElements, Route} from 'react-router-dom';

const appRouter = createBrowserRouter(createRoutesFromElements(
  <Route path='/' element={ <Root/> }>  {/* parent route */ }
	  <Route path='home' element={ <Home/> }/> {/* child route with path relative to parent ('/') */}
    <Route path='about' element={ <About/> }/> {/* child route with path relative to parent ('/') */}
  </Route>
));
```

---

**What is React Router `<Outlet>`**

The React Router `<Outlet/>` component (from `react-router-dom`) is used within the parent route element to indicate where a child route element should be rendered.

The given example creates a `<Route>` at the root path `/` that renders an element `<Root/>` and a child route on the path `/home`. The `<Outlet/>` component is used within `<Root/>` to specify where in the view the child element, `<Home />`, should be rendered.

```
/* start App.js */
import { createBrowserRouter, createRoutesFromElements, Route } from 'react-router-dom';
// components imports ...

const appRouter = createBrowserRouter(createRoutesFromElements(
  <Route path='/' element={ <Root/> }>
    <Route path='home' element={ <Home/> }/>
  </Route>
));

// rest of code ...

/* end App.js */

/* start Root.js */
import { Outlet } from 'react-router-dom';

function Root() {
  return (
  	<>
      <h1>Welcome</>
      <Outlet/>  {/* indicates where <Home/> should be rendered within <Root> */}
    </>
  );
  
}

export default Root;
```

---

**What is hook `useRouteError()`**

In React Router 6, a new hook was introduced called `useRouteError`. This hook allows you to access the current error state of the router.

`useRouterError()` hook return an object as below:

```
{
    "status": 404,
    "statusText": "Not Found",
    "internal": true,
    "data": "Error: No route matches URL \"/ssdsd\"",
    "error": {}
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