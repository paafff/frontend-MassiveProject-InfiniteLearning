import React, { useCallback, useEffect, useState } from 'react';
import { FaRegCopy, FaSave, FaUserCircle } from 'react-icons/fa';
import Layout from '../Layout';
import Sidebar from '../../components/User/Sidebar';
import axios from 'axios';

const DashboardUsaha = () => {
  const [showSidebar, setShowSidebar] = useState(false);
  return (
    <Layout>
      <div className="min-w-full flex bg-gray-200">
        <Sidebar showSidebar={showSidebar} setShowSidebar={setShowSidebar} />

        <InformasiDasar />
      </div>
    </Layout>
  );
};

const InformasiDasar = () => {
  const [data, setData] = useState(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          'https://api.binderbyte.com/wilayah/provinsi?api_key=7b397cea3811e3799ae20fd43ac78bcbc0dba2f5954d6fef4361e5fff3af76f1',
          { withCredentials: false }
        );
        setData(response.data);
        console.log(data);
      } catch (error) {
        console.error('Error fetching data:', error);
      } finally {
        setIsLoading(false);
      }
    };

    fetchData();
  }, []); // The empty dependency array means this effect runs once after the initial render

  return (
    <div>
      <p className="text-2xl">Informasi dasar</p>

      <form action="">
        <div>
          <label htmlFor="">Nama Usaha</label>
          <br />
          <input type="text" name="nama" id="nama" />
        </div>
        <div>
          <label htmlFor="">Email</label>
          <br />
          <input type="email" name="email" id="email" />
        </div>
        <div>
          <label htmlFor="">Telepon</label>
          <br />
          <input type="number" name="telepon" id="telepon" />
        </div>
        <div>
          <label htmlFor="">Lokasi</label>
          <br />
          <br />
          <select name="provinsi" id="provinsi">
            <option value="">Pilih Provinsi</option>
          </select>
          <br />
          <br />
          <select name="kota" id="kota">
            <option value="">Pilih Kota / Kabupaten</option>
          </select>
          <br />
          <br />
          <select name="kecamatan" id="kecamatan">
            <option value="">Pilih Kecamatan</option>
          </select>
          <br />
          <br />
          <select name="kelurahan" id="kelurahan">
            <option value="">Pilih Kelurahan</option>
          </select>
        </div>
        <div className=" py-2 px-5 bg-green-600 hover:bg-green-700 hover:cursor-pointer transition-all rounded">
          <p className="text-sm text-white flex gap-2 items-center">
            <FaSave className="inline-block" />
            Simpan Perubahan
          </p>
        </div>
      </form>
    </div>
  );
};

export default DashboardUsaha;
