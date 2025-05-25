import AdminAppBar from "./AdminAppBAr";
import AdminAppContainer from "./AdminAppContainer";
import AdminAppDrawer from "./AdminAppDrawer";

export default function AdminApp() {
    const appDrawerWidth = 240;
    return <div>
        <AdminAppBar width={appDrawerWidth} />
        <AdminAppContainer />
        <AdminAppDrawer appDrawerWidth={appDrawerWidth} />
    </div>
}