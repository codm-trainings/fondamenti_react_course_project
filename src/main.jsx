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
    element: <Layout />,
    children: [
      { index: true, element: <Home /> },
      {
        path: 'beer',
        children: [
          {
            path: ':beerId',
            element: <BeerDetail />,
          },
          // nuova pagina che risponde a /:beerId/edit
          // che ritorna un component con un h2 con scritto beer edit
        ],
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <RouterProvider router={router} />,
);
