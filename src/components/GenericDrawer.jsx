import React, { useState } from "react";
import { Drawer, Box, styled } from "@mui/material";

const drawerWidth = 240;
const closedWidth = 65;

// Stilizează Drawer-ul pentru a avea animația de tip "slide"
const StyledDrawer = styled(Drawer, { shouldForwardProp: (prop) => prop !== 'open' })(
    ({ theme, open }) => ({
        width: open ? drawerWidth : closedWidth,
        flexShrink: 0,
        whiteSpace: 'nowrap',
        boxSizing: 'border-box',
        transition: theme.transitions.create('width', {
            easing: theme.transitions.easing.sharp,
            duration: theme.transitions.duration.enteringScreen,
        }),
        '& .MuiDrawer-paper': {
            width: open ? drawerWidth : closedWidth,
            transition: theme.transitions.create('width', {
                easing: theme.transitions.easing.sharp,
                duration: theme.transitions.duration.leavingScreen,
            }),
            overflowX: 'hidden',
            backgroundColor: '#ffffff',
            borderRight: '1px solid rgba(0, 0, 0, 0.12)',
            // Această linie îl pune SUB AppBar dacă este configurat corect în Layout
            position: 'relative',
            height: '100%',
        },
    }),
);

const GenericDrawer = ({ children }) => {
    const [open, setOpen] = useState(false);

    return (
        <StyledDrawer
            variant="permanent"
            open={open}
            onMouseEnter={() => setOpen(true)}
            onMouseLeave={() => setOpen(false)}
        >
            <Box sx={{ p: 0 }}>
                {/* Injectăm prop-ul 'open' către copii (MainMenuList) 
                   ca să știe dacă să afișeze textul sau nu
                */}
                {React.Children.map(children, child => {
                    return React.cloneElement(child, { drawerOpen: open });
                })}
            </Box>
        </StyledDrawer>
    );
};

export default GenericDrawer;