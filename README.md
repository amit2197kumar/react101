# E6. Exploring The World

## Learning

- `Monolith` vs `Microservice` Architeture
- `useEffect()` Hook
- `fetch()` data from `API`
- When does the component re-render?
- Adding `Shimmer` UI
- `Conditional Rendering` ?
- Two Approach to call API.

## Notes

**What is `Microservice`?**

`Microservice` - also known as the microservice architecture - is an architectural and organizational approach to software development where software is composed of small independent services like database, server or a UI of the application, that communicate over well-defined APIs. These services are owned by small, self-contained teams. Microservices architectures make applications easier to scale and faster to develop, enabling innovation and accelerating time-to-market for new features. means we are dividing software into small, well-defined modules enables teams to use functions for multiple purposes.

- Benefits of Microservices:
    - Flexible Scaling
    - Easy Deployment
    - Technological Freedom
    - Reusable Code
    - Resilience

*More*:

- Microservice Architecture is an architectural style that structures the application as a collection of services which are independently deployable, based on Separation of Concern (SoC), loosely coupled, owned by small teams, highly maintainable and testable , communicating through lightweight protocols (APIs). The microservice architecture enables the rapid, frequent and reliable delivery of large, complex applications. It also enables an organization to evolve its technology stack.
- Microservices are an architectural and organizational approach to software development where software is composed of small independent services that communicate over well-defined APIs. These services are owned by small, self-contained teams.
- Examples : Netflix became one of the first high-profile companies to successfully migrate from a monolith to a cloud-based microservices architecture in 2009.

---

**What is `Monolith architecture`?**

Monolith Architecture is the traditional model of software development where the application is self-contained and independent of other applications. It is also called Single Tier (One tier) architecture where a single application acts as both client and server. A small change in a single function requires compiling and testing the entire application, which is against the today's agile approach.

---

**What is the `difference` between `Monolith and Microservice?**

| Parameters | Monolith Architecture | Microservices Architecture |
| --- | --- | --- |
| Development | When an application is built with one code base, it is easier to develop. This is true for small applications, but when the application takes larger, development becomes slower and complex | Micro services add more complexity compared to monolith arch. If development sprawl isn’t properly managed, it results in slower development speed and poor operational performance. |
| Testing | Since a monolithic application is a single, centralized unit, end-to-end testing can be performed faster than with a distributed application. | Teams can experiment with new features and roll back if something doesn’t work. This makes it easier to update code and accelerates time-to-market for new features. Plus, it is easy to isolate and fix faults and bugs in individual services. |
| Performance | In a centralized code base and repository, one API can often perform the same function that numerous APIs perform with microservices | Though performance could be an issue in microservices, it could be over come by various performance optimisation techniques |
| Debugging | With all code located in one place, it’s easier to follow a request and find an issue. | Each microservice has its own set of logs, which makes debugging more complicated. Plus, a single business process can run across multiple machines, further complicating debugging. |
| Scalability | You can’t scale individual components | If a microservice reaches its load capacity, new instances of that service can rapidly be deployed to the accompanying cluster to help relieve pressure. |
| Relaibility | If there’s an error in any module, it could affect the entire application’s availability. | You can deploy changes for a specific service, without the threat of bringing down the entire application. |
| Tech Adoption | Any changes in the framework or language affects the entire application, making changes often expensive and time-consuming. | Any new tech changes can eaily be adopted as an independent service |
| Deployment | One executable file or directory makes deployment easier. But, a small change to a monolithic application requires the redeployment of the entire monolith. | Microservices make it easier for teams to update code and accelerate release cycles with continuous integration and continuous delivery (CI/CD). |
| Agility | There is no agility in monolith | Promote agile ways of working with small teams that deploy frequently. |

---

**Why do we need a `useEffect Hook`?**

`useEffect Hook` is javascript function provided by `react`. The useEffect Hook allows you to `eliminate side effects` in your components. Some examples of side effects are: `fetching API data`, `directly updating the DOM`, and `setting up subscriptions or timers`, etc can be lead to unwarranted side-effects. useEffect accepts `two arguments`, a `callback function` and a `dependency array`. The second argument is optional.

```
useEffect(() => {}, [])

```

The `() => {}` is callback function and `[]` is called a empty dependency array. If anything that we pass (suppose currentState) inside the `[]` it trigger the callback function and changes the state of the application.

```
useEffect(() => {
    setCurrentState("true");
}, [currentState])

```

If we do not pass empty dependency array then the useEffect runs everytime when the UI is rendered.

`useEffect(() => {})`

---

**What is `Optional Chaining`?**

The optional chaining `(?.)` operator accesses an object's property or calls a function. If the object accessed or function called is `undefined or null`, it returns `undefined` instead of throwing an error.

The `?.` operator is like the `. chaining operator`, except that instead of causing an error if a reference is nullish (null or undefined), the expression short-circuits with a return value of `undefined`. When used with function calls, it returns `undefined` if the given function does not exist.

*Uses of Optional chaining* :

1. Exploring the content (nested properties) of an object before accessing its deeply nested sub-porperties.
2. By using the ?. operator instead of just ., JavaScript knows to implicitly check to be sure obj?.prop is not null or undefined before attempting to access its sub-porperties obj?.prop?.subprop
3. Optional chaining cannot be used on a non-declared root object, but can be used with a root object with value undefined. Eg : const obj = undefined ; ---> This is possible But undeclaredVar?.prop; ---> This throws ref error

---

**What is `Shimmer UI`?**

From a user experience (UX) perspective, the most important thing is to show your users that loading is taking place. One popular approach to communicate to users that data is loading is to display a chrome color with a shimmer animation over the shapes that approximate the type of content that is loading. Earlier, page loaders were used where a loading progress bar might be displayed before the page is rendered. But, that approach was not that UX friendly. So, Shimmer was introduced.

Shimmer can be skeleton to the actual layout that will be displayed before the data fetch. This will make the user understand what type of layout is loading.

`MORE`:

A `Shimmer UI` resembles the page's actual UI, so users will understand how quickly the web or mobile app will load even before the content has shown up. It gives people an idea of what's about to come and what's happening (while UI currently loading) when a page full of content/data takes more than 3 - 5 seconds to load. Shimmer UI is a great way for loading the applications. Instead of showing a loading circle we can design a shimmer UI for our application that is good for user experience.

---

**What is the `difference` between `JS expression and JS statement`?**

A `JS expression` **returns a value** that we use in the application. for example:

```
1 + 2                  // expresses
"foo".toUpperCase()    // expresses 'FOO'
console.log(2)         // logs '2'
isTrue ? true : false  // returns us a true or false value based on isTrue value

```

A `JS statement`, **does not return a value**. for example:

```
let x;                // variable declaration
if (){ }              // if condition

```

> If we want to use JS expression in JSX, we have to wrap in curly braces {} like {/* expression slot */} andIf we want to use JS statement in JSX, then wrap those JS Statement inside parenthesis () to make them JS experession & then wrap in curly braces{} like {(/* statement slot */)};
> 

```
let a; console.log()    // this is a JS Statement
(let a; console.log())  // this is a JS Expression
```

---

**What is `Conditional Rendering`? explain with a code example.**

Your components will often need to display different things depending on different conditions. In React, you can `conditionally render` JSX using JavaScript syntax like `if statements`, `&&`, and `? :` operators.

We will understand all types of conditional rendering using an example from our code. I have used a error-container to display the `error message` if the errorMsg state is true, else error-container is not displayed.

- `if statements` : With if statement, the above example goes like
    
    ```
    { if(errorMsg) {
        (<div className="error-container" id="error">
          <span className="error-msg" id="error-msg">{errorMsg}</span>
        </div> )
      }
    }
    
    ```
    
- `&&` operator : if the condition is true, display the right-side code else display nothing.
    
    ```
    { errorMsg &&
      <div className="error-container" id="error">
        <span className="error-msg" id="error-msg">{errorMsg}</span>
      </div>
    }
    
    ```
    
- `? :` operator - If allRestaurants is empty, then showrender Shimmer Component else render RestaurantCard Components
    
    ```
    { allRestaurants?.length === 0 ? (<Shimmer />) :
        <div className="restaurant-container">
          {filteredRestaurants.map((restaurant) => {
            return <RestaurantCard {...restaurant.data} key={restaurant.data.id} />;
          })}
        </div>
     }
    
    ```
    
    *More*:
    
- `Conditional rendering` in React works the same way conditions work in `JavaScript`. Use JavaScript operators like `if` or the `conditional operator` to create elements representing the current state, and let React update the UI to match them. for example:

  ```
  // Using Ternary operator
  {isLoggedIn ? (return <UserGreeting />) : (return <GuestGreeting />)};

  // Using an if…else Statement
  {
    (if (isLoggedIn) {
      return <UserGreeting />;
    }else {
      return <GuestGreeting />;
    })
  }

  // Using Logical "&&"
  {isLoggedIn && <button>Logout</button>}
  ```

---

**What is `CORS`?**

- CORS stands for Cross-Origin Resource Sharing. In current microservices-based server and client communication, where the services are deployed in different servers, machines, different port numbers, it's very important to share resources between them.
- CORS is a HTTP - header based mechanism that allows server to indicate any cross origin (origin different from server's origin like scheme, port or domain) from which browser should allow loading resources.
- `How CORS is done ?` Browser first sends a `preflight` request (header that contains HTTP method and headers in the actual request) to the server sharing cross-origin resource to check if the server will permit the actual request.
- Example : [http://localhost:1234](http://localhost:1234/) ----> https://www.swiggy.com/mapi/restaurants/list
- Fetch API follow `same-origin` policy which means that a web app using fetch API can only request resources in the same origin, unless the response from other origins includes the right headers ( the server still must opt-in using Access-Control-Allow-Origin to share the response with the script.)
    - Simple requests do not need to send a preflight request before sending actual request.
    - Unlike simple requests, for "preflighted" requests the browser first sends an HTTP request using the `OPTIONS` method to the resource on the other origin, in order to determine if the actual request is safe to send. Such cross-origin requests are preflighted since they may have implications for user data.

*More*:

- Cross-Origin Resource Sharing (CORS) is an HTTP-header based mechanism that allows a server to indicate any origins (domain, scheme, or port) other than its own from which a browser should permit loading resources.
- CORS defines a way in which a browser and server can interact to determine whether it is safe to allow the cross-origin request.

---

**What is `async and await`?**

**Async/await** are keywords to make a normal function behave like a asynchornous funtion.

`async` function always returns a promise. It makes sure that a promise is returned and if it is not returned then JavaScript automatically wraps it in a promise which is resolved with its value.

`await` keyword makes javascript wait until the promise settles, and return its result. await cannot be used in a non-async function.

For example : Let's try to write a function getRestaurants() to fetch restaurant data from a public API.

First, let's try to write it with `Promise chaining` : fetch(url) returns a promise (resolve or reject), which can be consumed by the `then` (success) handler or `catch` (error) handler

```
function getRestaurants() {
  fetch(url).then((data)=>{data.json()})
    .then((json)=>{
    console.log(json);
  }).catch((err)=>{
    console.log(err);
  })
}

```

Using `async` and `await` : await waits until fetch(url) returns a promise with the data and headers which again needs to be resolved using .json() method to get the data. If any of promise inside try block is rejected, the control jumps to catch block.

```
async function getRestaurants() {
  try {
    const data = await fetch(url);
    const json = await data.json();
    console.log(json);
  } catch(err) {
    console.log(err);
  }
}
```

---

**What is the use of `const json = await data.json()`; in `getRestaurants()`?**

Example:

```
async function getRestaurants() {
  try {
    const data = await fetch(url);
    const json = await data.json();
    console.log(json);
  } catch(err) {
   console.log(err);
  }
}

```

In seen in the above example, the fetch API call returns a promise response with header, in order **to get the data in json format**, we have to resolve that promise using `data.json()`

*More*:

- The `data` object, returned by the `fetch()`, is a generic placeholder for multiple data formats.
- So, to extract the data in json format, we are using `data.json()`.
- MDN reference: [Response.json()](https://developer.mozilla.org/en-US/docs/Web/API/Response/json) and [fetch()](https://developer.mozilla.org/en-US/docs/Web/API/fetch)

## Quick Revise

1. Revising last chapter - useState() and Hooks

2. Why React is fast ?
    - It's because of its fast DOM manipulation -> Using Reconciliation (diff algorithm)

3. Why use state ?
    - React only tracks variables which are state variables.

4. In this chapter, we are going to get data from outside our application through API. Earlier, we got data from mock data.

5. Architecture:
    - Monolithic Architecture -> Both Client & Server running in the same system
    - Micro Services -> Separate projects for Client & Server and lot of services for specific funtionality
      - SoC (Separation of Concern) -> Every service in microservices serves a single functionality

6. We are going to build -> UI microservices
   - UI microservices -> Explore the world through API

7. fetch -> to call API
   - on page load -> fetch the api data and show all the restaurants

8. Two approaches :
  - On load -> call API -> render
  - on load -> render some defaults -> call API -> updates UI

9. React Hook -> **useEffect()** -> render something -> do some operation -> update the UI
   - useEffect(callback) -> useEffect will call callback function after intial render if there are no dependencies (only once)
   - What if we want to re-render after every state changes -> Pass state in dependency array.

10. When component re-renders 
    - when state changes
    - when props changes

11. useEffect `(callback, [dependencies])`

12. Where to make API call ?
    ```
    useEffect(()=>{
    //API call
    },[])
    ```
    - Steps :
      1. First, component will be rendered
      2. useEffect() and render with intial data
      3. When API call is made,

13. Shimmer UI

14. Conditional rendering
    - On page load, shimmer UI -> when restaurants empty
    - when res data -> actual data UI

15. **Early return** -> not render

16. How to avoid rendering components ? optional chaining or conditional rendering

## Timeline

```
00:02:00 – Monolith Architecture
00:05:00 – Microservices
00:07:00 – Separation of concerns
00:09:00 – UI Microservice 
00:17:50 – Explanation with diagram
00:22:00 – useEffect()
00:31:00 – fetch(), Promise
00:32:00 – Inspect element, Swiggy Website
00:33:00 – React JS syntax, newer approach to handle fetch()
00:35:00 – CORS Policy
00:36:00 – CORS Chrome Extension
00:45:00 – Live Data API
00:47:00 – Delete MockData.js file
00:48:00 – Optional Chaining with an example
00:50:40 – Spinning Loader
00:52:40 – Shimmer UI
00:56:00 – Shimmer Component Code
00:58:30 – CSS Code for the Shimmer Component
01:04:00 – Conditional Rendering
01:06:00 – using Ternary Operator
01:07:10 – Why do we need state variables? (useState)
01:16:10 – useState() usage & explanation
01:23:00 – Super Power of React
01:29:00 – Reconciliation & Diff Algorithm Explained
01:31:00 – Toggle the login & logout button
01:39:00 – Build a Search Functionality
01:46:00 – OnChange handler
01:55:00 – Nice explanation of re-rendering
01:57:00 – DOM Manipulation & Virtual DOM
02:02:00 – Search functionality enhanced using toLowerCase() method
02:12:00 – Homework (Assignment)
```