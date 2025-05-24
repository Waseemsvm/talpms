import "./App.css";
import { AppBar, Box, Drawer, IconButton, Snackbar, Toolbar } from "@mui/material";
import StudentList from "./StudentList";
import MenuIcon from "@mui/icons-material/Menu";
import { useState } from "react";
import AppDrawer from "./AppDrawer";


export default function App() {
  const appBarHeight = 64;

  const [isDrawerOpen, setIsDrawerOpen] = useState(false);

  return <Box sx={{ display: "flex", height: "100vh", flexDirection: "column" }}>
    <Box sx={{ display: "flex" }}>
      <AppBar component="nav">
        <Toolbar>
          <IconButton onClick={e => {
            setIsDrawerOpen(true);
          }}>
            <MenuIcon />
          </IconButton>
        </Toolbar>
      </AppBar>
    </Box>
    <Box component="main" flexGrow="1" style={{ marginTop: appBarHeight, overflow: "auto", height: "calc(100vh -64)" }}>
      <StudentList />
    </Box>
    <Drawer open={isDrawerOpen} onClose={e => {
      setIsDrawerOpen(false)
    }} >
      <AppDrawer></AppDrawer>
    </Drawer>
  </Box>
}