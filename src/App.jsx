import React from 'react';

import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Sample from './pages/Sample';
import Home from './pages/Home';
import DashboardUser from './pages/User/Dashboard';
import DashboardBusiness from './pages/User/DashboardBusiness';
import DashboardEmployee from './pages/User/DashboardEmployee';
import DashboardBooking from './pages/User/DashboardBooking';
import SignUp from './pages/SignUp';
import Login from './pages/Login';

import BusinessRegistration from './pages/User/BusinessRegistration';
import Reservasi from './pages/User/Reservasi';
import Account from './pages/Admin/Account';
import InputReview from './pages/Admin/InputReview';
import DashboardReview from './pages/User/DashboardReview';
import DashboardAdmin from './pages/Admin/Dashboard';
import ManageUser from './pages/Admin/User';
import ManageBusiness from './pages/Admin/Business';
import ManageReview from './pages/Admin/Review';

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
            <Route path="/user/dashboard" element={<DashboardUser />} />
            <Route
              path="/user/business-registration"
              element={<BusinessRegistration />}
            />
            <Route path="/user/reservasi" element={<Reservasi />} />
            <Route path="/user/review" element={<InputReview />} />

            {/* Super User */}
            <Route
              path="/superuser/dashboard-business"
              element={<DashboardBusiness />} />
            <Route path="/superuser/dashboard-employee" element={<DashboardEmployee />} />
            <Route path="/superuser/dashboard-booking" element={<DashboardBooking />} />
            <Route path="/superuser/dashboard-review" element={<DashboardReview />} />

            {/* Admin */}
            <Route path="/admin/account" element={<Account />} />
            <Route path="/admin/dashboard" element={<DashboardAdmin />} />
            <Route path="/admin/user" element={<ManageUser />} />
            <Route path="/admin/business" element={<ManageBusiness />} />
            <Route path="/admin/review" element={<ManageReview />} />
          </Routes>
        </BrowserRouter>
      </div>
    </>
  );
};

export default App;
