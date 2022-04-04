import React from 'react';
import useReviews from '../../coustomHooks/useRevieus';
import ReviewsCart from '../ReviewsCart/ReviewsCart';
import './Reviews.css'

const Reviews = () => {
    const [reviews, setReviews] = useReviews();
    return (
        <div className="my-5 shadow-lg p-4 rounded w-100 container">
            <h1 className="text-center">
            Customers Reviews ( {reviews.length} )
          </h1>
          {reviews.map((data) => (
            <ReviewsCart key={data.id} data={data}></ReviewsCart>
          ))}
        </div>
    );
};

export default Reviews;