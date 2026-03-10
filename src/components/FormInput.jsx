import { TextField } from '@mui/material';

const FormInput = ({ label, type, name, value, onChange, placeholder, error }) => {
    return (
        <TextField
            fullWidth
            label={label}
            type={type}
            name={name}
            value={value}
            onChange={onChange}
            placeholder={placeholder}
            error={!!error}
            helperText={error}
            variant="outlined"
            margin="normal"
            sx={{ backgroundColor: 'white' }}
        />
    );
};
export default FormInput;