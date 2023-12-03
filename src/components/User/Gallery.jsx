import React from 'react';
import DetailPhoto from './DetailPhoto';

const Gallery = () => {
  return (
    <div class='grid grid-cols-3 gap-4'>
      <div class='col-span-2'>
        <img class='w-full' src='/src/assets/images/Barbershop/barbershop1.png' />
      </div>
      <div>
        <img class='h-auto' src='/src/assets/images/Barbershop/barbershop2.png' />
        <div class='relative'>
          <img class='h-auto mt-4' src='/src/assets/images/Barbershop/barbershop3.png' />
          <DetailPhoto/>
        </div>
      </div>
    </div>
  )
};

export default Gallery;