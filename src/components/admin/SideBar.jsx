import {Link} from "react-router-dom";
import {faFileMedical, faFolderOpen, faInfo} from "@fortawesome/free-solid-svg-icons";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
export const SideBar = () => {

    const categories = [
        {
            title:'Add Post',
            route:'addPost',
            icon:faFileMedical
        },{
            title:"Post's List",
            route:'postList',
            icon:faFolderOpen
        },{
            title:"Info",
            route:'info',
            icon:faInfo,
        },
    ];
    return (
        <section className="w-1/5 bg-slate-800 h-screen p-6">
            <h1 className="text-center text-4xl font-extrabold text-gray-700 mb-10">Admin Panel</h1>
            <ul className="text-center">
                {categories.map((cat , index)=>(
                    <li key={index} className="text-gray-300 text-lg bg-slate-900 hover:bg-indigo-900 bg-opacity-50 rounded-lg shadow-inner my-4">
                        <Link to={cat.route} className="block py-3">
                            <FontAwesomeIcon icon={cat.icon} />
                            {' '+cat.title}
                        </Link>
                    </li>
                ))}
            </ul>
        </section>
    );
};
