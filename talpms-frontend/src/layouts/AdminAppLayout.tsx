import AdminAppDrawer from "../components/AdminAppDrawer";
import AdminAppBar from "../components/AdminAppBar";
import { Outlet } from "react-router";

export default function AdminAppLayout({ appDrawerWidth }: { appDrawerWidth: number }) {
    const AppBarHeight = "4rem";
    return <div style={{ display: "flex", height: "100vh" }}>
        <AdminAppDrawer appDrawerWidth={appDrawerWidth} />
        <div style={{ flexGrow: 1 }}>
            <AdminAppBar appDrawerWidth={appDrawerWidth} appBarHeight={AppBarHeight} />
            <main style={{ marginLeft: appDrawerWidth, height: `calc(100% - ${AppBarHeight})`, overflow: "auto" }}>
                <Outlet />
            </main>
        </div>
    </div>

}