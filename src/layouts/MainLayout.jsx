import { Outlet } from "react-router-dom";

import Header from "../components/Header";

const MainLayout = () => {
    return (  
        <>
            <Header />
            <main className="bg-gray-100 pb-6 w-full">
                <div className="w-2/3  lg:w-[1020px] lg:px-4 xl:w-[1140px] xl:px-10 py-1 mx-auto">
                    <Outlet />
                </div>
            </main>
        </>
    
    );
}
 
export default MainLayout;