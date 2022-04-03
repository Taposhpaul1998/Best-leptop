import React from 'react';
import ProductInfo from '../Product-info/ProductInfo';

const Home = () => {
    return (
        <div className='home-conteiner'>
            <div className="product-info">
                <ProductInfo></ProductInfo>
            </div>
            <div className="product-img"></div>
        </div>
    );
};

export default Home;