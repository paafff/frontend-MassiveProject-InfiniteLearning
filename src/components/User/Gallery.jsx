import React from 'react'

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
          <button class='absolute bottom-0 mb-4 ml-20 md:box-content py-4 px-7 mt-3 bg-rose-500 hover:bg-rose-700 text-white font-normal'>Lihat Selengkapnya</button>
        </div>
      </div>
    </div>
  )
};

export default Gallery;