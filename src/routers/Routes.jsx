import {createBrowserRouter,} from "react-router-dom";
import Root from "../layouts/Root";
import Home from "../pages/Home";
import SingIn from "../pages/SingIn";

const router = createBrowserRouter([
    {
      path: "/",
      element: <Root/>,
      children: [
        {
          index: true,
          element: <Home/>
        },
        {
          path: '/singin',
          element: <SingIn/>
        }
      ]
    },
  ]);

export default router;