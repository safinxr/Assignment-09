import React from 'react';
import './ReviewsCart.css'
const ReviewsCart = ({data}) => {
    const {name, picture, rating, review} =data
    return (
        <div className='review-cart d-flex'>
            <div>
                <img src={picture} alt="" />
            </div>
            <div className='ms-3'>
                <h3>{name}</h3>
                <p>{review}</p>
                <p>Rating: {rating} star</p>
            </div>
        </div>
    );
};

export default ReviewsCart;