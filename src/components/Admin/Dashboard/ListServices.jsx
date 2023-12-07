import React, { useEffect, useState } from 'react';
import { FaRegTrashAlt } from 'react-icons/fa';
import { FiEdit } from 'react-icons/fi';
import { MdOutlineAddCircle } from 'react-icons/md';

import Backdrop from '@mui/material/Backdrop';
import Box from '@mui/material/Box';
import Modal from '@mui/material/Modal';
import Fade from '@mui/material/Fade';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import TextField from '@mui/material/TextField';
import axios from 'axios';

const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 400,
  bgcolor: 'background.paper',
  // border: '2px solid #000',
  borderRadius: '5px',
  boxShadow: 24,
  p: 4,
};

const ListServices = ({ hamburgerMenu }) => {
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const [openUpdate, setOpenUpdate] = useState(false);
  const handleOpenUpdate = (id, name) => {
    setOpenUpdate(true);

    setSelectedIdService(id);
    setSelectedNameService(name);
    console.log(selectedIdService, selectedNameService);
  };
  const handleCloseUpdate = () => setOpenUpdate(false);

  const [newService, setNewService] = useState('');
  const [listServices, setListServices] = useState([]);
  const [selectedIdService, setSelectedIdService] = useState('');
  const [selectedNameService, setSelectedNameService] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();

    createListService();
    // logic insert layanan
    console.log(newService);
  };

  const onChangeAddService = (e) => {
    console.log(newService);
    setNewService(e);
  };

  const createListService = async () => {
    try {
      await axios.post(`${import.meta.env.VITE_API_URL}/list-service`, {
        name: newService,
      });
    } catch (error) {
      if (error.response) {
        alert(error.response.data.msg);
      } else {
        console.log(error);
      }
    }
  };

  const getListServices = async () => {
    try {
      const response = await axios.get(
        `${import.meta.env.VITE_API_URL}/list-service`
      );

      setListServices(response.data);
      console.log('ini list', listServices);
    } catch (error) {
      if (error.response) {
        alert(error.response.data.msg);
      } else {
        console.log(error);
      }
    }
  };

  useEffect(() => {
    getListServices();
  }, []);

  return (
    <div className="w-full lg:w-full xl:w-3/4 xl:px-24 py-10 px-5 md:px-12 lg:pt-16">
      {hamburgerMenu}

      <div className="bg-white w-full rounded-lg p-4 lg:p-8 drop-shadow-md">
        <div className="flex justify-between">
          <p className="text-base md:text-lg font-semibold">Services</p>
          <AddButton handleOpen={handleOpen} />
        </div>

        <hr className="my-5" />

        {listServices?.map((service) => (
          <Service
            id={service.id}
            name={service.name}
            date={service.created_at}
            handleOpenUpdate={handleOpenUpdate}
            handleCloseUpdate={handleCloseUpdate}
          />
        ))}

        <AddServices
          open={open}
          handleOpen={handleOpen}
          handleClose={handleClose}
          submitService={handleSubmit}
          onChangeAddService={onChangeAddService}
        />

        <UpdateServices
          selectedNameService={selectedNameService}
          selectedIdService={selectedIdService}
          open={openUpdate}
          handleOpenUpdate={handleOpenUpdate}
          handleCloseUpdate={handleCloseUpdate}
          W
        />
      </div>
    </div>
  );
};

const Service = ({ id, name, date, handleOpenUpdate, handleCloseUpdate }) => {
  return (
    <div
      className="w-full py-3 px-5 border-b border-gray-200 flex justify-between gap-10"
      key={id}
    >
      <div className="w-1/4 flex flex-col gap-2 items-start">
        <label htmlFor={id} className="text-sm md:text-base font-thin">
          {name}
        </label>
        <p className="text-xs text-gray-500">updated at: {date}</p>
      </div>
      <div className="w-1/4 flex flex-col md:flex-row gap-2 items-end justify-end">
        <div
          idService={id}
          onClick={() => handleOpenUpdate(id, name)}
          className=" px-2 flex gap-2 items-center justify-between bg-blue-600 hover:bg-blue-700 transition-all hover:cursor-pointer py-2 rounded shadow-md"
        >
          <FiEdit className="inline-block text-white" />
          <p className="text-white text-xs">Edit</p>
        </div>
        <div className=" px-2 flex gap-2 items-center justify-between bg-red-600 hover:bg-red-700 transition-all hover:cursor-pointer py-2 rounded shadow-md">
          <FaRegTrashAlt className="inline-block text-white" />
          <p className="text-white text-xs">Hapus</p>
        </div>
      </div>
    </div>
  );
};

const AddButton = ({ handleOpen }) => {
  return (
    <div className="w-full flex justify-end ">
      <div
        onClick={handleOpen}
        className="w-fit flex gap-2 bg-green-600 hover:bg-green-700 hover:cursor-pointer px-3 py-2 rounded shadow-md "
      >
        <MdOutlineAddCircle className="text-white" />
        <p className="text-xs text-white">Tambah Layanan</p>
      </div>
    </div>
  );
};

const AddServices = ({
  open,
  handleOpen,
  handleClose,
  submitService,
  onChangeAddService,
}) => {
  return (
    <Modal
      aria-labelledby="transition-modal-title"
      aria-describedby="transition-modal-description"
      open={open}
      onClose={handleClose}
      closeAfterTransition
      slots={{ backdrop: Backdrop }}
      slotProps={{
        backdrop: {
          timeout: 500,
        },
      }}
    >
      <Fade in={open}>
        <Box sx={style}>
          <Typography id="transition-modal-title" variant="h6" component="h2">
            <p className="text-center">Tambah Layanan</p>
          </Typography>
          <Typography id="transition-modal-description" sx={{ mt: 2 }}>
            <form action="" onSubmit={submitService}>
              <TextField
                autoComplete="off"
                onChange={(e) => onChangeAddService(e.target.value)}
                id="outlined-basic"
                label="Nama layanan"
                name="service-name"
                variant="outlined"
                style={{ width: '100%' }}
              />
              <div className="w-full flex justify-end mt-3">
                <button
                  type="submit"
                  className="w-fit px-3 py-2 bg-green-600 hover:bg-green-700 hover:cursor-pointer transition-all rounded shadow-md"
                >
                  <p className="text-xs text-white">Submit</p>
                </button>
              </div>
            </form>
          </Typography>
        </Box>
      </Fade>
    </Modal>
  );
};

const UpdateServices = ({
  open,
  handleOpenUpdate,
  handleCloseUpdate,
  id,
  selectedNameService,
  selectedIdService,
}) => {


    const

  return (
    <Modal
      aria-labelledby="transition-modal-title"
      aria-describedby="transition-modal-description"
      open={open}
      onClose={handleCloseUpdate}
      closeAfterTransition
      slots={{ backdrop: Backdrop }}
      slotProps={{
        backdrop: {
          timeout: 500,
        },
      }}
    >
      <Fade in={open}>
        <Box sx={style}>
          <Typography id="transition-modal-title" variant="h6" component="h2">
            <p className="text-center">
              Edit Nama Layanan {selectedNameService}
            </p>
          </Typography>
          <Typography id="transition-modal-description" sx={{ mt: 2 }}>
            <form action="">
              <TextField
                autoComplete="off"
                id="outlined-basic"
                label="Nama layanan"
                name="service-name"
                variant="outlined"
                style={{ width: '100%' }}
              />
              <div className="w-full flex justify-end mt-3">
                <button className="w-fit px-3 py-2 bg-green-600 hover:bg-green-700 hover:cursor-pointer transition-all rounded shadow-md">
                  <p className="text-xs text-white">Update</p>
                </button>
              </div>
            </form>
          </Typography>
        </Box>
      </Fade>
    </Modal>
  );
};

export default ListServices;
