import {Link, useNavigate} from "react-router-dom";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faBars, faChevronDown, faMagnifyingGlass, faUser} from "@fortawesome/free-solid-svg-icons"
import {faMoon} from "@fortawesome/free-regular-svg-icons";

import {useContext, useState} from "react";
import SubMenItem from "./SubMenItem";
import {OutlineButton, SquareButton} from "../core";
import {Menu, Search} from "./Portals";
import userContext from "../../context/UserContext";

const MainNav = ({ categories }) => {
    
    const [searchV, setSV] = useState(false);
    const [menuV, setMenuV] = useState(false);
    const {state} = useContext(userContext);
    const navigator = useNavigate();
    const onUserClickHandler = () => {
        if (state.logState && state.token) {
            navigator('/user/dashboard', {replace: true});
        } else {
            navigator('/user/login', {replace: true});
        }
    }

    const onSearchClick = () => {
        setSV(true);
    }
    const onMenuClick = () => {
        setMenuV(true);
    }
    return (
        <div className="flex items-center justify-between px-8 py-3">
            <h1 className="uppercase text-4xl w-1/4 font-extralight flex-grow lg:flex-grow-0">
                <Link to="/home"><span className="text-indigo-600">nb</span>log</Link>
            </h1>
            <nav className="py-4 w-1/2 text-gray-800 hidden lg:block">
                <ul className="flex w-full text-lg justify-center main-menu">
                    {categories && categories.map(({ title }, index) => (
                        <li key={index}
                            className={'relative px-5 py-2 border-gray-50 transition-colors duration-50 ease-in hover:text-indigo-700  '
                                + (index === 0 ? '' : 'border-l-2')}>
                            <Link to={`cat/${title}`} className="py-1 flex items-center">
                                {title}
                                {/* {subCat ?
                                    <FontAwesomeIcon className="ml-2 text-xs" icon={faChevronDown}/>
                                    : ''
                                } */}
                            </Link>
                            {/* {subCat &&
                                <ul className="absolute z-50 rounded-sm top-full left-1/2 py-4 w-max bg-white">
                                    {subCat?.map((subItem) => (
                                        <SubMenItem key={subItem.id} item={subItem}/>
                                    ))}
                                </ul>
                            } */}
                        </li>
                    ))}
                </ul>
            </nav>
            <section className="w-1/4 flex items-center justify-end">
                <OutlineButton adclass="text-2xl mr-3 text-indigo-600">
                    <FontAwesomeIcon icon={faMoon}/>
                </OutlineButton>
                <SquareButton adclass="mr-3" onClick={onSearchClick}>
                    <FontAwesomeIcon icon={faMagnifyingGlass}/>
                    <Search visible={searchV} setVisible={setSV}/>
                </SquareButton>
                <SquareButton adclass="lg:hidden" onClick={onMenuClick}>
                    <FontAwesomeIcon icon={faBars}/>
                    <Menu visible={menuV} setVisible={setMenuV} category={categories}/>
                </SquareButton>
                <SquareButton adclass="ml-3 lg:ml-0" onClick={onUserClickHandler}>
                    <FontAwesomeIcon icon={faUser}/>
                </SquareButton>
            </section>


        </div>
    );
}

export default MainNav;