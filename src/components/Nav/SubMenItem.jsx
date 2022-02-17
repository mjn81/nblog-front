import { Link } from "react-router-dom";

const SubMenuItem = ({item}) => {
    return (  
        <li className="hover:bg-gray-50 text-gray-800 hover:text-indigo-700 w-full transition-colors duration-50 ease-in ">
            <Link to={item.title} className="py-2 px-3 block">
                {item.title}
            </Link>
        </li>
    );
}
 
export default SubMenuItem;