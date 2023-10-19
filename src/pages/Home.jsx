import React from 'react';
import Banner from './../components/Header/Banner';
import Brands from './../components/Main/Brands';
import Products from './../components/Main/Products';
import About from './../components/Main/About';
import Newsletter from './../components/Main/Newsletter';
import Discount from './../components/Main/Discount';

const Home = () => {
    return (
        <div>
            <div data-aos="fade-up" data-aos-duration="2000">
                <Banner></Banner>
            </div>
            <div>
                <Brands></Brands>
            </div>
            <div>
                <Discount></Discount>
            </div>
            <div>
                <Products></Products>
            </div>
            <div>
                <About></About>
            </div>
            <div>
                <Newsletter></Newsletter>
            </div>
        </div>
    );
};

export default Home;