import * as React from 'react';
import Box from '@mui/material/Box';
import Tab from '@mui/material/Tab';
import TabContext from '@mui/lab/TabContext';
import TabList from '@mui/lab/TabList';
import { useLocation } from 'react-router-dom';
import { Link } from 'react-router-dom';

import { useSelector } from 'react-redux';
const TAB_PATHS = {
    '/my-ads': '1',
    '/all-ads': '2',
    '/favorites': '3',
};

export default function TabMenu() {
    const location = useLocation();
    const userLogged = useSelector((state) => state.auth.user);
    const currentTab = TAB_PATHS[location.pathname] || '2'; // default to “all ads”


    return (
        <Box sx={{ width: '100%', bgcolor: 'background.paper', borderBottom: 1, borderColor: 'divider', position: 'sticky', top: 0, zIndex: 100 }}>
            <TabContext value={currentTab}>
                <Box>
                    <TabList centered>
                        {userLogged && (
                            <Tab
                                label="Anunțurile mele"
                                value="1"
                                component={Link}
                                to="/my-ads"
                            />
                        )}

                        <Tab
                            label="Toate Anunțurile"
                            value="2"
                            component={Link}
                            to="/all-ads"
                        />
                        {userLogged && (
                            <Tab
                                label="Anunțuri favorite"
                                value="3"
                                component={Link}
                                to="/favorites"
                            />
                        )}
                    </TabList>
                </Box>
            </TabContext>
        </Box>
    );
}