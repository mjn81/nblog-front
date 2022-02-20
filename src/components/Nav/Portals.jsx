import ReactDOM from "react-dom";

import {BackDrop, Searchbar, SideMenu} from "./PortalComponents";


export const Search = ({visible, setVisible}) => {
    return (
        <div onClick={()=>setVisible(false)}>
            {visible && ReactDOM.createPortal(<BackDrop
                />, document.getElementById('back-drop'))}
            {visible && ReactDOM.createPortal(<Searchbar /> , document.getElementById('modal'))}
        </div>
    );
};

export const Menu = ({visible, setVisible , category}) => {
    return (
        <div onClick={()=>setVisible(false)}>
            {visible && ReactDOM.createPortal(<BackDrop
                setVisible={setVisible}/>, document.getElementById('back-drop'))}
            {visible && ReactDOM.createPortal(<SideMenu setVisible={setVisible} category={category} /> , document.getElementById('modal'))}
        </div>
    );
}

