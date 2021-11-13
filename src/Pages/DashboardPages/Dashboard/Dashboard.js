import * as React from 'react';
import PropTypes from 'prop-types';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import CssBaseline from '@mui/material/CssBaseline';
import Divider from '@mui/material/Divider';
import Drawer from '@mui/material/Drawer';
import IconButton from '@mui/material/IconButton';
import InboxIcon from '@mui/icons-material/MoveToInbox';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import MailIcon from '@mui/icons-material/Mail';
import MenuIcon from '@mui/icons-material/Menu';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import UserOrders from '../UserOrders/UserOrders';
import {

    Switch,
    Route,
    useRouteMatch,
    NavLink
} from "react-router-dom";
import Button from '@mui/material/Button';
import MakeAdmin from '../MakeAdmin/MakeAdmin';
import AddProduct from '../AddProduct/AddProduct';
import useAuth from '../../hooks/useAuth';
import AdminRoute from '../../LoginPages/AdminRoute/AdminRoute';
import ManageAllOrder from '../ManageAllOrder/ManageAllOrder';
import Payment from '../Payment/Payment';
import ManageAllProduct from '../ManageAllProduct/ManageAllProduct'

const drawerWidth = 240;

const Dashboard = (props) => {
    const { admin } = useAuth();
    // console.log(admin);
    const { window } = props;
    const [mobileOpen, setMobileOpen] = React.useState(false);

    let { path, url } = useRouteMatch();
    const handleDrawerToggle = () => {
        setMobileOpen(!mobileOpen);
    };

    const drawer = (
        <div>
            <Toolbar />
            <Divider />
            <NavLink to='/'><Button variant='text' style={{ color: 'gray' }}>Home</Button></NavLink> <br />
            <NavLink to='/explore'><Button variant='text' style={{ color: 'gray' }}>Explore Product</Button></NavLink>

            <NavLink to={`${url}/userorders`}><Button variant='text' style={{ color: 'gray' }}>User Orders</Button></NavLink> <br />

            <NavLink to={`${url}/payment`}><Button variant='text' style={{ color: 'gray' }}>payment</Button></NavLink> <br />

            {admin && <Box>
                <NavLink to={`${url}/makeadmin`}><Button variant='text' style={{ color: 'gray' }}>Make Admin</Button></NavLink> <br />

                <NavLink to={`${url}/addproduct`}><Button variant='text' style={{ color: 'gray' }}>Add Product</Button></NavLink><br />

                <NavLink to={`${url}/manageallorder`}><Button variant='text' style={{ color: 'gray' }}>Manage All Order</Button></NavLink>

                <br />
                <NavLink to={`${url}/manageallproduct`}><Button variant='text' style={{ color: 'gray' }}>Manage All Product</Button></NavLink>
            </Box>}
            <List>
                {['Inbox', 'Starred', 'Send email', 'Drafts'].map((text, index) => (
                    <ListItem button key={text}>
                        <ListItemIcon>
                            {index % 2 === 0 ? <InboxIcon /> : <MailIcon />}
                        </ListItemIcon>
                        <ListItemText primary={text} />
                    </ListItem>
                ))}
            </List>
            <Divider />

        </div>
    );

    const container = window !== undefined ? () => window().document.body : undefined;

    return (
        <Box sx={{ display: 'flex' }}>
            <CssBaseline />
            <AppBar
                position="fixed"
                sx={{
                    width: { sm: `calc(100% - ${drawerWidth}px)` },
                    ml: { sm: `${drawerWidth}px` },
                }}
            >
                <Toolbar>
                    <IconButton
                        color="inherit"
                        aria-label="open drawer"
                        edge="start"
                        onClick={handleDrawerToggle}
                        sx={{ mr: 2, display: { sm: 'none' } }}
                    >
                        <MenuIcon />
                    </IconButton>
                    <Typography variant="h6" noWrap component="div">
                        Users Dashboard
                    </Typography>
                </Toolbar>
            </AppBar>
            <Box
                component="nav"
                sx={{ width: { sm: drawerWidth }, flexShrink: { sm: 0 } }}
                aria-label="mailbox folders"
            >
                {/* The implementation can be swapped with js to avoid SEO duplication of links. */}
                <Drawer
                    container={container}
                    variant="temporary"
                    open={mobileOpen}
                    onClose={handleDrawerToggle}
                    ModalProps={{
                        keepMounted: true, // Better open performance on mobile.
                    }}
                    sx={{
                        display: { xs: 'block', sm: 'none' },
                        '& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth },
                    }}
                >
                    {drawer}
                </Drawer>
                <Drawer
                    variant="permanent"
                    sx={{
                        display: { xs: 'none', sm: 'block' },
                        '& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth },
                    }}
                    open
                >
                    {drawer}
                </Drawer>
            </Box>
            <Box
                component="main"
                sx={{ flexGrow: 1, p: 3, width: { sm: `calc(100% - ${drawerWidth}px)` } }}
            >
                <Toolbar />

                <Switch>
                    <Route exact path={path}>
                        <UserOrders></UserOrders>
                    </Route>
                    <Route path={`${path}/userorders`}>
                        <UserOrders></UserOrders>
                    </Route>
                    <Route path={`${path}/payment`}>
                        <Payment></Payment>
                    </Route>
                    <AdminRoute path={`${path}/makeadmin`}>
                        <MakeAdmin></MakeAdmin>
                    </AdminRoute>
                    <AdminRoute path={`${path}/addproduct`}>
                        <AddProduct></AddProduct>
                    </AdminRoute>
                    <AdminRoute path={`${path}/manageallorder`}>
                        <ManageAllOrder></ManageAllOrder>
                    </AdminRoute>
                    <AdminRoute path={`${path}/manageallproduct`}>
                        <ManageAllProduct></ManageAllProduct>
                    </AdminRoute>
                </Switch>

            </Box>
        </Box>
    );
}

Dashboard.propTypes = {
    /**
     * Injected by the documentation to work in an iframe.
     * You won't need it on your project.
     */
    window: PropTypes.func,
};

export default Dashboard;
