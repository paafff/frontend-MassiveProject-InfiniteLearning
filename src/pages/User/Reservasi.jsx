import React from "react";
import Layout from "../Layout";
import Banner from '../../components/Banner';
import FormReservasi from '../../components/User/FormReservasi';

const Reservasi = () => {
    return (
        <Layout>
            <Banner/>
            <FormReservasi/>
        </Layout>
    );
};

export default Reservasi;