import React from 'react';

const DisplaySingleReview = ({ review }) => {
    return (
        <div class="carousel-item active">
            <img style={{ width: '60%', margin: '0 auto' }} src="https://i.postimg.cc/QMP04tHj/m-mt-15-11552647086.webp" alt="..." />
            <div class="carousel-caption d-none d-md-block">
                <h5 style={{ color: 'white' }}>{review?.userName}</h5>
                <p style={{ color: 'white' }}>{review?.review}</p>
            </div>
        </div>
    );
};

export default DisplaySingleReview;