import React from 'react';
import './ReviewsCart.css'
const ReviewsCart = ({data}) => {
    const {name, picture, rating, review} =data
    return (
        <div className='review-cart d-flex align-item-center my-3 shadow-lg p-3 rounded'>
            <div>
                <img src={picture} alt="" />
            </div>
            <div className='ms-4 '>
                <h5 className='m-0'>{name}</h5>
                <p  className='m-0'>{review}</p>
                <p  className='m-0'>Rating: {rating} star</p>
            </div>
        </div>
    );
};

export default ReviewsCart;