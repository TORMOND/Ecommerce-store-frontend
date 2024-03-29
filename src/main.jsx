import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './main.css'

import { AuthContextProvider } from './Context/AuthContext';
import { CartProvider} from './Context/CartContext';
import { OrderProvider} from './Context/OrdersContext';
import {ProductProvider} from './Context/ProductsContext';
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <AuthContextProvider>
      <ProductProvider>
         <CartProvider >
          <OrderProvider>
             <App /> 
          </OrderProvider>  
      </CartProvider>
      </ProductProvider>
    </AuthContextProvider>
  </React.StrictMode>
);



