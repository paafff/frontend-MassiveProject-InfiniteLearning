import React, { useState } from 'react';
import axios from 'axios';

const DummyPaafff = () => {
  const [service, setService] = useState({
    name1: '',
    name2: '',
    name3: '',

    price1: '',
    price2: '',
    price3: '',
  });

  const addService = async (e) => {
    e.preventDefault();

    try {
      // const formData = new FormData();
      // formData.append('name', service.name);
      // formData.append('price', service.price);
      // console.log(formData);

      await axios.post('http://localhost:5000/service', {
        name: [service.name1, service.name2, service.name3],
        price: [service.price1, service.price2, service.price3],
      });

      console.log("sukses menambah layanan")
      // console.log('isi form', formData);
    } catch (error) {
      if (error.response) {
        alert(error.response.data.msg); // Menampilkan pesan error sebagai popup
      } else {
        console.log(error); // Menampilkan error pada konsol
      }
    }
  };

  return (
    <div>
      <br />
      <h2>Service Form</h2>
      <form onSubmit={addService}>
        <br />
        <label>
          Name1:
          <input
            type="text"
            name="name1"
            className="border"
            value={service.name1}
            onChange={(e) => setService({ ...service, name1: e.target.value })}
          />
        </label>
        <br />
        <label>
          Name2:
          <input
            type="text"
            name="name2"
            className="border"
            value={service.name2}
            onChange={(e) => setService({ ...service, name2: e.target.value })}
          />
        </label>
        <br />
        <label>
          Name3:
          <input
            type="text"
            name="name3"
            className="border"
            value={service.name3}
            onChange={(e) => setService({ ...service, name3: e.target.value })}
          />
        </label>

        <br />
        <br />
        <br />
        <label>
          Price1:
          <input
            type="text"
            name="price1"
            className="border"
            value={service.price1}
            onChange={(e) => setService({ ...service, price1: e.target.value })}
          />
        </label>
        <br />
        <label>
          Price2:
          <input
            type="text"
            name="price2"
            className="border"
            value={service.price2}
            onChange={(e) => setService({ ...service, price2: e.target.value })}
          />
        </label>
        <br />
        <label>
          Price3:
          <input
            type="text"
            name="price3"
            className="border"
            value={service.price3}
            onChange={(e) => setService({ ...service, price3: e.target.value })}
          />
        </label>
        <br />
        <button className="bg-blue-300" type="submit">
          Submit
        </button>
      </form>
    </div>
  );
};

export default DummyPaafff;
