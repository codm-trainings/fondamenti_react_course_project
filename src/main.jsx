import React from 'react';
import ReactDOM from 'react-dom/client';
import Home from './components/Home';
import Layout from './components/Layout';
import 'bootstrap/dist/css/bootstrap.min.css';

ReactDOM.createRoot(document.getElementById('root')).render(
  <Layout>
    <Home />
  </Layout>,
);
