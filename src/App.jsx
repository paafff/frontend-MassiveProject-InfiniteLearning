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
// import InputReview from './pages/Admin/InputReview';
import DashboardReview from './pages/User/DashboardReview';
import DashboardAdmin from './pages/Admin/Dashboard';
import ManageUser from './pages/Admin/User';
import ManageBusiness from './pages/Admin/Business';
import ManageReview from './pages/Admin/Review';
import Help from './pages/Help';
// import AccountAdmin from './pages/Admin/AccountAdmin';
import InputReview from './pages/User/InputReview';

// syarat ketentuan
import InfoUmum from './pages/User/SK/InfoUmum';
import CariBarber from './pages/User/SK/CariBarber';
import Bekerjasama from './pages/User/SK/Bekerjasama';
import Kebijakan from './pages/User/SK/Kebijakan';
import SyaratKetentuan from './pages/User/SK/SyaratKetentuan';
import PanduanKeamanan from './pages/User/SK/PanduanKeamanan';
import Privasi from './pages/User/SK/Privasi';
import Penalti from './pages/User/SK/Penalti';
import SyaratKetentuanPemilik from './pages/User/SK/SyaratKetentuanPemilik';
import SyaratKetentuanPencari from './pages/User/SK/SyaratKetentuanPencari';

const App = () => {
  return (
    <>
      <div>
        <BrowserRouter>
          <Routes>
            <Route path="/help" element={<Help />} />
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
            <Route path="/user/reservation" element={<Reservasi />} />
            <Route path="/user/review" element={<InputReview />} />

            {/* SK */}
            <Route path="/basic-information" element={<InfoUmum />} />
            <Route path="/search-barber" element={<CariBarber />} />
            <Route path="/collaboration" element={<Bekerjasama />} />
            <Route path="/policy" element={<Kebijakan />} />
            <Route path="/term" element={<SyaratKetentuan />} />
            <Route path="/guide" element={<PanduanKeamanan />} />
            <Route path="/private" element={<Privasi />} />
            <Route path="/penalty" element={<Penalti />} />
            <Route path="/term-owner" element={<SyaratKetentuanPemilik />} />
            <Route path="/term-searcher" element={<SyaratKetentuanPencari />} />

            {/* Super User */}
            <Route
              path="/superuser/dashboard-business"
              element={<DashboardBusiness />}
            />
            <Route
              path="/superuser/dashboard-employee"
              element={<DashboardEmployee />}
            />
            <Route
              path="/superuser/dashboard-booking"
              element={<DashboardBooking />}
            />
            <Route
              path="/superuser/dashboard-review"
              element={<DashboardReview />}
            />

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
