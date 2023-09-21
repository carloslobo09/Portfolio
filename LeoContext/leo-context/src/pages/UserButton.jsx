import { useContext } from "react";
import { UserContextReducer } from "../context/recuder/UserContext";
// import { UserContext } from "../context/User";

export const UserButton = () => {

    const {handleUserLogin,handleUserLogout,handleUserCagar,handleMessage} = useContext(UserContextReducer);

    return (
        <>
            <button onClick={ handleUserLogin } >Login</button>
            <button onClick={ handleUserLogout } >Logout</button>
            <button onClick={ handleUserCagar } >Cagar</button>
            <button onClick={ () => handleMessage('Hola trola') } >Mensaje</button>
        </>
    )
};
