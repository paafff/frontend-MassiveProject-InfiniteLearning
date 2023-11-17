import React from 'react';
import Layout from '../Layout';

const BusinessRegistration = () => {
    const [fullname, setFullname] = useState("");
    const [gender, setGender] = useState("");
    const [brandName, setBrandName] = useState("");

    const handleClick = () => {
        console.log('fullname');
        console.log('gender');
        console.log('brandName')
    }

    return (
        <Layout>
            <p>halo</p>
            <Typography variant='h1' color='black'>Form Pengajuan Usaha</Typography>
            <form onSubmit={() => handleClick()}>
                <div>
                    <Typography variant='h4' color='black'>Data Pemilik Usaha</Typography>
                    <div>
                        <label class='block text-sm font-medium leading-6 text-gray-900'> Nama Pemilik Usaha</label>
                        <input type='text' name='fullname' id='fullname' className='border' class='block w-full rounded-md border-0 py-1.5 pl-7 pr-20 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6' placeholder='Nama Pemilik Usaha' required />
                    </div>
                    <div>
                        <label>Jenis Kelamin</label>
                        <input type='radio' name='gender' id='male' value={'male'} className='border' required />
                        <label>Laki-laki</label>
                        <input type='radio' name='gender' id='female' value={'female'} className='border' required />
                        <label>Perempuan</label>
                    </div>
                    <div>
                        <label>Email</label>
                        <input type='email' name='email' id='email' className='border' placeholder='Email Anda' />
                    </div>
                    <div>
                        <label>No Telepon</label>
                        <input type='text' name='phoneNumber' id='phoneNumber' className='border' placeholder='No. Telepon Anda' />
                    </div>
                    <div>
                        <label>Tipe Identitas</label>
                        <select name="identityType" id="identityType">
                            <option value=""></option>
                            <option value=""></option>
                            <option value=""></option>
                        </select>
                    </div>
                    <div>
                        <label>No Identitas</label>
                        <input type='text' name='identityNumber' id='identityNumber' className='border' placeholder='Nomor Identitas Anda' />
                    </div>
                    <div>
                        <div>
                            <label>Alamat</label>
                            <input type='text' placeholder='RT/RW' />
                        </div>
                    </div>
                </div>
                <div>
                    <Typography variant='h4' color='black'>Detail Usaha</Typography>
                    <div>
                        <label>Judul Brand</label>
                        <input type='text' name='brandName' id='brandName' className='border' placeholder='Nama Brand Anda' />
                    </div>
                    <div>
                        <label>Lokasi</label>
                        <input type='text' placeholder='RT/RW' />
                    </div>
                    <div>
                        <label>Banner</label>
                        <input type='image' name='banner' id='banner' className='border' />
                    </div>
                    <div>
                        <label>Foto</label>
                        <input type='image' name='brandPhoto' id='brandPhoto' className='border' />
                    </div>
                    <div>
                        <textarea>Deskripsi Usaha</textarea>
                    </div>
                </div>
            </form>
            <div>
                <img src='src/assets/images/images.png' />
                <label>
                    <input type='checkbox' required />
                    Saya bersedia bekerjasama dengan website ini
                </label>
                <button onSubmit={() => handleClick()}>Simpan</button>
            </div>
        </Layout>
    );
};

export default BusinessRegistration;
