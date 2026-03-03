import { AppBar, Box, Container, Toolbar, Typography } from '@mui/material';

import AccountMenu from '../components/AccountMenu';
import Button from '../components/Button';
import { resetAuth } from '../store/authSlice';
import { useSelector, useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { styled, alpha } from '@mui/material/styles';
import InputBase from '@mui/material/InputBase';
import SearchIcon from '@mui/icons-material/Search';
const Search = styled('div')(({ theme }) => ({
    position: 'relative',
    borderRadius: theme.shape.borderRadius,
    backgroundColor: alpha(theme.palette.common.white, 0.15),
    '&:hover': {
        backgroundColor: alpha(theme.palette.common.white, 0.25),
    },
    marginRight: theme.spacing(2),
    marginLeft: 0,
    width: '100%',
    [theme.breakpoints.up('sm')]: {
        marginLeft: theme.spacing(3),
        width: 'auto',
    },
}));

const SearchIconWrapper = styled('div')(({ theme }) => ({
    padding: theme.spacing(0, 2),
    height: '100%',
    position: 'absolute',
    pointerEvents: 'none',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
}));

const StyledInputBase = styled(InputBase)(({ theme }) => ({
    color: 'inherit',
    '& .MuiInputBase-input': {
        padding: theme.spacing(1, 1, 1, 0),
        paddingLeft: `calc(1em + ${theme.spacing(4)})`,
        transition: theme.transitions.create('width'),
        width: '100%',
        [theme.breakpoints.up('md')]: {
            width: '20ch',
        },
    },
}));
const Navbar = () => {
    const navigate = useNavigate();
    const userLogged = useSelector((state) => state.auth.user);
    console.log("User in Navbar:", userLogged);
    const dispatch = useDispatch();
    const handleLogout = () => {
        dispatch(resetAuth()); // Curăță Redux + LocalStorage
        navigate('/home'); // Redirecționează la login
    }
    return (<AppBar position="static" sx={{ backgroundColor: '#ffffff', color: '#333', boxShadow: 1 }}>
        <Toolbar>

            <Typography
                variant="h6"
                component="div"
                sx={{ flexGrow: 1, cursor: 'pointer', fontWeight: 'bold' }}
                onClick={() => navigate('/home')}
            >
                NEVORENT
            </Typography>
            <Search>
                <SearchIconWrapper>
                    <SearchIcon />
                </SearchIconWrapper>
                <StyledInputBase
                    placeholder="Search…"
                    inputProps={{ 'aria-label': 'search' }}
                />
            </Search>

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