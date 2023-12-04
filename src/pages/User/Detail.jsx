import React from 'react';
import Layout from '../Layout';
import Gallery from '../../components/User/Gallery';
import ContentDetail from '../../components/User/ContentDetail';

const Detail = () => {
    return (
        <Layout>
            <div class='xl:w-3/4 w-full px-3 md:px-5 min-h-screen my-5 mx-auto'>
                <Gallery />
                <ContentDetail />
            </div>
        </Layout>
    )
}

export default Detail;