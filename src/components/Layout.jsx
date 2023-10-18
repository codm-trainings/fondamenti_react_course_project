import React from 'react';
import { Container } from 'reactstrap';
import AppNavbar from './common/Navbar';
import Footer from './common/Footer';

function Layout({ children }) {
  return (
    <>
      <div className="flex-shrink-0">
        <Container fluid>
          <AppNavbar />
          {children}
        </Container>
      </div>
      <Footer />
    </>
  );
}

export default Layout;
