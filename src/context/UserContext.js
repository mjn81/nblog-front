import {createContext, useReducer} from "react";

import userReducer from "./UserReducer";

const initialState = {
    username: '',
    token: '',
    logState: false,
}

const userContext = createContext(initialState);


export const Provider = ({children, value}) => {
    const [state, dispatch] = useReducer(userReducer, initialState);

    return (
        <userContext.Provider value={{state: state, dispatch: dispatch, ...value}}>
            {children}
        </userContext.Provider>
    );
}


export default userContext;