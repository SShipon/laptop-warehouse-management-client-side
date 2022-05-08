import React from 'react';
import AnalyseProduct from '../AnalyseProduct/AnalyseProduct.jsx';
import Banner from '../Banner/Banner.jsx';
import Clients from '../Clients/Clients.jsx';
import Items from '../Items/Items';
import Support from '../Support/Support.jsx';


import './Home.css'


const Home = () => {
    return (
        <div>
            <Banner />
            <AnalyseProduct/>
            <Items />
            <Clients/>
            <Support/>
        </div>
    );
};

export default Home;