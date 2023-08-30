import SideBar from "./SideBar";
import { Outlet } from "react-router-dom";

function RootLayout() {
    return (<>
        <div style={{ display: 'flex' }}>
        <SideBar />
        <main style={{ flex: 1 }}>
            <Outlet />
        </main>
        </div>
    </>);
};

export default RootLayout;