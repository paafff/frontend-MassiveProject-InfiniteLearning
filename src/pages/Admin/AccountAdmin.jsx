import React from 'react';
import Layout from '../Layout';
import AdminProfile from '../../components/Admin/AdminProfile';
import SidebarAdmin from '../../components/Admin/SidebarAdmin';
import AdminBox from '../../components/Admin/AdminBox';

const AccountAdmin = () => {


    return (
        <Layout>
             <div class='grid grid-cols-5'>
                <SidebarAdmin/>
                <AdminProfile/>
                <AdminBox/>
             </div>
        </Layout>
    )
}

export default AccountAdmin;