import {SideCard} from "../core";
import {Link} from "react-router-dom";

const SideList = ({title , list}) => {
    return (
        <SideCard title={title}>
            <ul className="text-gray-400 mb-4 font-light side-list-hover">
                {list.map((item , index)=> (
                    <li key={index} className="transition-colors mb-1.5 duration-100 ease-in my-1"><Link className="block" to={`/cat/${item.title}`}>{item.title}</Link></li>
                ))}
            </ul>
        </SideCard>
    );
};

export default SideList;
