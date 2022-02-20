import {Outlet} from "react-router-dom";
const AdminLayout = () => {
    return (
        <main className="bg-gray-100">
            <Outlet />
        </main>
    );
};

export default AdminLayout;
