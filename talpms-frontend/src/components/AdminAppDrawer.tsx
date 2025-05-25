import { Divider, Drawer, List, ListItem, ListItemButton, ListItemIcon, ListItemText, Toolbar } from "@mui/material";
import { Home, School } from "@mui/icons-material";
import { useLocation, useNavigate } from "react-router";

export default function AdminAppDrawer({ appDrawerWidth }: { appDrawerWidth: number }) {

    const drawer = [{
        id: "home",
        text: "Home",
        icon: <Home />,
        path: "/"
    }, {
        id: "student-list",
        text: "Students",
        icon: <School />,
        path: "/students"
    }];

    const navigate = useNavigate();
    const location = useLocation();

    return <Drawer variant="permanent" sx={{
        '& .MuiDrawer-paper': { boxSizing: "border-box", width: appDrawerWidth }
    }} open >
        <Toolbar />
        <Divider />
        <List>
            {
                drawer.map(d => {
                    return <ListItem key={d.id} disablePadding>
                        <ListItemButton selected={location.pathname == d.path} onClick={e => { navigate(d.path) }} >
                            <ListItemIcon>
                                {d.icon}
                            </ListItemIcon>
                            <ListItemText primary={d.text}></ListItemText>
                        </ListItemButton>
                    </ListItem>
                })
            }

        </List>
    </Drawer>
}