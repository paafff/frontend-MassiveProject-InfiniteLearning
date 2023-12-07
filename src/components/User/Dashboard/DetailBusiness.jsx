import React, { useRef, useState, useEffect } from 'react';
import { IoIosSave } from 'react-icons/io';
import { FaFacebookSquare, FaYoutube, FaSave } from 'react-icons/fa';
import InstagramLogo from '../../../assets/images/logo/instagram.png';
import { FaXTwitter } from 'react-icons/fa6';
import { FiEdit } from 'react-icons/fi';
import { IoReturnDownBackOutline } from 'react-icons/io5';

import axios from 'axios';

const DetailBussiness = ({ businessByUUID, sosmed }) => {

  const [editForm, setEditForm] = useState(true);

  // const bannerRef = useRef(null);
  // const [banner, setBanner] = useState(null);

  // const handleBannerClick = () => {
  //   bannerRef.current.click();
  // };

  // const handleBannerChange = (event) => {
  //   const file = event.target.files[0];
  //   console.log(file);
  //   console.log(businessByUUID);
  //   setBanner(file);
  // };

  // useEffect(() => {
  //   if (editForm == true) {
  //     setBanner('');
  //   }
  // }, [editForm]);

  // INPUT SOSMED
  // console.log("ini data sosmed uuid : ", socialMedia);
  // const socmedDefault = businessByUUID.socialMedia;
  // console.log("socmed default ", businessByUUID);

  // const [instagramLink, setInstagramLink] = useState(businessByUUID.socialMedia[0]);
  // const [facebookLink, setFacebookLink] = useState(businessByUUID.socialMedia[1]);
  // const [twitterLink, setTwitterLink] = useState(businessByUUID.socialMedia[2]);
  // const [youtubeLink, setYoutubeLink] = useState(businessByUUID.socialMedia[3]);

  const [instagramLink, setInstagramLink] = useState(null);
  const [facebookLink, setFacebookLink] = useState(null);
  const [twitterLink, setTwitterLink] = useState(null);
  const [youtubeLink, setYoutubeLink] = useState(null);

  return (
    <div className="w-screen lg:w-full py-10 px-5 md:px-12 xl:px-24 xl:w-3/4">
      <div className="bg-white w-full rounded-lg p-4 lg:p-8 drop-shadow-md">
        <p className="text-base md:text-lg font-semibold">Detail Usaha</p>
        <hr className="my-5" />

        <div className="xl:flex xl:flex-row flex flex-col gap-4 mb-6">
          <Banner
            editForm={editForm}
            setEditForm={setEditForm}
            // banner={banner}
            businessByUUID={businessByUUID} />

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
          // banner={banner}
          editForm={editForm}
          setEditForm={setEditForm}
          // handleBannerClick={handleBannerClick}
          // handleBannerChange={handleBannerChange}
          // bannerRef={bannerRef}

          // passing sosmed to form
          inputIG={instagramLink}
          inputFB={facebookLink}
          inputTW={twitterLink}
          inputYT={youtubeLink}

          stateIG={businessByUUID.socialMedia ? businessByUUID.socialMedia[0] : "coba ig"}
          stateFB={businessByUUID.socialMedia ? businessByUUID.socialMedia[1] : "coba ig"}
          stateTW={businessByUUID.socialMedia ? businessByUUID.socialMedia[2] : "coba ig"}
          stateYT={businessByUUID.socialMedia ? businessByUUID.socialMedia[3] : "coba ig"}
        />
      </div>
    </div>
  );
};

const Banner = ({ editForm, setEditForm, banner, businessByUUID }) => {

  // Banner default
  const photoDefault = businessByUUID ? businessByUUID.imageURL[0] : '';

  const changeBannerRef = useRef(null)
  const picture1Ref = useRef(null)
  const picture2Ref = useRef(null)
  const picture3Ref = useRef(null)
  const picture4Ref = useRef(null)

  const [pictureBanner, setPictureBanner] = useState(null)
  const [picture1, setPicture1] = useState(null)
  const [picture2, setPicture2] = useState(null)
  const [picture3, setPicture3] = useState(null)
  const [picture4, setPicture4] = useState(null)

  // Banner
  const handleBannerClick = () => {
    changeBannerRef.current.click();
  }
  const handleBannerChange = (event) => {
    // console.log("ambil gambar");
    const file = event.target.files[0]
    console.log(file);
    setPictureBanner(file)
  }

  // Picture 1
  const handlePicture1Click = () => {
    picture1Ref.current.click();
  }
  const handlePicture1Change = (event) => {
    // console.log("ambil gambar");
    const file = event.target.files[0]
    console.log(file);
    setPicture1(file)
  }

  // Picture 2
  const handlePicture2Click = () => {
    picture2Ref.current.click();
  }
  const handlePicture2Change = (event) => {
    // console.log("ambil gambar");
    const file = event.target.files[0]
    console.log(file);
    setPicture2(file)
  }

  // Picture 3
  const handlePicture3Click = () => {
    picture3Ref.current.click();
  }
  const handlePicture3Change = (event) => {
    // console.log("ambil gambar");
    const file = event.target.files[0]
    console.log(file);
    setPicture3(file)
  }

  // Picture 4
  const handlePicture4Click = () => {
    picture4Ref.current.click();
  }
  const handlePicture4Change = (event) => {
    // console.log("ambil gambar");
    const file = event.target.files[0]
    console.log(file);
    setPicture4(file)
  }

  useEffect(() => {
    if (editForm == true) {
      setPicture1('')
      setPicture1('')
    }
  }, [editForm])

  return (
    <div className="w-full xl:my-auto xl:w-1/2 border border-gray-300 rounded p-2 flex flex-col gap-3 mb-5">
      {console.log(banner)}
      {banner ? (
        <img
          src={URL.createObjectURL(banner)}
          className="w-full md:w-3/4 mx-auto md:max-h-72 aspect-video rounded flex items-center justify-center object-contain"
        />
      ) : (

        editForm ? (
          <img src={photoDefault} />
        ) : (
          <img src={pictureBanner ? URL.createObjectURL(pictureBanner) : photoDefault} onClick={handleBannerClick} className='hover:cursor-pointer hover:scale-95 transition-all' />
        )

      )}

      <input type="file" name='banner' id='banner' className='hidden' ref={changeBannerRef} onChange={handleBannerChange} />

      {/* </div> */}
      <div className='flex justify-center gap-3'>
        <div className='w-20 bg-gray-500 hover:bg-gray-600 hover:cursor-pointer transition-all aspect-square rounded flex items-center justify-center ' onClick={handlePicture1Click}   >
          {picture1 ? (
            <img src={URL.createObjectURL(picture1)} className='w-full ' alt="" srcset="" />
          ) : (
            <p className='text-xs text-white'>Foto 1</p>
          )}
          <input type="file" id='picture1' name='picture1' className='hidden' ref={picture1Ref} onChange={handlePicture1Change} />
        </div>
        <div className='w-20 bg-gray-500 hover:bg-gray-600 hover:cursor-pointer transition-all aspect-square rounded flex items-center justify-center ' onClick={handlePicture2Click}>
          {picture2 ? (
            <img src={URL.createObjectURL(picture2)} className='w-full ' alt="" srcset="" />
          ) : (
            <p className='text-xs text-white'>Foto 2</p>
          )}
          <input type="file" id='picture2' name='picture2' className='hidden' ref={picture2Ref} onChange={handlePicture2Change} />

        </div>
        <div className='w-20 bg-gray-500 hover:bg-gray-600 hover:cursor-pointer transition-all aspect-square rounded flex items-center justify-center ' onClick={handlePicture3Click}>
          {picture3 ? (
            <img src={URL.createObjectURL(picture3)} className='w-full ' alt="" srcset="" />
          ) : (
            <p className='text-xs text-white'>Foto 3</p>
          )}
          <input type="file" id='picture1' name='picture1' className='hidden' ref={picture3Ref} onChange={handlePicture3Change} />

        </div>
        <div className='w-20 bg-gray-500 hover:bg-gray-600 hover:cursor-pointer transition-all aspect-square rounded flex items-center justify-center ' onClick={handlePicture4Click}>
          {picture4 ? (
            <img src={URL.createObjectURL(picture4)} className='w-full ' alt="" srcset="" />
          ) : (
            <p className='text-xs text-white'>Foto 4</p>
          )
          }
          <input type="file" id='picture1' name='picture1' className='hidden' ref={picture4Ref} onChange={handlePicture4Change} />

        </div>
      </div>
    </div >
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
      <form

        className="flex items-center gap-3 md:w-3/4 xl:w-full"
      >
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
          defaultValue={businessByUUID.socialMedia ? businessByUUID.socialMedia[0] : "coba ig"}
        />

      </form>
      <form

        className="flex items-center gap-3 md:w-3/4 xl:w-full"
      >
        <div className="w-7">
          <FaFacebookSquare className="inline-block w-full h-full text-blue-600" />
        </div>
        <input
          onChange={(e) => setFacebookLink(e.target.value)}
          type="text"
          className="w-full h-10 border border-gray-300 rounded p-2 text-sm placeholder:text-xs disabled:bg-gray-200"
          disabled={editForm}
          placeholder="Link Facebook"
          defaultValue={businessByUUID.socialMedia ? businessByUUID.socialMedia[1] : "coba fb"}
        />

      </form>
      <form

        className="flex items-center gap-3 md:w-3/4 xl:w-full"
      >
        <div className="w-7">
          <FaXTwitter className="inline-block w-full h-full text-gray-900" />
        </div>
        <input
          onChange={(e) => setTwitterLink(e.target.value)}
          type="text"
          className="w-full h-10 border border-gray-300 rounded p-2 text-sm placeholder:text-xs disabled:bg-gray-200"
          disabled={editForm}
          placeholder="Link twitter"
          defaultValue={businessByUUID.socialMedia ? businessByUUID.socialMedia[2] : "coba tw"}
        />

      </form>
      <form

        className="flex items-center gap-3 md:w-3/4 xl:w-full"
      >
        <div className="w-7">
          <FaYoutube className="inline-block w-full h-full text-red-600" />
        </div>
        <input
          onChange={(e) => setYoutubeLink(e.target.value)}
          type="text"
          className="w-full h-10 border border-gray-300 rounded p-2 text-sm placeholder:text-xs disabled:bg-gray-200"
          disabled={editForm}
          placeholder="Link youtube"
          defaultValue={businessByUUID.socialMedia ? businessByUUID.socialMedia[2] : "coba yt"}
        />

      </form>
    </div>
  );
};

const Form = ({
  handleBannerChange,
  handleBannerClick,
  bannerRef,
  editForm,
  setEditForm,
  banner,
  businessByUUID,
  inputIG,
  inputFB,
  inputTW,
  inputYT,
  stateIG,
  stateFB,
  stateTW,
  stateYT,
}) => {
  const [desc, setDesc] = useState('');
  const [maps, setMaps] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('tersubmit', [desc, maps]);
  };

  const handleChange = (e) => {
    const name = e.name;
    const value = e.value;
    setBusinessData((prev) => {
      return { ...prev, [name]: value };
    });
  };

  const handleImageChange = (e) => {
    // setImage(e.target.files[0]);
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

  }, [inputIG, inputFB, inputTW, inputYT])


  const arraySocialMedia = [
    businessData.instagram || businessByUUID?.socialMedia,
    businessData.facebook || businessByUUID?.socialMedia,
    businessData.twitter || businessByUUID?.socialMedia,
    businessData.youtube || businessByUUID?.socialMedia,
    businessData.maps,

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
      formUpdateBusiness.append('description', businessData.description);
      formUpdateBusiness.append(
        'socialMedia',
        JSON.stringify(arraySocialMedia)
      );

      await axios.patch(
        `http://localhost:5000/business/${businessByUUID.uuid}`,
        formUpdateBusiness,
        { headers: { 'Content-Type': 'multipart/form-data' } }
      );

      console.log('sukses update data bisnis');
      console.log('ini isinya ya', businessData);
    } catch (error) {
      if (error.response) {
        alert(error.response.data.msg);
      } else {
        console.log(error);
      }
    }
  };

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
            defaultValue={maps}
            placeholder="Masukkan link"
            name="maps"
            id="maps"
          />
        </div>

        {/* <input
          type="file"
          accept="image/*"
          id="img1"
          name="img1"
          onChange={(e) => handleImageChange(e.target)}
        />
        <input
          type="file"
          accept="image/*"
          id="img2"
          name="img2"
          onChange={(e) => handleImageChange(e.target)}
        />
        <input
          type="file"
          accept="image/*"
          id="img3"
          name="img3"
          onChange={(e) => handleImageChange(e.target)}
        />
        <input
          type="file"
          accept="image/*"
          id="img4"
          name="img4"
          onChange={(e) => handleImageChange(e.target)}
        />
        <input
          type="file"
          accept="image/*"
          id="img5"
          name="img5"
          onChange={(e) => handleImageChange(e.target)}
        /> */}

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
