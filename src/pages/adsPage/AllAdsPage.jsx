import React, { useState } from 'react';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import Grid from '@mui/material/Grid';
import AdsItem from '../../components/ads/AdsItem';
import AdsGrid from '../../components/ads/AdsGrid';

import mockAds from '../../components/ads/mockAds';
// import { Typography } from '@mui/material'
import MapView from '../../components/map/MapView';
const AllAdsPage = () => {
    const myAds = mockAds.filter(ad => ad.isActive === true);
    const [adsInView, setAdsInView] = useState(myAds);
    return (
        <Box sx={{
            display: 'flex',
            overflow: 'hidden', // Împiedică pagina să scroleze cu totul
            height: '100%',     // Ocupă tot spațiul oferit de părinte (MainLayout)
            width: '100%',
            margin: 0,
            padding: 0,
        }}>
            {/* COLOANA ANUNȚURI */}
            <Box sx={{
                p: 3,
                width: '60%',
                height: '100hv',
                overflowY: 'auto', // doar aici am scrool 
                display: 'flex',
                flexDirection: 'column'
            }}>
                <AdsGrid mockAds={adsInView} />
            </Box>
            {/* harta*/}
            <Box sx={{
                height: '100%',
                width: '40%',
                position: 'relative',
                display: { xs: 'none', md: 'block' },
                overflow: 'hidden', // harta ramane fixa

            }}>
                <MapView ads={myAds} onBoundsChange={(filteredList) => setAdsInView(filteredList)}></MapView>
            </Box>
        </Box>
    );
};



export default AllAdsPage;
