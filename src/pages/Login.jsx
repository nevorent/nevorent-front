import { useState } from 'react';
import { loginUser } from '../services/authService';
import FormInput from '../components/FormInput';
import Button from '../components/Button';
import { Container, Paper, Typography, Box } from '@mui/material';
const Login = ({ onLoginSuccess }) => {
    const [formData, setFormData] = useState({ email: '', password: '' });
    const [error, setError] = useState('');
    const [loading, setLoading] = useState(false);

    const handleSubmit = async (e) => {
        e.preventDefault();
        setLoading(true);
        setError('');
        try {
            const data = await loginUser(formData.email, formData.password);
            console.log("Succes!", data);
            onLoginSuccess(data); // trimit  datele către App.jsx
        } catch (err) {
            setError(err);
        } finally {
            setLoading(false);
        }
    };

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData((prev) => ({ ...prev, [name]: value }));
    };


    return (
        <Container component="main" maxWidth="xs">
            <Box sx={{
                marginTop: 8,
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center'
            }}>
                <Paper elevation={3} sx={{ p: 4, width: '100%', borderRadius: 2 }}>
                    <Typography component="h1" variant="h5" align="center" gutterBottom>
                        Autentificare
                    </Typography>

                    {error && (
                        <Typography color="error" variant="body2" align="center" sx={{ mb: 2 }}>
                            {error}
                        </Typography>
                    )}

                    <form onSubmit={handleSubmit}>
                        <FormInput
                            label="Email"
                            type="email"
                            name="email"
                            value={formData.email}
                            onChange={handleChange}
                        />
                        <FormInput
                            label="Parolă"
                            type="password"
                            name="password"
                            value={formData.password}
                            onChange={handleChange}
                        />
                        <Button type="submit" loading={loading} >
                            Intră în cont
                        </Button>
                    </form>
                </Paper>
            </Box>
        </Container>
    );
};

export default Login;