import React from 'react';
import Layout from '../Layout';

import FormReview from '../../components/User/FormReview';
import UserReview from '../../components/User/UserReview';

const InputReview = () => {
    return (
        <Layout>
            <div class='grid grid-cols-4'>
                <FormReview />
                <UserReview />
            </div>
        </Layout>
    );
};

export default InputReview;