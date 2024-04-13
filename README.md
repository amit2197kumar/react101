# E1. Inception

## Learning

1. Getting started with React
2. React vs ReactDOM
3. Create react element
4. Nested react Element

## Notes

**What is `Emmet`?**
- Emmet is the essential toolkit for web-developers. It allows you to type shortcuts that are then expanded into full pieces of code for writing HTML and CSS, based on an abbreviation structure most developers already use that expands into full-fledged HTML markup and CSS rules.

Most useful emmet abbreviations are :

`HTML`

1. html:5 - generates html5 boilerplate
2. ui>li - nested elements
3. h1.#heading.container.con - create h1 element with id heading and classes 

`CSS`

1. m10-10-10-10 - Margin on all sides margin: 10px 10px 10px 10px;

---
**Difference between a Library and Framework?**

A `library` is a collection of packages that perform specific operations whereas a `framework` contains the basic flow and architecture of an application.

A key difference between the two is the is the **inversion of control** & **complexity** :-

- `Libraries` contain a number of methods that a developer can just call whenever they write code. If a `library` is used, the application calls the code from the library. `Eg: React, JQuery, Lodash`
- The `framework` provides the flow of a software application and tells the developer what it needs and calls the code provided by the developer as required. `Eg: Node JS, Angular, Spring`

**NOTE:** When using a library, the control remains with the developer who tells the application when to call library functions. When using a framework, the control is reversed, which means that the framework tells the developer where code needs to be provided and calls it as it requires.

*More*:-

- A **library** is like going to Ikea. You already have a home, but you need a bit of help with furniture. You don’t feel like making your own table from scratch. Ikea allows you to pick and choose different things to go in your home. You are in control.
- A **framework**, on the other hand, is like building a model home. You have a set of blueprints and a few limited choices when it comes to architecture and design. Ultimately, the contractor and blueprint are in control. And they will let you know when and where you can provide your input.
- **Both Frameworks and Libraries** are code written by someone else that is used to help solve common problems or to optimise performance.
- A key difference between the two is the **inversion of control**. When using a library, the control remains with the developer who tells the application when to call library functions. When using a framework, the control is reversed, which means that the framework tells the developer where code needs to be provided and calls it as it requires.

---

**What is `CDN`? Why do we use it?**

- A CDN (content delivery network), also called a content distribution network, is a group of geographically distributed and interconnected servers. They provide cached internet content from a network location closest to a user to speed up its delivery.

- The primary goal of a CDN is to improve web performance by reducing the time needed to send content and rich media to users.

- CDN architecture is also designed to reduce network latency caused by hauling traffic over long distances and across several networks. Eliminating latency is important as more dynamic content, video and software as a service are delivered to an increasing number of mobile devices.

---

**Why is `React` known as React?**

- React is a JavaScript library that helps developers to build user interfaces – the things you interact with on websites. It has become popular because of its simplicity and flexibility.

- React is named React because of its ability to react to changes in data. When the data in a React component changes, React will automatically re-render the component so that it reflects the new data. This makes it easy to create performant user interfaces that always look up-to-date.

- React was created by Jordan Walke, a software engineer at Facebook. It was first used internally at Facebook to power News Feed and other user interface elements. After seeing how well it performed, Jordan open-sourced React and made it available to the world.

---

**What is `crossorigin` in script tag?**

The crossorigin attribute provides support for CORS , defining how the element handles cross-origin requests. CORS stands for Cross-Origin Resource Sharing. If cross-origin is set to "user-credential", then user authentication is required to access the file.

More:-

1. The crossorigin attribute sets the mode of the request to an HTTP CORS Request.

2. Web pages often make requests to load resources on other servers. Here is where CORS comes in.

3. A cross-origin request is a request for a resource (e.g. style sheets, iframes, images, fonts, or scripts) from another domain.

4. CORS is used to manage cross-origin requests.

5. CORS stands for Cross-Origin Resource Sharing, and is a mechanism that allows resources on a web page to be requested from another domain outside their own domain. It defines a way of how a browser and server can interact to determine whether it is safe to allow the cross-origin request. CORS allows servers to specify who can access the assets on the server, among many other things.

6. Tip: The opposite of cross-origin requests is same-origin requests. This means that a web page can only interact with other documents that are also on the same server. This policy enforces that documents that interact with each other must have the same origin (domain).

7. CORS is a standard mechanism used to retrieve files from other domains.

---

**What is difference between `React` and `ReactDOM` ?**

`React` is a JavaScript library for building User Interfaces whereas `ReactDOM` is also JavaScript library that allows React to interact with the DOM.

The react package contains React.createElement(), React.Component, React.Children, and other helpers related to elements and component classes. You can think of these as the isomorphic or universal helpers that you need to build components.

The react-dom package contains ReactDOM.render(), and in react-dom/server we have server-side rendering support with ReactDOMServer.renderToString() and ReactDOMServer.renderToStaticMarkup().


More:-

1. In order to work with React in the browsers, we need to include 2 libraries: React and ReactDOM.

2. React library is responsible for creating views and ReactDOM library is responsible to actually render UI in the browser.

3. Include these two libraries before your main JavaScript file.

---

**What is difference between `react.development.js` and `react.production.js` files via CDN ?**

`react.production.js` - production code of react library that is minified and production ready.

`react.development.js` - More readable and developer friendly react library code that can be used to debug.

More:-

1. react.production.js are the minified files.

2. Both react.development.js and react.production.js contains the similar code. The code difference between both files is nothing.

3. But, react.production.js is much more optimised for production use. The size of react.production.js will be very less then react.development.js

---

**What is `async` and `defer` ?**

[async vs defer attributes in Javascript](https://youtu.be/IrHmpdORLu8)

1. When we load a webpage then 2 major things happens, `HTML Parshing` and `Loading of scripts`.
2. Now, Loading of scripts contains 2 parts, `Fetching the script from the network` & `Executing` it line by line.

Now, there are 3 scenario: Normal, using Async & using Defer

`Without async/defer` : Browser stops the html parsing once script tag is encountered. It resumes parsing only after script is fetched and executed.

`Async` : Html parsing is done in parallel while scripts are being fetched from the network and executed. Once the script is done with execution, html parsing is resumed. This can be used for external scripts like google analytics. It is better to avoid async for scripts that are dependent on other scripts since we dont know in which order script will be executed.

`Defer` : Similar to async, Html parsing is done in parallel while scripts are being fetched from the network. But scripts are executed only after the html parsing is done.


![](/async-vs-defer-attributes.jpg)

## Quick Revise

**What is the shortest program of react?**
- html files with react CDN links

**What is the difference btw React & ReactDOM**
- React library is responsible for creating views and 
- ReactDOM library is responsible to actually render UI in the browser.

**What parameter does createElement takes?**
- It takes 3 parameters:
  1. type (like tag name), 
  2. props(i.e likes html attributes id & class) OR null (empty object), 
  3. children(Optional) (like arrays of react element OR string, numbers,null, undefined, true, false, empty nodes)

**What does React.createElement() returns?**
- It Create and return a new React element of the given type.

**What is heading in the code?**
- They are `react elements`.

**What is `react element` at the end of the day?**
- It's an object.

**What is the function of render?**
- render will modify the DOM.

**Will render function Override or Append?**
- render will override.

## Timeline

```
00:05:25 - Visual Code Setup
00:10:00 - Hello World Program by using plain HTML
00:14:25 - Hello World Program using Vanilla JavaScript
00:18:00 - CDN links discussion
00:32:00 - Hello World Program in React
         - Separately writing JS code within <script> tags in HTML
         - React.createElement explanation
00:54:50 - Nested Elements
01:02:00 - Array of children
01:05:00 - Need of JSX
         - Rearrangement of CDN files
01:19:00 - React Library v/s Framework discussion
01:21:00 - Advantages/Specialties of React
01:23:00 - Session Recap
```
