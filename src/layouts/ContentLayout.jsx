import SideBar from "../components/SideBar/SideBar";

const ContentLayout = ({children}) => {
    return (
        <div className="grid grid-cols-8 gap-5">
            <div className="col-span-6">
                {children}
            </div>
            <div className="col-span-2">
                <SideBar />
            </div>
        </div>
    );
};

export default ContentLayout;
