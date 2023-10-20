import React from 'react';
import { Container } from 'reactstrap';
import { Outlet } from 'react-router-dom';
import AppNavbar from './common/Navbar';
import Footer from './common/Footer';

function Layout() {
  return (
    <>
      <div className="flex-shrink-0">
        <Container fluid>
          <AppNavbar />
          <Outlet />
        </Container>
      </div>
      <Footer />
    </>
  );
}

export default Layout;
