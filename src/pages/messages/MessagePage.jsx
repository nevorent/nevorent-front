import React, { useState } from 'react';
import { Box } from '@mui/material';
import Navbar from '../../components/Navbar';
import SideBar from '../../components/SideBar';
import TabMenu from '../../components/TabMenu';
import { Outlet } from 'react-router-dom';
import SideBarMessages from '../../components/messages/conversationSideBar/SideBarMessages';
import ChatList from '../../components/messages/conversationSideBar/ChatList';
import TabMessage from '../../components/messages/conversationSideBar/TabMessage';
import ChatPannel from '../../components/messages/chatPannel/ChatPanel';
import mockMessages from '../../components/messages/chatPannel/mockMessages';
import { useSelector } from 'react-redux';
import conversations from '../../components/messages/chatPannel/mockConversation';
const MessagesPage = () => {
    const [allMessages, setAllMessages] = useState(mockMessages);
    const [selectedChat, setSelectedChat] = useState(null);
    const userLogged = useSelector((state) => state.auth.user);
    const [allConversations, setAllConversations] = useState(() => {
        return [...conversations].sort((a, b) => {
            const timeA = a.lastTimestamp || "";
            const timeB = b.lastTimestamp || "";
            return timeB.localeCompare(timeA);
        });
    });
    const handleSendMessage = (text, conversationId) => {
        const now = new Date().toISOString();
        const newMessage = {
            id: Date.now().toString(),
            conversationId: conversationId,
            senderId: userLogged.email,
            text: text,
            timestamp: new Date().toISOString(),
            status: "sent"
        };
        setAllMessages(prev => [...prev, newMessage]);
        setAllConversations(prevConversations => {
            const updatedList = prevConversations.map(conv => {
                if (String(conv.id) === String(conversationId)) {
                    return {
                        ...conv,
                        lastMsg: text,
                        lastTimestamp: now
                    };
                }
                return conv;
            });
            return [...updatedList].sort((a, b) => {
                const timeA = a.lastTimestamp || "";
                const timeB = b.lastTimestamp || "";
                return timeB.localeCompare(timeA);
            });
        });
    };
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
                    flexDirection: 'column',
                }}>
                    <SideBarMessages><ChatList conversations={allConversations} onSelectChat={setSelectedChat}
                        activeChatId={selectedChat?.id}></ChatList></SideBarMessages>

                </Box>
                <Box sx={{ flexGrow: 1, bgcolor: '#f5f5f5' }}>
                    {/* Zona de chat */}
                    <ChatPannel messages={allMessages} activeChat={selectedChat} onSendMessage={handleSendMessage}></ChatPannel>
                </Box>
            </Box>
        </Box>
    );
};
export default MessagesPage;