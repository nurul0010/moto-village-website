import React, { useState } from 'react';
import TextField from '@mui/material/TextField';
import { Button } from '@mui/material';
import Alert from '@mui/material/Alert';
import useAuth from '../../hooks/useAuth';
import DisplayReview from '../DisplayReview/DisplayReview';


const Review = () => {
    const { user } = useAuth();
    const [review, setReview] = useState({});
    const [success, setSuccess] = useState(false);
    const handleOnBlur = e => {
        const reviewText = e.target.value;
        setReview(reviewText);

    }
    const handleForm = e => {
        const comment = { review, userName: user?.displayName };
        fetch('https://stark-fortress-48144.herokuapp.com/reviews', {
            method: 'post',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(comment)
        })
            .then(res => res.json())
            .then(data => {
                // console.log(data)
                if (data.insertedId) {
                    setSuccess(true);
                    setReview('')
                }
            })
        e.preventDefault();
    }

    return (
        <div style={{ margin: '100px 0' }}>
            <h3>this is review section</h3>
            <DisplayReview></DisplayReview>
            <form onSubmit={handleForm}>
                <TextField multiline sx={{ width: '30%' }} id="standard-basic" type='email' onBlur={handleOnBlur} label="Your Review Hare" variant="standard" /><br /><br />
                {!success && <Button variant='contained' type='submit'>Submit</Button>}
            </form>
            {success && <Alert severity="success">Review added successfully</Alert>}
        </div>
    );
};

export default Review;