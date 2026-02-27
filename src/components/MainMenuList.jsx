import { List, ListItem, ListItemButton, ListItemText, ListItemIcon, Typography } from "@mui/material";
import PaymentIcon from '@mui/icons-material/Payment';
import HistoryIcon from '@mui/icons-material/History';
import DashboardIcon from '@mui/icons-material/Dashboard';
import HomeWorkIcon from '@mui/icons-material/HomeWork';
import PeopleAltIcon from '@mui/icons-material/PeopleAlt';
import EngineeringIcon from '@mui/icons-material/Engineering';
import DescriptionIcon from '@mui/icons-material/Description';
import { useNavigate } from "react-router-dom";
export const MainMenuList = () => {
    const navigate = useNavigate();
    return (
        <List>
            {/* <Typography
                variant="h4"
                component="div"
                sx={{ flexGrow: 1, cursor: 'pointer', fontWeight: 'bold' }}
                onClick={() => navigate('/home')}
            >
                NEVORENT
            </Typography> */}

            <ListItem disablePadding>
                <ListItemButton onClick={() => navigate('/owner-dashboard')}>
                    <ListItemIcon><DashboardIcon /></ListItemIcon>
                    <ListItemText primary="Dashboard" secondary="Statistici generale" />
                </ListItemButton>
            </ListItem>
            <ListItem disablePadding>
                <ListItemButton onClick={() => navigate('/my-properties')}>
                    <ListItemIcon><HomeWorkIcon /></ListItemIcon>
                    <ListItemText primary="Proprietățile mele" />
                </ListItemButton>
            </ListItem>
            <ListItem disablePadding>
                <ListItemButton onClick={() => navigate('/tenants-list')}>
                    <ListItemIcon><PeopleAltIcon /></ListItemIcon>
                    <ListItemText primary="Chiriașii mei" />
                </ListItemButton>
            </ListItem>
            <ListItem disablePadding>
                <ListItemButton onClick={() => navigate('/maintenance-requests')}>
                    <ListItemIcon><EngineeringIcon /></ListItemIcon>
                    <ListItemText primary="Cereri Reparatii" />
                </ListItemButton>
            </ListItem>
            <ListItem disablePadding>
                { /*TODO: adauga roluri sa nu poata sa fie vazute de toti- si unele sa poata fi vazute doar logat */}
                <ListItemButton onClick={() => navigate('/payments')}>
                    <ListItemIcon><PaymentIcon /></ListItemIcon>
                    <ListItemText primary={"Payments"} />
                </ListItemButton>
            </ListItem>
            <ListItem disablePadding>
                <ListItemButton onClick={() => navigate('/documents')}>
                    <ListItemIcon><DescriptionIcon /></ListItemIcon>
                    <ListItemText primary="Documente" />
                </ListItemButton>
            </ListItem>
            <ListItem disablePadding>
                { /*doar ca sa vad ca functioneaza */}
                <ListItemButton onClick={() => navigate('/history')}>
                    <ListItemIcon><HistoryIcon /></ListItemIcon>
                    <ListItemText primary={"History"} />
                </ListItemButton>
            </ListItem>
        </List>
    );
};