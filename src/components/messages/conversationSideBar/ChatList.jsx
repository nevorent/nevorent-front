import { List, ListItem, ListItemAvatar, Avatar, ListItemText, Badge, Typography, ListSubheader, Divider, Box } from '@mui/material';
import React, { useEffect, useRef } from 'react';
import { useLocation } from 'react-router-dom';
const ChatList = ({ onSelectChat, activeChatId, conversations, userRole }) => {
    const location = useLocation();
    const formatChatDate = (timestamp) => {
        if (!timestamp) return "";

        const date = new Date(timestamp);
        const now = new Date();
        const today = new Date(now.getFullYear(), now.getMonth(), now.getDate());
        const yesterday = new Date(today);
        yesterday.setDate(yesterday.getDate() - 1);

        const msgDate = new Date(date.getFullYear(), date.getMonth(), date.getDate());

        if (msgDate.getTime() === today.getTime()) {
            return date.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });
        } else if (msgDate.getTime() === yesterday.getTime()) {
            return "Yestarday";
        } else {
            return date.toLocaleDateString('ro-RO', { day: '2-digit', month: '2-digit', hour: '2-digit', minute: '2-digit' });
        }
    };
    const tenants = conversations.filter(c => c.type === 'tenant');
    console.log(tenants);
    //const prospects = conversations.filter(c => c.type === 'prospect');
    const renderChatItem = (chat) => {
        return (
            <ListItem key={chat.id} sx={{ px: 1.5, py: 1, background: activeChatId === chat.id ? '#e6e7e8' : 'transparent' }} onClick={() => onSelectChat(chat)} >
                <ListItemAvatar sx={{ minWidth: 0, mr: 2 }}>
                    <Badge overlap="circular" anchorOrigin={{ vertical: 'bottom', horizontal: 'right' }} variant="dot" color={chat.online ? "success" : "grey"}>
                        <Avatar src={chat.img}>{chat.name[0]}</Avatar>
                    </Badge>
                </ListItemAvatar>

                {/* Afișăm textul doar dacă Drawer-ul este deschis */}

                <ListItemText
                    primary={chat.name}
                    secondary={chat.lastMsg}
                    primaryTypographyProps={{ noWrap: true, fontWeight: activeChatId === chat.id ? '900' : 'bold' }}
                    secondaryTypographyProps={{ noWrap: true }}
                />

                <Typography variant="caption" sx={{ color: 'text.secondary', ml: 1 }}>
                    {formatChatDate(chat.lastTimestamp)}
                </Typography>

            </ListItem>);
    }
    const tenantRef = useRef(null);
    const prospectRef = useRef(null);
    useEffect(() => {
        if (userRole === "admin" || userRole === "owner") {
            if (location.pathname === '/my-tenants' && tenantRef.current) {
                //nu ma duce pana la partea de sus 
                tenantRef.current.scrollIntoView({ behavior: 'smooth', block: 'end' });
            } else if (location.pathname === '/possible-tenants' && prospectRef.current) {
                prospectRef.current.scrollIntoView({ behavior: 'smooth', block: 'start' });
            }
        }
    }, [location.pathname, userRole]);
    const renderOwnerView = () => {
        const tenants = conversations.filter(c => c.type === 'tenant');
        const prospects = conversations.filter(c => c.type === 'prospect');

        return (
            <>
                {tenants.length > 0 && (
                    <>
                        <ListSubheader ref={tenantRef} sx={{ bgcolor: 'white', fontWeight: 'bold', color: 'primary.main' }}>
                            Chiriași
                        </ListSubheader>
                        {tenants.map(chat => renderChatItem(chat))}
                    </>
                )}
                {tenants.length > 0 && prospects.length > 0 && <Divider sx={{ my: 1 }} />}
                {prospects.length > 0 && (
                    <>
                        <ListSubheader ref={prospectRef} sx={{ bgcolor: 'white', fontWeight: 'bold', color: 'secondary.main' }}>
                            Posibili Chiriași
                        </ListSubheader>
                        {prospects.map(chat => renderChatItem(chat))}
                    </>
                )}
            </>
        );
    };

    // 2. Logica pentru CHIRIAȘ (listă simplă, fără categorii)
    const renderSimpleView = () => (
        conversations.map(chat => renderChatItem(chat))
    );

    return (
        <List sx={{ pt: 2 }}>
            {/* Decidem ce interfață afișăm în funcție de rol */}
            {(userRole === "admin" || userRole === "owner")
                ? renderOwnerView()
                : renderSimpleView()
            }
        </List>
    );
};
export default ChatList;