import React from "react";
import {
    Drawer, IconButton, ListItemButton, Box, List, ListItem, ListItemText, Typography
} from "@mui/material";
import MoreVertIcon from '@mui/icons-material/MoreVert';
import GenericDrawer from "./GenericDrawer";
import { MainMenuList } from "./MainMenuList";

const SideBarMain = () => {

    return (
        <GenericDrawer anchor="left" trigger={
            <IconButton
                aria-label="more"
                id="long-button"
                color="inherit"
            >
                <MoreVertIcon />
            </IconButton>}>

            <MainMenuList />
        </GenericDrawer>

    );
}
export default SideBarMain;