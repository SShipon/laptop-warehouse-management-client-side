import React from 'react';
import ExtraBanner from '../../ExtraBanner/ExtraBanner';
import Loding from '../../Loding/Loding';
import SecondBanner from '../2ndBanner/SecondBanner';
import Banner from '../Banner/Banner.jsx';
import Items from '../Items/Items';

import ThirdBanner from '../ThirdBanner/ThirdBanner';
import './Home.css'


const Home = () => {
    return (
        <div>
             
             <Banner/>
            <Items></Items>
           
           
        </div>
    );
};

export default Home;