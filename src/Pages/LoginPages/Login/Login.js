import { Alert, Button, CircularProgress, TextField, Typography } from '@mui/material';
import React, { useState } from 'react';
import { Container } from 'react-bootstrap';
import { NavLink, useLocation, useHistory } from 'react-router-dom';
import useAuth from '../../hooks/useAuth';

const Login = () => {
    const location = useLocation();
    const history = useHistory();
    const { signInUser, error, isLoading, user, signInWithGoogle } = useAuth();
    const [loginData, setLoginData] = useState({});

    const handleOnBlur = e => {
        const field = e.target.name;
        const value = e.target.value;
        const newLoginData = { ...loginData };
        newLoginData[field] = value;
        setLoginData(newLoginData);
    };
    const handleLoginSubmit = e => {
        signInUser(loginData?.email, loginData?.password, location, history)
        e.preventDefault();
    };
    const handleGoogleSignin = () => {
        signInWithGoogle(location, history);
    };
    return (
        <Container>
            <div style={{ width: '50%', margin: '0 auto' }}>
                <Typography sx={{ mb: 3, mt: 9 }} variant="body1" gutterBottom>
                    Login
                </Typography>

                {!isLoading && <form onSubmit={handleLoginSubmit}>
                    <TextField
                        name="email"
                        onBlur={handleOnBlur}
                        sx={{ width: '75%', m: 1 }} type="text" id="standard-basic" label="Email" variant="standard" />
                    <TextField
                        name="password"
                        onBlur={handleOnBlur}
                        sx={{ width: '75%', m: 1 }} type="password" id="standard-basic" label="Password" variant="standard" />

                    <Button variant='contained' sx={{ width: '75%', m: 1 }} type="submit">Login</Button>

                    <NavLink style={{ textDecoration: 'none' }} to='/register'>
                        <Button variant="text">new user? register hare</Button>
                    </NavLink>
                </form>}
                <Typography sx={{ mb: 3, mt: 9 }} variant="body1" gutterBottom>
                    wanna try google log in?
                </Typography>
                <Button onClick={handleGoogleSignin} variant='contained' sx={{ width: '75%', m: 1 }} type="submit">Google Signup</Button>
                {isLoading && <CircularProgress />}
                {user?.email && <Alert severity="success">user login successfully !</Alert>}
                {error && <Alert severity="error">{error}</Alert>}
            </div>
        </Container>
    );
};

export default Login;