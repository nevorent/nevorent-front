import { Avatar, Divider, ListItem, Menu, MenuItem, Typography, Box, Tooltip, IconButton, ListItemIcon } from "@mui/material";
import Logout from '@mui/icons-material/Logout';
import React from "react";
import PersonAdd from '@mui/icons-material/PersonAdd';
import Button from '../components/Button';
export default function AccountMenu({ user, handleLogout }) {
    //aici retin elementul pe care dau click


    return (

        <React.Fragment>
            <Box sx={{ display: 'flex', alignItems: 'center', textAlign: 'center' }}>
                <Typography sx={{ minWidth: 100 }}>Profile</Typography>
                <Typography sx={{ minWidth: 100 }}>Contact</Typography>
                <Tooltip title={user.name}>
                    <IconButton sx={{ p: 0 }}>

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
                <Button onClick={handleLogout} variant="outlined" size="small">Logout</Button>


            </Box>
        </React.Fragment>
    )



}