import * as React from 'react';
import Box from '@mui/material/Box';
import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';
import AutoFixHighRoundedIcon from '@mui/icons-material/AutoFixHighRounded';
import ConstructionRoundedIcon from '@mui/icons-material/ConstructionRounded';
import SettingsSuggestRoundedIcon from '@mui/icons-material/SettingsSuggestRounded';
import ThumbUpAltRoundedIcon from '@mui/icons-material/ThumbUpAltRounded';
import { SistemIcon } from './CustomIcons';

const items = [
    {
        icon: <SettingsSuggestRoundedIcon sx={{ color: 'primary.main' }} />,
        title: 'Gestiune Adaptabilă',
        description:
            'Nevorent se mulează pe nevoile tale, fie că ești proprietar cu un singur apartament sau managerul unui portofoliu imobiliar complex.',
    },
    {
        icon: <ConstructionRoundedIcon sx={{ color: 'primary.main' }} />,
        title: 'Siguranță și Durabilitate',
        description:
            'O investiție pe termen lung în liniștea ta. Monitorizăm plățile și contractele pentru ca tu să nu pierzi nicio scadență.',
    },
    {
        icon: <ThumbUpAltRoundedIcon sx={{ color: 'primary.main' }} />,
        title: 'Experiență Intuitivă',
        description:
            'Interfața noastră simplificată permite chiriașilor și proprietarilor să comunice și să rezolve problemele în câteva secunde.',
    },
    {
        icon: <AutoFixHighRoundedIcon sx={{ color: 'primary.main' }} />,
        title: 'Funcționalități Inovatoare',
        description:
            'De la facturare automată la chat integrat, setăm noi standarde în modul în care administrezi proprietățile în 2026.',
    },
];

export default function Content() {
    return (
        <Stack
            sx={{
                flexDirection: 'column',
                alignSelf: 'center',
                gap: 4,
                maxWidth: 450,
                px: { xs: 2, md: 0 }
            }}
        >
            <Box sx={{ display: { xs: 'none', md: 'flex' } }}>
                {/*logo personalizat*/}
                <SistemIcon />
            </Box>

            {items.map((item, index) => (
                <Stack key={index} direction="row" sx={{ gap: 2 }}>
                    <Box sx={{ mt: 0.5 }}>
                        {item.icon}
                    </Box>
                    <div>
                        <Typography gutterBottom sx={{ fontWeight: 'bold', color: 'text.primary' }}>
                            {item.title}
                        </Typography>
                        <Typography variant="body2" sx={{ color: 'text.secondary', lineHeight: 1.6 }}>
                            {item.description}
                        </Typography>
                    </div>
                </Stack>
            ))}
        </Stack>
    );
}