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
import * as yup from 'yup';
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
const loginSchema = yup.object().shape({
    email: yup
        .string()
        .required('Email-ul este obligatoriu.')
        .email('Te rugăm să introduci o adresă de email validă.'),
    password: yup
        .string()
        .required('Parola este obligatorie.')
        .min(6, 'Parola trebuie să aibă cel puțin 6 caractere.'),
});

const Login = () => {
    const [formData, setFormData] = useState({ email: '', password: '' });
    const [errors, setErrors] = useState({})
    const [error, setError] = useState('');
    const [loading, setLoading] = useState(false);
    const [open, setOpen] = useState(false);
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const validateInputs = async () => {
        try {
            await loginSchema.validate(formData, { abortEarly: false });
            setErrors({});
            return true;
        } catch (err) {
            const newErrors = {};
            err.inner.forEach((validationError) => {
                newErrors[validationError.path] = validationError.message;
            });
            setErrors(newErrors);
            return false;
        }
    };

    const handleChange = async (e) => {
        const { name, value } = e.target;
        setFormData((prev) => ({ ...prev, [name]: value }));
        try {
            await yup.reach(loginSchema, name).validate(value);
            setErrors((prev) => ({ ...prev, [name]: '' }));
        } catch (err) {

            setErrors((prev) => ({ ...prev, [name]: err.message }));
        }
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        const isFormValid = await validateInputs();
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
                                error={!!errors.email}
                                helperText={errors.email}
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
                                color={errors.email ? 'error' : 'primary'}
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
                                error={!!errors.password}
                                helperText={errors.password}
                                id="password"
                                name="password"
                                type="password"
                                value={formData.password}
                                onChange={handleChange}
                                placeholder="••••••"
                                autoComplete="current-password"
                                required
                                variant="outlined"
                                color={errors.password ? 'error' : 'primary'}
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
                            <Link href="/register" variant="body2">
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