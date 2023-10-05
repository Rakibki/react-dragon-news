import {
    createBrowserRouter,
  } from "react-router-dom";
import Root from "../layouts/Root";
import Home from "../pages/home/Home";
import NewDetails from "../components/NewDetails";
import Login from "../pages/login/Login";
import Register from "../pages/register/Register"
import Career from "../pages/career/Career"
import About from "../pages/about/About"
import Error from "../pages/error/Error";
import PrivateRouter from "./PrivateRouter";

  const router = createBrowserRouter([
    {
      path: "/",
      element: <Root />,
      errorElement: <Error />,
      children: [
        {
            path: "/",
            element: <Home />
        },
        {
          path: "/news/:id",
          element: <PrivateRouter><NewDetails /></PrivateRouter>
        },
        {
          path: "/login",
          element: <Login />
        },
        {
          path: "/register",
          element: <Register />
        },
        {
          path: "/career",
          element: <Career />
        },
        {
          path: "/about",
          element: <About />
        },
      ]
    },
  ]);


  export default router