import React from 'react';
import ReactDOM from 'react-dom/client';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import BeerDetail from './components/BeerDetail';
import Home from './components/Home';
import Layout from './components/Layout';
import 'bootstrap/dist/css/bootstrap.min.css';
import BeerEdit from './components/BeerEdit';
import BeerCrud from './components/BeerCrud';

const router = createBrowserRouter([
  {
    path: '/',
    element: <Layout />,
    children: [
      { index: true, element: <Home /> },
      {
        path: 'beers',
        children: [
          {
            path: 'new',
            element: <BeerCrud />,
          },
          {
            path: ':beerId',
            element: <BeerDetail />,
          },
          {
            path: ':beerId/edit',
            element: <BeerEdit />,
          },
        ],
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <RouterProvider router={router} />,
);
