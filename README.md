# E10. Jo Dikhta Hai, Vo Bikta Hai

## Learning
- Explored all the ways of writing css in React.
- Configured tailwind.
- Re-built our food-order-app using tailwind css.

## Notes

**Explore all the ways of writing css.**

1. `Native CSS` - all components's styles in a single file index.css
2. `SCSS` - Syntactical CSS - it is then converted to css
3. `Inline - style attribute` - pass object - {{backgroundColor : "red"}}
4. `Component Library` - MaterialUI, Bootstrap, Base Web UI, Ant design, chakra UI
5. `styled-components`
6. `CSS Framework` - **Tailwind**

---

**How do we configure tailwind?**

Below are the steps to use Tailwind CSS for React App in Parcel :

- `Install tailwind css`
    - Below command will *install* tailwindcss and its peer dependencies via npm, and then run the init command to *generate* **tailwind.config.js**.
        
        ```
        npm install -D tailwindcss postcss
        npx tailwindcss init
        
        ```
        
- `Configure PostCSS`
    - Now, create a **.postcssrc**file in your project root, and **enable** the tailwindcss plugin.
        
        ```
        {
          "plugins": {
            "tailwindcss": {}
          }
        }
        ```
        
- `Configure your template paths`
    - Now, **add** the paths to all of your template files in your tailwind.config.js file.
        
        ```
        module.exports = {
          content: [
            "./src/**/*.{html,js,ts,jsx,tsx}",
          ],
          theme: {
            extend: {},
          },
          plugins: [],
        }
        
        ```
        
- `Add the Tailwind directives` to your CSS
    - Now, **create** a ./src/`index.css` file and **add** the `@tailwind directives` for each of Tailwind’s layers.
        
        ```
        @tailwind base;
        @tailwind components;
        @tailwind utilities;
        
        ```
        
- Start your build process
    
    ```
    npx parcel src/index.html
    
    ```
    
- Now, you are ready to start using Tailwind in your project.
- For more, refer [Tailwind CSS Docs](https://tailwindcss.com/docs/installation/framework-guides)

---

**In tailwind.config.js, what does all the keys mean (content, theme, extend, plugins)?**

```
module.exports = {
  content: [
    "./src/**/*.{html,js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {},
  },
  plugins: [],
}
```

- `content`: This section is where you configure the paths to all of your HTML templates, JS components, and any other files that contain Tailwind class names.
- `theme`: In this, we can customize color palette, spacing scale, typography scale, or breakpoints using theme section of your tailwind.config.js file
- `plugins`: The plugins section allows you to register plugins with Tailwind that can be used to generate extra utilities, components, base styles, or custom variants.

```
module.exports = {
  // Using content property to provide the path for the html files
  content: ["./*html"],
  
  // Using extend property to set custom color & font
  theme: {
    extend: {
      colors: {
        "custom-blue": "#00BAFF",
        "custom-purple": "#6336FA"
      }
    },
    fontFamily: {
      Poppins: ["Poppins, sans-serif"]
    }
  },
  
  plugins: []
}
```

---

**Why do we have .postcssrc file?**

- PostCSS is a Node.js tool that transforms your styles using JavaScript plugins.
- Despite its name, it is neither a post-processor nor a pre-processor, **it is just a transpiler** that **turns** a special PostCSS plugin syntax **into** a Vanilla CSS. You can think of it as the Babel tool for CSS.
- So, we used `PostCSS` to transpile the tailwind css code into Vanilla CSS.
- Remember, while installing tailwind, we install postcss as its peer dependency. So, we create a '.postcssrc' file in project root, and **enable** the tailwindcss plugin.
    
    ```
    {
      "plugins": {
        "tailwindcss": {}
      }
    }
    ```
    
- For more detail [refer](https://www.freecodecamp.org/news/what-is-postcss/)

## Quick Revise

- Why frameworks?

  - optimized css,
  - consistent UI
  - saves time.
  - Eg : MaterialUI, Bootstrap, Base Web UI, Ant design, chakra UI

- Can we use more than one framework ?

  - It's all package can use any number of frameworks,
  - But, not consistent way

- Different ways to write css :

  1. **Normal Native CSS** - all components's styles in a single file index.css
  2. **SCSS** - Syntactical CSS - atlast it is converted to css
  3. **Inline CSS** - style attribute - pass object - {{backgroundColor : "red"}}
  4. **Component Library** - MaterialUI, Bootstrap, Base Web UI, Ant design, chakra UI
  5. **CSS Framework** - Tailwind
  6. **Styled Components**: Majorly used in react projects.

- **Important**: In a `system design round of interview`, you always have to discuss that

  - what will you use for styling your components?
  - Now, there are differnet ways, you can style your web apps.
  - But, what way you will choose & you have give a a good reason for it.
  - So, you should know what are the pros & cons of using them.
  - Exapmle: what are pros & cons of using `Native CSS` over `SCSS` or `component library`

- Pros & Cons of using Component librery (i.e MaterialUI, Bootstrap, etc)

  - Pros :

    - `consistent UI`: (All the button in your app will look the same now)
    - save time

  - Cons :
    - Bundle size -
    - Loose control over design
    - personal customizition is hard

### Tailwind CSS:

- When? How? & Why? to use it.

- writing css on the go (i.e in the same file )
- reusablity
- less bundle size (minimal css) only includes the css classes that we have used
- Flexible UI (Customizable)

#### Seting up tailwimd css in our project: refer [Tailwind Docs](https://tailwindcss.com/docs/installation/framework-guides)

1. Installing `tailwind` & `postcss` using npm [for parcel]

   ```
   npm install -D tailwindcss postcss
   npx tailwindcss init
   ```

2. Configure Tailwind:

   - use command `npm tailwind init`
   - This will create `tailwind.config.js` file
   - Now, we will be telling tailwind which all files to scan (i.e Configure your template paths)

     ```
      /** @type {import('tailwindcss').Config} */
      module.exports = {
        content: [
          "./src/**/*.{html,js,ts,jsx,tsx}",
        ],
        theme: {
          extend: {},
        },
        plugins: [],
      }

     ```

3. Configure postcss:
   - Create `.postcssrc` file.
   - Configure PostCSS:
   ```
   {
     "plugins""{
       "tailwindcss": {}
     }
   }
   ```
   - In this `.postcssrc` file, we have to tell the `parcel`(i.e bundler) that we will be using tailwind. So, compile our tailwind css into normal css during the build. This is the reason, we use `.postcssrc` configuration.
4. Now, in 'index.css`
   - We will not be writing any css in it.
   - Instead there will only three lines inside it (i.e Add the Tailwind directives to your CSS):
     ```
     @tailwind base;
     @tailwind components;
     @tailwind utilities;
     ```

- Add a plugin/extension `Tailwind CSS IntelliSense` in VScode.

> **NOTE**: Sometime `Tailwind CSS IntelliSense` extension doesn't show suggetions. In that case `press ctrl + spacebar` before typing any class.

### Pros & Cons of tailwind

- Pros:

  - Saves Time (faster developnment)
  - Easy to debug
  - Less code is shipped
  - No duplicates CSS
  - Bundle size is small
  - Much more customisable (then other frameworks like MaterialUi, Bootstrap,...)
  - Gives much more control over things

- Cons:
  - Initial learning curve: every new developer that will join our team will take some time understand & learn.
  - Too much class. So, readability is compromised a little.

> **Note**: Because of `JSX` & `tailwind` we don't have to move out of our `.js` file.

- Tailwind Cheatsheet: [Cheatsheet 1](https://nerdcave.com/tailwind-cheat-sheet) | [Cheatsheet 2](https://tailwindcomponents.com/cheatsheet/)
