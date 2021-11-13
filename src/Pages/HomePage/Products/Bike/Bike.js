import { Button, CardActionArea, CardActions, CardContent, CardMedia, Grid, Typography } from '@mui/material';
import React from 'react';
import Card from '@mui/material/Card';
import { Link } from 'react-router-dom';

const Bike = ({ bike }) => {
    return (

        <Grid item xs={4} sm={4} md={4}>
            <Card sx={{ minWidth: 275, border: 0, boxShadow: 0 }}>
                <CardActionArea>
                    <CardMedia
                        component="img"
                        style={{ width: '50%', margin: '0 auto' }}
                        image={bike?.img}
                        alt="bike picture"
                    />
                    <CardContent>
                        <Typography gutterBottom variant="h5" component="div">
                            {bike?.name}
                        </Typography>
                        <Typography variant="body2" color="text.secondary">
                            {bike?.shortDescription}
                        </Typography>
                    </CardContent>
                </CardActionArea>
                <CardActions>
                    <Link to='/explore'>
                        <Button variant='contained' size="small" color="primary">
                            explore
                        </Button>
                    </Link>
                </CardActions>
            </Card>
        </Grid>
    );
};

export default Bike;