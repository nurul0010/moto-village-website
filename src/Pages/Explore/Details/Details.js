import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { Alert, Button, CardActionArea, CardActions } from '@mui/material';
import BookingModal from '../BookingModal/BookingModal';
import { Link } from 'react-router-dom';
import ResponsiveNavigation from '../../Shared/ResponsiveNevigation/ResponsiveNavigation';

const Details = () => {
    const [openModal, setModalOpen] = React.useState(false);
    const handleModalOpen = () => setModalOpen(true);
    const handleModalClose = () => setModalOpen(false);
    const { id } = useParams();
    console.log('id', id);
    const [product, setProduct] = useState({});
    const [orderSuccess, setOrderSuccess] = useState(false);
    useEffect(() => {
        const uri = `https://stark-fortress-48144.herokuapp.com/products/${id}`;
        fetch(uri)
            .then(res => res.json())
            .then(data => setProduct(data))
    }, [id]);

    return (
        <div>
            <ResponsiveNavigation></ResponsiveNavigation>
            <Card sx={{ maxWidth: 700, margin: '0 auto', marginTop: '50px' }}>
                <CardActionArea>
                    <CardMedia
                        component="img"
                        height="auto"
                        image={product?.img}
                        style={{ width: '650px', height: '400px', margin: '0 auto' }}
                        alt="product img"
                    />
                    <CardContent>
                        <Typography gutterBottom variant="h5" component="div">
                            {product?.name}
                        </Typography>
                        <Typography gutterBottom variant="h6" component="div">
                            {product?.price}(appoximetly)
                        </Typography>
                        <Typography variant="body2" color="text.secondary">
                            {product?.longDescription}
                        </Typography>
                    </CardContent>
                </CardActionArea>
                <CardActions>
                    {orderSuccess ?
                        <div style={{ display: 'inline-block' }}>
                            <Alert severity="success">your order successfully placed!</Alert>
                            <Link to='/home'>
                                <Button variant='text' style={{ color: 'white', backgroundColor: 'green' }}>Home</Button>
                            </Link>

                        </div>
                        :
                        <Button onClick={handleModalOpen} style={{ fontWeight: 'bold', fontSize: '20px' }} size="medium" color="primary">
                            Order Now
                        </Button>}
                </CardActions>
            </Card>
            <BookingModal
                setOrderSuccess={setOrderSuccess}
                product={product}
                openModal={openModal}
                handleModalClose={handleModalClose}
            ></BookingModal>
        </div>
    );
};

export default Details;