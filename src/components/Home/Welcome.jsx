// import React from 'react';

// import Header from '../../assets/images/icons/gataunamanya.png';
// import Image1 from '../../assets/images/home1.jpg';
// import Image2 from '../../assets/images/home2.jpg';
// import Image3 from '../../assets/images/home3.jpg';

// const Welcome = () => {
//   return (
//     <div className="w-full xl:w-3/4 xl:mx-auto flex flex-col  lg:my-10 xl:my-20">
//       <div className="w-full flex flex-col">
//         <p className="text-lg md:text-xl xl:text-3xl text-center font-bold text-zinc-900">
//           Selamat Datang Di <span className="text-rose-400">HairHub</span>
//         </p>
//         <div className="w-full flex justify-center my-1 xl:my-3">
//           <img src={Header} alt="" className="" />
//         </div>
//       </div>

//       <div className="w-full flex flex-col lg:flex-row lg:px-20 py-8 gap-10">
//         <div className="w-72 lg:w-fit rounded-md mx-auto drop-shadow-lg flex gap-1">
//           <div className="h-fit">
//             <img
//               src={Image2}
//               className="rounded-md border-2 border-black h-full"
//               alt=""
//             />
//           </div>
//           <div className=" flex flex-col gap-1">
//             <img
//               src={Image3}
//               className="rounded-md border-2 border-black "
//               alt=""
//             />
//             <img
//               src={Image1}
//               className="rounded-md border-2 border-black "
//               alt=""
//             />
//           </div>
//         </div>
//         <div className="w-full lg:w-2/3 px-5 md:px-20 lg:px-0 flex items-center">
//           <p className="text-sm md:text-base xl:text-2xl indent-10 text-justify">
//             <span className="text-rose-400">HairHub</span> adalah platfrom
//             website inovatif yang menjadi pusat informasi bagi pemilik dan
//             pengguna barbershop dan salon di Jabodetabek. Platfrom ini
//             dikembangkan pada tahun 2023. Dan kami berkomitmen menyediakan
//             informasi detail dan akurat, memfasilitasi pemilik usaha dalam
//             mempromosikan layanan secara efektif, sementara pengguna dapat
//             dengan mudah menemukan dan menilai berbagai barbershop dan salon.
//             Bersama HairHub, kami berkomitmen mendukung pertumbuhan industri
//             babershop dan salon!!
//           </p>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Welcome;

import React from 'react';

import Header from '../../assets/images/icons/gataunamanya.png';
import Image1 from '../../assets/images/home1.jpg';
import Image2 from '../../assets/images/home2.jpg';
import Image3 from '../../assets/images/home3.jpg';

const Welcome = () => {
  return (
    <div className="w-full xl:w-3/4 xl:mx-auto flex flex-col  lg:my-10 xl:my-20">
      <div className="w-full flex flex-col">
        <p className="text-lg md:text-xl xl:text-3xl text-center font-bold text-zinc-900">
          Selamat Datang Di <span className="text-rose-400">HairHub</span>
        </p>
        <div className="w-full flex justify-center my-1 xl:my-3">
          <img src={Header} alt="" className="" />
        </div>
      </div>

      <div className="w-full flex flex-col lg:flex-row lg:px-20 py-8 gap-10">
        <div className="w-72 lg:w-fit rounded-md mx-auto drop-shadow-lg flex gap-1">
          <div className="">
            <img
              src={Image2}
              className="rounded-md border-2 border-black h-full"
              alt=""
            />
          </div>
          <div className=" flex flex-col gap-1">
            <img
              src={Image3}
              className="rounded-md border-2 border-black "
              alt=""
            />
            <img
              src={Image1}
              className="rounded-md border-2 border-black "
              alt=""
            />
          </div>
        </div>
        <div className="w-full lg:w-2/3 px-5 md:px-20 lg:px-0 flex items-center">
          <p className="text-sm md:text-base xl:text-2xl indent-10 text-justify">
            <span className="text-rose-400">HairHub</span> adalah platfrom
            website inovatif yang menjadi pusat informasi bagi pemilik dan
            pengguna barbershop dan salon di Jabodetabek. Platfrom ini
            dikembangkan pada tahun 2023. Dan kami berkomitmen menyediakan
            informasi detail dan akurat, memfasilitasi pemilik usaha dalam
            mempromosikan layanan secara efektif, sementara pengguna dapat
            dengan mudah menemukan dan menilai berbagai barbershop dan salon.
            Bersama HairHub, kami berkomitmen mendukung pertumbuhan industri
            babershop dan salon!!
          </p>
        </div>
      </div>
    </div>
  );
};

export default Welcome;
