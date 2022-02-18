import SideSearch from "./SideSearch";
import SideList from "./SideList";
import LatestNews from "./LatestNews";

const SideBar = () => {
    const categories = [
        {
            title: 'news',
            id: 1,
        },
        {
            title: 'categories',
            id:2,
            subCat: [
                {
                    title: 'lorem bddskm dsjn2',
                    id: 1,
                },
                {
                    title: 'fkdnm dsjn3',
                    id: 2,
                },
                {
                    title: 'dsjnrd',
                    id: 3,
                },
                {
                    title: 'lorems dsjn2',
                    id: 4,
                },
            ]
        },
        {
            title: 'onemag',
            id:3,
        },
        {
            title: 'dskm',
            id:4,
        },
        {
            title: 'onemag',
            id:5,
        },
        {
            title: 'dskm',
            id:6,
        },
        {
            title: 'onemag',
            id:7,
        },
        {
            title: 'dskm',
            id:8,
        },
    ]
    return (
        <div className="grid  gap-4">
            <SideSearch />
            <SideList title="Categories" list={categories} />
            <LatestNews />
        </div>
    );
};

export default SideBar;
