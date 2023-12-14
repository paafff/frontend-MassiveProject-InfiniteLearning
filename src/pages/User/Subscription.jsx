import React, {useState, useEffect} from 'react';
import Layout from '../Layout';
import PriceList from '../../components/User/subscription/PriceList';
import FormSubscription from '../../components/User/FormSubscription';
import priceLists from '../../data/priceList';
import { useLocation } from 'react-router-dom';

const Subscription = () => {

  const [dataPriceList, setDataPriceList] = useState(null)
  const [index, setIndex] = useState(null)
  const location = useLocation()
  const searchParams = new URLSearchParams(location.search)

  useEffect(() => {
    setIndex(searchParams.get('index'))
    setDataPriceList(priceLists[index])
  },[index])

  const formattedPrice = new Intl.NumberFormat('id-ID', {
    style: 'currency',
    currency: 'IDR', // Change this to your desired currency code
    minimumFractionDigits: 2,
    maximumFractionDigits: 2,
  }).format(dataPriceList?.price);

  return (
    <Layout>
      <div class='w-full min-h-screen flex flex-col lg:flex-row items-center xl:w-3/4 xl:mx-auto'>
        <PriceList
          textColor={dataPriceList?.textColor}
          bgColor={dataPriceList?.bgColor}
          borderColor={dataPriceList?.borderColor}
          title={dataPriceList?.title}
          price={dataPriceList?.price}
          text={dataPriceList?.text}
          services={dataPriceList?.services}

        />
        <FormSubscription
          price={formattedPrice}
          oriPrice={dataPriceList?.price}
        />
      </div>
    </Layout>
  )
}

export default Subscription