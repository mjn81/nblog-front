import ReactDOM from "react-dom";

import {BackDrop, Searchbar} from "./PortalComponents";


export const Search = ({visible, setVisible}) => {
    return (
        <div onClick={()=>setVisible(false)}>
            {visible && ReactDOM.createPortal(<BackDrop
                />, document.getElementById('back-drop'))}
            {visible && ReactDOM.createPortal(<Searchbar /> , document.getElementById('modal'))}
        </div>
    );
};

export const SideMenu = ({visible, setVisible}) => {
    return (
        <div>
            {visible && ReactDOM.createPortal(<BackDrop
                setVisible={setVisible}/>, document.getElementById('back-drop'))}
        </div>
    );
}

