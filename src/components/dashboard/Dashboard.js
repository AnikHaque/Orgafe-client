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
import {
    Switch,
    Route,
    Link,
    useRouteMatch
} from "react-router-dom";
import {  Container, Nav, Navbar, NavDropdown } from 'react-bootstrap';
import { Button } from '@mui/material';
 import DashboardHome from '../dashboardhome/DashboardHome';
 import AddCar from '../addcar/AddCar';
 import Header from '../header/Header';
// import MakeAdmin from '../MakeAdmin/MakeAdmin';
// import AddDoctor from '../AddDoctor/AddDoctor';

// import AdminRoute from './../../Login/AdminRoute/AdminRoute';
// import Payment from '../Payment/Payment';
import About from '../about/About';

import useAuth from '../../hooks/useAuth';
import './Dashboard.css';
import ManageOrder from '../manageorders/ManageOrder';
import MyOrder from '../myorders/MyOrder';
import Home from '../home/Home';
import Review from '../review/Review';
import MakeAdmin from '../makeadmin/MakeAdmin';
const drawerWidth = 200;

function Dashboard(props) {
    const { window } = props;
    const [mobileOpen, setMobileOpen] = React.useState(false);
    let { path, url } = useRouteMatch();
    const { admin,user,logout } = useAuth();
    const handleDrawerToggle = () => {
        setMobileOpen(!mobileOpen);
    };

    const drawer = (
        <div> 
            <Toolbar />
            <Divider />
              
            {
              admin && <Box>
 <Link to={`${url}`}><Button color="inherit">Dashboard</Button></Link>
            <br></br>
            <Link to={`${url}/addcar`} className='dash text-dark'><Button color="inherit">Add Car</Button></Link>
            <br></br>
            <Link to={`${url}/manageorder`} className='dash text-dark'><Button color="inherit">All Orders</Button></Link>   
            <br></br> 
            <Link to={`${url}/makeadmin`} className='dash text-dark'><Button color="inherit">Make Admin</Button></Link>    
            <br></br>
              </Box>
          } 
            {
              !admin && user.email && <Box>
 <Link to={`${url}`}><Button color="inherit">Dashboard</Button></Link>
            <br></br>
            <Link to={`${url}/myorder`} className='dash text-dark'><Button color="inherit">My Orders</Button></Link> 
            <Link to={`${url}/review`} className='dash text-dark'><Button color="inherit">Add Review</Button></Link> 
              </Box>
          } 

            { 
!user.email ?
     <Nav.Link as={Link} to="/login">
          <Button className='btn btn-login text-white bg-dark fw-bold px-4 pe-4'>Login</Button>
          </Nav.Link>
          :
          <Nav.Link as={Link} to="/login">
          <Button onClick={logout} className='btn btn-login text-white bg-dark fw-bold px-4 pe-4'>LogOut</Button>
          </Nav.Link>

          } 
          
        </div>
    );

    const container = window !== undefined ? () => window().document.body : undefined;

    return (
        
        <Box sx={{ display: 'flex' }} className='bg-dashboard'>
           
            <CssBaseline />
           
            <AppBar
                position="fixed"
                sx={{
                    width: { sm: `calc(100% - ${drawerWidth}px)` },
                    ml: { sm: `${drawerWidth}px` },
                }}
            >
                <Toolbar className='bg-dark'>
                    <IconButton
                        color="inherit"
                        
                        aria-label="open drawer"
                        edge="start"
                        onClick={handleDrawerToggle}
                        sx={{ mr: 2, display: { sm: 'none' } }}
                    >
                        <MenuIcon />
                        
                    </IconButton>
                   
                   
                    <Typography variant="h6" noWrap component="div" >
                        Dashboard
                    </Typography>
                </Toolbar>
            </AppBar>
            <Box
                component="nav"
                sx={{ width: { sm: drawerWidth }, flexShrink: { sm: 0 } }}
                aria-label="mailbox folders"
            >
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
                  <DashboardHome></DashboardHome>
                    </Route>
                    
                   
                    <Route path={`${path}/addcar`}>
                        <AddCar></AddCar>
                    </Route>
                    <Route path={`${path}/manageorder`}>
                        <ManageOrder></ManageOrder>
                    </Route>
                    <Route path={`${path}/myorder`}>
                       <MyOrder></MyOrder>
                    </Route>
                    <Route path={`${path}/review`}>
                     <Review></Review>
                    </Route>
                    <Route path={`${path}/makeadmin`}>
                     <MakeAdmin></MakeAdmin>
                    </Route>
                   
                    
                   
                    
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