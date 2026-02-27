import React from 'react';
import { useNavigate } from "react-router-dom";
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';
import { AppBar, Toolbar, Typography, Box } from '@mui/material';
import { resetAuth } from '../store/authSlice';
import AccountMenu from './AccountMenu';
import Button from './Button';

const Navbar = () => {
    const navigate = useNavigate();
    const userLogged = useSelector((state) => state.auth.user);
    const dispatch = useDispatch();
    const handleLogout = () => {
        dispatch(resetAuth()); // Curăță Redux + LocalStorage
        navigate('/home'); // Redirecționează la login
    }
    return (
        <AppBar position="static" sx={{ backgroundColor: '#ffffff', color: '#333', boxShadow: 1 }}>
            <Toolbar>
                <Typography
                    variant="h6"
                    component="div"
                    sx={{ flexGrow: 1, cursor: 'pointer', fontWeight: 'bold' }}
                    onClick={() => navigate('/home')}
                >
                    NEVORENT
                </Typography>

                {userLogged ? (
                    <AccountMenu user={userLogged} handleLogout={handleLogout} />
                ) : (
                    <Box sx={{ display: 'flex', gap: 1 }}>
                        <Button onClick={() => navigate('/login')} variant="text">Login</Button>
                        <Button onClick={() => navigate('/register')} variant="contained">Sign Up</Button>
                    </Box>
                )}
            </Toolbar>
        </AppBar>
    )
}
export default Navbar;