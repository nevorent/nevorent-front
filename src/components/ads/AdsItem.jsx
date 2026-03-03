//e clickanle doar pe imagine si pe cardContent sa poata da si pe inimioara cick
import { styled } from '@mui/material/styles';
import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';
import CardActions from '@mui/material/CardActions';
import Avatar from '@mui/material/Avatar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import FavoriteIcon from '@mui/icons-material/Favorite';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import Stack from '@mui/material/Stack';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import AccessTimeIcon from '@mui/icons-material/AccessTime';
import { Box } from '@mui/material';
import Tooltip from '@mui/material/Tooltip';
import CardActionArea from '@mui/material/CardActionArea';
import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete';
import { useLocation } from 'react-router-dom';
import VisibilityOffIcon from '@mui/icons-material/VisibilityOff'
import VisibilityIcon from '@mui/icons-material/Visibility'
const AdsItemCard = styled(Card)(({ theme }) => ({
    backgroundColor: '#fff',
    ...theme.typography.body2,
    // padding: theme.spacing(1),
    height: 280,
    // textAlign: 'center',
    color: (theme.vars ?? theme).palette.text.secondary,
    ...theme.applyStyles('dark', {
        backgroundColor: '#1A2027',
    }),
}));
const AdsItem = ({ ad }) => {
    const location = useLocation();
    const isMyAdsPage = location.pathname === '/my-ads' || location.pathname === '/favorites'
    const handleCardClick = () => {
        console.log("Navigare către anunțul:", ad.id);
    };

    const handleFavoriteClick = (e) => {
        // Previne declanșarea click-ului pe CardActionArea
        e.preventDefault();
        e.stopPropagation();
        console.log("Favorite clicked!");
    };
    //TODO: action when the edit button is pressed 
    const handleEditClick = (e) => {
        e.preventDefault();
        e.stopPropagation();
        console.log("Edit button clicked")
    }
    //TODO:action when the delete button is pressed
    //it is a possibility to act different 
    const handleDeleteClick = (e) => {
        e.preventDefault();
        e.stopPropagation();
        console.log("Delete button clicked")
    }
    //TODO: ca nu se schimba deloc iconita 
    const handleToggleActive = (e) => {
        e.preventDefault();
        e.stopPropagation();

    }
    // console.log("Ad in AdsItem:", ad);
    // console.log("Ad user in AdsItem:", ad.user);
    return (
        <AdsItemCard sx={{ maxWidth: 345, opacity: (!ad.isActive && isMyAdsPage) ? 0.7 : 1, filter: (!ad.isActive && isMyAdsPage) ? 'grayscale(0.5)' : 'none' }}>
            {/*container pentru imagine si iconita*/}
            <Box sx={{ position: 'relative' }}>
                <CardActionArea onClick={handleCardClick} sx={{ height: '100%' }}>
                    <CardMedia
                        component="img"
                        height="140"
                        image={ad.imageUrl ? ad.imageUrl : 'https://via.placeholder.com/300x200?text=No+Image'}
                        alt={"proprietate " + ad.title}
                    />
                </CardActionArea>
                {/* iconita de la favorite */}
                {isMyAdsPage && location.pathname !== '/favorites' ? (
                    /* Buton de STARE pentru proprietar */
                    <Tooltip title={ad.isActive ? "Anunț Activ" : "Anunț Inactiv"}>
                        <IconButton
                            onClick={handleToggleActive}
                            sx={{
                                position: 'absolute',
                                top: 8,
                                right: 8,
                                backgroundColor: ad.isActive ? 'rgba(76, 175, 80, 0.9)' : 'rgba(21, 17, 17, 0.9)',
                                color: 'white',
                                '&:hover': { backgroundColor: ad.isActive ? '#2e7d32' : '#757575' },
                                padding: '5px',
                                boxShadow: 2
                            }}
                        >
                            {ad.isActive ? <VisibilityIcon fontSize="small" /> : <VisibilityOffIcon fontSize="small" />}
                        </IconButton>
                    </Tooltip>
                ) : (
                    <IconButton
                        onClick={handleFavoriteClick}
                        sx={{
                            position: 'absolute',
                            top: 8,
                            right: 8,
                            backgroundColor: 'rgba(255, 255, 255, 0.7)',
                            '&:hover': {
                                backgroundColor: 'rgba(255, 255, 255, 0.9)',
                            },
                            padding: '5px'
                        }}
                    >
                        {ad.isFavorite ? (
                            <FavoriteIcon sx={{ color: 'red' }} />
                        ) : (
                            <FavoriteIcon sx={{ color: 'white', stroke: 'black', strokeWidth: 1 }} />
                        )}
                    </IconButton>)}
            </Box>
            <Box sx={{ position: 'relative', height: '100%' }}>
                <CardActionArea onClick={handleCardClick} >
                    <CardContent sx={{ flexGrow: 1, p: 1.5 }}>
                        <Tooltip title={ad.title}>
                            <Typography variant='body2' noWrap sx={{ fontWeight: 'bold' }}>
                                {ad.title}
                            </Typography>
                        </Tooltip>

                        <Stack spacing={0.5} sx={{ mt: 1 }}>
                            {/* locatie */}
                            <Box sx={{ display: 'flex', alignItems: 'center', gap: 0.5 }}>
                                <LocationOnIcon sx={{ fontSize: '0.9rem', color: 'primary.main' }} />
                                <Typography variant="caption" color="text.secondary" noWrap>
                                    {ad.location}
                                </Typography>
                            </Box>

                            {/* data */}
                            <Box sx={{ display: 'flex', alignItems: 'center', gap: 0.5 }}>
                                <AccessTimeIcon sx={{ fontSize: '0.9rem', color: 'text.disabled' }} />
                                <Typography variant="caption" color="text.secondary">
                                    {ad.dateTime}
                                </Typography>
                            </Box>

                            {/* pret */}
                            <Typography variant="h6" color="primary" sx={{ fontSize: '1.1rem', fontWeight: 'bold' }}>
                                {ad.price ? `${ad.price} €` : '450 €'}
                            </Typography>

                            {/* suprafata si camere  */}
                            <Typography variant="caption" color="text.secondary">
                                {ad.surface} m² - {ad.rooms} camere
                            </Typography>
                        </Stack>
                    </CardContent>
                </CardActionArea>
                {/*iconita de la delete  */}
                {isMyAdsPage && (
                    <>

                        <IconButton
                            onClick={handleDeleteClick}
                            sx={{
                                position: 'absolute',
                                top: 100,
                                right: 8,
                                backgroundColor: 'rgba(255, 255, 255, 0.44)',
                                '&:hover': {
                                    backgroundColor: 'rgba(255, 255, 255, 0.9)',
                                },
                                padding: '5px'
                            }}
                        >


                            <DeleteIcon sx={{ color: 'white', stroke: 'black', strokeWidth: 1 }} />

                        </IconButton>
                        <IconButton
                            onClick={handleEditClick}
                            sx={{
                                position: 'absolute',
                                top: 100,
                                right: 50,
                                backgroundColor: 'rgba(148, 140, 140, 0.44)',
                                '&:hover': {
                                    backgroundColor: 'rgba(28, 25, 25, 0.44)',
                                },
                                padding: '5px'
                            }}
                        >

                            <EditIcon sx={{ color: 'white', stroke: 'black', strokeWidth: 1 }} />
                        </IconButton>
                    </>
                )}
            </Box>
        </AdsItemCard>);
}
export default AdsItem;