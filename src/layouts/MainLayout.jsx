// src/layouts/MainLayout.jsx
import { Box, AppBar, Toolbar, Typography, Container } from '@mui/material';
// import SideBarMain from '../components/SideBar';
import AccountMenu from '../components/AccountMenu';
import Button from '../components/Button';

import { useSelector } from 'react-redux';
import { Outlet } from 'react-router-dom';
import Navbar from '../components/NavBar';
const MainLayout = () => {


    const userLogged = useSelector((state) => state.auth.user);
    console.log("User in MainLayout:", userLogged);

    return (
        <Box sx={{ flexGrow: 1 }}>
            {/* NAVBAR */}
            <Navbar />

            {/* CONȚINUT PAGINĂ */}
            <Container sx={{ mt: 10, textAlign: 'center' }}>
                <Outlet />
            </Container>
        </Box>
    );
};

export default MainLayout;