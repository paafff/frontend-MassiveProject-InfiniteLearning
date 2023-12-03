import React from 'react';
import Layout from '../Layout';
import PacketSubscription from '../../components/User/PacketSubscription';
import FormSubscription from '../../components/User/FormSubscription';

const Subscription = () => {
  return (
    <Layout>
        <div class='mt-10 grid grid-cols-2'>
            <PacketSubscription />
            <FormSubscription />
        </div>
    </Layout>
  )
}

export default Subscription