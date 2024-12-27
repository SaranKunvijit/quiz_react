import { FC } from "react";
import { Nav } from "../../page/Nav";
import { Outlet } from "react-router-dom";

const MainLayout: FC = () => {
    return (
        <>
            <Nav />
            <div className="main-content">
                <Outlet />
            </div>
        </>
    )
}

export default MainLayout