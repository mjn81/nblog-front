import SideSearch from "./SideSearch";
import SideList from "./SideList";
import LatestNews from "./LatestNews";
import SocialSideBar from "./Socials";
import { useFetchCategory } from "../../hooks";

const SideBar = () => {
    const { data: categories } = useFetchCategory();
    return (
        <div className="grid  gap-4">
            <SideSearch />
            <SocialSideBar />
            {categories && <SideList title="Categories" list={categories} />}
            <LatestNews />

        </div>
    );
};

export default SideBar;
