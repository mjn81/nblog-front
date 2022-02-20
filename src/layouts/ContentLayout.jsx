import SideBar from "../components/SideBar/SideBar";

const ContentLayout = ({children}) => {
    return (
        <div className="lg:grid grid-cols-8 gap-5">
            <div className="lg:col-span-6">
                {children}
            </div>
            <div className="lg:col-span-2">
                <SideBar />
            </div>
        </div>
    );
};

export default ContentLayout;
