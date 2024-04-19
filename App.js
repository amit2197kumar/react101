import React from 'react';
import ReactDOM from 'react-dom';
import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom";
import Header from './components/Header';
import Body from './components/Body';
import About from "./components/About";
import Contact from "./components/Contact";
import Test from "./components/Test";
import Error from "./components/Error";
import RestaurantDetail from "./components/RestaurantMenu";


const App = () => {
  return (
    <div>
      <Header />
      <Outlet />
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
    ],
  },
  {
    path: "/test",
    element: <Test />,
  },
]);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<RouterProvider router={appConfig} />);