import Home from "./pages/home/Home";
import {createBrowserRouter, RouterProvider } from "react-router-dom";
import List from "./pages/list/List";
import Layout from "./pages/layout/Layout";
import Signup from "./pages/auth/signup/Signup";
import Login from "./pages/auth/login/Login";
import Details from "./pages/details/Details";

function App() {

  const router = createBrowserRouter([
    {
      path: "/",
      element: (<Layout />),
      children: [
        {
          path: "/",
          element: <Home/>
        },

        {
          path: "/list",
          element: <List/>
        },

        {
          path: "/auth/signup",
          element: <Signup />
        },

        {
          path: "/auth/login",
          element: <Login/>
        },

        {
          path: "/:id",
          element: <Details />
        },
      ]
    },
  ])

  return (
  

    <RouterProvider router={router} />
  )
}

export default App