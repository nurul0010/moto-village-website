import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import { NavLink } from 'react-router-dom';
import useAuth from '../../hooks/useAuth';

const Navigation = () => {
    const { user, logOut } = useAuth();
    return (
        <Box sx={{ flexGrow: 1 }}>
            <AppBar position="static">
                <Toolbar>
                    <IconButton
                        size="large"
                        edge="start"
                        color="inherit"
                        aria-label="menu"
                        sx={{ mr: 2 }}
                    >
                        <MenuIcon />
                    </IconButton>
                    <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
                        Moto Village
                    </Typography>
                    <NavLink to='/explore'><Button style={{ color: 'white' }}>Explore</Button></NavLink>

                    {
                        user?.email ?
                            <Box>
                                <NavLink to='/dashboard'><Button style={{ color: 'white' }}>Dashboard</Button></NavLink>
                                <Button onClick={logOut} variant="text" style={{ color: 'white' }}>Logout</Button>
                            </Box>
                            :
                            <NavLink to='/login'><Button style={{ color: 'white' }}>Login/Registration</Button></NavLink>
                    }
                </Toolbar>
            </AppBar>
        </Box>
    );
};

export default Navigation;