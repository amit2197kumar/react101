# E7. Optimizing our App

## Learning
- Keeping all the helper & utility function in `utils` folder.
- What is `Custom Hooks`
- Why do we need Custom Hooks
- When should I create Custom Hooks
- Created custom hooks `useRestaurant` [we offloaded the responsibilty of fetch() over there]
- Created a custom hooks `useOnline` from scrach.
- `Chunking` / `Code Spliting` / `Dynamic Bundling` / `Lazy Loading` / `On Demand Loading` / `Dynamic Import` / `Bundle Chunking`
- How to `Lazy Load`?
- Why do we lazy load things?
- How do we do `Chunking` ?
- How to do `Bundle Spiliting? (i.e load on demand)

## Notes

**When and why do we need `lazy()`?**

- `React.lazy()` is used to dynamically import a component when it is first rendered, instead of importing at the beginning when the file loads. This is called `Code Splitting`/ `On-demading loading`.
- In our example : In [App.js](https://github.com/deltanode/react-playground/blob/main/09-optimizing-our-app/src/App.js), `Instamart` component and `About` component are lazy loaded, which means only when the user clicks on the navigation button, those components are imported and rendered. This improves the performance of the application. So, lazy is used when that component might not be used by all users, instead of loaded in the beginning, only when the user really needs it, its loaded.
- It is also known as `Chunking` / `Code Spliting` / `Dynamic Bundling` / `Lazy Loading` / `On Demand Loading` / `Dynamic Import` / `Bundle Chunking`

---

**What is `suspense`?**

- `Suspense component` allows us to show some **fallback** content (such as a Shimmer/Loading indicator component) while we’re waiting for the lazy component to load or the component is not yet rendered. It is similar to `catch` block.
- If a component suspends, the closest `Suspense` component above the suspending component `catches` it
    
    ```
    import React, { Suspense } from 'react';
    
    const About = React.lazy(() => import('./About'));
    
    function MyComponent() {
      return (
        <div>
          <Suspense fallback={<div>Loading...</div>}>
            <About />
          </Suspense>
        </div>
      );
    }
    ```
    
- The `fallback` prop accepts any `React elements` that you want to render while waiting for the component to load.
- You can place the Suspense component anywhere above the lazy component.
- You can even wrap `multiple lazy components` with a `single` Suspense component.

---

**Why we got this `error`: A component was suspended while responding to `synchronous input`. This will cause the `UI` to be replaced with a `loading indicator`. To `fix this`, `updates that suspend` should be wrapped with `start transition`? How does `suspense fix` this error?**

- This error is thrown as Exception by React when the promise to dynamically import the lazy component is not yet resolved and the Component is expected to render in the meantime.
- If only the dynamic import is done and there is no `<Suspense />` component then this error is shown.
- React expects a Suspense boundary to be in place for showing a fallback prop until the promise is getting resolved.
- If showing the shimmer (loading indicator) is not desirable in some situations, then `startTransistion` API can used to show the old UI while new UI is being prepared.
- React do this without having to delete or remove the Suspense component or its props from your code.

---

**`Advantages and Disadvantages` of using this `code splitting pattern`?**

| Advantages | Disadvantages |
| --- | --- |
| Reduces the page load time by bundling the large code into smaller bundles and laoding dynamically only when the component is loaded | Though the initial page load time is reduced, this increases the load time of each component thats loaded dynamically |
| Only the components that the user needs are loaded initially | There will be many http requests as the components are loaded dynamically |
| Cna imporve the user experience while loaded by showing suspense fallback/ loading dicator | But, this suspense boundary needs a new chunk of code to be written for showing the shimmer component |

---

**When `do we and why do we need suspense`?**

- Suspense are useful when the components are `waiting` (React.lazy components are getting dynamically loaded) before rendering.
- Today, React Suspense only supports one use case which is loading components dynamically with React lazy().
- In the future, it will support other use cases like data fetching.

## Quick Revise

- We use `hooks` everyday in our code in functional component:
- Basic hooks: `useState()` and `useEffect()`

**Custom Hooks**

- Why ? How ? When ?
- Why ?
    - Readability,
    - Resuability,
    - maintainability / modularity / sepration of concern
    - testability
- Why we use functions ?
    - To perform some task that can be reused.
- There should be something common, where we can keep our utility functions and use in our code
    - **`utils folder`**: reusable functions could be placed here

**Creating Custom Hooks**

- `RestaurantMenu.js` Component is doing two things : `fetching data` & `displaying data`
- Now, we simply want the component tp do only one job : display data. So, we are moving fetching logic to `custom hook`
- Whenever creating a custom hook
    - create in a new file .
    - create hook name with `use` word. [This is a react way of doing things. Eg: useState()]
- Why **export** `default` for custom hook
    - Since there is only one separate hook for each hook function.
- Why `named` **export** for config file
    - As, there are many functions and variables in config.js
- Update state using custom hook
    - Inside custom hook => state & useEffect and async API call
- **Create Custom hook** for `checking internet connection` : to use only once
    - How to fake offline -> network tab -> offline
    - Cleanup `eventListener` while moving out of that component.
- Assigment :
    - creat custom hook for `Local Storage`. [Hint: Get and Set local variables]

**Code Splittling**

- Code Splittling
    - also known as Dynamic bundling
    - also known as Lazy loading
    - also known as Chunking
    - also known as On Demand loading
    - also known as On Logical bundles
- Import `Instamart.js` using **`lazy load`**
    - This is a promise
    - Initially, on demand loaded components, will not be laoded
    - React suspends the loading using Suspense
- **DISCLAMER**: Don't lazy load inside component, As, it will reload everytime during re-renders.

---

## Timeline

```
00:02:00 – Custom Hooks, Single Responsibility Principle
00:04:25 – Modularity
00:09:23 – Hook
00:20:00 – Create custom Hook – useRestaurantMenu 
00:21:00 – write useEffect(), fetch(), How to optimize the code using custom hook?
00:32:00 – Make a custom Hook & put as packages (examples)
00:34:00 – A Hook to tell the user in Online or Offline
00:36:30 – Under utils folder create useOnlineStatus.js
00:47:07 – coding useOnlineStatus.js
00:48:00 – usage of dev console on browser, Making the network offline
00:50:42 – How to build green dot & red dot to identify online or offline (Reusability feature of React)
00:54:45 – Should we write “use” in a hook? Is it mandatory?
00:58:45 – How to further optimize the code?
01:03:00 – MakeMyTrip website
01:06:00 – Make smaller modules, code-splitting, chunking, Dynamic Bundling, Lazy Loading
01:17:30 – Lazy Loading
01:25:25 – Suspense keyword
01:33:00 – how to optimize the code (Till this discussed)
01:35:00 – Implementing Lazy Loading to other web pages
01:36:00 – Interview Tips
```