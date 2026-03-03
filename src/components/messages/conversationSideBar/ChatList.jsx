import { List, ListItem, ListItemAvatar, Avatar, ListItemText, Badge } from '@mui/material';

const ChatList = () => {
    const conversations = [
        { id: 1, name: "Ion Popescu", lastMsg: "Salut, ce mai faci?", online: true, img: "https://i.pravatar.cc/150?u=1" },
        { id: 2, name: "Maria Ionescu", lastMsg: "Am trimis fișierele.", online: false, img: "https://i.pravatar.cc/150?u=2" },
        { id: 3, name: "Andrei Visan", lastMsg: "Ne vedem la ora 10?", online: true, img: "https://i.pravatar.cc/150?u=3" },
        { id: 4, name: "Elena Dumitru", lastMsg: "Mulțumesc pentru ajutor!", online: true, img: "https://i.pravatar.cc/150?u=4" },
        { id: 5, name: "Cristian Radu", lastMsg: "Ai văzut noul anunț?", online: false, img: "https://i.pravatar.cc/150?u=5" },
        { id: 6, name: "Ana Maria", lastMsg: "Vorbim mai târziu.", online: false, img: "https://i.pravatar.cc/150?u=6" },
        { id: 7, name: "George Enache", lastMsg: "Ok, am înțeles.", online: true, img: "https://i.pravatar.cc/150?u=7" },
        { id: 8, name: "Simona Halep", lastMsg: "Trimite-mi oferta te rog.", online: false, img: "https://i.pravatar.cc/150?u=8" },
        { id: 9, name: "Mihai Stoica", lastMsg: "Sunt pe drum.", online: true, img: "https://i.pravatar.cc/150?u=9" },
        { id: 10, name: "Laura Cosoi", lastMsg: "Super, mulțumesc!", online: true, img: "https://i.pravatar.cc/150?u=10" },
        { id: 11, name: "Vlad Chiricheș", lastMsg: "Nu am primit email-ul.", online: false, img: "https://i.pravatar.cc/150?u=11" },
        { id: 12, name: "Roxana Ionescu", lastMsg: "Putem amâna pentru mâine?", online: true, img: "https://i.pravatar.cc/150?u=12" },
        { id: 13, name: "Darius Matei", lastMsg: "Verifică acum.", online: false, img: "https://i.pravatar.cc/150?u=13" },
        { id: 14, name: "Ioana Grama", lastMsg: "Chiar îmi place ideea!", online: true, img: "https://i.pravatar.cc/150?u=14" },
        { id: 15, name: "Paul Antoniu", lastMsg: "Unde ne întâlnim?", online: true, img: "https://i.pravatar.cc/150?u=15" },
        { id: 16, name: "Bianca Adam", lastMsg: "Am postat noul video.", online: false, img: "https://i.pravatar.cc/150?u=16" },
        { id: 17, name: "Cătălin Bote", lastMsg: "Designul e gata.", online: true, img: "https://i.pravatar.cc/150?u=17" },
        { id: 18, name: "Denisa Pop", lastMsg: "Suna-mă când poți.", online: false, img: "https://i.pravatar.cc/150?u=18" },
        { id: 19, name: "Robert Turcescu", lastMsg: "Știrea e confirmată.", online: true, img: "https://i.pravatar.cc/150?u=19" },
        { id: 20, name: "Alex Velea", lastMsg: "Suntem în studio.", online: true, img: "https://i.pravatar.cc/150?u=20" },
    ];

    return (
        <List sx={{ pt: 2 }}>
            {conversations.map((chat) => (
                <ListItem key={chat.id} sx={{ px: 1.5, py: 1 }}>
                    <ListItemAvatar sx={{ minWidth: 0, mr: 2 }}>
                        <Badge overlap="circular" anchorOrigin={{ vertical: 'bottom', horizontal: 'right' }} variant="dot" color={chat.online ? "success" : "grey"}>
                            <Avatar src={chat.img}>{chat.name[0]}</Avatar>
                        </Badge>
                    </ListItemAvatar>

                    {/* Afișăm textul doar dacă Drawer-ul este deschis */}

                    <ListItemText
                        primary={chat.name}
                        secondary={chat.lastMsg}
                        primaryTypographyProps={{ noWrap: true, fontWeight: 'bold' }}
                        secondaryTypographyProps={{ noWrap: true }}
                    />

                </ListItem>
            ))}
        </List>
    );
};
export default ChatList;