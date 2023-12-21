import React, { useState, useEffect } from 'react';
import Layout from '../../../pages/Layout';
import { FaRegCopy, FaSave, FaUserCircle } from 'react-icons/fa';
import { IoReturnDownBackOutline } from 'react-icons/io5';
import { FiEdit } from 'react-icons/fi';
import axios from 'axios';
import Swal from 'sweetalert2';
// import { unsetImageBusiness } from './../../../assets/images/unsetImage/1920.png';

const BasicInformation = ({ businessByUUID, showSidebar, setShowSidebar }) => {
  return (
    <div className="w-full py-10 lg:w-full xl:w-3/4 xl:px-24  px-5 md:px-12 lg:pt-16">
      <HumbergerMenu
        showSidebar={showSidebar}
        setShowSidebar={setShowSidebar}
      />

      <div className="flex gap-3 mb-5 justify-between md:justify-start">
        <p className="text-xl md:text-2xl font-bold tracking-normal">
          {businessByUUID.name}
        </p>
        <p className="text-xs bg-zinc-950 h-fit py-1 px-3 text-white rounded">
          {businessByUUID.typeBusiness}
        </p>
      </div>

      <Form businessByUUID={businessByUUID} />
    </div>
  );
};

const HumbergerMenu = ({ showSidebar, setShowSidebar }) => {
  return (
    <svg
      onClick={() => setShowSidebar(!showSidebar)}
      className={`w-5 h-5  transition-all text-zinc-900 lg:hidden mb-10 rotate-90 ${showSidebar ? 'ml-80 rotate-180' : 'ml-0'
        } `}
      aria-hidden="true"
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 17 14"
    >
      <path
        stroke="currentColor"
        stroke-linecap="round"
        stroke-linejoin="round"
        stroke-width="2"
        d="M1 1h15M1 7h15M1 13h15"
      />
    </svg>
  );
};

const Form = ({ businessByUUID }) => {
  const [editForm, setEditForm] = useState(true);

  const [allProvinsi, setAllProvinsi] = useState([]);
  const [allKota, setAllKota] = useState([]);
  const [allKecamatan, setAllKecamatan] = useState([]);
  const [allKelurahan, setAllKelurahan] = useState([]);

  const [isLoading, setIsLoading] = useState(true);

  const [arrayAddressIdBusiness, setArrayAddressIdBusiness] = useState(['idProv', 'idKota', 'idKec', 'idKel']);
  const [arrayAddressBusiness, setArrayAddressBusiness] = useState([
    businessByUUID?.address?.[0],
    businessByUUID?.address?.[1],
    businessByUUID?.address?.[2],
    businessByUUID?.address?.[3],
  ]);

  useEffect(()=>{

    setArrayAddressBusiness((prevArray) => {
      const newArray = [...prevArray];
      newArray[0] = businessByUUID?.address?.[0];
      newArray[1] = businessByUUID?.address?.[1];
      newArray[2] = businessByUUID?.address?.[2];
      newArray[3] = businessByUUID?.address?.[3];
      return newArray;
    });

    setArrayAddressIdBusiness((prevArray) => {
      const newArray = [...prevArray];
      newArray[0] = businessByUUID?.addressId?.[0];
      newArray[1] = businessByUUID?.addressId?.[1];
      newArray[2] = businessByUUID?.addressId?.[2];
      newArray[3] = businessByUUID?.addressId?.[3];
      return newArray;
    });

  },[editForm])

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          'https://api.binderbyte.com/wilayah/provinsi?api_key=7b397cea3811e3799ae20fd43ac78bcbc0dba2f5954d6fef4361e5fff3af76f1',
          { withCredentials: false }
        );
        setAllProvinsi(response.data.value);
      } catch (error) {
        console.error('Error fetching prov:', error);
      } finally {
        setIsLoading(false);
      }
    };

    fetchData();

  }, []); // The empty dependency array means this effect runs once after the initial render

  const fetchKota = async (id) => {
    try {
      const response = await axios.get(
        `https://api.binderbyte.com/wilayah/kabupaten?api_key=7b397cea3811e3799ae20fd43ac78bcbc0dba2f5954d6fef4361e5fff3af76f1&id_provinsi=${id}`,
        { withCredentials: false }
      );
      setAllKota(response.data.value);
    } catch (error) {
      console.error('Error fetching kota:', error);
    } finally {
      setIsLoading(false);
    }
  };

  const fetchKecamatan = async (id) => {
    try {
      const response = await axios.get(
        `https://api.binderbyte.com/wilayah/kecamatan?api_key=7b397cea3811e3799ae20fd43ac78bcbc0dba2f5954d6fef4361e5fff3af76f1&id_kabupaten=${id}`,
        { withCredentials: false }
      );
      setAllKecamatan(response.data.value);
    } catch (error) {
      console.error('Error fetching kec:', error);
    } finally {
      setIsLoading(false);
    }
  };

  const fetchKelurahan = async (id) => {
    try {
      const response = await axios.get(
        `https://api.binderbyte.com/wilayah/kelurahan?api_key=7b397cea3811e3799ae20fd43ac78bcbc0dba2f5954d6fef4361e5fff3af76f1&id_kecamatan=${id}`,
        { withCredentials: false }
      );
      setAllKelurahan(response.data.value);
    } catch (error) {
      console.error('Error fetching kel:', error);
    } finally {
      setIsLoading(false);
    }
  };

  // Input data to state
  const handleChange = (e) => {
    const name = e.name;
    const value = e.value;
    setBusinessData((prev) => {
      return { ...prev, [name]: value };
    });
  };

  // district = kecamatan. neighborhoods = kelurahan
  const [businessData, setBusinessData] = useState({
    name: '',
    email: '',
    phone: '',
    province: '',
    city: '',
    district: '',
    neighborhoods: '',
  });

  

  const handleProv = (e) => {
    const idProv = allProvinsi[e].id
    const nameProv = allProvinsi[e].name

    fetchKota(idProv)

    setArrayAddressBusiness((prevArray) => {
      const newArray = [...prevArray];
      newArray[0] = nameProv;
      return newArray;
    });

    setArrayAddressIdBusiness((prevArray) => {
      const newArray = [...prevArray];
      newArray[0] = idProv;
      return newArray;
    });

  }

  const handleCity = (e) => {

    const idCity = allKota[e].id
    const nameCity = allKota[e].name

    fetchKecamatan(idCity)

    setArrayAddressBusiness((prevArray) => {
      const newArray = [...prevArray];
      newArray[1] = nameCity;
      return newArray;
    });

    setArrayAddressIdBusiness((prevArray) => {
      const newArray = [...prevArray];
      newArray[1] = idCity;
      return newArray;
    });

  }

  const handleDistrict = (e) => {

    const idDisctrict = allKecamatan[e].id
    const nameDisctrict = allKecamatan[e].name

    fetchKelurahan(idDisctrict)

    setArrayAddressBusiness((prevArray) => {
      const newArray = [...prevArray];
      newArray[2] = nameDisctrict;
      return newArray;
    });

    setArrayAddressIdBusiness((prevArray) => {
      const newArray = [...prevArray];
      newArray[2] = idDisctrict;
      return newArray;
    });

  }

  const handleNeighborhood = (e) => {

    const idNeighborhood = allKelurahan[e].id
    const nameNeighborhood = allKelurahan[e].name

    setArrayAddressBusiness((prevArray) => {
      const newArray = [...prevArray];
      newArray[3] = nameNeighborhood;
      return newArray;
    });

    setArrayAddressIdBusiness((prevArray) => {
      const newArray = [...prevArray];
      newArray[3] = idNeighborhood;
      return newArray;
    });

  }

  const updateBusiness = async (e) => {

    e.preventDefault();
    try {
      const formUpdateBusiness = new FormData();

      formUpdateBusiness.append('name', businessData.name);
      formUpdateBusiness.append('email', businessData.email ? businessData?.email : 'sample@mail.com');
      formUpdateBusiness.append('phone', businessData.phone);
      formUpdateBusiness.append('img1', null);
      formUpdateBusiness.append('img2', null);
      formUpdateBusiness.append('img3', null);
      formUpdateBusiness.append('img4', null);
      formUpdateBusiness.append('img5', null);
      formUpdateBusiness.append(
        'address',
        JSON.stringify(arrayAddressBusiness)
      );
      formUpdateBusiness.append(
        'addressId',
        JSON.stringify(arrayAddressIdBusiness)
      );

      // console.log(arrayAddressBusiness);
      // console.log(arrayAddressIdBusiness);
      // console.log(formUpdateBusiness);

      await axios.patch(
        `${import.meta.env.VITE_API_URL}/business/${businessByUUID.uuid}`,
        formUpdateBusiness,
        { headers: { 'Content-Type': 'multipart/form-data' } }
      );

      Swal.fire({
        icon: 'success',
        title: 'Ubah data usaha berhasil',
        confirmButtonText: 'Oke',
      }).then((result) => {

        if (result.isConfirmed) {
          window.location.reload()
        }
      })

    } catch (error) {
      if (error.response) {
        alert(error.response.data.msg);
      } else {
        console.log(error);
      }
    }
  };

  return (
    <div className="bg-white w-full rounded-lg p-4 lg:p-8 drop-shadow-md">
      <p className="text-base md:text-lg font-semibold">Informasi Dasar </p>

      <hr className="my-5" />

      <form action="" className="flex flex-col gap-4" onSubmit={updateBusiness}>
        <div className="flex flex-col gap-4 xl:flex-row xl:justify-start">
          <div className="flex flex-col gap-4 xl:w-1/2">
            <div className="flex flex-col gap-2 md:items-start md:justify-between">
              <label htmlFor="" className="text-sm">
                Nama Usaha
              </label>
              <input
                onChange={(e) => handleChange(e.target)}
                disabled={editForm}
                type="text"
                name="name"
                id="name"
                placeholder={businessByUUID.name || 'Tuliskan brand usahamu'}
                className="w-full md:w-3/4 xl:w-3/4 border border-gray-400 rounded-md h-10 text-sm px-2 placeholder:text-xs disabled:bg-gray-200"
              />
            </div>
            <div className="flex flex-col gap-2 md:items-start md:justify-between">
              <label htmlFor="" className="text-sm">
                Email
              </label>
              <input
                onChange={(e) => handleChange(e.target)}
                disabled={editForm}
                type="email"
                name="email"
                id="email"
                placeholder={businessByUUID.email || 'Email'}
                className="w-full md:w-3/4 xl:w-3/4 border border-gray-400 rounded-md h-10 text-sm px-2 placeholder:text-xs disabled:bg-gray-200"
              />
            </div>
            <div className="flex flex-col gap-2 md:items-start md:justify-between">
              <label htmlFor="" className="text-sm">
                Telepon
              </label>

              <input
                onChange={(e) => handleChange(e.target)}
                disabled={editForm}
                type="number"
                name="phone"
                id="phone"
                placeholder={businessByUUID.phone || 'Telepon'}
                className="w-full md:w-3/4 xl:w-3/4 border border-gray-400 rounded-md h-10 text-sm px-2 placeholder:text-xs disabled:bg-gray-200"
              />
              <p className='text-xs text-gray-400'>Harap masukkan kode negara contoh (62 898123456)</p>
            </div>
          </div>
          <div className="flex flex-col gap-4 md:items-start md:justify-between xl:w-1/2">
            <label htmlFor="" className="text-sm">
              Lokasi
            </label>

            <div className="flex flex-col gap-4 md:p-0 md:w-3/4">
              {!editForm && (
                <>
                  <select
                    disabled={editForm}
                    onSubmit={(e) => handleChange(e.target)}
                    onChange={(e) => handleProv(e.target.value)}
                    name="province"
                    id="province"
                    className="w-full border border-gray-400 rounded-md h-10 text-sm px-2 disabled:bg-gray-200"
                  >
                    <option value="" className="">
                      Pilih Provinsi
                    </option>
                    {allProvinsi.map((provinsi, index) => (
                      <option value={index} key={provinsi.name} className="">
                        {provinsi.name}
                      </option>
                    ))}
                  </select>

                  <select
                    disabled={editForm}
                    onChange={(e) => handleCity(e.target.value)}
                    name="city"
                    id="city"
                    className="w-full border border-gray-400 rounded-md h-10 text-sm px-2 disabled:bg-gray-200"
                  >
                    <option value="" className="">
                      Pilih Kota / Kabupaten
                    </option>
                    {allKota.map((kota, index) => (
                      <option value={index} className="" key={kota.id}>
                        {kota.name}{' '}
                      </option>
                    ))}
                  </select>

                  <select
                    disabled={editForm}
                    onChange={(e) => handleDistrict(e.target.value)}
                    name="district"
                    id="district"
                    className="w-full border border-gray-400 rounded-md h-10 text-sm px-2 disabled:bg-gray-200"
                  >
                    <option value="" className="">
                      Pilih Kecamatan
                    </option>
                    {allKecamatan.map((kecamatan, index) => (
                      <option value={index} className="" key={kecamatan.id}>
                        {kecamatan.name}
                      </option>
                    ))}
                  </select>

                  <select
                    disabled={editForm}
                    name="neighborhoods"
                    id="neighborhoods"
                    onChange={(e) => handleNeighborhood(e.target.value)}
                    className="w-full border border-gray-400 rounded-md h-10 text-sm px-2 disabled:bg-gray-200"
                  >
                    <option value="" className="">
                      Pilih Kelurahan
                    </option>
                    {allKelurahan.map((kelurahan, index) => (
                      <option value={index} className="" key={kelurahan.id}>
                        {kelurahan.name}
                      </option>
                    ))}
                  </select>
                </>
              )}

              {
                editForm && (
                  <>
                    <input
                      value={"Provinsi " + businessByUUID?.address?.[0]}
                      type="text"
                      name=""
                      disabled
                      className="w-full border border-gray-400 rounded-md h-10 text-sm px-3 disabled:bg-gray-200"
                      id="" />
                    <input
                      value={"Kota " + businessByUUID?.address?.[1]}
                      type="text"
                      name=""
                      disabled
                      className="w-full border border-gray-400 rounded-md h-10 text-sm px-3 disabled:bg-gray-200"
                      id="" />
                    <input
                      value={"Kecamatan " + businessByUUID?.address?.[2]}
                      type="text"
                      name=""
                      disabled
                      className="w-full border border-gray-400 rounded-md h-10 text-sm px-3 disabled:bg-gray-200"
                      id="" />
                    <input
                      value={"Kelurahan " + businessByUUID?.address?.[3]}
                      type="text"
                      name=""
                      disabled
                      className="w-full border border-gray-400 rounded-md h-10 text-sm px-3 disabled:bg-gray-200"
                      id="" />
                  </>
                )
              }
            </div>
          </div>
        </div>
        <hr className="mt-5" />
        <div className="w-full flex justify-end gap-5">
          {editForm ? (
            <div
              onClick={() => setEditForm(!editForm)}
              className="hover:bg-zinc-800 hover:cursor-pointer transition-all py-2 px-5 bg-zinc-950 rounded "
            >
              <p className="text-xs md:text-sm text-white flex gap-2 items-center">
                <FiEdit className="inline-block" />
                Ubah Data
              </p>
            </div>
          ) : (
            <div className="w-full flex justify-end gap-3">
              <div
                onClick={() => setEditForm(!editForm)}
                className="hover:bg-zinc-800 hover:cursor-pointer transition-all py-2 px-5 bg-zinc-950 rounded "
              >
                <p className="text-xs md:text-sm text-white flex gap-2 items-center">
                  <IoReturnDownBackOutline className="inline-block" />
                  Back
                </p>
              </div>
              <button
                type="submit"
                className="w-fit flex justify-end py-2 px-5 bg-green-600 hover:bg-green-700 hover:cursor-pointer transition-all rounded"
              >
                <p className="text-xs md:text-sm text-white flex gap-2 items-center">
                  <FaSave className="inline-block" />
                  Simpan Perubahan
                </p>
              </button>
            </div>
          )}
        </div>
      </form>
    </div>
  );
};

export default BasicInformation;
