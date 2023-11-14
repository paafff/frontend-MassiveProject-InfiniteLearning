import React from 'react';

import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Sample from './pages/Sample';
import Home from './pages/Home';
import Dashboard from './pages/User/Dashboard';
import DashboardBussiness from './pages/User/DashboardBussiness';
import DashboardEmployee from './pages/User/DashboardEmployee';
import DashboardBooking from './pages/User/DashboardBooking';
import SignUp from './pages/SignUp';
import Login from './pages/Login';
import DummyPaafff from './components/DummyPaafff';
import DevPaafff from './pages/DevPaafff';
import DummyPaafff from './components/DummyPaafff';
import DevPaafff from './pages/DevPaafff';

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
            <Route path="/dashboard-booking" element={<DashboardBooking />} />
            <Route path="/signup" element={<SignUp />} />
            <Route path="/login" element={<Login />} />
            <Route path="/dummy/paafff" element={<DummyPaafff />} />
            <Route path="/dummy/paafff" element={<DevPaafff />} />
            <Route path="/dummy/paafff" element={<DummyPaafff />} />
            <Route path="/dummy/paafff" element={<DevPaafff />} />
          </Routes>
        </BrowserRouter>
      </div>
    </>
  );
};

export default App;
