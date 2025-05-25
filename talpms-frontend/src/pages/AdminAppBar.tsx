import { AppBar, Box, Toolbar, Typography } from "@mui/material";
import AdminAppBarAvatar from "./AdminAppBarAvatar";

export default function AdminAppBar({ width }: { width: number }) {
    return <Box sx={{ flexGrow: 1, width: `calc(100% - ${width}px)`, marginLeft: `${width}px` }}>
        <AppBar position="static">
            <Toolbar>
                <Typography variant="h5" component="div" sx={{ flexGrow: 1 }} > The Akrams</Typography>
                <AdminAppBarAvatar />
            </Toolbar>
        </AppBar>
    </Box>
}   