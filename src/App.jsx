import React from 'react';

import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Sample from './pages/Sample';
import Home from './pages/Home';
import Dashboard from './pages/User/Dashboard';
import DashboardBusiness from './pages/User/DashboardBusiness';
import DashboardEmployee from './pages/User/DashboardEmployee';
import DashboardBooking from './pages/User/DashboardBooking';
import SignUp from './pages/SignUp';
import Login from './pages/Login';

import BusinessRegistration from './pages/User/BusinessRegistration';
import Reservasi from './pages/User/Reservasi';
import AccountAdmin from './pages/Admin/Dashboard';
import InputReview from './pages/Admin/InputReview';
import DashboardReview from './pages/User/DashboardReview';

const App = () => {
  return (
    <>
      <div>
        <BrowserRouter>
          <Routes>
            {/* User / Guest */}
            <Route path="/" element={<Home />} />
            <Route path="/signup" element={<SignUp />} />
            <Route path="/login" element={<Login />} />
            <Route path="/sample" element={<Sample />} />
            <Route path="/user/dashboard" element={<Dashboard />} />
            <Route
              path="/user/business-registration"
              element={<BusinessRegistration />}
            />

            {/* Super User */}
            <Route
              path="/superuser/dashboard-business"
              element={<DashboardBusiness />}
            />
            <Route path="/superuser/dashboard-employee" element={<DashboardEmployee />} />
            <Route path="/superuser/dashboard-booking" element={<DashboardBooking />} />
            <Route path="/superuser/dashboard-review" element={<DashboardReview />} />


            <Route path="/Reservasi" element={<Reservasi />} />
            <Route path="/AccountAdmin" element={<AccountAdmin />} />
            <Route path="/InputReview" element={<InputReview />} />
          </Routes>
        </BrowserRouter>
      </div>
    </>
  );
};

export default App;
