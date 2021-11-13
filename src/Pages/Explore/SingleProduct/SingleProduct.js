import { Button, Card, CardActionArea, CardActions, CardContent, CardMedia, Grid, Typography } from '@mui/material';
import React from 'react';
import { Link } from 'react-router-dom';

const SingleProduct = ({ product }) => {
    return (
        <Grid item xs={4} sm={4} md={4}>
            <Card sx={{ minWidth: 275, border: 0, boxShadow: 0 }}>
                <CardActionArea>
                    <CardMedia
                        component="img"
                        style={{ width: '50%', margin: '0 auto' }}
                        image={product?.img}
                        alt="bike picture"
                    />
                    <CardContent>
                        <Typography gutterBottom variant="h5" component="div">
                            {product?.name}
                        </Typography>
                        <Typography variant="body2" color="text.secondary">
                            {product?.shortDescription}
                        </Typography>
                    </CardContent>
                </CardActionArea>
                <CardActions>
                    <Link to={`/details/${product?._id}`}><Button variant='contained' size="small" color="primary">
                        See Details
                    </Button></Link>
                </CardActions>
            </Card>
        </Grid>
    );
};

export default SingleProduct;