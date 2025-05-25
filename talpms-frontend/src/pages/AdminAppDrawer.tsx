import { Divider, Drawer, List, ListItem, ListItemButton, ListItemIcon, ListItemText, Toolbar } from "@mui/material";
import { Home } from "@mui/icons-material";

export default function AdminAppDrawer({ appDrawerWidth }: { appDrawerWidth: number }) {
    return <Drawer variant="permanent" sx={{
        '& .MuiDrawer-paper': { boxSizing: "border-box", width: appDrawerWidth }
    }} open >
        <Toolbar />
        <Divider />
        <List>
            <ListItem disablePadding>
                <ListItemButton>
                    <ListItemIcon>
                        <Home />
                    </ListItemIcon>
                    <ListItemText primary="Home"></ListItemText>
                </ListItemButton>
            </ListItem>
        </List>
    </Drawer>
}