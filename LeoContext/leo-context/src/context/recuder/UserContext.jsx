import { createContext, useReducer } from "react";
import { userReducer } from "./userReducer";

const userInitialState = {
    status: false,
    text: 'El usuario no esta logeado, carepinga',
}


export const UserContextReducer = createContext();

export const UserProviderReducer = ({children}) => {
    
    const [statusUser, dispatch] = useReducer(userReducer, userInitialState);
    

    const handleUserLogin = () => {
        dispatch({
            type: 'login',
        }) 
    }

    const handleUserLogout = () => {
        dispatch({
            type: 'logout',
        }) 
    }
    
    const handleUserCagar = () => {
        dispatch({
            type: 'cagarse',
        }) 
    }
    
    const handleMessage = (message) => {
        dispatch({
            type: 'mensaje_especifico',
            payload: message,
        }) 
    }

    return (
        <UserContextReducer.Provider value={{
            ...statusUser,
            statusUser,
            handleUserLogin,
            handleUserLogout,
            handleUserCagar,
            handleMessage,
        }}>
            {children}
        </UserContextReducer.Provider>
    )
}
