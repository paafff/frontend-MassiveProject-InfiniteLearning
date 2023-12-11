import React, { useEffect } from 'react';
import { useState } from 'react';
import { FiEdit } from 'react-icons/fi';
import { FaSave } from 'react-icons/fa';
import { IoReturnDownBackOutline } from 'react-icons/io5';
import axios from 'axios';

const Services = ({ businessByUUID }) => {
  const [editForm, setEditForm] = useState(true);

  // const arrayService = [
  //   'layanan1',
  //   'layanan2',
  //   'layanan3',
  //   'layanan4',
  //   'layanan5',
  // ];
  // const [arrayService, setArrayService] = useState([]);
  // const arrayServicePrice = ['1223', '1212', '1213', '111', '9999'];
  // const [arrayServicePrice, setArrayServicePrice] = useState([]);
  const businessId = businessByUUID.id;

  const [serviceData, setServiceData] = useState({
    srv1: '',
    srv2: '',
    srv3: '',
    srv4: '',
    srv5: '',
  });

  const [priceData, setPriceData] = useState({
    price1: '',
    price2: '',
    price3: '',
    price4: '',
    price5: '',
  });

  const handleService = (service, value) => {

    switch (service) {
      case 'srv1':
        setServiceData((prev) => ({
          ...prev,
          srv1: value,
        }));
        break;

      case 'srv2':
        setServiceData((prev) => ({
          ...prev,
          srv2: value,
        }));
        break;

      case 'srv3':
        setServiceData((prev) => ({
          ...prev,
          srv3: value,
        }));
        break;

      case 'srv4':
        setServiceData((prev) => ({
          ...prev,
          srv4: value,
        }));
        break;

      case 'srv5':
        setServiceData((prev) => ({
          ...prev,
          srv5: value,
        }));
        break;

      default:
        break;
    }
  };

  const handlePrice = (price, value) => {
    console.log('mengisi harga service ke- ', price);

    switch (price) {
      case 'price1':
        setPriceData((prev) => ({
          ...prev,
          price1: value,
        }));
        break;

      case 'price2':
        setPriceData((prev) => ({
          ...prev,
          price2: value,
        }));
        break;

      case 'price3':
        setPriceData((prev) => ({
          ...prev,
          price3: value,
        }));
        break;

      case 'price4':
        setPriceData((prev) => ({
          ...prev,
          price4: value,
        }));
        break;

      case 'price5':
        setPriceData((prev) => ({
          ...prev,
          price5: value,
        }));
        break;

      default:
        break;
    }
  };

  const arrayServiceName = [
    serviceData.srv1,
    serviceData.srv2,
    serviceData.srv3,
    serviceData.srv4,
    serviceData.srv5,
  ];
  const arrayServicePrice = [
    priceData.price1,
    priceData.price2,
    priceData.price3,
    priceData.price4,
    priceData.price5,
  ];
  const createServices = async (e) => {
    e.preventDefault();

    try {
      await axios.post(`${import.meta.env.VITE_API_URL}/service`, {
        name: arrayServiceName,
        price: arrayServicePrice,
        businessId: businessId,
      });

      window.location.reload()
    } catch (error) {
      if (error.response) {
        alert(error.response.data.msg);
      } else {
        console.log(error);
      }
    }
  };

  const tempServices = [
    {
      id: 0,
      name: 'creambath',
    },
    {
      id: 1,
      name: 'haircut',
    },
    {
      id: 2,
      name: 'manicure',
    },
    {
      id: 3,
      name: 'pedicure',
    },
    {
      id: 4,
      name: 'nail art',
    },
    {
      id: 5,
      name: 'hair color',
    },
    {
      id: 6,
      name: 'smoothing',
    },
  ];

  const [listServices, setListServices] = useState([]);

  useEffect(() => {
    const getListServices = async () => {
      try {
        const response = await axios(
          `${import.meta.env.VITE_API_URL}/list-service`
        );
        setListServices(response.data);
      } catch (error) {
        if (error.response) {
          alert(error.response.data.msg); // Menampilkan pesan error sebagai popup
        } else {
          console.log(error); // Menampilkan error pada konsol
        }
      }
    };

    getListServices();
  }, []);

  return (
    <div className="w-screen lg:w-full py-10 px-5 md:px-12 xl:px-24 xl:w-3/4">
      <div className="bg-white w-full rounded-lg p-4 lg:p-8 drop-shadow-md">
        <p className="text-base md:text-lg font-semibold">Layanan</p>
        <hr className="my-5" />

        <form action="">
          <Service
            data={listServices}
            editForm={editForm}
            handleService={handleService}
            handlePrice={handlePrice}
          />

          <Button
            createServices={createServices}
            editForm={editForm}
            setEditForm={setEditForm}
          />
        </form>

        {/* <p>{businessByUUID.id}</p> */}
        {/* <button onClick={createServices} className="bg-blue-100">
          {' '}
          ini coba kirim layanan
        </button> */}
      </div>
    </div>
  );
};

const Service = ({ data, editForm, handleService, handlePrice }) => {
  return (
    <>
      <div className="w-full flex flex-col gap-3">
        {/* tampilkan 5 dropdown dengan onChange yg berbeda beda */}
        {[1, 2, 3, 4, 5].map((selectService, index) => (
          <div className="w-full flex gap-3" key={index}>
            <select
              onChange={(e) =>
                handleService('srv' + (index + 1), e.target.value)
              }
              disabled={editForm}
              name="service1"
              className="w-1/2 text-xs py-2 px-3 rounded disabled:bg-gray-200 bg-gray-100"
              id=""
            >
              <option value="" className="text-xs">
                Pilih layanan
              </option>
              {data.map((service) => (
                <option value={service.name} className="text-xs">
                  {service.name}
                </option>
              ))}
            </select>

            <input
              onChange={(e) =>
                handlePrice('price' + (index + 1), e.target.value)
              }
              disabled={editForm}
              className="disabled:bg-gray-200 bg-gray-100 rounded border border-gray-200 text-xs w-1/2 placeholder:text-xs px-2"
              placeholder="Rp"
              type="number"
            />
          </div>
        ))}
      </div>
    </>
  );
};

const Button = ({ editForm, setEditForm, createServices }) => {
  return (
    <div className="mt-10">
      {editForm ? (
        <div className="w-full flex justify-end">
          <div
            onClick={() => setEditForm(!editForm)}
            className=" w-fit hover:bg-zinc-800 hover:cursor-pointer transition-all py-2 px-5 bg-zinc-950 rounded "
          >
            <p className="text-xs md:text-sm text-white flex gap-2 items-center">
              <FiEdit className="inline-block" />
              Update Layanan
            </p>
          </div>
        </div>
      ) : (
        <div className="flex gap-3 mt-5 justify-end">
          <div
            onClick={() => setEditForm(!editForm)}
            className="hover:bg-zinc-800 hover:cursor-pointer transition-all py-2 px-5 bg-zinc-950 rounded "
          >
            <p className="text-xs md:text-sm text-white flex gap-2 items-center">
              <IoReturnDownBackOutline className="inline-block" />
              Back
            </p>
          </div>
          <div
            onClick={createServices}
            className="w-fit flex justify-end py-2 px-5 bg-green-600 hover:bg-green-700 hover:cursor-pointer transition-all rounded"
          >
            <p className="text-xs md:text-sm text-white flex gap-2 items-center">
              <FaSave className="inline-block" />
              Simpan Perubahan
            </p>
          </div>
        </div>
      )}
    </div>
  );
};

export default Services;
