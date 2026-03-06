import React from 'react';
import Grid from '@mui/material/Grid';
import AdsItem from '../../components/ads/AdsItem';
import { useLocation } from 'react-router-dom';
const AdsGrid = ({ mockAds }) => {
    const location = useLocation();
    const isAllAdsPage = location.pathname === '/all-ads' || location.pathname === '/' || location.pathname === '/home';

    return (
        <Grid container spacing={{ xs: 2, md: 3 }} columns={{ xs: 4, sm: 8, md: 12 }}>
            {/*pun 6 pe rand  pentru inceput sa vad cum arata */}
            {mockAds.map((index) => (
                <Grid key={index.id} size={{ xs: isAllAdsPage ? 4 : 2, sm: isAllAdsPage ? 4 : 2, md: isAllAdsPage ? 3 : 2 }}>
                    <AdsItem ad={index}></AdsItem>
                </Grid>
            ))}
        </Grid>
    );

};

export default AdsGrid;