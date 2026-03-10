import { useEffect, useState } from 'react';
import { RouterProvider, createBrowserRouter, Navigate } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { Box, Typography } from '@mui/material';

import { resetAuth } from './store/authSlice';
import { verifyToken } from './services/authService';

import Home from './pages/Home';
import Login from './pages/auth/Login';
import Register from './pages/auth/Register';
import MainLayout from './layouts/MainLayout';
import AllAdsPage from './pages/adsPage/AllAdsPage';
import FavouriteAdsPage from './pages/adsPage/FavouritesAdsPage';
import MyAdsPage from './pages/adsPage/MyAdsPage';
import MessagePage from './pages/messages/MessagePage';
import AdsNewPage from './pages/adsPage/AdsNewPage';


// --- CONFIGURARE RUTE ---
const publicRoutes = [
  {
    path: '/',
    element: <MainLayout />,
    children: [
      { index: true, element: <AllAdsPage /> },
      { path: 'home', element: <AllAdsPage /> },
      { path: 'all-ads', element: <AllAdsPage /> },
      // { path: 'favorites', element: <FavouriteAdsPage /> },
      { path: '/my-properties', element: <Navigate replace to="/login" /> },
    ]
  },
  { path: '/login', element: <Login /> },
  { path: '/register', element: <Register /> },


];

const authenticatedRoutesConfig = [
  {
    path: '/',
    element: <MainLayout />,
    children: [// paginile care se pot accesa din MainLayout
      { index: true, element: <AllAdsPage /> },
      { path: 'home', element: <AllAdsPage /> },
      { path: 'my-ads', element: <MyAdsPage /> },
      { path: 'all-ads', element: <AllAdsPage /> },
      { path: 'favorites', element: <FavouriteAdsPage /> },
      { path: '/my-properties', element: <Navigate replace to="/login" /> },
      { path: '/messages', element: <MessagePage /> },
      { path: '/my-tenants', element: <MessagePage /> },
      { path: '/possible-tenants', element: <MessagePage /> },
      { path: '/ads/new', element: <AdsNewPage /> },

    ],
  },
  //cat timp e logat si vrea login sa il trimita la home 
  { path: '/login', element: <Navigate replace to="/all-ads" /> },
  { path: '*', element: <Navigate replace to="/all-ads" /> },

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