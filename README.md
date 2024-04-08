# E2.Igniting Our App

## Learning
1. Bundlers
2. Parcel setup
3. About `npm` & `npx`
4. About `node_modules`
5. Understanding `package.jso`n and `package-lock.json`
6. Installing react as a packge using npm
7. Setting up our own create-react-app setup without using create-react-app

## Assignment

**What is `NPM`?**

It is a tool used for package management and the default package manager for Node projects.
NPM is installed, when NodeJS is installed on a machine. It comes with a command-line interface (CLI) used to interact with the online database of NPM. This database is called the NPM Registry, and it hosts public and private 'packages.' To add or update packages, we use the NPM CLI to interact with this database.

`npm` DOESN'T stand for `Node Package Manager`.

How to initialize npm? `npm init`

`npm init -y` can be used to skip the setup step, `npm` takes care of it and creates the `package.json` json file automatically , but without configurations.

`npm` alternative is `yarn`

---

**What is `Parcel/Webpack`? Why do we need it?**

Parcel/Webpack is type of a web application bundler used for development and productions purposes to power our application with different type functionalities and features. It offers blazing fast performance utilizing multicore processing, and requires zero configuration. Parcel can take any type of file as an entry point, but an HTML or JavaScript file is a good place to start. Parcel/Webpack are type of bundlers that we use to power our application with different type functionalities and features.

Parcel Features:
1. HMR (Hot Module Replacement) - parcel keeps track of file changes via file watcher algorithm and renders the changes in the files
2. File watcher algorithm - made with C++
3. Minification
4. Cleaning our code
5. DEV and production Build
6. Super fast building algorithm
7. Image optimization
8. Caching while development
9. Compresses
10. Compatible with older version of browser
11. HTTPS in dev
12. Port Number
13. Consistent hashing algorithm
14. Zero Configuration
15. Automatic code splitting

Installation commands: `npm install -D parcel`

`-D` is used for development and as a development dependency.

Parcel Commands:
- For development build: `npx parcel <entry_point>`
- For production build: `npx parcel build <entry_point>`

[Webpack vs Parcel](https://medium.com/@gopesh.jangid/are-confused-which-bundler-you-should-use-webpack-vs-parcel-vs-rollup-a0663c534af)

---

**What is `.parcel-cache`**

`.parcel-cache` is used by parcel(bundler) to reduce the building time. It stores information about your project when parcel builds it, so that when it rebuilds, it doesn't have to re-parse and re-analyze everything from scratch. It's a key reason why parcel can be so fast in development mode.

---

**What is `npx` ?**

- `npx` is a tool that is used to execute the packages registered on the npm registry without installing them.

- `npx` is a npm package runner that is used to execute the command without installing the package (just use on the go). When you run a package using npx, it searches for the package in the local and global registry, and then it runs the package. If the package is not already installed, npx downloads the package files and installs the package, but it will only cache the files instead of saving it.

Examples :

`npx parcel index.html` -> npx searches for `parcel` package in your environment and if not found, downloads it and then runs the command. (with index.html as entry point. you can remove index.html and put it in the source of package.json as well)

`npx create-react-app my-app` -> npx seraches for `create-react-app` package in your environment, if not found, downlaods it and then creates my-app using create-react-app in the current project directory.

---

**What is difference between `dependencies` vs `devDependencies`**

- There are 2 types of dependencies: `normal dependencies` and `dev dependencies`
- `Normal Dependencies`: The ones which our project require in all the phases of the project ie. (used in development and production also). Such dependencies are put into the "dependencies" key of the package.json.
- `Dev Dependencies`: They are the ones which our project requires just in the development phase. Such dependencies are put into the "devDependencies" key of the package.json.
- In our React project, we install parcel as a devDependency since npm knows parcel is required at development phase to bundle the code, not at production, because bundling should be done before production.

| dependencies | devDependencies |
|--------------|-----------------|
| Packages that are required in the production environment | Packages that are required only in the development environment, and not in prod/testing environment |
| Command :  `npm install <package-name>` | Command : `npm install -D <package-name>` or `npm install --save-dev <package-name>` |
| Eg : react, react-dom, redux, express, nodemon, babel, mocha (testing) | Eg: parcel  |

---

**What is Tree Shaking?**

`Tree shaking` is process of removing the unwanted code that we do not use while developing the application. In computing, tree shaking is a dead code elimination technique that is applied when optimizing code.

`Tree shaking` is a concept in JavaScript to describe the removal of dead code. Tree shaking is done by module bundler like parcel/webpack while bundling multiple javascript files into single files thus improving the web performance.

Steps to implement tree shaking :

1. Declare ES6 import and exports for the modules
2. Bundler analyses the dependency tree during compilation phase.
3. Any uncode code is removed from the final build.

---

**What is Hot Module Replacement (HMR)?**

The process of adding, removing or updating the modules while the application is running without full reload is called `Hot Module Replacement`. This feature is available in all module bundlers like Parcel, Webpack,etc.

There are many advantages of this features :

1. The application state is retained which is usually lost during full reload
2. Instantly updates the browser when source css/js code is modified.

Parcel automatically does HMR, when the application is using library/framework like:React, Vue, Angular. If no library/framework is used, then HMR can be opted using `module.hot` API.
Parcel provides HMR properties to keep track of files changes by using `file watcher algorithms`.

Webpack needs some configuration to be done for using HMR

---

**List down your favourite 5 superpowers of Parcel/Webpack and describe any 3 of them in your own words.**

Superpowers of `parcel`:

1. `minification` (Minification refers to the process of removing unnecessary or redundant data without affecting how the resource is processed by the browser - e.g. code comments and formatting, removing unused code, using shorter variable and function names, and so on.)
2. `image optimizations` (By default, Parcel includes lossless image optimization for JPEGs and PNGs in prod. mode, which reduces the size of images without affecting their quality.)
3. `compression`(renaming variables)
4. `cleaning our code` (Note: parcel & babel, itself doesn't remove consol.log. To achieve that, we need to config it & we will be installing a plugin `npm install babel-plugin-transsform-remote-control`)
5. `super fast build`
6. `dev and prod builds`
7. `caching while development` (Parcel caches everything it builds. If you restart the dev server, Parcel will only rebuild files that have changed since the last time it ran. Parcel automatically tracks all of the files, configuration, plugins, and dev dependencies that are involved in your build.)
8. `Old browser competibility` (Parcel allows support for older broser also, by using `BrowserList` in package.json)
9. `Https on dev as well npx parcel index.html (--https)`
10. `Consistent Hashing Algorithm`
11. `Zero configuration` (Unlike Webpack, Parcel requires zero configurations to setup.)
12. `Tree shaking` (Removing unwanted code or dead code.)
13. `API proxy`
14. `Hot module replacement` (Parcel provides HMR properties to keep track of files changes by using file watcher algorithms.)

---

**What is the difference between `package.json` and `package-lock.json`**

| package.json | package-lock.json |
|--------------|-------------------|
| It contains metadata about the project like name, version, author, scripts and dependencies required by the project | It contains dependencies required by the project with the exact version with which it was created |
| It contains only direct dependencies | It contains nested/transitive dependencies (dependencies of dependencies) |
| This file is created as soon as npm init command is fired | This file is automatically generated after an `npm install` (i.e when npm modifies either `node_modules` tree or `package.json`) |
| This file must not be put in `.gitignore` file | This file must also not be put in `.gitignore` file |
| During deployment, there is no gurantee that if the version number of the dependencies with which the project was developed (package.json file has the least version of dependencies), will be reproduced and thus the project might not be working as intended | During deployment, the exact version of dependencies will be reproduced and thus the project will be working as intended. (Also, it also allows to go back to the past version of the dependencies without actual ‘committing the node_modules folder.) |
| ^ or ~ can be used in version of dependencies in package.json | Only exact version of dependencies must be used in package-lock.json |

`~` or `^` in `package.json` file : These are used with the versions of the package installed.

For example in `package.json` file:

```
"dependencies": {
    "react": "^18.2.0",
    "react-dom": "^18.2.0"
  }
```

- `~` : Approximately equivalent to version, will update you to all future patch versions, without incrementing the minor version.
- `^` : Compatible with version, will update you to all future minor/patch versions, without incrementing the major version.

If none of them is present, that means only the version specified in `package.json` file is used in the development.

---

**Why should I not modify `package-lock.json`?**

As the name suggests, it locks the `package-lock.json` file, package-lock.json file contains the information about the dependencies and their versions used in the project. Deleting it would cause dependencies issues in the production environment. So don't modify it, It's being handled automatically by NPM.

---

**What is `node_modules` ? Is it a good idea to push that on git?**

In simple words, `node_modules` holds the source code of the packages that are installed through npm. It is a very bad practice to push `node_modules` to git (source control) since it is huge in size and blow up the project capacity and moreover all the packages in `node_module`s can be re-generated using `package.jso`n file.

---

**What is the `dist` folder?**

The `/dist` folder contains the minimized version of the source code. The code present in the /dist folder is actually the code which is used on production web applications. Along with the minified code, the `/dist` folder also comprises of all the compiled modules that may or may not be used with other systems.

The `/dist` folder contains the minimized version of the source code. The code present in the `/dist` folder is actually the code which is used on production web applications.

---

**What is `browserlists`**

`Browserslist` is a tool that allows specifying which browsers should be supported in your frontend app by specifying "queries" in a config file. It's used by frameworks/libraries such as React, Angular and Vue, but it's not limited to them.

The `browserslist` field in package.json can be used to specify which browsers/node.js versions the application supports. The value of this object can be an array of statistics ( % coverage), last versions, Node.js versions, Browser versions or even unreleased versions.

```
"browsersList" : ["last 2 versions", "> 1%", "not dead"]
```

---

**About diff bundlers: `vite`, `webpack`, `parce`l**

`Babel`
- Babel is a popular JavaScript compiler that is mainly used to convert modern JavaScript code (ES6+ or ECMAScript 2015 and later) into backward-compatible versions of JavaScript that can run in older browsers or environments that may not support the latest language features.
- Here are some key uses of Babel: `Transpiling`, `Polyfilling`

`Webpack`
- Webpack is a module bundler for modern JavaScript applications. It is a module bundler that can be used in a variety of ways, from a build-time tool to a development-time tool.
- Consider webpack if you want to bundle your JavaScript application for production.
- Consider Webpack if you want to bundle JavaScript files for usage in a browser.

`Parcel`
- Parcel is a zero configuration web application bundler that is fast and easy to use.
- Consider Parcel if you want a fast and easy to use bundler for your web application.
- Consider Parcel if you want a zero-configuration bundler that supports all module formats and works with any JavaScript library.
- Consider Parcel if you want to automate tasks such as minification, compilation, unit testing, linting, etc. and want to use a JavaScript bundler.

`Vite`
- Vite is a web-based IDE that is designed to be a fast and lightweight alternative to traditional IDEs. It is a cloud-based IDE that runs on any device and is accessible from any browser.
- Consider Vite if you want a lightweight IDE that is accessible from any browser.

`Rollup`
- Rollup is a module bundler for JavaScript modules. It is a minimalistic alternative to webpack and is best suited for smaller projects.
- Consider Rollup if you are looking for a minimalistic alternative to webpack.
- Consider Rollup if you want a module bundler that supports ES6 modules and can be used with any module format.

`Gulp`
- Gulp is a JavaScript task runner that automates tasks such as minification, compilation, unit testing, linting, etc. Gulp is a streaming build system, meaning it doesn't have to wait for tasks to finish before executing the next one.
- Consider Gulp if you want to automate tasks such as minification, compilation, unit testing, linting, etc.

---

**About: `^` - caret and `~` - tilda**

| ^ version | ~ version |
|-----------|-----------|
| In package.json, if a dependency's version [majorversion.minorversion.patchversion] is prefixed with ^ , then it will be updated to all future minor versions and not any major version | In package.json, if a dependency's version [majorversion.minorversion.patchversion] is prefixed with ~ , then it will be updated to all future patch versions and not minor/major versions |
| Eg: "react": "^18.2.0" will use releases from 18.2.0 to < 19.0.0 | Eg: "~18.2.0" will use releases from "18.2.0" < 18.3.0 |

Patch version is used for any bug fixes. Minor version is used for adding new functionality. Major version may contain major functionality changes/ some existing features may be deprecated. So if ~ is used , user will be updated to all bug fixed patch versions. If ^ is used, user will be updated to all new functionality/ features included minor version.

---

**About diff Script types in html (MDN Docs)**

`type` attribute of the `<script>` tag indicates the type of script. Until HTML 4, type is a required attribute. The value of type can be any of the following :

```
<script type="" src="app.js"></script>

```

In HTML5, type attribute is not mandatory. If type attribute is not present(default), or an empty string (type="") or javascript MIME type (text/javascript or application/ecmascript), it is treated as classic "javascript" file.

```
<script type="module" src="app.js"></script>

```

If the type attribute is set `module`, then the code in that js file is treated as module.

```
<script type="importmap" src="app.js"></script>

```

If the type attribute is set `importmap`, the body of the element contains importmap ie an JSON object using which the browser can resolve the module specifiers while importing modules.

```
<script type="{$anyothervalue}" src="app.js"></script>

```

If the type attribute contains anyother value, then the code is treated as data block and will not be processed by the browser. A valid MIME type other than Javascript MIME type (Eg: image/png or text/css) must be mentioned. All the other attributes for this type will be ignored even the `src` attribute.

---

**What are the attributes of `<script>` tag and their meaning ?**

When loading scripts using the <script> tag, you can use various attributes to control their behavior and interactions with the browser. Here are some common attributes and their meanings:

✅ `src`: This attribute specifies the URL of the external script file to be loaded. For example: <script src="script.js"></script>. The src attribute is required for loading external scripts.

✅ `async`: When the `async` attribute is present, it indicates that the script should be executed asynchronously. This allows the script to be downloaded and executed in the background while the HTML parsing and rendering continue. The execution order is not guaranteed.

✅ `defer`: The `defer` attribute also allows scripts to be loaded asynchronously, but with the guarantee that they will be executed in the order they appear in the HTML document. Scripts with the defer attribute are executed after the HTML parsing is complete, but before the DOMContentLoaded event is triggered.

✅ `type`: The `type` attribute specifies the MIME type of the script. Like - "module", "text/javascript". The default value is "text/javascript".

✅ `integrity`: This attribute allows you to include a cryptographic hash that represents the integrity of the script file. It helps ensure that the script has not been tampered with during delivery. It is commonly used with Content Security Policy (CSP) to enhance security.

✅ `crossorigin`: The `crossorigin` attribute is used when loading scripts from a different origin (domain). It allows the script to request cross-origin permissions, such as reading the response from a cross-origin server. The attribute can have values like "anonymous" or "use-credentials".

✅ `charset`: The charset attribute specifies the character encoding used in the script file. It is rarely used in modern web development since UTF-8 encoding is widely supported by default.

These attributes give you control over how scripts are loaded, executed, and interact with the browser environment. It's important to use them appropriately based on the requirements of your scripts and the desired behavior during the page loading process.

---

**Why `node_module` has a another `package-lock.json`(Hidden Lockfiles)**

In order to avoid processing the node_modules folder repeatedly, npm as of v7 uses a "hidden" lockfile present in `node_modules/.package-lock.json`. This contains information about the tree, and is used in lieu of reading the entire node_modules hierarchy provided that the following conditions are met:

- All package folders it references exist in the node_modules hierarchy.
- No package folders exist in the node_modules hierarchy that are not listed in the lockfile.
- The modified time of the file is at least as recent as all of the package folders it references.

That is, the hidden lockfile will only be relevant if it was created as part of the most recent update to the package tree. If another CLI mutates the tree in any way, this will be detected, and the hidden lockfile will be ignored.

## Quick Revise

- to Ignite our app - we need **Bundler** Eg : vite, `parcel`, webpack
- In create react-app, they use `webpack` bundler.
- Bundler is package/module of javascript code
- to have a package in code -> we need Package Manager (eg : npm, yarn)
    
    ```
    npm init      // initialise our repo & creates package.json
    npm init -y   // to skip configuration
    
    ```
    
- why `npm` ?
- helper packages -> React app is powered by a lot of packages for bundling, optimizing, minifying
- `Parcel` :
    
    ```
    npm install package-name     // to install a package named "package-name"  & node modules (helper functions )is created
    
    npm install -d package-name  // --save-dev Or -D means dev dependency
    
    ```
    
- `package-lock.json` is created and parcel code is added/updated in node modules.
- we installed `parcel` as dev dependencies. As, parcel is needed in dev environment
- if update happens, package.json is updated but package-lock.json is not updated
- **Note**: `package-lock.json` should NOT be ignore in git but put `node modules` in .gitignore
- if we have package-lock.json -> we can regenerate node modules
- React CDN - is NOT a good way
- Good way -> in server through node modules
    
    ```
    `npm install react`        // Installing in global dependencies not dev dependencies
    
    `npx parcel index.html`    // Execute using npm with index.html as entry point -> Creates local server
    
    ```
    
- Common Errors & Warnings
    
    ```
    Error : React is defined because we removed cdn link. Instead of that, we have to use import since this time we are using node modules - npm
    
    Error : Browser doesnot understand import -> we have to inform its modules, use type="module" in script tag
    
    Warning : React DOM  -> createRoot is not found -> use  react-dom/client
    
    ```
    
- **Live Server** -> Auto refresh
- **Hot Module Replacement (HMR)**: Parcel does it for us using File Watcher Algorithm (written in c++)
- Parcel.cache -> uses this space for doing all the HMR, minify and other stuffs
- dist folder -> minified code in dist
- `npx parcel build index.html`: production ready build is created by parcel inside dist folder and
    
    It has only 3 files :
    
    - css,
    - html and
    - js file containing all the code including react code
- Parcel Functionalities :
    1. minification (removing indentation),
    2. image optimizations,
    3. compression(renaming variables),
    4. cleaning our code,
    5. super fast build,
    6. dev and prod builds,
    7. caching while development
    8. works with older version of browsers
    9. Https on dev as well npx parcel index.html --https 10.Consistent Hashing Algorithm 11.zero config
    10. Tree shaking - Removing unwanted code
- we should put `.parcel-cache` in gitignore
- Anything which can be autogenerated in server can be put in gitignore
- Initial dev build -> longer time (500ms). But, for the next build -> it takes less time 5ms (using caching).
- When using parcel, we give entry point in command so we can **remove** `main: app.js` from package.json
- **Transitive dependencies** -> dependencies of dependencies. Eg: Our App is dependent on Parcel which is again dependent on other dependencies (dependency Tree)
- **browsersList** -> cross browser compatibility for older versions of browsers

---

## Summary Steps

1. npm init
2. npm install -D parcel
3. npm install react
4. npm install react-dom
5. npx parcel index.html or npx parcel build index.html
6. import React from 'react'; in App.js
7. import ReactDOM from 'react-dom/client'; in App.js
8. use type="module" for index.html
9. Remove main : app.js from package.json
10. Write browserslist in package.json

"browsersList" : [ "last 2 versions"]

## Timeline

```
00:00:00 – Creating Github Repository and pushing code 
00:03:00 – Git commands (branch, commit, push origin)
00:08:50 – first igniting the app
00:14:30 – How React apps are so fast?
00:16:00 – npm introduced
00:21:00 – npm init 
00:22:48 – jest (test  command)
00:24:30 – Why we need package.json
00:26:30 – Installing important packages, Bundler
00:28:00 – create react app
00:29:00 – Parcel introduced
00:30:30 – “npm install -D parcel” command, Dev & Normal Dependency
00:36:00 – ( ~,  ^) - caret & tilde symbol importance
00:40:00 – package-lock.json
00:44:40 – Node Modules
00:50:30 – Parcel dependency
00:55:00 – git ignore command
00:59:00 – npm install 
01:05:00 – npx parcel, localhost
01:12:15 – npm install react
01:14:00 – npm install react-dom
01:15:30 – import React from “react”
01:16:30 – import ReactDOM from “react-dom”
01:23:00 – Deep explanation of Parcel
01:33:00 – “Parcel is a beast”
01:38:45 – Exploring Parcel documentation
01:43:00 – System design question 
01:45:00 – Prod bundles
01:56:00 – Git ignore files (parcel_cache, node_modules)
01:58:00 - support for older versions of Browsers
02:03:00 – Government Websites- Old versions of browser
02:08:00 – Why is Parcel fast?
02:11:00 – Session Recap
```