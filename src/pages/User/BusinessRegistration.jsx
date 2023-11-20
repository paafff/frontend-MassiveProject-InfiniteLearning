import React, { useCallback } from 'react';
import Layout from '../Layout';
import { useState, useEffect } from 'react';
import axios from 'axios';
import { getMe } from '../../redux/authSlice';
import { Link, useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';

const BusinessRegistration = () => {
  // AllAboutRegion

  const [prov, setProv] = useState([]);
  const [kab, setKab] = useState([]);
  const [kec, setKec] = useState([]);
  const [kel, setKel] = useState([]);

  const [addressSelected, setAddressSelected] = useState({
    prov: '',
    kab: '',
    kec: '',
    kel: '',
    rtrw: '',
  });

  const [provSelect, setProvSelect] = useState('');
  const [kabSelect, setKabSelect] = useState('');
  const [KecSelect, setKecSelect] = useState('');
  const [KelSelect, setKelSelect] = useState('');

  const apiKey =
    'a77cbb6fefcb7a7d2269e15778d5e3d223ef29ec82037df43ff634eca744daff';

  const getProv = async () => {
    try {
      const response = await axios.get(
        `https://api.binderbyte.com/wilayah/provinsi?api_key=${apiKey}`,
        { withCredentials: false }
      );
      setProv(response.data.value);
      // console.log('prov', prov);
    } catch (error) {
      console.log(error);
    }
  };
  const getKab = async (id) => {
    try {
      const response = await axios.get(
        `https://api.binderbyte.com/wilayah/kabupaten?api_key=${apiKey}&id_provinsi=${id}`,
        { withCredentials: false }
      );
      setKab(response.data.value);
      // console.log('kab', kab);
    } catch (error) {
      console.log(error);
    }
  };

  const getKec = async (id) => {
    try {
      const response = await axios.get(
        `https://api.binderbyte.com/wilayah/kecamatan?api_key=${apiKey}&id_kabupaten=${id}`,
        { withCredentials: false }
      );
      setKec(response.data.value);
      // console.log('kec', kec);
    } catch (error) {
      console.log(error);
    }
  };
  const getKel = async (id) => {
    try {
      const response = await axios.get(
        `https://api.binderbyte.com/wilayah/kelurahan?api_key=${apiKey}&id_kecamatan=${id}`,
        { withCredentials: false }
      );
      setKel(response.data.value);
      // console.log('kel', kel);
    } catch (error) {
      console.log(error);
    }
  };

  // AllAboutRegion

  //userInformation

  const arrayAddress = [
    addressSelected.prov,
    addressSelected.kab,
    addressSelected.kec,
    addressSelected.kel,
    addressSelected.rtrw,
  ];
  const [userData, setUserData] = useState({
    username: '',
    email: '',
    gender: '',
    phone: '',
    cardId: '',
    // address: ['1'],
    // catatan untuk address urutannya [Provinsi,Kabupaten,Kecamatan,Kelurahan,RT/RW]
    address: [
      addressSelected.prov,
      addressSelected.kab,
      addressSelected.kec,
      addressSelected.kel,
      addressSelected.rtrw,
    ],
    // address: [
    //   `${addressSelected.prov}`,
    //   `${addressSelected.kab}`,
    //   `${addressSelected.kec}`,
    //   `${addressSelected.kel}`,
    //   `${addressSelected.rtrw}`,
    // ],
    // address: ['prov', 'kab', 'kec', 'kel', 'ini rt/rw'],
    // address: [
    //   provSelect,
    //   addressSelected.kab,
    //   addressSelected.kec,
    //   addressSelected.kel,
    //   addressSelected.rtrw,
    // ],
    // address: arrayAddress,
  });
  const [businessData, setBusinessData] = useState({});
  const navigate = useNavigate();
  const dispatch = useDispatch();
  // mengambil nilai userAuthReducer pada store
  const userAuthSelector = (state) => state.userAuthReducer.userAuth;
  const userAuth = useSelector(userAuthSelector) || 'Loading Data User';

  const updateUser = async (e) => {
    e.preventDefault();
    try {
      const formUpdate = new FormData();

      formUpdate.append('username', userData.username);
      formUpdate.append('email', userData.email);
      formUpdate.append('gender', userData.gender);
      formUpdate.append('phone', userData.phone);
      formUpdate.append('cardId', userData.cardId);
      formUpdate.append('address', JSON.stringify(userData.address));

      await axios.patch(
        `http://localhost:5000/user/${userAuth.uuid}`,
        formUpdate,
        { headers: { 'Content-Type': 'multipart/form-data' } }
      );

      console.log(userData.address);
      console.log('sukses update data user');
    } catch (error) {
      if (error.response) {
        alert(error.response.data.msg);
      } else {
        console.log(error);
      }
    }
  };

  //useefeect
  useEffect(() => {
    const getMeUser = async () => {
      await dispatch(getMe());
    };

    getMeUser();
    getProv();
    console.log(addressSelected);
    console.log(userAuth);
  }, [dispatch, navigate]);

  useEffect(() => {
    console.log(addressSelected);
    // console.log(userAuth);
  }, [addressSelected]);
  //useefeect

  const handleClick = () => {
    updateUser();
  };

  return (
    <Layout>
      <h1 align="center" class="text-3xl font-semibold pt-10">
        Form Pengajuan Usaha
      </h1>
      <hr class="mx-auto mt-2 mb-20 max-w-sm border-2 border-dashed border-rose-400" />
      <form onSubmit={updateUser}>
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
                placeholder={
                  userAuth.username ? userAuth.username : 'Nama Pemilik Usaha'
                }
                onChange={(e) =>
                  setUserData({
                    ...userData,
                    username: e.target.value,
                  })
                }
                required
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
              required
            />
            <label class="ml-2">Pria</label>
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
              required
            />
            <label class="ml-2">Wanita</label>
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
              placeholder={userAuth.phone ? userAuth.phone : 'No. Telepon Anda'}
              onChange={(e) =>
                setUserData({
                  ...userData,
                  gender: e.target.value,
                })
              }
            />
          </div>
          <div class="flex flex-row my-6">
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
          </div>
          <div class="flex flex-row my-6">
            <label class="block text-sm font-medium leading-6 text-gray-900 basis-1/3">
              Alamat
            </label>
            <div class="basis-2/3 flex flex-wrap">
              {/* prov */}
              <select
                class="mr-5 w-60 px-2 mb-6 block rounded-md border-0 py-1.5 pl-7 pr-20 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                onChange={(e) => {
                  getKab(e.target.value);

                  const selectedOption =
                    e.target.options[e.target.selectedIndex];
                  const selectedId = selectedOption.getAttribute('id');
                  const selectedName = selectedOption.getAttribute('name');

                  setProvSelect(selectedId);
                  setAddressSelected({
                    ...addressSelected,
                    // prov: selectedId,
                    prov: selectedName,
                  });
                }}
              >
                <option selected disabled class="text-grey-400">
                  Provinsi
                </option>
                {prov.map((prov) => (
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
                  getKec(e.target.value);

                  const selectedOption =
                    e.target.options[e.target.selectedIndex];
                  // const selectedId = selectedOption.getAttribute('id');
                  const selectedName = selectedOption.getAttribute('name');

                  setAddressSelected({
                    ...addressSelected,
                    // kab: selectedId,
                    kab: selectedName,
                  });
                }}
              >
                <option selected disabled class="text-grey-400">
                  Kabupaten/Kota
                </option>
                {kab.map((kab) => (
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
                  getKel(e.target.value);

                  const selectedOption =
                    e.target.options[e.target.selectedIndex];
                  // const selectedId = selectedOption.getAttribute('id');
                  const selectedName = selectedOption.getAttribute('name');

                  setAddressSelected({
                    ...addressSelected,
                    // kec: selectedId,
                    kec: selectedName,
                  });
                }}
              >
                <option selected disabled class="text-grey-400">
                  Kecamatan
                </option>
                {kec.map((kec) => (
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
                  // getKel(e.target.value);

                  const selectedOption =
                    e.target.options[e.target.selectedIndex];
                  // const selectedId = selectedOption.getAttribute('id');
                  const selectedName = selectedOption.getAttribute('name');

                  setAddressSelected({
                    ...addressSelected,
                    // kel: selectedId,
                    kel: selectedName,
                  });
                }}
              >
                <option selected disabled class="text-grey-400">
                  Kelurahan
                </option>
                {kel.map((kel) => (
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
                  setAddressSelected({
                    ...addressSelected,
                    rtrw: e.target.value,
                  })
                }
                // placeholder={userAuth.address ? userAuth.address[0] : 'RT/RW'}
                placeholder="RT/RW"
              />
              {/* <select class="mr-5 w-60 px-3 mb-6 block rounded-md border-0 py-1.5 pl-7 pr-20 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6">
                {' '}
                Kode Pos
                <option selected disabled>
                  Kode Pos
                </option>
              </select> */}
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
            />
          </div>
          <div class="flex flex-row my-6">
            <label class="block text-sm font-medium leading-6 text-gray-900 basis-1/3">
              Lokasi
            </label>
            <div class="basis-2/3 flex flex-wrap">
              <select
                class="mr-5 w-60 px-2 mb-6 block rounded-md border-0 py-1.5 pl-7 pr-20 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                placeholder="Provinsi"
              >
                {' '}
                Provinsi
                <option selected disabled>
                  Provinsi
                </option>
                <option>Jawa Barat</option>
              </select>
              <select class="mr-5 w-62 px-3 mb-6 block rounded-md border-0 py-1.5 pl-7 pr-20 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6">
                {' '}
                Kabupaten/Kota
                <option selected disabled>
                  Kabupaten/Kota
                </option>
              </select>
              <select
                class="mr-5 w-60 px-3 mb-6 block rounded-md border-0 py-1.5 pl-7 pr-20 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                data-te-select-placeholder="Example placeholder"
              >
                {' '}
                Kecamatan
                <option selected disabled>
                  Kecamatan
                </option>
              </select>
              <select class="mr-5 w-60 px-3 mb-6 block rounded-md border-0 py-1.5 pl-7 pr-20 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6">
                {' '}
                Kelurahan
                <option selected disabled>
                  Kelurahan
                </option>
              </select>
              <input
                type="text"
                class="mr-5 w-60 px-3 mb-6 block rounded-md border-0 py-1.5 pl-7 pr-20 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                placeholder="RT/RW"
              />
              <select class="mr-5 w-60 px-3 mb-6 block rounded-md border-0 py-1.5 pl-7 pr-20 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6">
                {' '}
                Kode Pos
                <option selected disabled>
                  Kode Pos
                </option>
              </select>
            </div>
          </div>
          <div class="flex flex-row my-6">
            <label class="block text-sm font-medium leading-6 text-gray-900 basis-1/3">
              Banner
            </label>
            <input
              type="file"
              name="banner"
              id="banner"
              className="border basis-2/3"
            />
          </div>
          <div class="flex flex-row my-6">
            <label class="block text-sm font-medium leading-6 text-gray-900 basis-1/3">
              Foto
            </label>
            <input
              type="file"
              name="brandPhoto1"
              id="brandPhoto1"
              className="border basis-2/3"
            />
          </div>
          <div class="flex flex-row my-6">
            <label class="block text-sm font-medium leading-6 text-gray-900 basis-1/3">
              Foto
            </label>
            <input
              type="file"
              name="brandPhoto2"
              id="brandPhoto2"
              className="border basis-2/3"
            />
          </div>
          <div class="flex flex-row my-6">
            <label class="basis-1/3">Deskripsi Usaha</label>
            <textarea
              rows="6"
              class="block w-full rounded-md border-0 py-1.5 pl-7 pr-20 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6 basis-2/3"
            ></textarea>
          </div>
        </div>

        {/* sementara */}
        <button
          class="mt-5 ml-80 bg-rose-400 hover:bg-rose-600 text-white font-bold py-2 px-5 rounded shadow-lg"
          // onSubmit={() => handleClick()}
          type="submit"
        >
          Simpan
        </button>
        {/* sementara */}
      </form>
      <div class="columns-2 mt-20">
        <img src="src/assets/images/image.png" class="mb-5" />
        <div class="ml-20 justify-end">
          <input class="ml-4" type="checkbox" required />
          <label class="ml-2">
            Saya bersedia bekerjasama dengan website ini
          </label>
          <br />
          <button
            class="mt-5 ml-80 bg-rose-400 hover:bg-rose-600 text-white font-bold py-2 px-5 rounded shadow-lg"
            onClick={() => handleClick()}
            // type="submit"
          >
            Simpan
          </button>
        </div>
      </div>
    </Layout>
  );
};

export default BusinessRegistration;
