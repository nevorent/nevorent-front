import MessageBubble from "./MessageBubble";
import { useSelector } from 'react-redux';
import React from 'react';
import {
    List, ListItem, ListItemAvatar, Badge, Avatar, Box
} from "@mui/material";
import ChatLine from "./ChatLine";
import ConversationHead from "./ConversationHead";
// import { useState } from 'react';
const ChatPannel = ({ messages, activeChat, onSendMessage }) => {
    const userLogged = useSelector((state) => state.auth.user);
    console.log("userLogged", userLogged);
    const currentMessages = messages.filter(m => m.conversationId === activeChat?.id);
    console.log("Toate mesajele din starea parintelui:", messages.length);
    console.log("Mesaje filtrate pentru acest chat:", currentMessages.length);
    const scrollRef = React.useRef(null);
    const scrollToBottom = () => {
        if (scrollRef.current) {
            scrollRef.current.scrollTop = scrollRef.current.scrollHeight;
        }
    }
    React.useEffect(() => {
        scrollToBottom();
    }, [messages.length, activeChat?.id]);
    if (!activeChat) {
        return (<Box sx={{ flexGrow: 1, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
            Selectează o conversație pentru a începe
        </Box>);
    }
    return (
        <Box sx={{
            width: '100%',
            height: '100%',    // Îl forțăm să fie cât ecranul
            position: 'relative',
            display: 'flex',
            flexDirection: 'column', // Așezăm elementele ca într-o coloană
            borderRight: '1px solid #e0e0e0',
            bgcolor: '#fff',
            overflow: 'hidden'   // Tăiem orice iese în afară ca să forțăm scroll-ul intern
        }} >
            {/*trebuie sa modific iconita si avatarul c cel din conversatie  */}
            <ConversationHead name={activeChat.name}
                img={activeChat.img}
                online={activeChat.online}></ConversationHead>
            <Box ref={scrollRef} sx={{ flexGrow: 1, overflowY: 'auto', scrollBehaviour: 'smooth' }}>
                < List>

                    {
                        currentMessages.map((chat) => {
                            const isMine = userLogged?.email === chat.senderId;
                            console.log(isMine)
                            return (
                                <ListItem
                                    key={chat.id}
                                    sx={{
                                        px: 1.5,
                                        py: 1,
                                        flexDirection: isMine ? 'row-reverse' : 'row',
                                        alignItems: 'flex-start'
                                    }}
                                >
                                    {!isMine && (
                                        <ListItemAvatar sx={{ minWidth: 0, mr: isMine ? 0 : 2, ml: isMine ? 2 : 0 }}>
                                            <Badge
                                                overlap="circular"
                                                anchorOrigin={{ vertical: 'bottom', horizontal: 'right' }}
                                                variant="dot"
                                                color={chat.online ? "success" : "error"}
                                            >
                                                {/* nu cred ca avatarul e bine setat*/}
                                                <Avatar src={chat.img}>
                                                    {chat.senderId ? chat.senderId[0].toUpperCase() : '?'}
                                                </Avatar>
                                            </Badge>
                                        </ListItemAvatar>
                                    )}

                                    <MessageBubble
                                        text={chat.text}
                                        isMine={isMine}
                                    />
                                </ListItem>
                            );
                        })
                    }
                    {currentMessages.length === 0 && (
                        <Box sx={{ textAlign: 'center', mt: 5, color: 'text.secondary' }}>
                            <p>Nu există mesaje. Spune-i "Bună" lui {activeChat.name}!</p>
                        </Box>
                    )}

                </List >
            </Box>
            <ChatLine onSend={(text) => onSendMessage(text, activeChat.id)} ></ChatLine>
        </Box>
    );





}
export default ChatPannel;