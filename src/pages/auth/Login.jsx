import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import {
    Box, Typography, FormControl, FormLabel, TextField,
    Checkbox, FormControlLabel, Link, Divider, Button as MuiButton,
    Card as MuiCard
} from '@mui/material';
import { styled } from '@mui/material/styles';
import { loginUser } from '../../services/authService';
import { updateToken } from '../../store/authSlice';
import ForgotPassword from '../../components/login/ForgotPassword';
import { GoogleIcon, FacebookIcon, SistemIcon } from '../../components/login/CustomIcons';
import Button from '../../components/Button';
import CssBaseline from '@mui/material/CssBaseline';
import Stack from '@mui/material/Stack';
import Content from '../../components/login/ContentLogin';
const Card = styled(MuiCard)(({ theme }) => ({
    display: 'flex',
    flexDirection: 'column',
    alignSelf: 'center',
    width: '100%',
    padding: theme.spacing(4),
    gap: theme.spacing(2),
    boxShadow: 'hsla(220, 30%, 5%, 0.05) 0px 5px 15px 0px, hsla(220, 25%, 10%, 0.05) 0px 15px 35px -5px',
    [theme.breakpoints.up('sm')]: {
        width: '450px',
    },
}));

const Login = () => {
    const [formData, setFormData] = useState({ email: '', password: '' });
    const [emailError, setEmailError] = useState(false);
    const [emailErrorMessage, setEmailErrorMessage] = useState('');
    const [passwordError, setPasswordError] = useState(false);
    const [passwordErrorMessage, setPasswordErrorMessage] = useState('');
    const [error, setError] = useState('');
    const [loading, setLoading] = useState(false);
    const [open, setOpen] = useState(false);
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const validateInputs = () => {
        const { email, password } = formData;
        let isValid = true;
        if (!email || !/\S+@\S+\.\S+/.test(email)) {
            setEmailError(true);
            setEmailErrorMessage('Te rugăm să introduci o adresă de email validă.');
            isValid = false;
        } else {
            setEmailError(false);
            setEmailErrorMessage('');
        }
        if (!password || password.length < 6) {
            setPasswordError(true);
            setPasswordErrorMessage('Parola trebuie să aibă cel puțin 6 caractere.');
            isValid = false;
        } else {
            setPasswordError(false);
            setPasswordErrorMessage('');
        }
        return isValid;
    };

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData((prev) => ({ ...prev, [name]: value }));
        if (name === 'email') setEmailError(false);
        if (name === 'password') setPasswordError(false);
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        const isFormValid = validateInputs();
        if (!isFormValid) return;
        setLoading(true);
        setError('');

        try {
            const data = await loginUser(formData.email, formData.password);
            dispatch(updateToken({
                token: data.token,
                user: data.user
            }));

            navigate('/all-ads');
        } catch (err) {
            setError(err.message || "Email sau parolă incorecte");
        } finally {
            setLoading(false);
        }
    };

    return (<Box
        component="main"
        sx={(theme) => ({
            minHeight: '100vh',
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
            position: 'relative',
            '&::before': {
                content: '""',
                display: 'block',
                position: 'absolute',
                zIndex: -1,
                inset: 0,
                backgroundImage:
                    'radial-gradient(ellipse at 50% 50%, hsl(210, 100%, 97%), hsl(0, 0%, 100%))',
                backgroundRepeat: 'no-repeat',
                ...theme.applyStyles('dark', {
                    backgroundImage:
                        'radial-gradient(at 50% 50%, hsla(210, 100%, 16%, 0.5), hsl(220, 30%, 5%))',
                }),
            },
        })}
    >
        <CssBaseline />
        <Stack
            direction={{ xs: 'column-reverse', md: 'row' }}
            sx={{
                justifyContent: 'center',
                alignItems: 'center',
                gap: { xs: 4, sm: 8 },
                p: { xs: 2, sm: 4 },
                m: 'auto',
                maxWidth: '1200px',
                width: '100%'
            }}
        >
            {/* descriere */}
            <Box sx={{ flex: 1, display: 'flex', justifyContent: 'center' }}>
                <Content />
            </Box>

            {/* cardul de Login */}
            <Box sx={{ flex: 1, display: 'flex', justifyContent: 'center' }}>
                <Card variant="outlined">
                    <Box sx={{ display: { xs: 'flex', md: 'none' } }}>
                        <SistemIcon />
                    </Box>
                    <Typography component="h1" variant="h4" sx={{ width: '100%', mb: 1 }}>
                        Sign in
                    </Typography>

                    {/* Eroarea generală de la server */}
                    {error && (
                        <Typography color="error" variant="body2" align="center" sx={{ mb: 2, bgcolor: '#ffebee', p: 1, borderRadius: 1 }}>
                            {error}
                        </Typography>
                    )}

                    <Box component="form" onSubmit={handleSubmit} noValidate sx={{ display: 'flex', flexDirection: 'column', gap: 2 }}>

                        <FormControl fullWidth>
                            <FormLabel htmlFor="email" sx={{ mb: 1 }}>Email</FormLabel>
                            <TextField
                                error={emailError}
                                helperText={emailErrorMessage}
                                id="email"
                                type="email"
                                name="email"
                                value={formData.email}
                                onChange={handleChange}
                                placeholder="your@email.com"
                                autoComplete="email"
                                autoFocus
                                required
                                variant="outlined"
                                color={emailError ? 'error' : 'primary'}
                            />
                        </FormControl>

                        <FormControl fullWidth>
                            <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', mb: 1 }}>
                                <FormLabel htmlFor="password">Password</FormLabel>
                                <Link
                                    component="button"
                                    type="button"
                                    onClick={() => setOpen(true)}
                                    variant="body2"
                                >
                                    Forgot your password?
                                </Link>
                            </Box>
                            <TextField
                                error={passwordError}
                                helperText={passwordErrorMessage}
                                id="password"
                                name="password"
                                type="password"
                                value={formData.password}
                                onChange={handleChange}
                                placeholder="••••••"
                                autoComplete="current-password"
                                required
                                variant="outlined"
                                color={passwordError ? 'error' : 'primary'}
                            />
                        </FormControl>

                        <FormControlLabel
                            control={<Checkbox value="remember" color="primary" />}
                            label="Remember me"
                        />

                        <ForgotPassword open={open} handleClose={() => setOpen(false)} />

                        <Button
                            type="submit"
                            fullWidth
                            variant="contained"
                            loading={loading}
                        >
                            Sign in
                        </Button>

                        <Typography sx={{ textAlign: 'center' }}>
                            Don&apos;t have an account?{' '}
                            <Link href="/signup" variant="body2">
                                Sign up
                            </Link>
                        </Typography>
                    </Box>

                    <Divider>or</Divider>

                    <Box sx={{ display: 'flex', flexDirection: 'column', gap: 2 }}>
                        <MuiButton
                            fullWidth
                            variant="outlined"
                            onClick={() => alert('Sign in with Google')}
                            startIcon={<GoogleIcon />}
                        >
                            Sign in with Google
                        </MuiButton>
                        <MuiButton
                            fullWidth
                            variant="outlined"
                            onClick={() => alert('Sign in with Facebook')}
                            startIcon={<FacebookIcon />}
                        >
                            Sign in with Facebook
                        </MuiButton>
                    </Box>
                </Card>
            </Box>
        </Stack>
    </Box>
    );
};

export default Login;