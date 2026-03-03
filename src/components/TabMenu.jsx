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
    const currentTab = TAB_PATHS[location.pathname] || '2'; // default tabul allAds

    return (
        <Box sx={{ width: 'auto', bgcolor: 'background.paper', borderBottom: 1, borderColor: 'divider', position: 'sticky', top: 0, zIndex: 100 }}>
            <TabContext value={currentTab}>
                <Box>

                    <TabList aria-label="tab menu" variant="scrollable"
                        scrollButtons="auto"
                        allowScrollButtonsMobile
                        sx={{
                            '& .MuiTabs-scroller': {
                                display: 'flex',
                                justifyContent: 'center', // Aceasta este alternativa sigură la "centered"
                            },
                            '& .MuiTabs-flexContainer': {
                                // Ne asigurăm că containerul nu strivește tab-urile
                                minWidth: 'fit-content'
                            }
                        }} >
                        {userLogged && (
                            <Tab
                                label="Anunțurile mele"
                                value="1"
                                component={Link}
                                to="/my-ads"
                                sx={{
                                    minWidth: 'fit-content',
                                    flexShrink: 0,
                                    whiteSpace: 'nowrap',
                                    // Această regulă previne span-ul să iasă din buton
                                    overflow: 'hidden',
                                }}
                            />
                        )}

                        <Tab
                            label="Toate Anunțurile"
                            value="2"
                            component={Link}
                            to="/all-ads"
                            sx={{
                                minWidth: 'fit-content',
                                flexShrink: 0,
                                whiteSpace: 'nowrap',
                                // Această regulă previne span-ul să iasă din buton
                                overflow: 'hidden',
                            }}
                        />

                        <Tab
                            label="Anunțuri favorite"
                            value="3"
                            component={Link}
                            to="/favorites"
                            sx={{
                                minWidth: 'fit-content',
                                flexShrink: 0,
                                whiteSpace: 'nowrap',
                                // Această regulă previne span-ul să iasă din buton
                                overflow: 'hidden',
                            }}
                        />
                    </TabList>
                </Box>
            </TabContext>
        </Box>
    );
}