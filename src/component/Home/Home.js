import React from 'react';
import ProductInfo from '../Product-info/ProductInfo';
import img from '../../image/dell.png'
import './Home.css'

const Home = () => {
    return (
        <div className='home-conteiner'>
            <div className="product-info">
                <ProductInfo></ProductInfo>
            </div>
            <div className="product-img">
                <img src={img} alt="" />
            </div>
        </div>
    );
};

export default Home;