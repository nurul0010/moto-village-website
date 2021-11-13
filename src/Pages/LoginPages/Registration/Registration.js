import { Alert, Button, CircularProgress, TextField, Typography } from '@mui/material';
import React, { useState } from 'react';
import { Container } from 'react-bootstrap';
import { NavLink, useHistory } from 'react-router-dom';
import useAuth from '../../hooks/useAuth';

const Registration = () => {
    const { user, registerUser, isLoading, error } = useAuth();
    const [registrationData, setRegistrationData] = useState({});

    const history = useHistory();

    const handleOnBlur = e => {
        const field = e.target.name;
        const value = e.target.value;
        const newRegistrationData = { ...registrationData };
        newRegistrationData[field] = value;
        setRegistrationData(newRegistrationData);
    };
    const handleRegSubmit = e => {

        if (registrationData?.password !== registrationData?.retypePassword) {
            alert('your password didnot match');
            return;
        }
        registerUser(registrationData?.email, registrationData?.password, registrationData?.username, history);
        e.preventDefault();
    }
    return (
        <Container>

            <div style={{ width: '50%', margin: '0 auto' }}>
                <Typography sx={{ mb: 3, mt: 9 }} variant="body1" gutterBottom>
                    Register
                </Typography>

                {!isLoading && <form onSubmit={handleRegSubmit}>
                    <TextField
                        name="username"
                        onBlur={handleOnBlur}
                        sx={{ width: '75%', m: 1 }} type="text" id="standard-basic" label="Name" variant="standard" />
                    <TextField
                        name="email"
                        onBlur={handleOnBlur}
                        sx={{ width: '75%', m: 1 }} type="email" id="standard-basic" label="Email" variant="standard" />
                    <TextField
                        name="password"
                        onBlur={handleOnBlur}
                        sx={{ width: '75%', m: 1 }} type="password" id="standard-basic" label="Set password" variant="standard" />
                    <TextField
                        name="retypePassword"
                        onBlur={handleOnBlur}
                        sx={{ width: '75%', m: 1 }} type="password" id="standard-basic" label="Retype password" variant="standard" />

                    <Button variant='contained' sx={{ width: '75%', m: 1 }} type="submit">Register</Button>

                    <NavLink style={{ textDecoration: 'none' }} to='/login'>
                        <Button variant="text">already registerd? login hare</Button>
                    </NavLink>
                </form>}
                {isLoading && <CircularProgress />}
                {user?.email && <Alert severity="success">user registered successfully !</Alert>}
                {error && <Alert severity="error">{error}</Alert>}
            </div>

        </Container>
    );
};

export default Registration;