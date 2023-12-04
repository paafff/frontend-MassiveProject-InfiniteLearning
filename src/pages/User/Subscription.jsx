import React from 'react';
import Layout from '../Layout';
import PriceList from '../../components/User/subscription/PriceList';
import FormSubscription from '../../components/User/FormSubscription';

const Subscription = () => {

  const dataPriceList = {
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
  }
  const formattedPrice = new Intl.NumberFormat('id-ID', {
    style: 'currency',
    currency: 'IDR', // Change this to your desired currency code
    minimumFractionDigits: 2,
    maximumFractionDigits: 2,
  }).format(dataPriceList.price);

  return (
    <Layout>
      <div class='w-full min-h-screen flex flex-col lg:flex-row items-center xl:w-3/4 xl:mx-auto'>
        <PriceList
          textColor={dataPriceList.textColor}
          bgColor={dataPriceList.bgColor}
          borderColor={dataPriceList.borderColor}
          title={dataPriceList.title}
          price={dataPriceList.price}
          text={dataPriceList.text}
          services={dataPriceList.services}

        />
        <FormSubscription
          price={formattedPrice}
        />
      </div>
    </Layout>
  )
}

export default Subscription