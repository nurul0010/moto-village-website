import React, { useEffect, useState } from 'react';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Bike from '../Bike/Bike';
import { Container } from '@mui/material';

const Bikes = () => {

    const [products, setProducts] = useState([]);
    useEffect(() => {
        fetch('https://stark-fortress-48144.herokuapp.com/products')
            .then(res => res.json())
            .then(data => setProducts(data.slice(0, 6)))
    }, [])

    return (
        <div>
            <h2>OUR PRODUCTS</h2>
            <h4>BIKES</h4>
            <Box sx={{ flexGrow: 1 }}>
                <Container>
                    <Grid container spacing={{ xs: 2, md: 3 }} columns={{ xs: 4, sm: 8, md: 12 }}>
                        {
                            products.map(bike => <Bike
                                key={bike?.name}
                                bike={bike}
                            ></Bike>)
                        }
                    </Grid>
                </Container>
            </Box>
        </div>
    );
};

export default Bikes;