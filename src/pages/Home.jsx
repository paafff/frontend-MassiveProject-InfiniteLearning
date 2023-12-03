import React from 'react';
import Layout from './Layout';
import Hero from '../components/Home/Hero';
import Welcome from '../components/Home/Welcome';
import TopCard from '../components/Home/TopCard';
import HairTrend from '../components/Home/HairTrend';
import ComponentPriceList from '../components/User/subscription/PriceList';
import Header from '../assets/images/icons/gataunamanya.png'
import Image from '../assets/images/image.png'

const Home = () => {
  const dataTopRecommend = [
    {
      id: 0
    },
    {
      id: 1
    },
    {
      id: 2
    },
    {
      id: 3
    },
    {
      id: 4
    },
    {
      id: 5
    },
    {
      id: 6
    },
  ]

  const dataPriceList = [
    {
      textColor: "text-zinc-900",
      bgColor: "bg-zinc-900",
      borderColor: "border-zinc-900",
      title: "Paket Basic",
      price: 120000,
      text: "Hal-hal penting untuk memberikan karya terbaik Anda kepada klien.",
      services: [
        "Penampilan profile bisnis dasar",
        "Bagikan 10 foto hasil potongan",
        "Informasi jam operasional bisnis",
        "Kontak langsung melalui tombol kontak",
        "Waktu respon dukungan 24 jam",
      ]
    },
    {
      textColor: "text-rose-400",
      bgColor: "bg-rose-400",
      borderColor: "border-rose-400",
      title: "Paket Premium",
      price: 240000,
      text: "Hal-hal penting untuk memberikan karya terbaik Anda kepada klien.",
      services: [
        "Semua fitur paket basic",
        "Informasi layanan lengkap",
        "Bagikan 20 foto hasil potongan rambut",
        "Pelanggan dapat memberikan ulasan",
        "Waktu respon dukungan 24 jam",
      ]
    },
    {
      textColor: "text-amber-500",
      bgColor: "bg-amber-500",
      borderColor: "border-amber-500",
      title: "Paket Bisnis",
      price: 360000,
      text: "Hal-hal penting untuk memberikan karya terbaik Anda kepada klien.",
      services: [
        "Semua fitur paket premium",
        "Analisis kinerja",
        "Fitur reservasi atau booking",
        "Peringkat visibilitas pencarian",
        "Dukungan prioritas pelanggan",
      ]
    },
  ]

  return (
    <Layout>

      <div className='min-h-screen min-w-full bg-white '>
        <Hero />
        <Welcome />
        <TopCard dataList={dataTopRecommend} />
        <HairTrend />

        <div className='w-full flex flex-col px-5'>
          <p className='text-center text-lg lg:text-xl xl:text-2xl font-bold'>Paket Harga Khusus Anda</p>
          <div className='w-full flex justify-center items-center my-1'>
            <img src={Header} alt="" />
          </div>
          <p className='text-sm md:text-base xl:text-xl md:px-20 xl:px-52 text-gray-500 text-center my-8'>
            Pilihlah paket yang <span className='text-rose-400'>terjangkau</span>, namun dilengkapi dengan keuntungan terbaik untuk terlibat dengan audiens anda, menciptakan loyalitas pelanggan, dan mendorong peningkatan penjualan.
          </p>
        </div>

        <div className='w-full md:mx-auto overflow-x-auto xl:justify-center flex gap-10 px-5 mb-16 md:px-12'>

          {dataPriceList.map(priceList => (
            <ComponentPriceList
              title={priceList.title}
              textColor={priceList.textColor}
              borderColor={priceList.borderColor}
              price={priceList.price}
              text={priceList.text}
              services={priceList.services}
              bgColor={priceList.bgColor}
            />
          ))}

        </div>

        <div className='w-full  flex bg-rose-400 p-3 lg:px-20 xl:px-64 py-7'>
          <div className='w-3/4 px-3 flex items-center justify-center'>
            <p className='text-sm md:text-base lg:text-lg text-white'>
              "Temukan Gaya Anda! Bergabunglah Bersama Kami untuk Menemukan Barbershop & Salon Impian Anda. Semua Ada di Sini!"
            </p>
          </div>
          <div className='w-1/4'>
            <img src={Image} className='w-64' alt="" />
          </div>
        </div>
      </div>

    </Layout>
  );
};

export default Home;
