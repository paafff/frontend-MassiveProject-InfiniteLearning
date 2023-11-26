import React from 'react';
import Layout from '../Layout';
import Gallery from '../../components/User/Gallery';
import ContentDetail from '../../components/User/ContentDetail';

const Detail = () => {
    return (
        <Layout>
            <div class='mx-20 my-10'>
                <Gallery />
                <ContentDetail />
            </div>
        </Layout>
    )
}

export default Detail;