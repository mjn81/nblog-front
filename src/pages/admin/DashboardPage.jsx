import {SideBar , TopNav , MainContent} from "../../components/admin";
import {Outlet} from "react-router-dom";

const DashboardPage = () => {


    return (
        <div className="h-screen w-full flex items-start">
            <SideBar />
            <section className="w-full">
                <TopNav />
                <MainContent>
                    <Outlet />
                </MainContent>
            </section>
        </div>
    );
};

export default DashboardPage;
