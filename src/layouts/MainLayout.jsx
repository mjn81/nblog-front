import { Outlet } from "react-router-dom";

import Header from "../components/Header";

const MainLayout = () => {
    return (  
        <>
            <Header />
            <main className="bg-gray-100 w-full h-screen">
                <div className="w-2/3 py-1 mx-auto">
                    <Outlet />
                </div>
            </main>
        </>
    
    );
}
 
export default MainLayout;