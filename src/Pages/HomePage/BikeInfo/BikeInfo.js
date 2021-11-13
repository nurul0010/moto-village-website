import * as React from 'react';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import { Typography } from '@mui/material';
import Button from '@mui/material/Button';
import SendIcon from '@mui/icons-material/Send';

const BikeInfo = () => {
    return (
        <Box className='container' sx={{ flexGrow: 1 }}>
            <Grid container style={{ marginTop: '100px' }}>
                <Grid item xs={12} md={6}>
                    <img style={{ width: '100%' }} src="https://i.postimg.cc/ZRjXK66K/685835-1.jpg" alt="" />
                </Grid>
                <Grid style={{ display: 'flex', alignItems: 'center', padding: '30px' }} item xs={12} md={6}>
                    <div>
                        <Typography variant="h5" style={{ fontWeight: 'bold', fontSize: '40px' }}>
                            QUALITY BIKES
                        </Typography>
                        <Typography>
                            we always suggest our bikes to ride a qualityfull bike.its ensure riders secure and enjoyable ride.recure bike ride mostly depends on secure breking system.we always ensure that our client dont panic about bike breaking and quality.
                        </Typography>
                        <Button className='mt-3' variant="contained" endIcon={<SendIcon />}>
                            learn more
                        </Button>
                    </div>
                </Grid>
            </Grid>
        </Box>
    );
};

export default BikeInfo;