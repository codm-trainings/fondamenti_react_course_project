import React from 'react';
import ReactDOM from 'react-dom/client';
import { createBrowserRouter, RouterProvider, Navigate } from 'react-router-dom';
import BeerDetail from './components/BeerDetail';
import Home from './components/Home';
import Layout from './components/Layout';
import 'bootstrap/dist/css/bootstrap.min.css';

const router = createBrowserRouter([
  {
    path: '/',
    element: <Navigate to="/home" replace />,
  },
  {
    path: '/home',
    element: <Layout><Home /></Layout>,
    errorElement: <p>An error happened!</p>,
  },
  {
    path: 'beer/:beerId',
    element: <BeerDetail />,
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <RouterProvider router={router} />,
);
