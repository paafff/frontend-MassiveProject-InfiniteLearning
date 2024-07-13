import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { useState } from 'react'
import { useNavigate } from 'react-router-dom';
import Sidebar from '../../components/Sidebar'
import Layout from '../Layout'
import ComponentReservation from '../../components/User/Reservation'
import { getMe } from '../../redux/authSlice';
import axios from 'axios';

const Reservation = () => {
    const [showSidebar, setShowSidebar] = useState(false)
    const [dataReservation, setDataReservation] = useState([])

    const navigate = useNavigate();
    const dispatch = useDispatch();

    // mengambil nilai userAuthReducer pada store
    const userAuthSelector = (state) => state.userAuthReducer.userAuth;
    const userAuth = useSelector(userAuthSelector) || '';

    useEffect(() => {

        getReservations();
        getMeUser();

    }, []);

    const getMeUser = async () => {
        await dispatch(getMe());
    };

    const getReservations = async () => {
        try {
            const response = await axios.get(`${import.meta.env.VITE_API_URL}/reservation-history/${userAuth.id}`);

            setDataReservation(response.data);
        } catch (error) {
            if (error.response) {
                alert(error.response.data.msg);
            } else {
                console.log(error);
            }
        }
    };

    return (
        <Layout>

            <div className='flex relative bg-gray-200 min-h-screen'>
                <Sidebar showSidebar={showSidebar} setShowSidebar={setShowSidebar} />

                <ComponentReservation showSidebar={showSidebar} setShowSidebar={setShowSidebar} data={dataReservation} />
            </div>

        </Layout>
    )
}

export default Reservation