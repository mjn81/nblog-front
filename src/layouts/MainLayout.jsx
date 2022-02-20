import { Outlet } from "react-router-dom";

import Header from "../components/Header";
import Footer from "../components/Footer";

const MainLayout = () => {
    return (  
        <>
            <Header />
            <main className="bg-gray-100 pb-4 w-full">
                <div className="w-full px-3   lg:w-[1020px] lg:px-4 xl:w-[1240px] xl:px-10 py-1 mx-auto">
                    <Outlet />
                </div>
            </main>
            <Footer />
        </>
    
    );
}
 
export default MainLayout;