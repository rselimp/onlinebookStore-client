import React from 'react';
import useTitle from '../../hooks/useTitle';
import OfferBook from '../OfferBook/OfferBook';
import Banner from './Banner/Banner';
import Guides from './Guides/Guides';
import Services from './Services/Services';

const Home = () => {
    useTitle('Home')
    return (
        <div>
           <Banner></Banner>
           <Guides></Guides>
           <Services></Services>
           <OfferBook></OfferBook>
        </div>
    );
};

export default Home;