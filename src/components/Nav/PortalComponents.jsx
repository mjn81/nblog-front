import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {OutlineButton, PortalInput, SideCard, SquareButton} from "../core";
import {faMagnifyingGlass, faXmark} from "@fortawesome/free-solid-svg-icons";
import SideList from "../SideBar/SideList";

export const BackDrop = () => {
    return (
        <div className="fixed w-full h-full top-0 bg-black opacity-60 z-30">
        </div>
    );
}

export const Searchbar = ({setVisible}) => {
    return (
        <div onClick={e=>e.stopPropagation()}>
            <form
                className="fixed top-1/2 -translate-x-1/2 -translate-y-1/2 left-1/2 z-40">
                <div className="relative">
                    <PortalInput text="search for something..." name="search"/>
                    <OutlineButton onClick={e => e.preventDefault()}>
                        <FontAwesomeIcon icon={faMagnifyingGlass}
                                         className="absolute text-3xl text-white right-5 top-1/2 -translate-y-1/2"/>
                    </OutlineButton>
                </div>
            </form>
            <OutlineButton onClick={()=> {
                setVisible(false);
            }} adclass="fixed top-5 right-5 z-50">
                <FontAwesomeIcon icon={faXmark} className="text-white text-4xl" />
            </OutlineButton>
        </div>
    );
};

export const SideMenu = ({setVisible, category}) => {
    return (
        <div
            className="fixed top-0 px-8 pt-16 pb-4 overflow-x-hidden overflow-y-scroll z-50  w-[350px] bg-gray-100 h-screen"
            onClick={e => e.stopPropagation()}>
            <SquareButton adclass="absolute right-2 lg:right-0 top-2 px-3 py-2 flex items-center"
                          onClick={() => setVisible(false)}>
                <FontAwesomeIcon icon={faXmark} className="text-2xl"/>
            </SquareButton>
            <div className="mb-3">
                <SideList title="Categories" list={category}/>
            </div>

        </div>
    );
}