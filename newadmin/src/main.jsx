import React from 'react'; 
import ReactDOM from 'react-dom/client'; 
import './index.css';
import App from './App.jsx';
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Test, { DashBord } from './component/DashBord.jsx';
import ProductList from './page/ProductList.jsx';
import Catagory from './page/Catagory.jsx';
import AddCatagory from './page/AddCatagory.jsx';
import Attributes from './page/Attributes.jsx';
import Order from './page/Order.jsx';
import AddAttribute from './page/AddAttribute.jsx';
import OrderDetils from './page/OrderDetils.jsx';
import OrderTracking from './page/OrderTracking.jsx';
import Login from './page/Login.jsx';
import Gallery from './page/Gallery.jsx';
import Counteries from './page/Counteries.jsx';
import Setting from './page/Setting.jsx';
import AddProduct from './page/AddProduct.jsx';
const router = createBrowserRouter([
  {
    path: "/",
    element:<App/>,
    children:[
      {
        path:"/",
        element:<DashBord/>
      },
    
      {
        path:"/product-list",
        element:<ProductList/>
      },
      {
        path:"/add-product",
        element:<AddProduct/>
      },
      {
        path:"/catagory-list",
        element:<Catagory/>
      },
      {
        path:"/add-catagory",
        element:<AddCatagory/>
      },
      {
        path:"/add-attributes",
        element:<Attributes/>
      },
      {
        path:"/product-list",
        element:<Order/>
      },
      {
        path:"/add-attribute",
        element:<AddAttribute/>
      },
      {
        path:"/order-detils",
        element:<OrderDetils/>
      },
      {
        path:"/order-tracking",
        element:<OrderTracking/>
      },
     
    
      {
        path:"/login",
        element:<Login/>
      },
      {
        path:"/gallery",
        element:<Gallery/>
      },
      {
        path:"/countery",
        element:<Counteries/>
      },
      {
        path:"/settings",
        element:<Setting/>
      }
    ]
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
