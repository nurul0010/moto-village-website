import * as React from 'react';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import { Typography } from '@mui/material';
import Button from '@mui/material/Button';
import SendIcon from '@mui/icons-material/Send';

const PartsInfo = () => {
    return (
        <Box className='container' sx={{ flexGrow: 1 }}>
            <Grid container>

                <Grid style={{ display: 'flex', alignItems: 'center', padding: '30px' }} item xs={12} md={6}>
                    <div>
                        <Typography variant="h5" style={{ fontWeight: 'bold', fontSize: '40px' }}>
                            QUALITY PARTS
                        </Typography>
                        <Typography>
                            If you are a rider then you definetly know how important a quality bike parts is.those rider who enjoy to make his/her bike with custom design or extra facilities, we are very happy to send message to them that our parts makes them happy
                        </Typography>
                        <Button className='mt-3' variant="contained" endIcon={<SendIcon />}>
                            learn more
                        </Button>
                    </div>
                </Grid>
                <Grid item xs={12} md={6}>
                    <img className='img-fluid' style={{ width: '100%', height: '400px' }} src="https://i.postimg.cc/bvn3BkmF/photo-1580341567260-3569b4dc537a-1.jpg" alt="" />
                </Grid>
            </Grid>
        </Box>
    );
};

export default PartsInfo;