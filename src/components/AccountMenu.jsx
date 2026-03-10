import { Avatar, Divider, ListItem, Menu, MenuItem, Typography, Box, Tooltip, IconButton, ListItemIcon } from "@mui/material";
import Logout from '@mui/icons-material/Logout';
import React from "react";
import PersonAdd from '@mui/icons-material/PersonAdd';
import { useNavigate } from "react-router-dom";
export default function AccountMenu({ user, handleLogout }) {
    //aici retin elementul pe care dau click
    const navigate = useNavigate();
    const [anchorEl, setAnchorEl] = React.useState(null);
    const open = Boolean(anchorEl);//daca ii dau valoare atunci e deschis daca e null e inchis 
    const handleClick = (event) => { console.log("am apasat"); setAnchorEl(event.currentTarget) };
    const handleClose = () => { setAnchorEl(null) };
    return (

        <React.Fragment>
            <Box sx={{ display: 'flex', alignItems: 'center', textAlign: 'center' }}>
                <Typography sx={{ minWidth: 100 }}>Profile</Typography>
                <Typography sx={{ minWidth: 100 }}>Contact</Typography>
                <Tooltip title={user.name}>
                    <IconButton onClick={handleClick} sx={{ p: 0 }}>

                        <Avatar
                            alt={user.name}
                            src={user.avatarUrl || ""} // Dacă ai un URL de poză în obiectul user, îl va pune aici
                            sx={{ bgcolor: '#007bff' }} // Culoarea de fundal dacă nu există poză
                        >
                            {/* Dacă nu există poză, punem iconița de Person ca fallback */}
                            {user?.name ? user.name.charAt(0).toUpperCase() : 'U'}
                        </Avatar>
                    </IconButton>
                </Tooltip>
                <Menu
                    anchorEl={anchorEl}
                    id="account-menu"
                    open={open}
                    onClose={handleClose}
                    onClick={handleClose}
                    slotProps={{
                        paper: {
                            elevation: 0,
                            sx: {
                                overflow: 'visible',
                                filter: 'drop-shadow(0px 2px 8px rgba(0,0,0,0.32))',
                                mt: 1.5,
                                '& .MuiAvatar-root': {
                                    width: 32,
                                    height: 32,
                                    ml: -0.5,
                                    mr: 1,
                                },
                                '&::before': {
                                    content: '""',
                                    display: 'block',
                                    position: 'absolute',
                                    top: 0,
                                    right: 14,
                                    width: 10,
                                    height: 10,
                                    bgcolor: 'background.paper',
                                    transform: 'translateY(-50%) rotate(45deg)',
                                    zIndex: 0,
                                },
                            },
                        },
                    }}
                    transformOrigin={{ horizontal: 'right', vertical: 'top' }}
                    anchorOrigin={{ horizontal: 'right', vertical: 'bottom' }}
                >
                    {/*daca le apas o sa se inchida deocamdata  */}
                    <MenuItem onClick={handleClose}>
                        <Avatar />MyAccount
                    </MenuItem>
                    <MenuItem onClick={handleClose}>
                        <Avatar />Contact
                    </MenuItem>
                    <Divider />
                    {/*aici vad daca trebuie sa trec la register sau la add account  */}
                    <MenuItem onClick={() => { handleClose(); navigate('/addAccount'); }}>
                        <ListItemIcon>
                            <PersonAdd fontSize="small" />
                        </ListItemIcon>
                        Add another account
                    </MenuItem>

                    <MenuItem onClick={() => { handleClose(); handleLogout(); }}>
                        <ListItemIcon>
                            <Logout fontSize="small" />
                        </ListItemIcon>
                        Logout
                    </MenuItem>

                </Menu>
            </Box>
        </React.Fragment>
    )



}