import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App.jsx';
import { createBrowserRouter, RouterProvider } from "react-router-dom";
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
import AllUser from './page/AllUser.jsx';
import AddUser from './page/AddUser.jsx';
import Register from './page/Register.jsx';
import PrivateRoute from './protect/PriveetRoute.jsx';
import PublicRoute from './protect/Public.Route.jsx';
import { Provider } from 'react-redux';
import store, { persistor } from './redux/store.js'; // Import persistor
import { PersistGate } from 'redux-persist/integration/react';

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      { path: "/", element: <PrivateRoute><DashBord /></PrivateRoute> },
      { path: "/all-user", element: <PrivateRoute><AllUser /></PrivateRoute> },
      { path: "/add-user", element: <PrivateRoute><AddUser /></PrivateRoute> },
      { path: "/product-list", element: <PrivateRoute><ProductList /></PrivateRoute> },
      { path: "/add-product", element: <PrivateRoute><AddProduct /></PrivateRoute> },
      { path: "/catagory-list", element: <PrivateRoute><Catagory /></PrivateRoute> },
      { path: "/add-catagory", element: <PrivateRoute><AddCatagory /></PrivateRoute> },
      { path: "/all-attributes", element: <PrivateRoute><Attributes /></PrivateRoute> },
      { path: "/order", element: <PrivateRoute><Order /></PrivateRoute> },
      { path: "/add-attribute", element: <PrivateRoute><AddAttribute /></PrivateRoute> },
      { path: "/order-detils", element: <PrivateRoute><OrderDetils /></PrivateRoute> },
      { path: "/order-tracking", element: <PrivateRoute><OrderTracking /></PrivateRoute> },
      { path: "/gallery", element: <PrivateRoute><Gallery /></PrivateRoute> },
      { path: "/countery", element: <PrivateRoute><Counteries /></PrivateRoute> },
      { path: "/settings", element: <PrivateRoute><Setting /></PrivateRoute> },
      { path: "/login", element: <PublicRoute><Login /></PublicRoute> },
      { path: "/register", element: <PublicRoute><Register /></PublicRoute> },
    ]
  }
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <RouterProvider router={router} />
      </PersistGate>
    </Provider>
  </React.StrictMode>
);
