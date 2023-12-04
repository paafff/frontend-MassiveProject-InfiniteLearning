import React from "react";
import Layout from "../Layout";
import Banner from '../../components/Banner';
import FormReservasi from '../../components/User/FormReservasi';

const Reservasi = () => {
    return (
        <Layout>
            <div className="w-screen min-h-screen">

                <Banner />
                <FormReservasi />
            </div>
        </Layout>
    );
};

export default Reservasi;