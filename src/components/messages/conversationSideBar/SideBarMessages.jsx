import React from 'react';
import { Paper, Box, Typography, Divider } from '@mui/material';
import { styled } from '@mui/material/styles';
import Fab from '@mui/material/Fab';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import AddIcon from '@mui/icons-material/Add';
import SearchIcon from '@mui/icons-material/Search';
import MoreIcon from '@mui/icons-material/MoreVert';
import CssBaseline from '@mui/material/CssBaseline';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import TabMessage from './TabMessage';
const StyledFab = styled(Fab)({
    position: 'absolute',
    zIndex: 1,
    top: -30,
    left: 0,
    right: 0,
    margin: '0 auto',
});
const SideBarMessages = ({ children, width = 350, userRole }) => {
    // TODO :daca schimb rolul 
    const hasAccess = userRole?.trim().toLowerCase() === "owner" || userRole?.trim().toLowerCase() === "admin";
    console.log('userRole in SideBarMessages:', userRole);
    console.log('hasAccess in SideBarMessages:', hasAccess);
    return (
        <React.Fragment>
            <CssBaseline />
            {hasAccess && <TabMessage />}
            <Paper
                // elevation={0}
                sx={{
                    width: width,
                    height: '100vh',    // Îl forțăm să fie cât ecranul
                    position: 'relative',
                    display: 'flex',
                    flexDirection: 'column', // Așezăm elementele ca într-o coloană
                    borderRight: '1px solid #e0e0e0',
                    bgcolor: '#fff',
                    overflow: 'hidden'   // Tăiem orice iese în afară ca să forțăm scroll-ul intern
                }}
            >

                <Divider />
                <Box sx={{
                    flexGrow: 1,
                    overflowY: 'auto',
                    paddingBottom: '60px'
                }}>
                    {children}
                </Box>
                <AppBar position="absolute" color="primary" sx={{ top: 'auto', bottom: 0, width: '100%', left: 0 }}>
                    <Toolbar>
                        <IconButton color="inherit" aria-label="open drawer">
                            <MenuIcon />
                        </IconButton>
                        <StyledFab color="secondary" aria-label="add">
                            <AddIcon />
                        </StyledFab>
                        <Box sx={{ flexGrow: 1 }} />
                        <IconButton color="inherit">
                            <SearchIcon />
                        </IconButton>
                        <IconButton color="inherit">
                            <MoreIcon />
                        </IconButton>
                    </Toolbar>
                </AppBar>
            </Paper >
        </React.Fragment>

    );
}
export default SideBarMessages;