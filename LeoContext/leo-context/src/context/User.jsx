
import { createContext, useState } from "react";

export const UserContext = createContext();

export const UserProvider = ({children}) => {
    const [statusUser, setStatusUser] = useState({
        status: false,
        text: 'El usuario no esta logeado, carepinga',
    });
    const {status} = statusUser;
    
    const handleUserLogin = () => {
        setStatusUser({
            status: true,
            text:'Exito',
        }) 
    }

    const handleUserLogout = () => {
        setStatusUser({
            status: false,
            text:'El usuario no esta logeado, carepinga',
        }) 
    }

    return (
        <UserContext.Provider value={{
            statusUser,
            handleUserLogin,
            handleUserLogout,
        }}>
            {children}
        </UserContext.Provider>
    )
}