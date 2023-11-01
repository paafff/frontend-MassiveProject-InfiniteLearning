import React from 'react';

const Layout = ({ children }) => {
  return (
    <React.Fragment>
      <div className="bg-yellow-100 min-h-screen ">
        {/* diisi navbar */}
        <div>{children}</div>
        {/* diisi footer */}
      </div>
    </React.Fragment>
  );
};

export default Layout;
