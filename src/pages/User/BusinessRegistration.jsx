import React, { useCallback } from 'react';
import Layout from '../Layout';
import { useState, useEffect } from 'react';
import axios from 'axios';
import { getMe } from '../../redux/authSlice';
import { Link, useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import Swal from 'sweetalert2';

const BusinessRegistration = () => {
  // mengambil nilai userAuthReducer pada store
  const userAuthSelector = (state) => state.userAuthReducer.userAuth;
  const userAuth = useSelector(userAuthSelector) || 'Loading Data User';

  // AllAboutRegion
  const [provUser, setProvUser] = useState([]);
  const [kabUser, setKabUser] = useState([]);
  const [kecUser, setKecUser] = useState([]);
  const [kelUser, setKelUser] = useState([]);

  const [provBusiness, setProvBusiness] = useState([]);
  const [kabBusiness, setKabBusiness] = useState([]);
  const [kecBusiness, setKecBusiness] = useState([]);
  const [kelBusiness, setKelBusiness] = useState([]);

  const [addressSelectedUser, setAddressSelectedUser] = useState({
    prov: '',
    kab: '',
    kec: '',
    kel: '',
    rtrw: '',
  });

  const [addressSelectedBusiness, setAddressSelectedBusiness] = useState({
    prov: '',
    kab: '',
    kec: '',
    kel: '',
    provId: '',
    kabId: '',
    kecId: '',
    kelId: '',
    rtrw: '',
  });

  const apiKey =
    'a77cbb6fefcb7a7d2269e15778d5e3d223ef29ec82037df43ff634eca744daff';

  const getProvUser = async () => {
    try {
      const response = await axios.get(
        `https://api.binderbyte.com/wilayah/provinsi?api_key=${apiKey}`,
        { withCredentials: false }
      );
      setProvUser(response.data.value);
      // console.log('prov', prov);
    } catch (error) {
      console.log(error);
    }
  };
  const getKabUser = async (id) => {
    try {
      const response = await axios.get(
        `https://api.binderbyte.com/wilayah/kabupaten?api_key=${apiKey}&id_provinsi=${id}`,
        { withCredentials: false }
      );
      setKabUser(response.data.value);
      // console.log('kab', kab);
    } catch (error) {
      console.log(error);
    }
  };

  const getKecUser = async (id) => {
    try {
      const response = await axios.get(
        `https://api.binderbyte.com/wilayah/kecamatan?api_key=${apiKey}&id_kabupaten=${id}`,
        { withCredentials: false }
      );
      setKecUser(response.data.value);
      // console.log('kec', kec);
    } catch (error) {
      console.log(error);
    }
  };
  const getKelUser = async (id) => {
    try {
      const response = await axios.get(
        `https://api.binderbyte.com/wilayah/kelurahan?api_key=${apiKey}&id_kecamatan=${id}`,
        { withCredentials: false }
      );
      setKelUser(response.data.value);
      // console.log('kel', kel);
    } catch (error) {
      console.log(error);
    }
  };

  //business
  const getProvBusiness = async () => {
    try {
      const response = await axios.get(
        `https://api.binderbyte.com/wilayah/provinsi?api_key=${apiKey}`,
        { withCredentials: false }
      );
      setProvBusiness(response.data.value);
      // console.log('prov', prov);
    } catch (error) {
      console.log(error);
    }
  };
  const getKabBusiness = async (id) => {
    try {
      const response = await axios.get(
        `https://api.binderbyte.com/wilayah/kabupaten?api_key=${apiKey}&id_provinsi=${id}`,
        { withCredentials: false }
      );
      setKabBusiness(response.data.value);
      // console.log('kab', kab);
    } catch (error) {
      console.log(error);
    }
  };

  const getKecBusiness = async (id) => {
    try {
      const response = await axios.get(
        `https://api.binderbyte.com/wilayah/kecamatan?api_key=${apiKey}&id_kabupaten=${id}`,
        { withCredentials: false }
      );
      setKecBusiness(response.data.value);
      // console.log('kec', kec);
    } catch (error) {
      console.log(error);
    }
  };
  const getKelBusiness = async (id) => {
    try {
      const response = await axios.get(
        `https://api.binderbyte.com/wilayah/kelurahan?api_key=${apiKey}&id_kecamatan=${id}`,
        { withCredentials: false }
      );
      setKelBusiness(response.data.value);
      // console.log('kel', kel);
    } catch (error) {
      console.log(error);
    }
  };

  // AllAboutRegion

  //userInformation

  const [userData, setUserData] = useState({
    username: '',
    email: '',
    gender: '',
    phone: '',
    cardId: '',
    // photoProfile: null,
  });

  const arrayAddressUser = [
    addressSelectedUser.prov
      ? addressSelectedUser.prov : userAuth?.address?.[0],
    addressSelectedUser.kab
      ? addressSelectedUser.kab : userAuth?.address?.[1],
    addressSelectedUser.kec
      ? addressSelectedUser.kec : userAuth?.address?.[2],
    addressSelectedUser.kel
      ? addressSelectedUser.kel : userAuth?.address?.[3],
    addressSelectedUser.rtrw
      ? addressSelectedUser.rtrw : userAuth?.address?.[4],
  ];

  //businessInformation
  const [businessData, setBusinessData] = useState({
    name: '',
    description: '',

    //perlu diubahhhhhhhhh
    typeBusiness: '',
  });

  const arrayAddressBusiness = [
    addressSelectedBusiness.prov,
    addressSelectedBusiness.kab,
    addressSelectedBusiness.kec,
    addressSelectedBusiness.kel,
    addressSelectedBusiness.rtrw,
  ];

  const arrayAddressIdBusiness = [
    addressSelectedBusiness.provId,
    addressSelectedBusiness.kabId,
    addressSelectedBusiness.kecId,
    addressSelectedBusiness.kelId,
    addressSelectedBusiness.rtrw,
  ];

  const navigate = useNavigate();
  const dispatch = useDispatch();

  //controler rest api
  const updateUser = async (e) => {
    // e.preventDefault();
    try {
      const formUpdate = new FormData();

      formUpdate.append('username', userData.username);
      formUpdate.append('email', userData.email);
      formUpdate.append('gender', userData.gender);
      formUpdate.append('phone', userData.phone);
      formUpdate.append('cardId', userData.cardId);
      formUpdate.append('address', JSON.stringify(arrayAddressUser));
      // formUpdate.append('photoProfile', userData.photoProfile);
      // formUpdate.append('address', JSON.stringify(arrayAddressUser));

      await axios.patch(
        `${import.meta.env.VITE_API_URL}/user/${userAuth.uuid}`,
        formUpdate,
        { headers: { 'Content-Type': 'multipart/form-data' } }
      );
    } catch (error) {
      if (error.response) {

        alert(error.response.data.msg);
      } else {
        console.log(error);
      }
    }
  };

  // const navigate = useNavigate();

  const createBusiness = async (e) => {
    // e.preventDefault();
    try {
      // multipart
      // const formCreate = new FormData();

      // formCreate.append('name', businessData.name);
      // formCreate.append('description', businessData.description);
      // formCreate.append('typeBusiness', businessData.typeBusiness);
      // formCreate.append('address', JSON.stringify(arrayAddressBusiness));

      await axios.post(`${import.meta.env.VITE_API_URL}/business`, {
        name: businessData.name,
        description: businessData.description,
        typeBusiness: businessData.typeBusiness,
        address: arrayAddressBusiness,
        addressId: arrayAddressIdBusiness,
      });

      Swal.fire({
        icon: 'success',
        title: 'Pendaftaran usaha berhasil',
        confirmButtonText: 'Oke',
      }).then((result) => {

        if (result.isConfirmed) {
          navigate('/dashboard');
        }
      })

    } catch (error) {
      if (error.response) {
        Swal.fire({
          icon: 'error',
          title: error.response.data.msg,
          text: 'Hubungi admin, tekan tombol di bawah ini',
          confirmButtonText: 'Hubungi admin',
        }).then((result) => {
          if (result.isConfirmed) {
            navigate('/call-centre')
          }
        })
        // alert(error.response.data.msg);
      } else {
        console.log(error);
      }

      throw error; // Meneruskan kembali error untuk menandakan bahwa ada kesalahan
    }
  };
  //controler rest api

  //useefeect
  useEffect(() => {
    const getMeUser = async () => {
      await dispatch(getMe());
    };

    getMeUser();
    getProvUser();
    getProvBusiness();
  }, [dispatch, navigate]);

  const [editedJudulBrand, setEditedJudulBrand] = useState(false)
  const [editedJenisUsaha, setEditedJenisUsaha] = useState(false)
  const [editedDesc, setEditedDesc] = useState(false)

  const [disabledSimpan, setDisabledSimpan] = useState(true)

  useEffect(() => {

    if (editedJudulBrand && editedJenisUsaha && editedDesc) {
      setDisabledSimpan(false)
    }

  }, [editedJenisUsaha, editedJudulBrand, editedDesc]);
  //useefeect

  const handleSubmit = async () => {
    // e.preventDefault();
    try {
      await createBusiness();
      await updateUser();
    } catch (error) {
      console.log(error);
    }
  };


  return (
    <Layout>
      <div className="w-3/4 mx-auto my-24">
        <h1 align="center" class="text-3xl font-semibold pt-10">
          Form Pengajuan Usaha
        </h1>
        <hr class="mx-auto mt-2 mb-20 max-w-sm border-2 border-dashed border-rose-400" />
        <form onSubmit={handleSubmit}>
          <div class="mx-20">
            <h4 class="text-lg font-semibold">Data Pemilik Usaha</h4>
            <hr class="mx-auto border-2 border-rose-400 shadow" />
            <div class="flex flex-row my-6">
              <div class="basis-1/3">
                <label class="block text-sm font-medium leading-6 text-gray-900 md:text-left">
                  {' '}
                  Nama Pemilik Usaha
                </label>
              </div>
              <div class="basis-2/3">
                <input
                  type="text"
                  name="fullname"
                  id="fullname"
                  className="border"
                  class="block w-full rounded-md border-0 py-1.5 pl-7 pr-20 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                  // placeholder={
                  //   userAuth.username ? userAuth.username : 'Nama Pemilik Usaha'
                  // }
                  placeholder={
                    userAuth.username ? userAuth.username : 'Nama Pemilik Usaha'
                  }
                  onChange={(e) =>
                    setUserData({
                      ...userData,
                      username: e.target.value,
                    })
                  }

                />
              </div>
            </div>
            <div class="flex flex-row my-6">
              <label class="block text-sm font-medium leading-6 text-gray-900 basis-1/3">
                Jenis Kelamin
              </label>
              <input
                type="radio"
                name="gender"
                id="male"
                value="male"
                className="border"
                onChange={(e) =>
                  setUserData({
                    ...userData,
                    gender: e.target.value,
                  })
                }

              />
              <label htmlFor="male" class="ml-2">
                Pria
              </label>
              <input
                type="radio"
                name="gender"
                id="female"
                value="female"
                className="border ml-12"
                onChange={(e) =>
                  setUserData({
                    ...userData,
                    gender: e.target.value,
                  })
                }

              />
              <label htmlFor="female" class="ml-2">
                Wanita
              </label>
            </div>
            <div class="flex flex-row my-6">
              <label class="block text-sm font-medium leading-6 text-gray-900 basis-1/3">
                Email
              </label>
              <input
                autoComplete="off"
                type="email"
                name="email"
                id="email"
                className="border"
                class="block w-full rounded-md border-0 py-1.5 pl-7 pr-20 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6 basis-2/3"
                placeholder={userAuth.email ? userAuth.email : 'Email Anda'}
                onChange={(e) =>
                  setUserData({
                    ...userData,
                    email: e.target.value,
                  })
                }
              />
            </div>
            <div class="flex flex-row my-6">
              <label class="block text-sm font-medium leading-6 text-gray-900 basis-1/3">
                No Telepon
              </label>
              <input
                type="text"
                name="phoneNumber"
                id="phoneNumber"
                className="border"
                class="block w-full rounded-md border-0 py-1.5 pl-7 pr-20 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6 basis-2/3"
                placeholder={
                  userAuth.phone ? userAuth.phone : 'No. Telepon Anda'
                }
                onChange={(e) =>
                  setUserData({
                    ...userData,
                    gender: e.target.value,
                  })
                }
              />
            </div>
            {/* <div class="flex flex-row my-6">
              <label class="block text-sm font-medium leading-6 text-gray-900 basis-1/3">
                No Identitas
              </label>
              <input
                type="text"
                name="identityNumber"
                id="identityNumber"
                className="border"
                class="block w-full rounded-md border-0 py-1.5 pl-7 pr-20 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6 basis-2/3"
                placeholder={
                  userAuth.cardId ? userAuth.cardId : 'Nomor Identitas Anda'
                }
              />
            </div> */}
            <div class="flex flex-row my-6">
              <label class="block text-sm font-medium leading-6 text-gray-900 basis-1/3">
                Alamat
              </label>
              <div class="basis-2/3 flex flex-wrap">
                {/* prov */}

                {/* nang */}
                <select
                  class="mr-5 w-60 px-2 mb-6 block rounded-md border-0 py-1.5 pl-7 pr-20 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                  onChange={(e) => {
                    getKabUser(e.target.value);

                    const selectedOption =
                      e.target.options[e.target.selectedIndex];
                    const selectedId = selectedOption.getAttribute('id');
                    const selectedName = selectedOption.getAttribute('name');

                    // setUserData({ ...userData, address: selectedName });

                    setAddressSelectedUser({
                      ...addressSelectedUser,
                      // prov: selectedId,
                      prov: selectedName,
                    });
                  }}
                >
                  <option selected disabled class="text-gray-400">
                    Provinsi
                  </option>
                  {provUser.map((prov) => (
                    <option
                      name={prov.name}
                      id={prov.id}
                      key={prov.id}
                      value={prov.id}
                    >
                      {prov.name}
                    </option>
                  ))}
                </select>

                {/* kab */}
                <select
                  class="mr-5 w-60 px-2 mb-6 block rounded-md border-0 py-1.5 pl-7 pr-20 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                  onChange={(e) => {
                    getKecUser(e.target.value);

                    const selectedOption =
                      e.target.options[e.target.selectedIndex];
                    // const selectedId = selectedOption.getAttribute('id');
                    const selectedName = selectedOption.getAttribute('name');

                    setAddressSelectedUser({
                      ...addressSelectedUser,
                      // kab: selectedId,
                      kab: selectedName,
                    });
                  }}
                >
                  <option selected disabled class="text-grey-400">
                    Kabupaten/Kota
                  </option>
                  {kabUser.map((kab) => (
                    <option
                      name={kab.name}
                      id={kab.id}
                      key={kab.id}
                      value={kab.id}
                    >
                      {kab.name}
                    </option>
                  ))}
                </select>
                {/* kec */}
                <select
                  class="mr-5 w-60 px-2 mb-6 block rounded-md border-0 py-1.5 pl-7 pr-20 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                  onChange={(e) => {
                    getKelUser(e.target.value);

                    const selectedOption =
                      e.target.options[e.target.selectedIndex];
                    // const selectedId = selectedOption.getAttribute('id');
                    const selectedName = selectedOption.getAttribute('name');

                    setAddressSelectedUser({
                      ...addressSelectedUser,
                      // kec: selectedId,
                      kec: selectedName,
                    });
                  }}
                >
                  <option selected disabled class="text-grey-400">
                    Kecamatan
                  </option>
                  {kecUser.map((kec) => (
                    <option
                      name={kec.name}
                      id={kec.id}
                      key={kec.id}
                      value={kec.id}
                    >
                      {kec.name}
                    </option>
                  ))}
                </select>
                {/* kel */}
                <select
                  class="mr-5 w-60 px-2 mb-6 block rounded-md border-0 py-1.5 pl-7 pr-20 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                  onChange={(e) => {
                    // getKelUser(e.target.value);

                    const selectedOption =
                      e.target.options[e.target.selectedIndex];
                    // const selectedId = selectedOption.getAttribute('id');
                    const selectedName = selectedOption.getAttribute('name');

                    setAddressSelectedUser({
                      ...addressSelectedUser,
                      // kel: selectedId,
                      kel: selectedName,
                    });
                  }}
                >
                  <option selected disabled class="text-grey-400">
                    Kelurahan
                  </option>
                  {kelUser.map((kel) => (
                    <option
                      name={kel.name}
                      id={kel.id}
                      key={kel.id}
                      value={kel.id}
                    >
                      {kel.name}
                    </option>
                  ))}
                </select>
                <input
                  type="text"
                  class="mr-5 w-60 px-3 mb-6 block rounded-md border-0 py-1.5 pl-7 pr-20 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                  onChange={(e) =>
                    setAddressSelectedUser({
                      ...addressSelectedUser,
                      rtrw: e.target.value,
                    })
                  }
                  // placeholder={userAuth.address ? userAuth.address[1] : 'RT/RW'}
                  placeholder="RT/RW"
                />
              </div>
            </div>
            <h4 class="text-lg font-semibold mt-10">Detail Usaha</h4>
            <hr class="mx-auto border-2 border-rose-400 shadow" />
            <div class="flex flex-row my-6">
              <label class="block text-sm font-medium leading-6 text-gray-900 basis-1/3">
                Judul Brand
              </label>
              <input

                type="text"
                name="brandName"
                id="brandName"
                className="border"
                class="block w-full rounded-md border-0 py-1.5 pl-7 pr-20 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6 basis-2/3"
                placeholder="Nama Brand Anda"
                onChange={
                  (e) => {
                    setBusinessData({
                      ...businessData,
                      name: e.target.value,
                    })
                    setEditedJudulBrand(true)
                  }
                }

              />
            </div>
            <div class="flex flex-row my-6">
              <label class="block text-sm font-medium leading-6 text-gray-900 basis-1/3">
                Jenis Usaha
              </label>
              <input
                id="barbershop"
                type="radio"
                name="jenis-usaha"
                value="barbershop"
                className="border"
                onChange={(e) => {
                  setBusinessData({
                    ...businessData,
                    typeBusiness: e.target.value,
                  })
                  setEditedJenisUsaha(true)
                }
                }
                required
              />
              <label htmlFor="barbershop" class="ml-2">
                Barbershop
              </label>
              <input
                id="salon"
                type="radio"
                value="salon"
                name="jenis-usaha"
                className="border ml-12"
                onChange={(e) => {
                  setBusinessData({
                    ...businessData,
                    typeBusiness: e.target.value,
                  })
                  setEditedJenisUsaha(true)
                }
                }
                required
              />
              <label htmlFor="salon" class="ml-2">
                Salon
              </label>
            </div>
            <div class="flex flex-row my-6">
              <label class="block text-sm font-medium leading-6 text-gray-900 basis-1/3">
                Lokasi
              </label>
              <div class="basis-2/3 flex flex-wrap">
                {/* prov */}

                {/* nang */}
                <select
                  required
                  class="mr-5 w-60 px-2 mb-6 block rounded-md border-0 py-1.5 pl-7 pr-20 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                  onChange={(e) => {
                    getKabBusiness(e.target.value);

                    const selectedOption =
                      e.target.options[e.target.selectedIndex];
                    const selectedId = selectedOption.getAttribute('id');
                    const selectedName = selectedOption.getAttribute('name');

                    setAddressSelectedBusiness({
                      ...addressSelectedBusiness,
                      provId: selectedId,
                      prov: selectedName,
                    });
                  }}
                >
                  <option selected disabled class="text-grey-400">
                    Provinsi
                  </option>
                  {provBusiness.map((prov) => (
                    <option
                      name={prov.name}
                      id={prov.id}
                      key={prov.id}
                      value={prov.id}
                    >
                      {prov.name}
                    </option>
                  ))}
                </select>

                {/* kab */}
                <select
                  required
                  class="mr-5 w-60 px-2 mb-6 block rounded-md border-0 py-1.5 pl-7 pr-20 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                  onChange={(e) => {
                    getKecBusiness(e.target.value);

                    const selectedOption =
                      e.target.options[e.target.selectedIndex];
                    const selectedId = selectedOption.getAttribute('id');
                    const selectedName = selectedOption.getAttribute('name');

                    setAddressSelectedBusiness({
                      ...addressSelectedBusiness,
                      kabId: selectedId,
                      kab: selectedName,
                    });
                  }}
                >
                  <option selected disabled class="text-grey-400">
                    Kabupaten/Kota
                  </option>
                  {kabBusiness.map((kab) => (
                    <option
                      name={kab.name}
                      id={kab.id}
                      key={kab.id}
                      value={kab.id}
                    >
                      {kab.name}
                    </option>
                  ))}
                </select>
                {/* kec */}
                <select
                  required
                  class="mr-5 w-60 px-2 mb-6 block rounded-md border-0 py-1.5 pl-7 pr-20 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                  onChange={(e) => {
                    getKelBusiness(e.target.value);

                    const selectedOption =
                      e.target.options[e.target.selectedIndex];
                    const selectedId = selectedOption.getAttribute('id');
                    const selectedName = selectedOption.getAttribute('name');

                    setAddressSelectedBusiness({
                      ...addressSelectedBusiness,
                      kecId: selectedId,
                      kec: selectedName,
                    });
                  }}
                >
                  <option selected disabled class="text-grey-400">
                    Kecamatan
                  </option>
                  {kecBusiness.map((kec) => (
                    <option
                      name={kec.name}
                      id={kec.id}
                      key={kec.id}
                      value={kec.id}
                    >
                      {kec.name}
                    </option>
                  ))}
                </select>
                {/* kel */}
                <select
                  required
                  class="mr-5 w-60 px-2 mb-6 block rounded-md border-0 py-1.5 pl-7 pr-20 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                  onChange={(e) => {
                    // getKelBusiness(e.target.value);

                    const selectedOption =
                      e.target.options[e.target.selectedIndex];
                    const selectedId = selectedOption.getAttribute('id');
                    const selectedName = selectedOption.getAttribute('name');

                    setAddressSelectedBusiness({
                      ...addressSelectedBusiness,
                      kelId: selectedId,
                      kel: selectedName,
                    });
                  }}
                >
                  <option selected disabled class="text-grey-400">
                    Kelurahan
                  </option>
                  {kelBusiness.map((kel) => (
                    <option
                      name={kel.name}
                      id={kel.id}
                      key={kel.id}
                      value={kel.id}
                    >
                      {kel.name}
                    </option>
                  ))}
                </select>
                <input
                  type="text"
                  class="mr-5 w-60 px-3 mb-6 block rounded-md border-0 py-1.5 pl-7 pr-20 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                  onChange={(e) =>
                    setAddressSelectedBusiness({
                      ...addressSelectedBusiness,
                      rtrw: e.target.value,
                    })
                  }
                  // placeholder={userAuth.address ? userAuth.address[1] : 'RT/RW'}
                  placeholder="RT/RW"
                />
              </div>
            </div>

            <div class="flex flex-row my-6">
              <label class="basis-1/3">Deskripsi Usaha</label>
              <textarea
                required
                rows="6"
                class="block w-full rounded-md border-0 py-1.5 pl-7 pr-20 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6 basis-2/3"
                onChange={(e) => {
                  setBusinessData({
                    ...businessData,
                    description: e.target.value,
                  })
                  setEditedDesc(true)
                }
                }
              ></textarea>
            </div>
          </div>

          {/* sementara */}
          {/* <button
          class="mt-5 ml-80 bg-rose-400 hover:bg-rose-600 text-white font-bold py-2 px-5 rounded shadow-lg"
          // onSubmit={() => handleClick()}
          type="submit"
        >
          Simpan
        </button> */}
          {/* sementara */}
        </form>
        <div class="columns-2 mt-20 flex justify-end">
          {/* <img src="src/assets/images/image.png" class="mb-5" /> */}
          <div class="justify-end">

            <button
              class="mt-5 ml-80 disabled:bg-gray-300 disabled:hover:cursor-not-allowed bg-rose-400 hover:bg-rose-600 text-white font-bold py-2 px-5 rounded shadow-lg"
              onClick={handleSubmit}
              // type="submit"
              disabled={disabledSimpan}
            >
              Simpan
            </button>
          </div>
        </div>

      </div>
    </Layout>
  );
};

export default BusinessRegistration;
