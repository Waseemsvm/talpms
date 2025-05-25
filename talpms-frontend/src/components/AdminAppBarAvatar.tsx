import { Avatar, ListItemIcon, ListItemText, Menu, MenuItem } from "@mui/material";
import { useState } from "react";
import { AccountCircle, Settings, LogoutOutlined } from "@mui/icons-material";
import { useAuth } from "./Auth/AuthContext";

export default function AdminAppBarAvatar() {
    const [anchorEl, setAnchorEl] = useState(null);
    const open = Boolean(anchorEl);
    const { logout } = useAuth();

    const handleClick = (e: any) => {
        setAnchorEl(e.target);
    }

    const handleClose = () => {
        setAnchorEl(null);
    }

    return <>
        <Avatar aria-haspopup="true" onClick={handleClick} style={{ cursor: "pointer" }} /> <Menu keepMounted open={open} onClose={handleClose} anchorEl={anchorEl}>
            <MenuItem>
                <ListItemIcon>
                    <AccountCircle />
                </ListItemIcon>
                <ListItemText>Profile</ListItemText>
            </MenuItem>
            <MenuItem>
                <ListItemIcon>
                    <Settings />
                </ListItemIcon>
                <ListItemText>Settings</ListItemText>
            </MenuItem>
            <MenuItem onClick={e => {
                logout();
            }}>
                <ListItemIcon>
                    <LogoutOutlined />
                </ListItemIcon>
                <ListItemText>Logout</ListItemText>
            </MenuItem>
        </Menu></>
}