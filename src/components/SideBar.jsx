import React from "react";
import {
    Drawer, IconButton, ListItemButton, Box, List, ListItem, ListItemText, Typography
} from "@mui/material";
import MoreVertIcon from '@mui/icons-material/MoreVert';
import GenericDrawer from "./GenericDrawer";
import { MainMenuList } from "./MainMenuList";
import { Children } from "react";

const SideBar = ({ children }) => {

    return (
        <GenericDrawer anchor="left" trigger={
            <IconButton
                aria-label="more"
                id="long-button"
                color="inherit"
            >
                <MoreVertIcon />
            </IconButton>}>

            {children}
        </GenericDrawer>

    );
}
export default SideBar;