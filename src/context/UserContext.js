import {createContext} from "react";

const userContext = createContext({

});

const provider = ({children , value}) => {
    return (
        <userContext.Provider value={value} >
            {children}
        </userContext.Provider>
    );
}
