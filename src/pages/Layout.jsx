import React from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

const Layout = ({ children }) => {
  return (
    <React.Fragment>
      <div className="min-h-screen font-fontPoppins">
        <Navbar />
        <div>{children}</div>
        <Footer />
      </div>
    </React.Fragment>
  );
};

export default Layout;
