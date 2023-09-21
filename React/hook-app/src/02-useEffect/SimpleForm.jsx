import { useEffect, useState } from "react";
import { Message } from "./Message";

export const SimpleForm = () => {

    const [formState, setFormState] = useState({
        username: 'carloslobo',
        email:'ejemplo@gmail.com',
    });
    
    const { username, email } = formState;

    const onInputChangue = ({target}) => {
        const {name, value} = target;
        setFormState({
            ...formState,
            [ name ]: value,
        })
    }

    useEffect(() => {
        // console.log("change");
    }, [formState]);
    
    useEffect(() => {
        // console.log("dsadasdasd");
    }, []);
    
    useEffect(() => {
        // console.log("email");
    }, [email]);

    // useEffect(() => {
    //   first;
    
    //   return () => {
    //     second;
    //   };
    // }, [third]);
    

    return (
        <>
            <h1>Formulario Simple</h1>
            <hr />    
            <input 
                type="text" 
                className="form-control"
                placeholder="Username"
                name="username"
                value={ username }
                onChange={ onInputChangue } 
            />
            {
                (username == 'carloslobo') && <Message />
            }

            <input 
                type="email"
                className="form-control mt-2" 
                placeholder="Email"
                name="email"
                value={ email }
                onChange={ onInputChangue } 
            />

        </>
    )
};
