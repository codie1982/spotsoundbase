import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import "./styles/Styles.css"
import "./assets/css/tailwind.css"
import { RouterProvider } from 'react-router-dom';
import router from "./router"
import Header from './layouts/header';
import 'bootstrap/dist/css/bootstrap.min.css';
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
      <RouterProvider router={router}>
        <Header />
      </RouterProvider>
  </React.StrictMode>
);