// src/layouts/MainLayout.jsx
import { Box, AppBar, Toolbar, Typography, Container } from '@mui/material';
import SideBar from '../components/SideBar';
import AccountMenu from '../components/AccountMenu';
import Button from '../components/Button';
import Navbar from '../components/Navbar';
import { Outlet } from 'react-router-dom';
// import TabMenu from '../components/TabMenu';
const MainLayout = () => {


    // const userLogged = useSelector((state) => state.auth.user);
    // console.log("User in MainLayout:", userLogged);

    return (
        <Box sx={{ display: 'flex', flexDirection: 'column', height: '100vh' }}>
            {/* NAVBAR */}
            <Navbar />

            {/* Container principal sub Navbar */}
            <Box sx={{ display: 'flex', flexGrow: 1, overflow: 'hidden' }}>

                {/*sidebar*/}
                <SideBar />

                {/* continut dreapta sidebar  */}
                <Box
                    component="main"
                    sx={{
                        flexGrow: 1,
                        display: 'flex',
                        flexDirection: 'column',
                        overflowY: 'auto',
                        backgroundColor: '#f5f5f5'
                    }}
                >


                    {/* PAGINA EFECTIVĂ */}
                    <Box sx={{ p: 3, flexGrow: 1 }}>
                        <Outlet />
                    </Box>
                </Box>
            </Box>
        </Box>
    );
};

export default MainLayout;