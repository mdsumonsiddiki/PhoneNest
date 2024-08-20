import {createBrowserRouter,} from "react-router-dom";
import Root from "../layouts/Root";
import Home from "../pages/Home";
import SingIn from "../pages/SingIn";
import SingUp from "../pages/SingUp";
import PrivateRoute from "../routers/PrivateRoute";

const router = createBrowserRouter([
    {
      path: "/",
      element: <Root/>,
      children: [
        {
          index: true,
          element: <PrivateRoute><Home/></PrivateRoute>
        },
        {
          path: '/singin',
          element: <SingIn/>
        },
        {
          path: '/singup',
          element: <SingUp/>
        }
      ]
    },
  ]);

export default router;