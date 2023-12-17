import React, { useRef, useState, useEffect } from 'react';
import { IoIosSave } from 'react-icons/io';
import { FaFacebookSquare, FaYoutube, FaSave } from 'react-icons/fa';
import InstagramLogo from '../../../assets/images/logo/instagram.png';
import { FaXTwitter } from 'react-icons/fa6';
import { FiEdit } from 'react-icons/fi';
import { IoReturnDownBackOutline } from 'react-icons/io5';
import Swal from 'sweetalert2';

import axios from 'axios';

const DetailBussiness = ({ businessByUUID, sosmed }) => {
  const [editForm, setEditForm] = useState(true);

  const [instagramLink, setInstagramLink] = useState(null);
  const [facebookLink, setFacebookLink] = useState(null);
  const [twitterLink, setTwitterLink] = useState(null);
  const [youtubeLink, setYoutubeLink] = useState(null);

  const changeBannerRef = useRef(null);
  const picture1Ref = useRef(null);
  const picture2Ref = useRef(null);
  const picture3Ref = useRef(null);
  const picture4Ref = useRef(null);

  const [pictureBanner, setPictureBanner] = useState(null);
  const [picture1, setPicture1] = useState(null);
  const [picture2, setPicture2] = useState(null);
  const [picture3, setPicture3] = useState(null);
  const [picture4, setPicture4] = useState(null);

  return (
    <div className="w-screen lg:w-full py-10 px-5 md:px-12 xl:px-24 xl:w-3/4">
      <div className="bg-white w-full rounded-lg p-4 lg:p-8 drop-shadow-md">
        <p className="text-base md:text-lg font-semibold">Detail Usaha</p>
        <hr className="my-5" />

        <p className='text-sm mb-2'>Foto</p>
        <p className='text-xs text-gray-400 mb-2'>Unggah foto dengan format JPG 1:1 </p>
        <div className="xl:flex xl:flex-row flex flex-col gap-4 mb-6">
          <Banner
            editForm={editForm}
            setEditForm={setEditForm}
            // banner={banner}
            businessByUUID={businessByUUID}
            // handleImage
            changeBannerRef={changeBannerRef}
            picture1Ref={picture1Ref}
            picture2Ref={picture2Ref}
            picture3Ref={picture3Ref}
            picture4Ref={picture4Ref}
            pictureBanner={pictureBanner}
            setPictureBanner={setPictureBanner}
            picture1={picture1}
            picture2={picture2}
            picture3={picture3}
            picture4={picture4}
            setPicture1={setPicture1}
            setPicture2={setPicture2}
            setPicture3={setPicture3}
            setPicture4={setPicture4}
          />

          <Socmed
            editForm={editForm}
            setEditForm={setEditForm}
            setFacebookLink={setFacebookLink}
            setInstagramLink={setInstagramLink}
            setTwitterLink={setTwitterLink}
            setYoutubeLink={setYoutubeLink}
            // data default
            businessByUUID={businessByUUID}
            IGdefault={instagramLink}
            FBdefault={facebookLink}
            TWdefault={twitterLink}
            YTdefault={youtubeLink}
          />
        </div>

        <Form
          businessByUUID={businessByUUID}
          editForm={editForm}
          setEditForm={setEditForm}
          // handleImage
          changeBannerRef={changeBannerRef}
          picture1Ref={picture1Ref}
          picture2Ref={picture2Ref}
          picture3Ref={picture3Ref}
          picture4Ref={picture4Ref}
          pictureBanner={pictureBanner}
          setPictureBanner={setPictureBanner}
          picture1={picture1}
          picture2={picture2}
          picture3={picture3}
          picture4={picture4}
          setPicture1={setPicture1}
          setPicture2={setPicture2}
          setPicture3={setPicture3}
          setPicture4={setPicture4}
          // passing sosmed to form
          inputIG={instagramLink}
          inputFB={facebookLink}
          inputTW={twitterLink}
          inputYT={youtubeLink}
          stateIG={
            businessByUUID.socialMedia
              ? businessByUUID.socialMedia[0]
              : 'coba ig'
          }
          stateFB={
            businessByUUID.socialMedia
              ? businessByUUID.socialMedia[1]
              : 'coba ig'
          }
          stateTW={
            businessByUUID.socialMedia
              ? businessByUUID.socialMedia[2]
              : 'coba ig'
          }
          stateYT={
            businessByUUID.socialMedia
              ? businessByUUID.socialMedia[3]
              : 'coba ig'
          }
        />
      </div>
    </div>
  );
};

const Banner = ({
  editForm,
  setEditForm,
  banner,
  businessByUUID,

  changeBannerRef,
  picture1Ref,
  picture2Ref,
  picture3Ref,
  picture4Ref,

  pictureBanner,
  setPictureBanner,

  picture1,
  picture2,
  picture3,
  picture4,

  setPicture1,
  setPicture2,
  setPicture3,
  setPicture4,
}) => {
  // Foto default
  const photoDefault = businessByUUID ? businessByUUID.imageURL[0] : '';
  const bannerDefault = businessByUUID ? businessByUUID.imageURL[0] : '';
  const photoDefault1 = businessByUUID ? businessByUUID.imageURL[1] : '';
  const photoDefault2 = businessByUUID ? businessByUUID.imageURL[2] : '';
  const photoDefault3 = businessByUUID ? businessByUUID.imageURL[3] : '';
  const photoDefault4 = businessByUUID ? businessByUUID.imageURL[4] : '';

  // Banner
  const handleBannerClick = () => {
    changeBannerRef.current.click();
  };
  const handleBannerChange = (event) => {
    const file = event.target.files[0];
    setPictureBanner(file);
  };

  // Picture 1
  const handlePicture1Click = () => {
    picture1Ref.current.click();
  };
  const handlePicture1Change = (event) => {
    const file = event.target.files[0];
    setPicture1(file);
  };

  // Picture 2
  const handlePicture2Click = () => {
    picture2Ref.current.click();
  };
  const handlePicture2Change = (event) => {
    const file = event.target.files[0];
    setPicture2(file);
  };

  // Picture 3
  const handlePicture3Click = () => {
    picture3Ref.current.click();
  };
  const handlePicture3Change = (event) => {
    const file = event.target.files[0];
    setPicture3(file);
  };

  // Picture 4
  const handlePicture4Click = () => {
    picture4Ref.current.click();
  };
  const handlePicture4Change = (event) => {
    const file = event.target.files[0];
    setPicture4(file);
  };

  useEffect(() => {
    if (editForm == true) {
      setPicture1('');
      setPicture1('');
    }
  }, [editForm]);

  return (
    <div className="w-full xl:my-auto xl:w-1/2 border border-gray-300 rounded p-2 flex flex-col gap-3 mb-5">
      
      {banner ? (
        <img
          src={URL.createObjectURL(banner)}
          className="w-full md:w-3/4 mx-auto md:max-h-72 aspect-video rounded flex items-center justify-center object-contain"
        />
      ) : editForm ? (
        <img
          src={photoDefault}
          className="w-full md:w-3/4 mx-auto md:max-h-72 aspect-video rounded flex items-center justify-center object-contain"
        />
      ) : (
        <img
          src={
            pictureBanner ? URL.createObjectURL(pictureBanner) : photoDefault
          }
          onClick={handleBannerClick}
          className="w-full md:w-3/4 mx-auto md:max-h-72 aspect-video rounded flex items-center justify-center object-contain"
        />
      )}

      <input
        type="file"
        name="banner"
        id="banner"
        className="hidden"
        // ref={changeBannerRef}
        onChange={handleBannerChange}
      />

      {/* </div> */}
      <div className="flex justify-center gap-3">
        <div
          className="w-20 bg-gray-100 hover:bg-gray-200 hover:cursor-pointer transition-all aspect-square rounded flex items-center justify-center "
          onClick={handlePicture1Click}
        >
          {picture1 ? (
            <img
              src={URL.createObjectURL(picture1)}
              className="w-full "
              alt=""
              srcset=""
            />
          ) : (
            <img
              src={photoDefault1}
              className="w-full md:w-3/4 mx-auto md:max-h-72 aspect-video rounded flex items-center justify-center object-contain"
            />
          )}
          <input
            type="file"
            id="picture1"
            name="picture1"
            className="hidden"
            // ref={picture1Ref}
            onChange={handlePicture1Change}
          />
        </div>
        <div
          className="w-20 bg-gray-100 hover:bg-gray-200 hover:cursor-pointer transition-all aspect-square rounded flex items-center justify-center "
          onClick={handlePicture2Click}
        >
          {picture2 ? (
            <img
              src={URL.createObjectURL(picture2)}
              className="w-full "
              alt=""
              srcset=""
            />
          ) : (
            <img
              src={photoDefault2}
              className="w-full md:w-3/4 mx-auto md:max-h-72 aspect-video rounded flex items-center justify-center object-contain"
            />
          )}
          <input
            type="file"
            id="picture2"
            name="picture2"
            className="hidden"
            // ref={picture2Ref}
            onChange={handlePicture2Change}
          />
        </div>
        <div
          className="w-20 bg-gray-100 hover:bg-gray-200 hover:cursor-pointer transition-all aspect-square rounded flex items-center justify-center "
          onClick={handlePicture3Click}
        >
          {picture3 ? (
            <img
              src={URL.createObjectURL(picture3)}
              className="w-full "
              alt=""
              srcset=""
            />
          ) : (
            <img
              src={photoDefault3}
              className="w-full md:w-3/4 mx-auto md:max-h-72 aspect-video rounded flex items-center justify-center object-contain"
            />
          )}
          <input
            type="file"
            id="picture1"
            name="picture1"
            className="hidden"
            ref={picture3Ref}
            onChange={handlePicture3Change}
          />
        </div>
        <div
          className="w-20 bg-gray-100 hover:bg-gray-200 hover:cursor-pointer transition-all aspect-square rounded flex items-center justify-center "
          onClick={handlePicture4Click}
        >
          {picture4 ? (
            <img
              src={URL.createObjectURL(picture4)}
              className="w-full "
              alt=""
              srcset=""
            />
          ) : (
            <img
              src={photoDefault4}
              className="w-full md:w-3/4 mx-auto md:max-h-72 aspect-video rounded flex items-center justify-center object-contain"
            />
          )}
          <input
            type="file"
            id="picture1"
            name="picture1"
            className="hidden"
            ref={picture4Ref}
            onChange={handlePicture4Change}
          />
        </div>
      </div>
    </div>
  );
};

const Socmed = ({
  editForm,
  setEditForm,
  setInstagramLink,
  setFacebookLink,
  setTwitterLink,
  setYoutubeLink,
  businessByUUID,
  IGdefault,
  FBdefault,
  TWdefault,
  YTdefault,
}) => {
  return (
    <div className="flex flex-col md:items-start md:px-3 xl:w-1/2 xl:justify-center xl:items-center xl:ml-3 gap-3">
      <form className="flex items-center gap-3 md:w-3/4 xl:w-full">
        <div className="w-7">
          <img src={InstagramLogo} className="w-full" alt="" />
        </div>
        <input
          onChange={(e) => setInstagramLink(e.target.value)}
          type="text"
          name="instagram"
          className="w-full h-10 border border-gray-300 rounded p-2 text-sm placeholder:text-xs disabled:bg-gray-200"
          disabled={editForm}
          placeholder="Link instagram"
          defaultValue={businessByUUID?.socialMedia?.[0] == 'undefined' ? 'Link instagram' : businessByUUID?.socialMedia?.[0]}
        // placeholder={
        //   businessByUUID.socialMedia
        //     ? businessByUUID.socialMedia[0]
        //     : 'coba ig'
        // }
        />
      </form>
      <form className="flex items-center gap-3 md:w-3/4 xl:w-full">
        <div className="w-7">
          <FaFacebookSquare className="inline-block w-full h-full text-blue-600" />
        </div>
        <input
          onChange={(e) => setFacebookLink(e.target.value)}
          type="text"
          className="w-full h-10 border border-gray-300 rounded p-2 text-sm placeholder:text-xs disabled:bg-gray-200"
          disabled={editForm}
          placeholder="Link Facebook"
          defaultValue={businessByUUID?.socialMedia?.[1] == 'undefined' ? 'Link facebook' : businessByUUID?.socialMedia?.[1]}
        // placeholder={
        //   businessByUUID.socialMedia
        //     ? businessByUUID.socialMedia[1]
        //     : 'coba ig'
        // }
        />
      </form>
      <form className="flex items-center gap-3 md:w-3/4 xl:w-full">
        <div className="w-7">
          <FaXTwitter className="inline-block w-full h-full text-gray-900" />
        </div>
        <input
          onChange={(e) => setTwitterLink(e.target.value)}
          type="text"
          className="w-full h-10 border border-gray-300 rounded p-2 text-sm placeholder:text-xs disabled:bg-gray-200"
          disabled={editForm}
          placeholder="Link twitter"
          defaultValue={businessByUUID?.socialMedia?.[2] == 'undefined' ? 'Link twitter' : businessByUUID?.socialMedia?.[2]}
        // placeholder={
        //   businessByUUID.socialMedia
        //     ? businessByUUID.socialMedia[2]
        //     : 'coba ig'
        // }
        />
      </form>
      <form className="flex items-center gap-3 md:w-3/4 xl:w-full">
        <div className="w-7">
          <FaYoutube className="inline-block w-full h-full text-red-600" />
        </div>
        <input
          onChange={(e) => setYoutubeLink(e.target.value)}
          type="text"
          className="w-full h-10 border border-gray-300 rounded p-2 text-sm placeholder:text-xs disabled:bg-gray-200"
          disabled={editForm}
          placeholder="Link youtube"
          defaultValue={businessByUUID?.socialMedia?.[3] == 'undefined' ? 'Link youtube' : businessByUUID?.socialMedia?.[3]}
        // placeholder={
        //   businessByUUID.socialMedia
        //     ? businessByUUID.socialMedia[3]
        //     : 'coba ig'
        // }
        />
      </form>
    </div>
  );
};

const Form = ({
  editForm,
  setEditForm,

  businessByUUID,
  inputIG,
  inputFB,
  inputTW,
  inputYT,

  changeBannerRef,
  picture1Ref,
  picture2Ref,
  picture3Ref,
  picture4Ref,

  setPictureBanner,

  setPicture1,
  setPicture2,
  setPicture3,
  setPicture4,
}) => {
  
  const handleChange = (e) => {
    const name = e.name;
    const value = e.value;
    setBusinessData((prev) => {
      return { ...prev, [name]: value };
    });
  };

  const handleImageChange = (e, index) => {
    switch (index) {
      case 'banner': {
        const file = e.files[0];
        setPictureBanner(file);
        break;
      }

      case 'picture1': {
        const file = e.files[0];
        setPicture1(file);
        break;
      }

      case 'picture2': {
        const file = e.files[0];
        setPicture2(file);
        break;
      }

      case 'picture3': {
        const file = e.files[0];
        setPicture3(file);
        break;
      }

      case 'picture4': {
        const file = e.files[0];
        setPicture4(file);
        break;
      }

      default:
        break;
    }

    const name = e.name;
    const file = e.files;
    // const id = e.id;

    setBusinessData((prev) => {
      return { ...prev, [name]: file[0] };
    });
  };

  const [businessData, setBusinessData] = useState({
    img1: null,
    img2: null,
    img3: null,
    img4: null,
    img5: null,
    description: '',
    instagram: null,
    facebook: null,
    twitter: null,
    youtube: null,
    maps: '',
    open: '',
    close: '',
  });

  // set sosmed from input to final state (bingung? sama gw juga)
  useEffect(() => {
    setBusinessData((prev) => ({
      ...prev,
      instagram: inputIG,
    }));

    setBusinessData((prev) => ({
      ...prev,
      facebook: inputFB,
    }));

    setBusinessData((prev) => ({
      ...prev,
      twitter: inputTW,
    }));

    setBusinessData((prev) => ({
      ...prev,
      youtube: inputYT,
    }));
  }, [inputIG, inputFB, inputTW, inputYT]);

  // const arraySocialMedia = [
  //   businessData.instagram || businessByUUID?.socialMedia[0],
  //   businessData.facebook || businessByUUID?.socialMedia[1],
  //   businessData.twitter || businessByUUID?.socialMedia[2],
  //   businessData.youtube || businessByUUID?.socialMedia[3],
  //   businessData.maps || 'ini meps',
  // ];

  // const sosmed1 = businessByUUID.socialMedia[0]|| 'lala';

  const arraySocialMedia = [
    businessData.instagram
      ? businessData.instagram
      : businessByUUID?.socialMedia?.[0],
    businessData.facebook
      ? businessData.facebook
      : businessByUUID?.socialMedia?.[1],
    businessData.twitter
      ? businessData.twitter
      : businessByUUID?.socialMedia?.[2],
    businessData.youtube
      ? businessData.youtube
      : businessByUUID?.socialMedia?.[3],
    businessData.maps
      ? businessData.maps
      : businessByUUID?.socialMedia?.[4],
  ];

  const arraySchedule = [
    businessData?.open ? businessData?.open : businessByUUID?.schedule?.[0],
    businessData?.close ? businessData?.close : businessByUUID?.schedule?.[1],
  ];

  const updateBusiness = async (e) => {
    e.preventDefault();
    try {
      const formUpdateBusiness = new FormData();

      formUpdateBusiness.append('img1', businessData.img1);
      formUpdateBusiness.append('img2', businessData.img2);
      formUpdateBusiness.append('img3', businessData.img3);
      formUpdateBusiness.append('img4', businessData.img4);
      formUpdateBusiness.append('img5', businessData.img5);
      formUpdateBusiness.append('description',
        businessData.description ? businessData.description : businessByUUID?.description);
      formUpdateBusiness.append('schedule', JSON.stringify(arraySchedule));
      formUpdateBusiness.append(
        'socialMedia',
        JSON.stringify(arraySocialMedia)
      );

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

  const times = [
    '01:00',
    '02:00',
    '03:00',
    '04:00',
    '05:00',
    '06:00',
    '07:00',
    '08:00',
    '09:00',
    '10:00',
    '11:00',
    '12:00',
    '13:00',
    '14:00',
    '15:00',
    '16:00',
    '17:00',
    '18:00',
    '19:00',
    '20:00',
    '21:00',
    '22:00',
    '23:00',
    '24:00',
  ];

  return (
    <div className="flex flex-col gap-3">
      <form onSubmit={updateBusiness} action="" className="flex flex-col gap-2">
        <div className="w-full md:w-3/4 xl:w-1/2 flex flex-col gap-2">
          <label htmlFor="" className="text-sm">
            Deskripsi
          </label>
          <div className="flex flex-col gap-2">
            <p className="text-xs text-gray-400">
              Tuliskanlah deskripsi dari usaha yang kamu miliki
            </p>
            <textarea
              onChange={(e) => handleChange(e.target)}
              className="text-xs lg:text-sm w-full text-gray-700 border border-gray-300 rounded p-2 placeholder:text-xs placeholder:text-gray-500 disabled:bg-gray-200"
              disabled={editForm}
              defaultValue={businessByUUID.description}
              placeholder="Deskripsi"
              name="description"
              id="desc"
              rows="10"
            ></textarea>
          </div>
        </div>

        <div className="w-full md:w-3/4 xl:w-1/2 flex flex-col gap-2">
          <label htmlFor="" className="text-sm">
            Link Google Maps
          </label>
          <input
            onChange={(e) => handleChange(e.target)}
            className="text-xs w-full h-10 text-gray-700 border border-gray-300 rounded p-2 placeholder:text-xs placeholder:text-gray-500 disabled:bg-gray-200"
            disabled={editForm}
            defaultValue={businessByUUID?.socialMedia?.[4] == 'undefined' ? 'Link Maps' : businessByUUID?.socialMedia?.[4]}
            placeholder="Masukkan link"
            name="maps"
            id="maps"
          />
        </div>

        <div className="w-full md:w-3/4 xl:w-1/2 flex flex-col gap-2 my-3">
          <label htmlFor="" className="text-sm">
            Jadwal Usaha
          </label>
          <div className="w-full flex gap-10 px-3 py-3">
            <div>
              {editForm ? (
                <>
                <p className='text-xs text-gray-400 mb-2'>Jadwal Buka</p>
                <input
                  disabled={editForm}
                  type="text"
                  placeholder={businessByUUID?.schedule?.[0] == 'undefined' ? '-' : businessByUUID?.schedule?.[0]}
                  className='text-sm disabled:bg-gray-200 disabled:border-gray-300 border px-3 py-2 rounded border-gray-300' />
                  </>
              ) : (

                <select
                  name="open"
                  id=""
                  disabled={editForm}
                  onChange={(e) => handleChange(e.target)}
                  defaultChecked={businessByUUID?.schedule?.[0]}
                  className='text-sm disabled:bg-gray-200 disabled:border-gray-300 border px-3 py-2 rounded border-gray-300'
                >
                  <option value="" className="text-xs">
                    Jadwal Buka
                  </option>
                  {times.map((time) => (
                    <option value={time}>{time}</option>
                  ))}
                </select>
              )}
            </div>
            <div>
              {editForm ? (
                <>
                <p className='text-xs text-gray-400 mb-2'>Jadwal Tutup</p>
                <input
                  disabled={editForm}
                  type="text"
                  placeholder={ businessByUUID?.schedule?.[1] == 'undefined' ? '-' : businessByUUID?.schedule?.[1]}
                  className='text-sm disabled:bg-gray-200 disabled:border-gray-300 border px-3 py-2 rounded border-gray-300' />
                  </>
              ) : (

                <select
                  name="close"
                  id=""
                  disabled={editForm}
                  onChange={(e) => handleChange(e.target)}
                  defaultChecked={businessByUUID?.schedule?.[1]}
                  className='text-sm disabled:bg-gray-200 disabled:border-gray-300 border px-3 py-2 rounded border-gray-300'
                >
                  <option value="" >
                    Jadwal Tutup
                  </option>
                  {times.map((time) => (
                    <option value={time}>{time}</option>
                  ))}
                </select>
              )}
            </div>
          </div>
        </div>

        <input
          type="file"
          accept="image/*"
          className="hidden"
          id="img1"
          name="img1"
          ref={changeBannerRef}
          onChange={(e) => handleImageChange(e.target, 'banner')}
        />
        <input
          type="file"
          accept="image/*"
          className="hidden"
          id="img2"
          name="img2"
          ref={picture1Ref}
          onChange={(e) => handleImageChange(e.target, 'picture1')}
        />
        <input
          type="file"
          accept="image/*"
          className="hidden"
          id="img3"
          name="img3"
          ref={picture2Ref}
          onChange={(e) => handleImageChange(e.target, 'picture2')}
        />
        <input
          type="file"
          accept="image/*"
          className="hidden"
          id="img4"
          name="img4"
          ref={picture3Ref}
          onChange={(e) => handleImageChange(e.target, 'picture3')}
        />
        <input
          type="file"
          accept="image/*"
          className="hidden"
          id="img5"
          name="img5"
          ref={picture4Ref}
          onChange={(e) => handleImageChange(e.target, 'picture4')}
        />

        <hr className="my-5" />
        <div className="w-full flex justify-between md:justify-end gap-5">
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
            <div className="flex gap-3">
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

export default DetailBussiness;
