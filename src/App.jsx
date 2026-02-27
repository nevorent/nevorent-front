import { useEffect, useState } from 'react';
import { RouterProvider, createBrowserRouter, Navigate } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { Box, Typography } from '@mui/material';

import { resetAuth } from './store/authSlice';
import { verifyToken } from './services/authService';

import Home from './pages/Home';
import Login from './pages/Login';
import Register from './pages/Register';
import MainLayout from './layouts/MainLayout';

// --- CONFIGURARE RUTE ---
const publicRoutes = [
  { path: '/', element: <MainLayout /> },
  { path: '/home', element: <MainLayout /> },
  { path: '/login', element: <Login /> },
  { path: '/register', element: <Register /> },
];

const authenticatedRoutesConfig = [
  {
    path: '/',
    element: <MainLayout />,
    children: [// paginile care se pot accesa din MainLayout
      { index: true, element: <Home /> },
      { path: 'home', element: <Home /> },
      { path: 'login', element: <Login /> },
    ],
  },
  //cat timp e logat si vrea login sa il trimita la home 
  { path: '/login', element: <Navigate replace to="/" /> },
  { path: '*', element: <Navigate replace to="/" /> },
];

const routerOptions = {
  future: {
    v7_relativeSplatPath: true,
    v7_fetcherPersist: true,
    v7_normalizeFormMethod: true,
    v7_partialHydration: true,
    v7_skipActionErrorRevalidation: true,
  },
};

const publicRouter = createBrowserRouter(publicRoutes, routerOptions);
const authenticatedRouter = createBrowserRouter(authenticatedRoutesConfig, routerOptions);


function App() {
  const token = useSelector((state) => state.auth.token);
  const dispatch = useDispatch();
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (token) {
      verifyToken(token)
        .catch(() => {
          dispatch(resetAuth()); //resetam token salvat pe null ca a expirat
        })
        .finally(() => {
          setLoading(false);
        });
    } else {
      // eslint-disable-next-line react-hooks/set-state-in-effect
      setLoading(false);
    }
  }, [token, dispatch]);

  if (loading) {
    return (
      <Box sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100vh' }}>
        <Typography variant="h6">Se încarcă...</Typography>
      </Box>
    );
  }
  return <RouterProvider router={token ? authenticatedRouter : publicRouter} />;
}

export default App;