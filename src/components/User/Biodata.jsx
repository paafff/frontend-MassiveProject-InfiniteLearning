import React from 'react'
import { useState } from 'react'
import Sidebar from '../../components/User/Sidebar'

const Biodata = () => {

    const [fullname, setFullname] = useState("")

    return (
        <div className='w-full h-screen flex'>
            <Sidebar />

            <div className="main">
                <p className='text-xl font-bold'>Hello, Ilham Soejud Alkahfiardy</p>

                <form>
                    <label htmlFor='fullname'>nama lengkap</label>
                    <input type="text" name="fullname" id="fullname" className='border' onChange={(e) => setFullname(e.target.value)} />

                    <p>Jenis Kelamin</p>

                    <div className="gender flex gap-3">
                        <label htmlFor="jk-pria">Pria</label>
                        <input type="radio" name="jenis-kelamin" id="jk-pria" value="pria" className='border' />
                        <label htmlFor="jk-wanita">Wanita</label>
                        <input type="radio" name="jenis-kelamin" id="jk-wanita" value="wanita" className='border' />
                    </div>

                    <label htmlFor="email">Email</label>
                    <br />
                    <input type="email" name="email" id="email" className='border' />
                    <br />
                    <label htmlFor="pass">Password</label>
                    <br />
                    <input type="password" name="password" id="password" className='border' />
                    <br />
                    <button onClick={() => handleClick()} className='bg-rose-400'>Submit perubahan</button>
                </form>
            </div>
        </div>
    )
}

export default Biodata