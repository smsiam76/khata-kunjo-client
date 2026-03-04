import { createBrowserRouter } from "react-router";

import Demo from "../pages/Demo/Demo";
import Maintenance from "../pages/Maintenance/Maintenance";
import Root from "../layouts/Root";
import Home from "../pages/Home/Home";
import Error404 from "../pages/ErrorPage/Error404";
import ProductDetails from "../pages/Product/ProductDetails";
import Cart from "../pages/Cart/Cart";
import CheckoutForm from "../pages/Checkout/CheckoutForm";
import Products from "../pages/Product/Products";
import SignUp from "../pages/Authantication/SignUp";
import SpiralCategory from "../pages/Categories/SpiralCategory";
import SelaiCategtory from "../pages/Categories/SelaiCategtory";

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
        path: "/products",
        Component: Products,
      },
      {
        path: "/products/category/spiral",
        Component: SpiralCategory, 
      },
      {
        path: "/products/category/selai",
        Component: SelaiCategtory, 
      },
      {
        path: "/products/:id",
        Component: ProductDetails,
        loader: ({params}) => fetch(`http://localhost:5000/products/${params.id}`)
      },
      {
        path: "/sign-up",
        Component: SignUp,
      },
      // {
      //   path: "/cart",
      //   element: <Cart></Cart>,
      //   loader: () => fetch("http://localhost:5000/products")
      // },
      // {
      //   path: "/checkout",
      //   element: <CheckoutForm></CheckoutForm>
      // }
    ]
  },
]);

export default router;