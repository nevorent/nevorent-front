import { Button as MuiButton, CircularProgress } from '@mui/material';

const Button = ({ children, type = 'button', onClick, variant = 'contained', disabled, loading, fullWidth = false }) => {
    return (
        <MuiButton
            type={type}
            onClick={onClick}
            variant={variant} // 'contained' pentru primary, 'outlined' pentru secondary
            disabled={disabled || loading}
            fullWidth={fullWidth}
            size="medium"
            sx={{ py: 1.5, fontWeight: 'bold' }}
        >
            {loading ? <CircularProgress size={24} color="inherit" /> : children}
        </MuiButton>
    );
};
export default Button;