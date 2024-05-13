import React, {lazy, Suspense} from 'react';
import ReactDOM from 'react-dom';
import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom";
import Header from './components/Header';
import Body from './components/Body';
import About from "./components/About";
import Contact from "./components/Contact";
import Test from "./components/Test";
import Error from "./components/Error";
import RestaurantDetail from "./components/RestaurantMenu";
import { Provider } from 'react-redux';
import appStore from './utils/AppStore';
import Cart from './components/Cart';

// Lazy loading, import only when needed, code splitting, reduce initial bundle size
const Grocery = lazy(() => import('./components/Grocery'));

const App = () => {
  return (
      <div>
        <Provider store={appStore}>
        <Header />
        <Outlet />
        </Provider>
      </div>
  );
}

const appConfig = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <Error />,
    children: [
      {
        path: "/",
        element: <Body />,
      },
      {
        path: "/about",
        element: <About />,
      },
      {
        path: "/contact",
        element: <Contact />,
      },
      {
        path: "/restaurant/:id",
        element: <RestaurantDetail />,
      },
      {
        path: "/grocery",
        element: (
          <Suspense fallback={<h1>Loading...</h1>}>
            <Grocery />
          </Suspense>
        ),
      },
      {
        path: "/cart",
        element: <Cart/>
      }
    ],
  },
  {
    path: "/test",
    element: <Test />,
  },
]);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<RouterProvider router={appConfig} />);