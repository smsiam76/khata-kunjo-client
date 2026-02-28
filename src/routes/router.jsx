import { createBrowserRouter } from "react-router";

import Demo from "../pages/Demo/Demo";
import Maintenance from "../pages/Maintenance/Maintenance";
import Root from "../layouts/Root";
import Home from "../pages/Home/Home";
import Error404 from "../pages/ErrorPage/Error404";
import ProductDetails from "../pages/Product/ProductDetails";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root></Root>,
    errorElement: <Error404></Error404>,
    // element: <Demo />
    children: [
      {
        path: "/",
        Component: Home,
      },
      {
        path: "/products/:id",
        Component: ProductDetails,
        loader: ({params}) => fetch(`http://localhost:5000/products/${params.id}`)
      }
    ]
  },
]);

export default router;