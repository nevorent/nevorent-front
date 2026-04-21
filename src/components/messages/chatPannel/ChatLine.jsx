import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import IconButton from '@mui/material/IconButton';
import SendIcon from '@mui/icons-material/Send';
import { useState } from 'react';
function ChatLine({ onSend }) {
    const [text, setText] = useState("");

    const handleAction = () => {
        if (text.trim() === "") return;
        onSend(text); // Trimitem textul către ChatPannel -> MessagesPage
        setText("");  // Resetăm input-ul
    };

    const handleKeyPress = (e) => {
        if (e.key === 'Enter') {
            handleAction();
        }
    };
    return (
        <Box sx={{
            p: 2,
            borderTop: '1px solid #e0e0e0',
            bgcolor: 'background.paper',
            display: 'flex',
            alignItems: 'center',
            gap: 1
        }}>
            <TextField fullWidth id="newMessageText"
                placeholder="Scrie un mesaj..."
                variant="outlined" sx={{
                    '& .MuiOutlinedInput-root': {
                        borderRadius: '20px',
                    },

                }} value={text}
                onChange={(e) => setText(e.target.value)}
                onKeyPress={handleKeyPress} />
            <IconButton color="primary" aria-label="send" onClick={handleAction}>
                <SendIcon />
            </IconButton>
        </Box>
    );
}
export default ChatLine;
