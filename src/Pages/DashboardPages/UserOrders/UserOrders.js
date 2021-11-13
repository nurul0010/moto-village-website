import * as React from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import useAuth from '../../hooks/useAuth';
import Button from '@mui/material/Button';

const UserOrders = () => {
    const { user } = useAuth();
    const [orders, setOrders] = React.useState();

    React.useEffect(() => {
        const uri = `https://stark-fortress-48144.herokuapp.com/orders/user?email=${user?.email}`;
        fetch(uri)
            .then(res => res.json())
            .then(data => setOrders(data))
    }, [user?.email]);

    const handleDeleteOrder = (id) => {
        if (window.confirm('are you sure to delete this order?') === true) {
            const uri = `https://stark-fortress-48144.herokuapp.com/orders/${id}`;
            fetch(uri, {
                method: 'delete'
            })
                .then(res => res.json())
                .then(data => {
                    if (data.deletedCount > 0) {
                        alert('successfully cancled order');
                        const remainingOrders = orders.filter(order => order._id !== id);
                        setOrders(remainingOrders);
                    }
                })
        }
        else {
            return
        }
    }
    return (
        <div>
            <h3>these are users order {orders?.length}</h3>
            <TableContainer component={Paper}>
                <Table aria-label="simple table">
                    <TableHead>
                        <TableRow>
                            <TableCell>Product Name</TableCell>
                            <TableCell align="right">Order Date</TableCell>
                            <TableCell align="right">Quantity</TableCell>
                            <TableCell align="right">Address</TableCell>
                            <TableCell align="right">Price</TableCell>
                            <TableCell align="right">Action</TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {orders?.map((order) => (
                            <TableRow
                                key={order?._id}
                                sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                            >
                                <TableCell component="th" scope="row">
                                    {order?.productName}
                                </TableCell>
                                <TableCell align="right">{order.date}</TableCell>
                                <TableCell align="right">{order.productQuantity}</TableCell>
                                <TableCell align="right">{order.address}</TableCell>
                                <TableCell align="right">{order.price}</TableCell>
                                <TableCell align="right">
                                    <Button onClick={() => handleDeleteOrder(order?._id)} variant='small' style={{ backgroundColor: 'red', color: 'white' }}>cancel</Button>
                                </TableCell>
                            </TableRow>
                        ))}
                    </TableBody>
                </Table>
            </TableContainer>
        </div>
    );
};

export default UserOrders;