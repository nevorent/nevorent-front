// src/layouts/MainLayout.jsx
import { Box, AppBar, Toolbar, Typography, Container } from '@mui/material';
import SideBar from '../components/SideBar';
import AccountMenu from '../components/AccountMenu';
import Button from '../components/Button';
import Navbar from '../components/Navbar';
import { Outlet } from 'react-router-dom';
import TabMenu from '../components/TabMenu';
import { MainMenuList } from '../components/MainMenuList';
import { useLocation } from 'react-router-dom';
const MainLayout = () => {
    const location = useLocation();
    const isMessagesPage = location.pathname === '/messages' || location.pathname === '/my-tenants' || location.pathname === '/possible-tenants';
    const isSplitPage = location.pathname === '/all-ads' || location.pathname === '/home';
    return (
        <Box sx={{ display: 'flex', flexDirection: 'column', height: '100vh' }}>
            {/* navbar*/}
            <Navbar />

            {/* Container principal sub Navbar */}
            <Box sx={{ display: 'flex', flexGrow: 1, overflow: 'hidden' }}>

                {/*sidebar*/}
                <SideBar ><MainMenuList /></SideBar>

                {/* continut dreapta sidebar  */}
                <Box
                    component="main"
                    sx={{
                        flexGrow: 1,
                        display: 'flex',
                        flexDirection: 'column',
                        overflowY: 'auto',
                        overflowX: 'auto',
                        backgroundColor: '#f5f5f5'
                    }}

                >
                    {/* TAB MENU  */}
                    {isMessagesPage ? null : <TabMenu />}


                    {/* PAGINA EFECTIVĂ */}
                    <Box sx={{
                        p: isMessagesPage || isSplitPage ? 0 : 3, flexGrow: 1,

                        display: 'flex',
                        flexDirection: 'column',
                        height: isMessagesPage || isSplitPage ? '100vh' : 'auto',
                        overflow: isMessagesPage || isSplitPage ? 'hidden' : 'visible',
                        // overflow: 'hidden'
                    }}>
                        <Outlet />
                    </Box>
                </Box>
            </Box>
        </Box>
    );
};

export default MainLayout;