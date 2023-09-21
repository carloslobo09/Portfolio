import { useContext } from "react";
import { Text } from "../components/Text";
import { UserContextReducer } from "../context/recuder/UserContext";
// import { UserContext } from "../context/User";

export const UserStatus = () => {

    const e = useContext(UserContextReducer);
    console.log(e);
    const {text} = e.statusUser
    // console.log(context);

    return (
        <>
            <h1>User Status</h1>
            <Text texto={text}/>
        </>

    )
};
