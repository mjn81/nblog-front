import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {faBars, faChevronDown, faMagnifyingGlass} from "@fortawesome/free-solid-svg-icons"
import SubMenItem from "./SubMenItem";
import { OutlineButton, SquareButton } from "../core";
import { faMoon } from "@fortawesome/free-regular-svg-icons";
const MainNav = () => {
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
    ]
    return ( 
        <div className="flex items-center justify-between px-8 py-3">
            <h1 className="uppercase text-4xl w-1/4 font-extralight">
                <Link to="/home"><span className="text-indigo-600">nb</span>log</Link>
            </h1>
            <nav className="py-4 w-1/2 text-gray-800 ">
                <ul className="flex w-full text-lg justify-center main-menu">
                    {categories.map(({id , title , subCat} , index) => (
                        <li key={id}
                            className={'relative px-5 py-2 border-gray-50 transition-colors duration-50 ease-in hover:text-indigo-700  '
                            + (index === 0 ? '':'border-l-2')}>
                            <Link to={title} className="py-1 flex items-center ">
                                {title}
                                {subCat ?
                                    <FontAwesomeIcon className="ml-2 text-xs" icon={faChevronDown} />
                                    : ''
                                }
                            </Link>
                            {subCat &&
                                <ul className="absolute z-50 rounded-sm top-full left-1/2 py-4 w-max bg-white">
                                    {subCat?.map((subItem) => (
                                        <SubMenItem key={subItem.id} item={subItem} />
                                    ))}
                                </ul>
                            }
                        </li>
                    ))}
                </ul>
            </nav>
            <section className="w-1/4 flex items-center justify-end">
                <OutlineButton adclass="text-2xl mr-3 text-indigo-600">
                    <FontAwesomeIcon icon={faMoon} />   
                </OutlineButton>
                <SquareButton adclass="mr-3">
                    <FontAwesomeIcon icon={faMagnifyingGlass} />
                </SquareButton>
                <SquareButton>
                    <FontAwesomeIcon icon={faBars} />
                </SquareButton>
            </section>
        </div>
     );
}
 
export default MainNav;