import { AppBar, Box, Toolbar, Typography } from "@mui/material";
import AdminAppBarAvatar from "./AdminAppBarAvatar";

export default function AdminAppBar({ appDrawerWidth, appBarHeight }: { appDrawerWidth: number, appBarHeight: string }) {
    return <Box sx={{ flexGrow: 1, width: `calc(100% - ${appDrawerWidth}px)`, marginLeft: `${appDrawerWidth}px`, height: appBarHeight }}>
        <AppBar position="static" >
            <Toolbar>
                <Typography variant="h5" component="div" sx={{ flexGrow: 1 }} >The Akrams</Typography>
                <AdminAppBarAvatar />
            </Toolbar>
        </AppBar>
    </Box>
}   