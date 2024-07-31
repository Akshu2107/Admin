import * as React from 'react';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import List from '@mui/material/List';
import Divider from '@mui/material/Divider';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import Typography from '@mui/material/Typography';
import HomeIcon from '@mui/icons-material/Home';
import SellIcon from '@mui/icons-material/Sell';
import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart';
import GroupAddIcon from '@mui/icons-material/GroupAdd';
import { Link } from 'react-router-dom';
import { styled } from '@mui/material/styles';
import Person2Icon from '@mui/icons-material/Person2';
import LoginIcon from '@mui/icons-material/Login';
import LogoutIcon from '@mui/icons-material/Logout';
import AssignmentIndIcon from '@mui/icons-material/AssignmentInd';


const drawerWidth = 200;


const Drawer = styled('main', { shouldForwardProp: (prop) => prop !== 'open' })(
    ({ theme, open }) => ({
        flexGrow: 1,
        background: "darkslateblue",
        color: "white",
        padding: theme.spacing(0),
        transition: theme.transitions.create('margin', {
            easing: theme.transitions.easing.sharp,
            duration: theme.transitions.duration.leavingScreen,
        }),
        marginLeft: `-${drawerWidth}px`,
        ...(open && {
            transition: theme.transitions.create('margin', {
                easing: theme.transitions.easing.easeOut,
                duration: theme.transitions.duration.enteringScreen,
            }),
            marginLeft: 0,
        }),
    }),
);


export default function Sidebardash({ sidebarOpen }) {

    return (
        <div className='sidebarContainer' >
            <Box sx={{ display: 'flex', position: "sticky", left: 0, top: 0, height: "100vh" }} >
                <Drawer
                    sx={{
                        width: drawerWidth,
                        flexShrink: 0,
                        '& .MuiDrawer-paper': {
                            width: drawerWidth,
                            boxSizing: 'border-box',
                        },
                    }}
                    variant="permanent"
                    anchor="left"
                    open={sidebarOpen}
                >

                    <Toolbar />
                    <Divider />
                    <List>
                        <ListItem disablePadding component={Link} to={"/"}>
                            <ListItemButton>
                                <ListItemIcon>
                                    <HomeIcon className='text-white'></HomeIcon>
                                </ListItemIcon>
                                <ListItemText sx={{ ml: "-20px", color: "white" }}>
                                    Dashboard
                                </ListItemText>
                            </ListItemButton>
                        </ListItem>

                        <ListItem disablePadding component={Link} to={"/product"}>
                            <ListItemButton>
                                <ListItemIcon>
                                    <SellIcon className='text-white'></SellIcon>
                                </ListItemIcon>
                                <ListItemText sx={{ ml: "-20px", color: "white", }}>
                                    Product
                                </ListItemText>
                            </ListItemButton>
                        </ListItem>

                        <ListItem disablePadding component={Link} to={"/order"}>
                            <ListItemButton>
                                <ListItemIcon>
                                    <AddShoppingCartIcon className='text-white'></AddShoppingCartIcon>
                                </ListItemIcon>
                                <ListItemText sx={{ ml: "-20px", color: "white" }}>
                                    Orders
                                </ListItemText>
                            </ListItemButton>
                        </ListItem>

                        <ListItem disablePadding component={Link} to={"/user"}>
                            <ListItemButton>
                                <ListItemIcon>
                                    <GroupAddIcon className='text-white'></GroupAddIcon>
                                </ListItemIcon>
                                <ListItemText sx={{ ml: "-20px", color: "white" }}>
                                    All User
                                </ListItemText>
                            </ListItemButton>
                        </ListItem>



                    </List>
                    <Divider />
                    <Typography sx={{ color: 'primary.700' }}>
                        ACCOUNT PAGES
                    </Typography>
                    <List>
                        <ListItem disablePadding component={Link} to={"/profile"}>
                            <ListItemButton>
                                <ListItemIcon>
                                    <Person2Icon className='text-white'></Person2Icon>
                                </ListItemIcon>
                                <ListItemText sx={{ ml: "-20px", color: "white" }}>
                                    Profile
                                </ListItemText>
                            </ListItemButton>
                        </ListItem>

                        <ListItem disablePadding component={Link} to={"/singin"}>
                            <ListItemButton>
                                <ListItemIcon>
                                    <LoginIcon className='text-white'></LoginIcon>
                                </ListItemIcon>
                                <ListItemText sx={{ ml: "-20px", color: "white" }}>
                                    Sign In
                                </ListItemText>
                            </ListItemButton>
                        </ListItem>

                        <ListItem disablePadding component={Link} to={"/signup"}>
                            <ListItemButton>
                                <ListItemIcon>
                                    <AssignmentIndIcon className='text-white'></AssignmentIndIcon>
                                </ListItemIcon>
                                <ListItemText sx={{ ml: "-20px", color: "white" }}>
                                    Sign Up
                                </ListItemText>
                            </ListItemButton>
                        </ListItem>

                        <ListItem disablePadding component={Link} to={"/logout"}>
                            <ListItemButton>
                                <ListItemIcon>
                                    <LogoutIcon className='text-white'></LogoutIcon>
                                </ListItemIcon>
                                <ListItemText sx={{ ml: "-20px", color: "white" }}>
                                    Log Out
                                </ListItemText>
                            </ListItemButton>
                        </ListItem>

                    </List>
                </Drawer>

            </Box >
        </div >

    );
}

