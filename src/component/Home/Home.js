import React from 'react';
import ProductInfo from '../Product-info/ProductInfo';
import img from '../../image/dell.png'
import './Home.css'
import CustomerReview from '../CustomerReview/CustomerReview';
import useReviews from '../Hook/useReview';
import { Link } from 'react-router-dom';

const Home = () => {
    const [reviews, setReviews] = useReviews();
    const newReviews = (reviews.slice(0, 3));

    return (
        <div>
            <div className='home-conteiner'>
                <div className="product-info">
                    <ProductInfo></ProductInfo>
                </div>
                <div className="product-img">
                    <img src={img} alt="" />
                </div>
            </div>
            <div className="review-conteiner">
                <h2>Customer Review ({newReviews.length})</h2>
                {
                    newReviews.map(review => <CustomerReview
                        key={review.id}
                        review={review}
                    ></CustomerReview>)
                }
                <Link to="/review"><button className='seeAllBtn'>See all review</button></Link>
            </div>
        </div>
    );
};

export default Home;