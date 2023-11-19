import React from 'react';
import Layout from '../Layout';

const AccountAdmin = () => {

    const handleClick = () => {
        console.log('profilePhoto');
    }

    return (
        <Layout>
            <div>
                <Sidebar/>
                <div className='main'>
                    <p className='text-xl font-bold'>Hello, Ilham Soejud Alkahfiandry</p>
                    <form>
                        <label>Foto Profil</label>
                        <br/>
                        <input type='image' name='profilePhoto' id='profilePhoto'/>
                        <button onClick={() => handleClick()}>Upload</button>
                        <hr/>
                        <br/>
                        <label>Username</label>
                        <br/>
                        <input type='text' name='username' id='username' required/>
                        <br/>
                        <label>Email</label>
                        <br/>
                        <input type='email' name='email' id='email' required/>
                        <br/>
                        <label>Password</label>
                        <br/>
                        <input type='password' name='password' id='password' required/>
                        <br/>
                        <button onClick={() => handleClick()}>Ubah Akun</button>
                        <button onClick={() => handleClick()}>Simpan Perubahan</button>
                    </form>
                </div>
            </div>
        </Layout>
    )
}

export default AccountAdmin;