import React from 'react';
import ImageBanner from '../assets/images/dmozeSalon/dmoze4.png'

const Banner = () => {
    return (
        <div className='w-full h-[306px] bg-no-repeat' style={{ backgroundImage: `url(${ImageBanner})`, backgroundSize: 'cover' }}>
            {/* <img src='/src/assets/images/dmozeSalon/dmoze4.png' /> */}
        </div>
    );
};

export default Banner;