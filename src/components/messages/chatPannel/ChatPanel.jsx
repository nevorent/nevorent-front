import MessageBubble from "./MessageBubble";
import { useSelector } from 'react-redux';
import {
    List, ListItem, ListItemAvatar, Badge, Avatar, Box
} from "@mui/material";
import ChatLine from "./ChatLine";
import ConversationHead from "./ConversationHead";
// import { useState } from 'react';
const ChatPannel = ({ messages }) => {
    const userLogged = useSelector((state) => state.auth.user);
    console.log("userLogged", userLogged);
    // const [newMessage, setMessages] = useState(false);
    // const handleSendMessage = (text) => {
    //     const newMessage = {
    //         id: Date.now().toString(),
    //         senderId: "user_me",
    //         text: text,
    //         timestamp: new Date().toISOString(),
    //         status: "sent"
    //     };
    //     setMessages([...messages, newMessage]);
    // };
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
            <ConversationHead></ConversationHead>
            <Box sx={{ flexGrow: 1, overflowY: 'auto' }}>
                < List>

                    {
                        messages.map((chat) => {
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

                </List >
            </Box>
            <ChatLine ></ChatLine>
        </Box>
    );





}
export default ChatPannel;