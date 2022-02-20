import ReactDOM from "react-dom";

import {BackDrop, Searchbar, SideMenu} from "./PortalComponents";


export const Search = ({visible, setVisible}) => {
    return (
        <div>
            {visible && ReactDOM.createPortal(<BackDrop
            />, document.getElementById('back-drop'))}
            {visible && ReactDOM.createPortal(<Searchbar setVisible={setVisible}/>, document.getElementById('modal'))}
        </div>
    );
};

export const Menu = ({visible, setVisible, category}) => {
    return (
        <div>
            {visible && ReactDOM.createPortal(<BackDrop
            />, document.getElementById('back-drop'))}
            {visible && ReactDOM.createPortal(<SideMenu setVisible={setVisible}
                                                        category={category}/>, document.getElementById('modal'))}
        </div>
    );
}

