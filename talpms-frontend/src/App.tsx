import "./App.css";
import { AppBar, Box, IconButton, Snackbar, Toolbar } from "@mui/material";
import StudentList from "./StudentList";
import MenuIcon from "@mui/icons-material/Menu";


export default function App() {
  const appBarHeight = 64;
  return <Box sx={{ display: "flex", height: "100vh", flexDirection: "column" }}>
    <Box sx={{ display: "flex" }}>
      <AppBar component="nav">
        <Toolbar>
          <IconButton >
            <MenuIcon />
          </IconButton>
        </Toolbar>
      </AppBar>
    </Box>
    <Box component="main" flexGrow="1" style={{ marginTop: appBarHeight, overflow: "auto", height: "calc(100vh -64)" }}>
      <StudentList />
    </Box>
  </Box>
}