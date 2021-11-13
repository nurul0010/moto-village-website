import * as React from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import Button from '@mui/material/Button';

const ManageAllProduct = () => {
    const [allProduct, setAllProduct] = React.useState();

    React.useEffect(() => {
        const uri = `https://stark-fortress-48144.herokuapp.com/products`;
        fetch(uri)
            .then(res => res.json())
            .then(data => setAllProduct(data))
    }, []);

    const handleDeleteOrder = (id) => {
        if (window.confirm('are you sure to remove this product?') === true) {
            const uri = `https://stark-fortress-48144.herokuapp.com/products/${id}`;
            fetch(uri, {
                method: 'delete'
            })
                .then(res => res.json())
                .then(data => {
                    if (data.deletedCount > 0) {
                        alert('successfully cancled order');
                        const remainingOrders = allProduct.filter(order => order._id !== id);
                        setAllProduct(remainingOrders);
                    }
                })
        }
        else {
            return
        }
    }
    return (
        <div>
            <h3>these are users order {allProduct?.length}</h3>
            <TableContainer component={Paper}>
                <Table aria-label="simple table">
                    <TableHead>
                        <TableRow>
                            <TableCell>Product Name</TableCell>
                            <TableCell align="right">Price</TableCell>
                            <TableCell align="right">Action</TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {allProduct?.map((order) => (
                            <TableRow
                                key={order?._id}
                                sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                            >
                                <TableCell component="th" scope="row">
                                    {order?.name}
                                </TableCell>
                                <TableCell align="right">{order.price}</TableCell>
                                <TableCell align="right">
                                    <Button onClick={() => handleDeleteOrder(order?._id)} variant='small' style={{ backgroundColor: 'red', color: 'white' }}>remove</Button>
                                </TableCell>
                            </TableRow>
                        ))}
                    </TableBody>
                </Table>
            </TableContainer>
        </div>
    );
};

export default ManageAllProduct;