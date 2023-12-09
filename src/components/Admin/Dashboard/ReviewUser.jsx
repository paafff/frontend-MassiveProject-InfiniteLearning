import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { FaStar } from 'react-icons/fa';
import { MdOutlineOpenInNew } from 'react-icons/md';

const ReviewUser = ({ selectedBusinessId }) => {
  //   const [listFeedback, setListFeedback] = useState([]);
  const [listFeedback, setListFeedback] = useState(['', '']);

  useEffect(() => {
    const getFeedbacks = async () => {
      try {
        const response = await axios.get(
          `${import.meta.env.VITE_API_URL}/feedback/${selectedBusinessId}`
        );

        setListFeedback(response.data);
        console.log('feedbackkkkkkkk', listFeedback);
      } catch (error) {
        // if (error.response) {
        //   alert(error.response.data.msg);
        // } else {
        console.log(error);
        // }
      }
    };

    getFeedbacks();
  }, [selectedBusinessId]);

  return (
    <div className="w-full lg:w-full xl:w-3/4 xl:px-24 py-10 px-5 md:px-12 lg:pt-16">
      <div className="bg-white w-full rounded-lg p-4 lg:p-8 drop-shadow-md">
        <p className="text-base md:text-lg font-semibold">Review</p>
        <hr className="my-5" />

        <div className="grid grid-cols-1 xl:grid-cols-2 justify-center place-content-center gap-5">
          {listFeedback?.map((feedback) => (
            <Card feedback={feedback} />
          ))}

        </div>
      </div>
    </div>
  );
};

const Card = ({ uuid, desc, rating, date, feedback }) => {
  return (
    <div className="w-full md:w-3/4 mx-auto p-3 md:p-5 bg-white drop-shadow-lg flex flex-col gap-3 rounded-md">
      <div className="w-10 flex items-center gap-5">
        <img src={feedback.userData?.profileURL} className='border border-gray-300 rounded-full' alt="" />
        <p className="text-lg font-medium ">{feedback.userData?.username}</p>
      </div>
      <div className="w-full my-2 space-y-3">
        <p className="text-sm line-clamp-4">{feedback.description}</p>
        <div className='w-full '>
          <img src={feedback.imageURL} className='w-24' alt="" />
        </div>
      </div>
      <div className="w-1/3 justify-between flex gap-2 items-center">
        <p className="text-red-600 text-sm">Rating</p>

        <div className="flex items-center gap-2">
          <FaStar className=" inline-block text-amber-500" />
          <p className="m-0">{feedback.rating}</p>
        </div>
      </div>
      <div className="w-full flex justify-between items-center">
        <p className="text-sm text-gray-500">{feedback.createdAt}</p>
        <MdOutlineOpenInNew className="text-blue-600 scale-150 hover:cursor-pointer" />
      </div>
    </div>
  );
};

export default ReviewUser;
