import {useContext} from "react";
import userContext from "../../context/UserContext";
import {OutlineButton} from "../core";
import {useNavigate} from "react-router-dom";

export const TopNav = () => {
    const {state , dispatch} = useContext(userContext);
    const avatar = 'https://i.pravatar.cc/400';
    const navigator = useNavigate();
    const onLogoutHandler = ()=>{
        dispatch({type:'logout'});
        navigator('/home', {replace:true});
    }
    return (
        <section className="w-full bg-white px-6 py-4 flex justify-end items-center border-b-2">
            <section className="text-right space-y-1 ">
                <p>
                    {state.username ? state.username : 'NONE'}
                </p>
                <OutlineButton adclass="hover:underline" onClick={onLogoutHandler}>
                    Logout
                </OutlineButton>
            </section>
            <img src={avatar} className="rounded-full border-2 border-indigo-600 ml-6 w-16" alt={`https://ui-avatars.com/api/?name=${state.username}`} />
        </section>
    );
};
