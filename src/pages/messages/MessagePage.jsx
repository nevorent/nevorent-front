import { Box } from '@mui/material';
import Navbar from '../../components/Navbar';
import SideBar from '../../components/SideBar';
import TabMenu from '../../components/TabMenu';
import { Outlet } from 'react-router-dom';
import { MessageMenuList } from '../../components/messages/conversationSideBar/MessageMenuList';
import SideBarMessages from '../../components/messages/conversationSideBar/SideBarMessages';
import ChatList from '../../components/messages/conversationSideBar/ChatList';
import TabMessage from '../../components/messages/conversationSideBar/TabMessage';
import ChatPannel from '../../components/messages/chatPannel/ChatPanel';
import mockMessages from '../../components/messages/chatPannel/mockMessages';
const MessagesPage = () => {
    return (
        <Box sx={{
            height: '100vh',
            display: 'flex',
            overflow: 'hidden',
            flexDirection: 'column',
        }} >
            {/* <TabMessage /> */}
            <Box sx={{
                display: 'flex', flexGrow: 1,
                minHeight: 0,
                overflow: 'hidden',
            }}>
                <Box sx={{
                    display: 'flex',
                    // flexGrow: 1,
                    // minHeight: 0, 
                    // overflow: 'hidden',
                    flexDirection: 'column',
                }}>
                    <SideBarMessages><ChatList></ChatList></SideBarMessages>

                </Box>
                <Box sx={{ flexGrow: 1, bgcolor: '#f5f5f5' }}>
                    {/* Zona de chat */}
                    <ChatPannel messages={mockMessages}></ChatPannel>
                </Box>
            </Box>
        </Box>
    );
};
export default MessagesPage;