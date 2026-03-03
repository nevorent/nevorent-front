import React, { useMemo } from 'react';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import Grid from '@mui/material/Grid';
import AdsItem from '../../components/ads/AdsItem';
import AdsGrid from '../../components/ads/AdsGrid';
import { useSelector } from 'react-redux';
import mockAds from '../../components/ads/mockAds';
import Fab from '@mui/material/Fab';
import AddIcon from '@mui/icons-material/Add';
import { styled } from '@mui/material/styles';
import { Menu } from '@mui/material';
import { useNavigate } from 'react-router-dom';
const StyledFab = styled(Fab)({
    position: 'fixed',
    size: 'large',
    zIndex: 1,
    bottom: 40,
    // left: 0,
    right: 40,
    margin: '0 auto',
    // onClick: () => { console.log("Add new ad") }
});
const MyAdsPage = () => {

    const userLogged = useSelector((state) => state.auth.user);
    const myAds = useMemo(() => {
        if (!userLogged) return [];
        return mockAds.filter(ad => ad.user?.name === userLogged.name);
    }, [userLogged]);
    const navigate = useNavigate();
    const handleClick = () => {
        console.log("Add new ad");
        //deocamdata nu duce nicaieri 
        navigate("/ads/new");
    }
    return (
        <Box sx={{ position: 'relative', height: '100%', overflow: 'hidden', flexDirection: 'column' }}>
            <StyledFab color="primary" aria-label="add" size='large' onClick={handleClick} >
                <AddIcon />
            </StyledFab>
            <AdsGrid mockAds={myAds} />
        </Box>);
};
export default MyAdsPage;