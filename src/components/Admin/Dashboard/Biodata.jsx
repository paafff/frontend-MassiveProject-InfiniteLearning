import React from 'react';
import { useState, useEffect } from 'react';
import ProfilePhoto from '../../../assets/images/profiles/profile_dummy.jpg';
import { IoMdShare } from 'react-icons/io';
import { FaRegCopy, FaSave, FaUserCircle } from 'react-icons/fa';
import { FaRegTrashCan } from 'react-icons/fa6';
import { FiEdit } from 'react-icons/fi';
import { IoReturnDownBackOutline } from 'react-icons/io5';
import { useRef } from 'react';
import HamburgerMenu from './HamburgerMenu'

import axios from 'axios';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { getMe } from '../../../redux/authSlice';

const API_KEY = "7b397cea3811e3799ae20fd43ac78bcbc0dba2f5954d6fef4361e5fff3af76f1";

const dataUser = {
    profilePhoto: 'profile_dummy.jpg',
    fullname: 'Ilham Soejud Alkahfiardy',
    gender: 'Pria',
    address: `Lorem ipsum dolor sit amet consectetur, adipisicing elit. Optio exercitationem officia nesciunt quam et tempore, cum ab inventore laudantium, ipsam fugit animi dignissimos, molestias ea distinctio ad ex eaque iste.`,
    email: 'emailku.hairhub@gmail.com',
    password: '123123',
};

const dataGender = {
    man: 'Pria',
    woman: 'Wanita',
};

const Biodata = ({ showSidebar, setShowSidebar }) => {
    const [editBio, setEditBio] = useState(false);
    // console.log(editBio);

    const navigate = useNavigate();
    const dispatch = useDispatch();
    // mengambil nilai userAuthReducer pada store
    const userAuthSelector = (state) => state.userAuthReducer.userAuth;
    const userAuth = useSelector(userAuthSelector) || '';

    useEffect(() => {
        const getMeUser = async () => {
            await dispatch(getMe());
        };

        getMeUser();
    }, [dispatch, navigate]);

    // console.log(userAuth);

    return (
        <div className="w-full flex flex-col py-10 lg:py-16 px-6 md:px-12 xl:px-24 lg:px-10 ">
            <HamburgerMenu
                showSidebar={showSidebar}
                setShowSidebar={setShowSidebar}
            />

            <p className="text-xl lg:text-2xl font-bold  flex justify-between items-center">
                Hello, {userAuth.username}
                <p className='text-xs py-1 px-2 bg-red-600 text-white rounded drop-shadow-lg'>Administrator</p>
            </p>

            <div className="flex flex-col xl:flex-row-reverse xl:gap-32 xl:justify-between">
                <div className="flex justify-center md:justify-end">
                    <ProfileCard userAuth={userAuth} />
                </div>

                <Form userAuth={userAuth} editBio={editBio} setEditBio={setEditBio} />
            </div>
        </div>
    );
};

const ProfileCard = ({ userAuth }) => {
    // console.log('dalem componen', userAuth);
    const copyURL = () => {
        // Get the current URL
        const currentURL = window.location.href;

        // Create a temporary textarea element to copy the URL
        const tempTextarea = document.createElement('textarea');
        tempTextarea.value = currentURL;
        document.body.appendChild(tempTextarea);

        // Select the text in the textarea
        tempTextarea.select();
        tempTextarea.setSelectionRange(0, 99999); // For mobile devices

        // Execute the copy command
        document.execCommand('copy');

        // Remove the temporary textarea
        document.body.removeChild(tempTextarea);

        // Alert or perform any other action after copying
        alert('URL copied to clipboard!');
    };

    return (
        <div className="w-72 bg-white drop-shadow justify-center items-center py-10 mt-10 rounded-md flex flex-col gap-8 float-right xl:h-fit">
            <img
                src={userAuth.profileURL}
                alt=""
                className="rounded-full w-20 h-20 object-cover"
            />
            <p className="text-sm">{userAuth.username}</p>

            <div className="flex gap-3">
                <div className="w-10 h-10 hover:cursor-pointer bg-zinc-950 flex items-center justify-center rounded-full">
                    <IoMdShare className=" text-white text-base" />
                </div>
                <div className="w-10 h-10 hover:cursor-pointer bg-zinc-950 flex items-center justify-center rounded-full">
                    <FaRegCopy
                        onClick={() => copyURL()}
                        className=" text-white text-base"
                    />
                </div>
                <div className="w-10 h-10 hover:cursor-pointer bg-red-700 flex items-center justify-center rounded-full">
                    <FaRegTrashCan className=" text-white text-base" />
                </div>
            </div>
        </div>
    );
};

const Form = ({ editBio, setEditBio, userAuth }) => {
    const inputRef = useRef(null);

    // Set picture change
    const handlePictureClick = () => {
        inputRef.current.click();
    };

    useEffect(() => {
        if (editBio == false) {
            setPicture('');
        }
    }, [editBio]);

    const [formData, setFormData] = useState({
        fullname: '',
        gender: '',
        address: '',
        email: '',
        password: '',
    });

    const [picture, setPicture] = useState('');
    const [photoProfile, setphotoProfile] = useState('');

    // Input data to state
    const handleChange = (e) => {
        const name = e.name;
        // const id = e.name;
        const value = e.value;
        setUserDataUpdate((prev) => {
            return { ...prev, [name]: value };
        });
    };

    const handlePictureChange = (event) => {
        const file = event.target.files[0];
        console.log(file);
        // setPicture(file);
        setUserDataUpdate({ ...userDataUpdate, photoProfile: file });
    };

    const [userDataUpdate, setUserDataUpdate] = useState({
        prov: '',
        kab: '',
        kec: '',
        kel: '',
        rtrw: '',

        username: '',
        email: '',
        gender: '',
        photoProfile: null,

        password: '',
        confPassword: '',
    });

    const arrayAddressUser = [
        userDataUpdate.prov,
        userDataUpdate.kab,
        userDataUpdate.kec,
        userDataUpdate.kel,
        userDataUpdate.rtrw,
    ];

    //controler rest api
    const updateUser = async (e) => {
        e.preventDefault();
        try {
            const formUpdate = new FormData();

            formUpdate.append('username', userDataUpdate.username);
            formUpdate.append('email', userDataUpdate.email);
            formUpdate.append('gender', userDataUpdate.gender);
            formUpdate.append('photoProfile', userDataUpdate.photoProfile);
            //   formUpdate.append('cardId', userDataUpdate.cardId);
            formUpdate.append('address', JSON.stringify(arrayAddressUser));
            // formUpdate.append('address', JSON.stringify(arrayAddressUser));

            await axios.patch(
                `http://localhost:5000/user/${userAuth.uuid}`,
                formUpdate,
                { headers: { 'Content-Type': 'multipart/form-data' } }
            );

            console.log('data user', formUpdate);
            console.log(arrayAddressUser);
            console.log('sukses update data user');
            useNavigate('/user/dashboard')
        } catch (error) {
            if (error.response) {
                alert(error.response.data.msg);
            } else {
                console.log(error);
            }
        }
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(formData);
    };

    // Fetch data for select
    const handleProvinsi = (e) => {

        console.log("prov data id ", e.target.value[0]);
        console.log("prov data name", e.target.value[1]);

        fetchKota(e.target.value[0])

        setUserDataUpdate((prevUserData) => ({
            ...prevUserData,
            prov: e.target.value[1],
        }));
    }

    const handleKota = (e) => {
        console.log("kota data id ", e.target.value[0]);
        console.log("kota data name ", e.target.value[1]);
        fetchKecamatan(e.target.value[0])
        setUserDataUpdate((prevUserData) => ({
            ...prevUserData,
            kab: e.target.value[1],
        }));
    }

    const handleKec = (e) => {
        console.log("kec data id ", e.target.value[0]);
        console.log("kec data name ", e.target.value[1]);
        fetchKelurahan(e.target.value[0])
        setUserDataUpdate((prevUserData) => ({
            ...prevUserData,
            kec: e.target.value[1],
        }));
    }

    const handleKel = (e) => {
        console.log("kec data id ", e.target.value[0]);
        console.log("kec data name ", e.target.value[1]);
        setUserDataUpdate((prevUserData) => ({
            ...prevUserData,
            kel: e.target.value[1],
        }));
    }

    const [allProvinsi, setAllProvinsi] = useState([]);
    const [allKota, setAllKota] = useState([]);
    const [allKecamatan, setAllKecamatan] = useState([]);
    const [allKelurahan, setAllKelurahan] = useState([]);

    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await axios.get(
                    `https://api.binderbyte.com/wilayah/provinsi?api_key=${API_KEY}`,
                    { withCredentials: false }
                );
                setAllProvinsi(response.data.value);
                console.log("Fetch prov: ", allProvinsi);
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
                `https://api.binderbyte.com/wilayah/kabupaten?api_key=${API_KEY}&id_provinsi=${id}`,
                { withCredentials: false }
            );
            setAllKota(response.data.value);
            console.log("fetch kota: ", allKota);
        } catch (error) {
            console.error('Error fetching kota:', error);
        } finally {
            setIsLoading(false);
        }
    };

    const fetchKecamatan = async (id) => {
        try {
            const response = await axios.get(
                `https://api.binderbyte.com/wilayah/kecamatan?api_key=${API_KEY}&id_kabupaten=${id}`,
                { withCredentials: false }
            );
            setAllKecamatan(response.data.value);
            console.log("fetch camat: ", allKecamatan);
        } catch (error) {
            console.error('Error fetching kec:', error);
        } finally {
            setIsLoading(false);
        }
    };

    const fetchKelurahan = async (id) => {
        try {
            const response = await axios.get(
                `https://api.binderbyte.com/wilayah/kelurahan?api_key=${API_KEY}&id_kecamatan=${id}`,
                { withCredentials: false }
            );
            setAllKelurahan(response.data.value);
            console.log("fetch lurah: ", allKelurahan);
        } catch (error) {
            console.error('Error fetching kel:', error);
        } finally {
            setIsLoading(false);
        }
    };

    return (
        <form
            className="mt-14 w-full flex flex-col gap-6 xl:w-1/2 xl:justify-start"
            onSubmit={updateUser}
        >
            {editBio && (
                <div className="flex flex-col gap-3 items-start md:flex-row md:justify-between md:items-center mb-5">
                    <p className="text-sm lg:text-base">Foto Profil</p>
                    <div className="flex gap-10 items-center justify-start">
                        {userDataUpdate.photoProfile ? (
                            <img
                                src={URL.createObjectURL(userDataUpdate.photoProfile)}
                                className="inline-block w-20 h-20 rounded-full object-cover"
                                alt=""
                            />
                        ) : (
                            <FaUserCircle className="inline-block w-20 h-20 text-white" />
                        )}

                        <p
                            className="text-sm py-1 px-3 bg-white text-gray-400 rounded shadow hover:bg-gray-100 hover:cursor-pointer transition-all"
                            onClick={handlePictureClick}
                        >
                            Change
                        </p>
                    </div>

                    <input
                        type="file"
                        name="profile-picture"
                        id="profile-picture"
                        className="hidden"
                        ref={inputRef}
                        onChange={handlePictureChange}
                    />
                </div>
            )}

            <div className="flex flex-col items-start md:flex-row md:justify-between md:items-center gap-3">
                <label className="text-sm lg:text-base">Nama Lengkap</label>
                <input
                    name="username "
                    type="text"
                    className="w-full md:w-1/2 lg:w-3/4 text-sm focus:ring focus:border-gray-400 focus:ring-gray-400 py-3 px-4 bg-white rounded-md placeholder:text-gray-400 placeholder:text-xs disabled:bg-gray-300"
                    placeholder="nama lengkap"
                    onChange={(e) => setUserDataUpdate((prevUserData) => ({
                        ...prevUserData,
                        username: e.target.value,
                    }))}
                    defaultValue={userAuth.username}
                    disabled={!editBio}
                />
            </div>

            <div
                className={`flex flex-col gap-3 ${!editBio
                    ? 'items-start md:flex-row md:justify-between md:items-center'
                    : 'gap-24 md:gap-60 lg:gap-24 xl:gap-24 md:flex-row md: md:items-center'
                    }`}
            >
                <p className="text-sm lg:text-base">Jenis Kelamin</p>

                {!editBio ? (
                    <input
                        type="text"
                        className="w-1/4 md:w-1/2 lg:w-3/4 text-sm focus:ring focus:border-gray-400 focus:ring-gray-400 py-3 px-4 bg-white rounded-md placeholder:text-gray-400 placeholder:text-xs disabled:bg-gray-300"
                        placeholder="jenis kelamin"

                        // aneh anjg
                        value={userAuth.gender == "woman" ? "wanita" : "pria"}
                        disabled={!editBio}
                    />
                ) : (
                    <div className="flex gap-2 ml-5">
                        <input
                            type="radio"
                            name="gender"
                            id="gender-man"
                            value="man"
                            onChange={(e) => handleChange(e.target)}
                            defaultChecked={userAuth.gender == "man" ? true : false}
                        />
                        <label htmlFor="gender-man" className="text-sm me-10">
                            Pria
                        </label>

                        <input
                            type="radio"
                            name="gender"
                            id="gender-woman"
                            value="woman"
                            onChange={(e) => handleChange(e.target)}
                            defaultChecked={userAuth.gender == "woman" ? true : false}
                        />
                        <label htmlFor="gender-woman" className="text-sm">
                            Wanita
                        </label>
                    </div>
                )}
            </div>

            <div className="flex flex-col gap-3 items-start md:flex-row md:justify-between md:items-start">
                <label className="text-sm w-fit lg:text-base">Alamat</label>

                {editBio ? (
                    <div className='flex gap-10 w-3/4 md:w-1/2 lg:w-3/4 flex-wrap'>

                        {/* Select provinsi */}
                        <select
                            className='h-10 rounded w-3/4 xl:w-full px-3 text-xs'
                            name="provinsi"
                            id="provinsi"
                            onChange={(e) => {
                                fetchKota(e.target.value)
                                const selectedOption =
                                    e.target.options[e.target.selectedIndex];
                                const selectedName = selectedOption.getAttribute('name');

                                setUserDataUpdate((prevUserData) => ({
                                    ...prevUserData,
                                    prov: selectedName,
                                }));
                                console.log(selectedName);
                            }}>

                            <option value="" selected className='text-grey-400'>Provinsi</option>
                            {allProvinsi.map(provinsi => (
                                <option name={provinsi.name} value={provinsi.id}>{provinsi.name}</option>
                            ))}
                        </select>
                        {/* <Box sx={{ minWidth: 120, backgroundColor: 'white' }}>
              <FormControl fullWidth>
                <InputLabel id="demo-simple-select-label">Provinsi</InputLabel>
                <Select
                  labelId="demo-simple-select-label"
                  id="demo-simple-select"
                  label="Age"
                  onChange={(e) => {
                    fetchKota(e.target.value)

                    const selectedOption = e.target.opt
                      e.target.options[e.target.selectedIndex];
                    const selectedName = selectedOption.getAttribute('name');

                    setUserDataUpdate((prevUserData) => ({
                      ...prevUserData,
                      kab: selectedName,
                    }));

                  }}

                >
                  {allProvinsi.map(provinsi => (

                    <option value={provinsi.id}>{provinsi.name}</option>

                  ))}

                </Select>
              </FormControl>
            </Box> */}

                        {/* Select kota */}
                        <select
                            className='h-10 rounded w-3/4 xl:w-full px-3 text-xs'
                            name="kota"
                            id="kota"
                            onChange={(e) => {
                                fetchKecamatan(e.target.value)
                                const selectedOption = e.target.options[e.target.selectedIndex];
                                const selectedName = selectedOption.getAttribute('name');

                                setUserDataUpdate((prevUserData) => ({
                                    ...prevUserData,
                                    kab: selectedName,
                                }));
                            }}>

                            <option value="" selected className='text-grey-400'>Kota</option>
                            {allKota.map(kota => (
                                <option name={kota.name} value={kota.id}>{kota.name}</option>
                            ))}
                        </select>

                        {/* <Box sx={{ minWidth: 120, backgroundColor: 'white' }}>
              <FormControl fullWidth>
                <InputLabel id="demo-simple-select-label">Kota</InputLabel>
                <Select
                  labelId="demo-simple-select-label"
                  id="demo-simple-select"
                  label="Age"
                  onChange={(e) => handleKota(e)}
                >
                  {allKota.map(kota => (
                    <MenuItem value={[kota.id, kota.name]}>{kota.name}</MenuItem>
                  ))}

                </Select>
              </FormControl>
            </Box> */}

                        {/* Select kecamatan */}
                        <select
                            className='h-10 rounded w-3/4 xl:w-full px-3 text-xs'
                            name="kecamatan"
                            id="kecamatan"
                            onChange={(e) => {
                                fetchKelurahan(e.target.value)
                                const selectedOption = e.target.options[e.target.selectedIndex];
                                const selectedName = selectedOption.getAttribute('name');

                                setUserDataUpdate((prevUserData) => ({
                                    ...prevUserData,
                                    kec: selectedName,
                                }));
                            }}>

                            <option value="" selected className='text-grey-400'>Kecamatan</option>
                            {allKecamatan.map(kecamatan => (
                                <option name={kecamatan.name} value={kecamatan.id}>{kecamatan.name}</option>
                            ))}
                        </select>

                        {/* <Box sx={{ minWidth: 120, backgroundColor: 'white' }}>
              <FormControl fullWidth>
                <InputLabel id="demo-simple-select-label">Kecamatan</InputLabel>
                <Select
                  labelId="demo-simple-select-label"
                  id="demo-simple-select"
                  label="Age"
                  onChange={(e) => handleKec(e)}
                >
                  {allKecamatan.map(kecamatan => (
                    <MenuItem value={[kecamatan.id, kecamatan.name]}>{kecamatan.name}</MenuItem>
                  ))}
                </Select>
              </FormControl>
            </Box> */}

                        {/* Select kelurahan */}
                        <select
                            className='h-10 rounded w-3/4 xl:w-full px-3 text-xs'
                            name="kelurahan"
                            id="kelurahan"
                            onChange={(e) => {

                                const selectedOption = e.target.options[e.target.selectedIndex];
                                const selectedName = selectedOption.getAttribute('name');

                                setUserDataUpdate((prevUserData) => ({
                                    ...prevUserData,
                                    kel: selectedName,
                                }));
                            }}>

                            <option value="" selected className='text-grey-400'>Kelurahan</option>
                            {allKelurahan.map(kelurahan => (
                                <option name={kelurahan.name} value={kelurahan.id}>{kelurahan.name}</option>
                            ))}
                        </select>
                        {/* <Box sx={{ minWidth: 120, backgroundColor: 'white' }}>
              <FormControl fullWidth>
                <InputLabel id="demo-simple-select-label">Kelurahan</InputLabel>
                <Select
                  labelId="demo-simple-select-label"
                  id="demo-simple-select"
                  label="Age"
                  onChange={(e) => handleKel(e)}
                >
                  {allKelurahan.map(kelurahan => (
                    <MenuItem value={[kelurahan.id, kelurahan.name]}>{kelurahan.name}</MenuItem>
                  ))}

                </Select>
              </FormControl>
            </Box> */}
                    </div>
                ) : (

                    <input
                        type="text"
                        className="w-full md:w-1/2 lg:w-3/4 text-sm focus:ring focus:border-gray-400 focus:ring-gray-400 py-3 px-4 bg-white rounded-md placeholder:text-gray-400 placeholder:text-xs disabled:bg-gray-300"
                        placeholder="alamat"
                        value={userAuth.address}
                        disabled={!editBio}
                        name="address"
                    />
                )}


            </div>

            <div className="flex flex-col gap-3 items-start md:flex-row md:justify-between md:items-center">
                <label className="text-sm lg:text-base">Email</label>
                <input
                    type="email"
                    className="w-full md:w-1/2 lg:w-3/4 text-sm focus:ring focus:border-gray-400 focus:ring-gray-400 py-3 px-4 bg-white rounded-md placeholder:text-gray-400 placeholder:text-xs disabled:bg-gray-300"
                    placeholder="email"
                    disabled={!editBio}
                    defaultValue={userAuth.email}
                    onChange={(e) => handleChange(e.target)}
                    name="email"
                />
            </div>

            <div className="flex flex-col gap-3 items-start md:flex-row md:justify-between md:items-center">
                <label className="text-sm lg:text-base">Password</label>
                <input
                    type="password"
                    className="w-full md:w-1/2 lg:w-3/4 text-sm focus:ring focus:border-gray-400 focus:ring-gray-400 py-3 px-4 bg-white rounded-md placeholder:text-gray-400 placeholder:text-xs disabled:bg-gray-300"
                    disabled={!editBio}
                    defaultValue={dataUser.password}
                    onChange={(e) => handleChange(e.target)}
                    name="password"
                />
            </div>

            {/* <div className="flex flex-col gap-3 items-start md:flex-row md:justify-between md:items-center">
        <label className="text-sm lg:text-base">Confirm Password</label>
        <input
          type="password"
          className="w-full md:w-1/2 lg:w-3/4 text-sm focus:ring focus:border-gray-400 focus:ring-gray-400 py-3 px-4 bg-white rounded-md placeholder:text-gray-400 placeholder:text-xs disabled:bg-gray-300"
          disabled={!editBio}
          defaultValue={dataUser.password}
          onChange={(e) => handleChange(e.target)}
          name="confpassword"
        />
      </div> */}

            <div className="mt-8 flex gap-5 justify-end">
                {editBio ? (
                    <>
                        <div
                            className="hover:bg-zinc-800 hover:cursor-pointer transition-all py-2 px-5 bg-zinc-950 rounded "
                            onClick={() => setEditBio(!editBio)}
                        >
                            <p className="text-sm text-white flex gap-2 items-center">
                                <IoReturnDownBackOutline className="inline-block" />
                                Back
                            </p>
                        </div>
                        <button
                            type="submit"
                            className="py-2 px-5 bg-green-600 hover:bg-green-700 hover:cursor-pointer transition-all rounded"
                        >
                            <p className="text-sm text-white flex gap-2 items-center">
                                <FaSave className="inline-block" />
                                Simpan Perubahan
                            </p>
                        </button>
                    </>
                ) : (
                    <div
                        className="hover:bg-zinc-800 hover:cursor-pointer transition-all py-2 px-5 bg-zinc-950 rounded "
                        onClick={() => setEditBio(!editBio)}
                    >
                        <p className="text-sm text-white flex gap-2 items-center">
                            <FiEdit className="inline-block" />
                            Ubah Akun
                        </p>
                    </div>
                )}
            </div>
        </form>
    );
};

const Button = ({ editBio, setEditBio }) => {
    return (
        <div className="mt-8 flex gap-5 justify-end">
            <div
                className=" py-2 px-5 bg-zinc-950 rounded "
                onClick={() => setEditBio(!editBio)}
            >
                <p className="text-sm text-white flex gap-2 items-center">
                    <FiEdit className="inline-block" />
                    Ubah Akun
                </p>
            </div>
            <div className=" py-2 px-5 bg-green-600 rounded">
                <p className="text-sm text-white flex gap-2 items-center">
                    <FaSave className="inline-block" />
                    Simpan Perubahan
                </p>
            </div>
        </div>
    );
};

export default Biodata;
