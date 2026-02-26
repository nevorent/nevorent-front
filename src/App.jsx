// src/App.jsx
import { useState, useEffect } from 'react';
import Login from './pages/Login';
import Register from './pages/Register';
import Button from './components/Button';
import {
  AppBar, Toolbar, Typography, Box, Container, Tooltip, IconButton, Avatar
} from '@mui/material';
import PersonIcon from '@mui/icons-material/Person';
import { verifyToken } from './services/authService';
import Home from './pages/Home';

function App() {
  const [user, setUser] = useState(null);
  const [view, setView] = useState('home');
  const [loading, setLoading] = useState(true);
  const handleLogout = () => {
    setUser(null);
    localStorage.clear();
    setView('home');
  };
  useEffect(() => {
    const token = localStorage.getItem('token');

    if (token) {
      verifyToken(token)
        .then((userData) => {
          setUser(userData);
        })
        .catch(() => {
          handleLogout(); // Ștergem tot dacă e invalid
        })
        .finally(() => {
          setLoading(false); // S-a terminat verificarea (succes sau eroare)
        });
    } else {
      // CAZUL 2: NU avem token deloc
      // eslint-disable-next-line react-hooks/set-state-in-effect
      setLoading(false); // Oprim loading-ul imediat pentru a arăta pagina de Home
    }
  }, []);

  const handleLoginSuccess = (userData) => {
    console.log("Login reușit în App.jsx!", userData.token, userData.user);
    localStorage.setItem('token', userData.token);
    setUser(userData.user);
    setView('home');
  };
  if (loading) {
    return (
      <Box sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100vh' }}>
        <Typography variant="h6">Se încarcă...</Typography>
      </Box>
    );
  }
  return (
    <Box sx={{ flexGrow: 1 }}>
      {/* NAVBAR */}
      <AppBar position="static" sx={{ backgroundColor: '#ffffff', color: '#333', boxShadow: 1 }}>
        <Toolbar>
          <Typography
            variant="h6"
            component="div"
            sx={{ flexGrow: 1, cursor: 'pointer', fontWeight: 'bold' }}
            onClick={() => setView('home')}
          >
            NEVORENT
          </Typography>

          {user ? (
            <Box sx={{ display: 'flex', alignItems: 'center', gap: 2 }}>
              <Tooltip title={user.name}>
                <IconButton sx={{ p: 0 }}>
                  <Avatar
                    alt={user.name}
                    src={user.avatarUrl || ""} // Dacă ai un URL de poză în obiectul user, îl va pune aici
                    sx={{ bgcolor: '#007bff' }} // Culoarea de fundal dacă nu există poză
                  >
                    {/* Dacă nu există poză, punem iconița de Person ca fallback */}
                    {!user.avatarUrl && <PersonIcon />}
                  </Avatar>
                </IconButton>
              </Tooltip>
              <Button onClick={handleLogout} variant="outlined" size="small">Logout</Button>
            </Box>
          ) : (
            <Box sx={{ display: 'flex', gap: 1 }}>
              <Button onClick={() => setView('login')} variant="text">Login</Button>
              <Button onClick={() => setView('register')} variant="contained">Sign Up</Button>
            </Box>
          )}
        </Toolbar>
      </AppBar>

      {/* CONȚINUT PAGINĂ */}
      <Container sx={{ mt: 10, textAlign: 'center' }}>
        {view === 'home' && (
          <Home user={user} />
        )}

        {view === 'login' && !user && (
          <Login onLoginSuccess={handleLoginSuccess} />
        )}

        {view === 'register' && !user && (
          <Register onRegisterSuccess={() => setView('login')} />
        )}
      </Container>
    </Box>
  );
}

export default App;