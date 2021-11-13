import React, { useState } from 'react';
import TextField from '@mui/material/TextField';
import { Button } from '@mui/material';
import Alert from '@mui/material/Alert';

const MakeAdmin = () => {

    const [email, setEmail] = useState();
    const [success, setSuccess] = useState(false);
    const handleOnBlur = e => {
        const email = e.target.value;
        setEmail(email);
    }
    const handleForm = e => {
        const user = { email };
        fetch('https://stark-fortress-48144.herokuapp.com/users/admin', {
            method: 'put',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(user)
        })
            .then(res => res.json())
            .then(data => {
                if (data.modifiedCount) {
                    setSuccess(true);
                    setEmail('')
                }
            })
        e.preventDefault();
    }
    return (
        <div>
            <h3>Make an Admin</h3>
            <br></br>
            <form onSubmit={handleForm}>
                <TextField sx={{ width: '30%' }} id="standard-basic" type='email' onBlur={handleOnBlur} label="enter email" variant="standard" /><br /><br />
                {!success && <Button variant='contained' type='submit'>Set Admin</Button>}
            </form>
            {success && <Alert severity="success">Set Admin roll successfully</Alert>}

        </div>
    );
};

export default MakeAdmin;