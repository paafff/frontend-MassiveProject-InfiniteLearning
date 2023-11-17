import React from 'react';

import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Sample from './pages/Sample';
import Home from './pages/Home';
import Dashboard from './pages/User/Dashboard';
import DashboardBussiness from './pages/User/DashboardBussiness';
import DashboardEmployee from './pages/User/DashboardEmployee';

const App = () => {
  return (
    <>
      <div>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/sample" element={<Sample />} />
            <Route path="/dashboard" element={<Dashboard />} />
            <Route path="/dashboard-bussiness" element={<DashboardBussiness />} />
            <Route path="/dashboard-employee" element={<DashboardEmployee />} />
          </Routes>
        </BrowserRouter>
      </div>
    </>
  );
};

export default App;
