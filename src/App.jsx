import React from 'react';

import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import DashboardUser from './pages/User/Dashboard';
import DashboardBusiness from './pages/User/DashboardBusiness';
// import DashboardEmployee from './pages/User/DashboardEmployee';
import DashboardBooking from './pages/User/DashboardBooking';
import SignUp from './pages/SignUp';
import Login from './pages/Login';

import BusinessRegistration from './pages/User/BusinessRegistration';
// import Reservasi from './pages/User/Reservasi';
import Account from './pages/Admin/Account';
// import InputReview from './pages/Admin/InputReview';
// import DashboardReview from './pages/User/DashboardReview';
import DashboardAdmin from './pages/Admin/Dashboard';
import ManageUser from './pages/Admin/User';
import ManageBusiness from './pages/Admin/Business';
import ManageReview from './pages/Admin/Review';
import Help from './pages/Help';
// import AccountAdmin from './pages/Admin/AccountAdmin';
// import InputReview from './pages/User/InputReview';
import ListBusiness from './pages/ListBusiness';
import ListAllBusiness from './pages/ListAllBusiness';
import Detail from './pages/User/Detail';

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

import Subscription from './pages/User/Subscription';
import Hubungi from './pages/User/SK/Hubungi';
import KategoriBantuan from './pages/User/SK/KategoriBantuan';
import HairTrend from './pages/HairTrend';
import AdminServices from './pages/Admin/Services';

const App = () => {
  return (
    <>
      <div>
        <BrowserRouter>
          <Routes>
            {/* inactive */}
            {/* <Route path="/user/review" element={<InputReview />} />
            <Route path="/dashboard-employee" element={<DashboardEmployee />} />
            <Route path="/dashboard-booking" element={<DashboardBooking />} />
            <Route path="/user/reservasi" element={<Reservasi />} /> */}
            {/* inactive */}

            <Route path="/help" element={<Help />} />
            {/* User / Guest */}
            <Route path="/" element={<Home />} />
            <Route path="/dashboard" element={<DashboardUser />} />
            <Route
              path="/superuser/dashboard-business/:uuid"
              element={<DashboardBusiness />}
            />

            <Route path="/signup" element={<SignUp />} />
            <Route path="/login" element={<Login />} />
            <Route path="/user/dashboard" element={<DashboardUser />} />
            <Route path="/hair-trend" element={<HairTrend />} />
            <Route
              path="/user/business-registration"
              element={<BusinessRegistration />}
            />
            <Route
              path="/barbershop"
              element={<ListBusiness page={'barbershop'} />}
            />
            <Route path="/salon" element={<ListBusiness page={'salon'} />} />
            <Route path="/business" element={<ListAllBusiness />} />
            <Route path="/detail/:uuid" element={<Detail />} />

            {/* <Route
              path="/superuser/dashboard-employee"
              element={<DashboardEmployee />}
            /> */}
            <Route
              path="/superuser/dashboard-booking/:id"
              element={<DashboardBooking />}
            />
            {/* <Route
              path="/superuser/dashboard-review"
              element={<DashboardReview />}
            /> */}
            <Route path="/subscription" element={<Subscription />} />

            {/* Admin */}
            <Route path="/admin/account" element={<Account />} />
            <Route path="/admin/dashboard" element={<DashboardAdmin />} />
            <Route path="/admin/user" element={<ManageUser />} />
            <Route path="/admin/business" element={<ManageBusiness />} />
            <Route path="/admin/review" element={<ManageReview />} />
            <Route path="/admin/services" element={<AdminServices />} />

            {/* SK */}
            <Route path="/help-category" element={<KategoriBantuan />} />
            <Route path="/basic-information" element={<InfoUmum />} />
            <Route path="/search-barber" element={<CariBarber />} />
            <Route path="/collaboration" element={<Bekerjasama />} />
            <Route path="/policy" element={<Kebijakan />} />
            <Route path="/term" element={<SyaratKetentuan />} />
            <Route path="/guide" element={<PanduanKeamanan />} />
            <Route path="/privacy" element={<Privasi />} />
            <Route path="/penalty" element={<Penalti />} />
            <Route path="/term-owner" element={<SyaratKetentuanPemilik />} />
            <Route path="/term-searcher" element={<SyaratKetentuanPencari />} />
            <Route path="/call-centre" element={<Hubungi />} />
          </Routes>
        </BrowserRouter>
      </div>
    </>
  );
};

export default App;
