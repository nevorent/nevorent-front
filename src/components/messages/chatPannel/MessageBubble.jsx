import {
    List, ListItem, ListItemAvatar, Badge, Avatar, Box, Typography
} from "@mui/material";
const MessageBubble = ({ text, isMine }) => {
    return (
        <Box sx={{
            maxWidth: '70%',
            // display: 'inline-block',
            justifyContent: isMine ? 'flex-end' : 'flex-start',
            mb: 1,
            background: isMine ? '#1976d2' : 'rgba(101, 152, 172, 0.7)',
            borderRadius: '40px',
            p: '10px 16px',
            color: isMine ? 'white' : 'inherit',
        }}>

            <Typography variant="body2" >{text}</Typography>

        </Box>
    );

}
export default MessageBubble;