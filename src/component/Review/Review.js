import React from 'react';
import CustomerReview from '../CustomerReview/CustomerReview';
import useReviews from '../Hook/useReview';

const Review = () => {
    const [reviews, setReviews] = useReviews();

    return (
        <div className='review-conteiner'>
            <h2>All Customer Reviews ({reviews.length})</h2>

            {
                reviews.map(review => <CustomerReview
                    key={review.id}
                    review={review}
                ></CustomerReview>)
            }

        </div>
    );
};

export default Review;