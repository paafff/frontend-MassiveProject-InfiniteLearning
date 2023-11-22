import React from 'react'
import Layout from './Layout'

const Help = () => {
    return (
        <div className='flex flex-col gap-3 m-5'>
            <div className='flex flex-col'>
                <p className='text-lg font-semibold'>User / Guest</p>
                <p>/</p>
                <p>/signup</p>
                <p>/login</p>
                <p>/user/dashboard</p>
                <p>/user/business-registration</p>
                <p>/user/reservasi</p>
                <p>/user/review</p>
            </div>
            <div className='flex flex-col'>
                <p className='text-lg font-semibold'>Superuser</p>
                <p>/superuser/dashboard-business</p>
                <p>/superuser/dashboard-employee</p>
                <p>/superuser/dashboard-booking</p>
                <p>/superuser/dashboard-review</p>
                <p>/user/business-registration</p>
            </div>
            <div className='flex flex-col'>
                <p className='text-lg font-semibold'>Admin</p>
                <p>/admin/account</p>
                <p>/admin/dashboard</p>
                <p>/admin/user</p>
                <p>/admin/business</p>
                <p>/admin/review</p>
            </div>
        </div>
    )
}

export default Help