import React, { useEffect, useState } from 'react';
import DisplaySingleReview from '../DisplaySingleReview/DisplaySingleReview';

const DisplayReview = () => {
    const [reviews, setReviews] = useState([]);
    useEffect(() => {
        fetch('https://stark-fortress-48144.herokuapp.com/reviews')
            .then(res => res.json())
            .then(data => setReviews(data))
    }, [])
    return (

        <div style={{ width: '60%', margin: "0 auto", backgroundColor: 'lightgray' }} id="carouselExampleCaptions" class="carousel slide" data-bs-ride="carousel">
            <div class="carousel-indicators">
                <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="0" class="active" aria-current="true" aria-label="Slide 1"></button>
                <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="1" aria-label="Slide 2"></button>
                <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="2" aria-label="Slide 3"></button>
            </div>
            <div class="carousel-inner">

                {
                    reviews?.map(review => <DisplaySingleReview
                        key={review._id}
                        review={review}
                    ></DisplaySingleReview>)
                }

            </div>
            <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="prev">
                <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                <span class="visually-hidden">Previous</span>
            </button>
            <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="next">
                <span class="carousel-control-next-icon" aria-hidden="true"></span>
                <span class="visually-hidden">Next</span>
            </button>
        </div>

    );
};

export default DisplayReview;