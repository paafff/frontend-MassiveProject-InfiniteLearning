import React from 'react';
import DetailPhoto from './DetailPhoto';
import Foto1 from '../../assets/images/barbershop/barbershop1.png'
import Foto2 from '../../assets/images/barbershop/barbershop2.png'
import Foto3 from '../../assets/images/barbershop/barbershop3.png'

const Gallery = () => {
  return (
    <div class='w-full h-[450px] flex flex-col xl:flex-row gap-2 xl:gap-5 '>
      <div className='xl:w-3/5 w-full h-full bg-no-repeat' style={{ backgroundImage: `url(${Foto1})`, backgroundSize: 'cover' }}>

      </div>
      <div className='xl:w-2/5 h-full none flex flex-col gap-2 xl:gap-5' >
        <div className='w-full h-1/2 bg-no-repeat' style={{ backgroundImage: `url(${Foto2})`, backgroundSize: 'cover' }}>

        </div>
        <div className='w-full h-1/2 bg-no-repeat flex justify-center items-center' style={{ backgroundImage: `url(${Foto3})`, backgroundSize: 'cover' }}>
          <DetailPhoto />
        </div>
      </div>
    </div>
    // <div class='w-full flex justify-center'>
    //   <div class=''>
    //     <img class='w-full' src='/src/assets/images/Barbershop/barbershop1.png' />
    //   </div>
    //   <div>
    //     <img class='h-auto' src='/src/assets/images/Barbershop/barbershop2.png' />
    //     <div class='relative'>
    //       <img class='h-auto mt-4' src='/src/assets/images/Barbershop/barbershop3.png' />
    //       <DetailPhoto />
    //     </div>
    //   </div>
    // </div>
  )
};

export default Gallery;