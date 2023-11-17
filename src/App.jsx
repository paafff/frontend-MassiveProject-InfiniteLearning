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
import BusinessRegistration from './pages/User/BusinessRegistration';
import Reservasi from './pages/User/Reservasi';
import AccountAdmin from './pages/Admin/AccountAdmin';
import InputReview from './pages/Admin/InputReview';
import SignUp from './pages/SignUp';
import Login from './pages/Login';

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
            <Route path="/BusinessRegistration" element={<BusinessRegistration />} />
            <Route path="/Reservasi" element={<Reservasi/>} />
            <Route path="/AccountAdmin" element={<AccountAdmin/>} />
            <Route path="/InputReview" element={<InputReview/>} />
            <Route path="/signup" element={<SignUp />} />
            <Route path="/login" element={<Login />} />
          </Routes>
        </BrowserRouter>
      </div>
    </>
  );
};

export default App;
