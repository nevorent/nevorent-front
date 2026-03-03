import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import IconButton from '@mui/material/IconButton';
import SendIcon from '@mui/icons-material/Send';
function ChatLine() {
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

                }} />
            <IconButton color="primary" aria-label="send">
                <SendIcon />
            </IconButton>
        </Box>
    );
}
export default ChatLine;
