import * as React from 'react';
import Backdrop from '@mui/material/Backdrop';
import Box from '@mui/material/Box';
import Modal from '@mui/material/Modal';
import Fade from '@mui/material/Fade';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import TextField from '@mui/material/TextField';
import useAuth from '../../hooks/useAuth';


const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 400,
    bgcolor: 'background.paper',
    border: '2px solid #000',
    boxShadow: 24,
    p: 4,
};


const BookingModal = ({ openModal, handleModalClose, product, setOrderSuccess }) => {

    const { user } = useAuth();
    const initialValue = { clientName: user?.displayName, email: user?.email, productQuantity: 1 };
    const [orderInfo, setOrderInfo] = React.useState(initialValue);


    const handleOnBlur = e => {
        const field = e.target.name;
        const value = e.target.value;
        const newBooking = { ...orderInfo };
        newBooking[field] = value;

        setOrderInfo(newBooking);
    }


    const handleModalSubmit = e => {
        e.preventDefault();
        // collect data
        const orderDetails = {
            ...orderInfo,
            productName: product?.name,
            price: product?.price,
            date: new Date().toDateString()
        };

        console.log(orderDetails)
        // pass to backend 
        fetch('https://stark-fortress-48144.herokuapp.com/orders', {
            method: 'post',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(orderDetails)
        })
            .then(res => res.json())
            .then(data => {
                if (data.insertedId) {
                    setOrderSuccess(true);
                    handleModalClose();
                }
            })
    }
    return (
        <div>
            <Modal
                aria-labelledby="transition-modal-title"
                aria-describedby="transition-modal-description"
                open={openModal}
                onClose={handleModalClose}
                closeAfterTransition
                BackdropComponent={Backdrop}
                BackdropProps={{
                    timeout: 500,
                }}
            >
                <Fade in={openModal}>
                    <Box sx={style}>
                        <Typography id="transition-modal-title" variant="h6" component="h2">
                            {product?.name}
                        </Typography>
                        <form onSubmit={handleModalSubmit}>
                            <TextField disabled sx={{ width: '90%', m: 1 }} type="text" id="standard-basic" label="Product Name" name="productName" variant="standard" defaultValue={product?.name} />

                            <TextField sx={{ width: '90%', m: 1 }} type="number" id="standard-basic" label="Product Quantity" name="productQuantity" onBlur={handleOnBlur} variant="standard" defaultValue="1" />

                            <TextField sx={{ width: '90%', m: 1 }} type="text" id="standard-basic" label="Name" name="displayName" onBlur={handleOnBlur} variant="standard" defaultValue={user?.displayName} />

                            <TextField sx={{ width: '90%', m: 1 }} type="email" id="standard-basic" label="Email" name="email" variant="standard" defaultValue={user?.email} disabled />

                            <TextField sx={{ width: '90%', m: 1 }} type="number" id="standard-basic" label="Number" name="number" onBlur={handleOnBlur} variant="standard" />

                            <TextField sx={{ width: '90%', m: 1 }} type="text" id="standard-basic" label="Address" name="address" onBlur={handleOnBlur} variant="standard" />

                            <Button sx={{ width: '50%', m: 1 }} type="submit" variant='contained'>Place Order</Button>
                        </form>
                    </Box>
                </Fade>
            </Modal>
        </div>
    );
};

export default BookingModal;