import React from 'react';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import { Typography } from '@mui/material';

const PopularBikes = () => {
    return (
        <div className='container'>
            <div style={{ marginTop: '100px', marginBottom: '70px' }}>
                <Typography variant='h5' style={{ fontWeight: 'bold', fontSize: '30px' }}>
                    MOST POPULAR BIKES IN BD
                </Typography>
            </div>
            <Box sx={{ flexGrow: 1 }}>
                <Grid container>
                    <Grid item xs={12} md={3}>
                        <img style={{ width: '90%' }} src="https://i.postimg.cc/sXsSVhJX/yamaha-r15-v4-launched-at-rs-168-lakh.webp" alt="" />
                    </Grid>
                    <Grid item xs={12} md={3}>
                        <img style={{ width: '90%' }} src="https://i.postimg.cc/gcqpX6Hp/5d37e81785fc0.webp" alt="" />
                    </Grid>
                    <Grid item xs={12} md={3}>
                        <img style={{ width: '90%' }} src="https://i.postimg.cc/d0m6mvHh/honda-cbr-150-price-1.jpg" alt="" />
                    </Grid>
                    <Grid item xs={12} md={3}>
                        <img style={{ width: '90%' }} src="https://i.postimg.cc/YSqR3ZJ8/2021-yamaha-xsr155-india-1.jpg" alt="" />
                    </Grid>
                </Grid>
            </Box>
        </div>
    );
};

export default PopularBikes;