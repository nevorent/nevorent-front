import * as React from 'react';
import Box from '@mui/material/Box';
import Tab from '@mui/material/Tab';
import TabContext from '@mui/lab/TabContext';
import TabList from '@mui/lab/TabList';
import { useLocation } from 'react-router-dom';
import { Link } from 'react-router-dom';
import Typography from '@mui/material/Typography';
const TAB_PATHS_MESSAGE = {
    '/my-tenants': '1',
    '/possible-tenants': '2'
};

export default function TabMessage() {
    const location = useLocation();
    //const userLogged = useSelector((state) => state.auth.user);
    const currentTab = TAB_PATHS_MESSAGE[location.pathname] || '1'; // default to "chiriasii mei"

    return (
        <Box sx={{ width: '100%', bgcolor: 'background.paper', borderBottom: 1, borderColor: 'divider', position: 'sticky', top: 0 }}>

            <TabContext value={currentTab}>
                <Box>
                    <TabList >

                        <Tab
                            label="Chiriasii mei"
                            value="1"
                            component={Link}
                            to="/my-tenants"
                        />


                        <Tab
                            label="posibili chiriasi"
                            value="2"
                            component={Link}
                            to="/possible-tenants"
                        />


                    </TabList>
                </Box>
            </TabContext>
        </Box>
    );
}