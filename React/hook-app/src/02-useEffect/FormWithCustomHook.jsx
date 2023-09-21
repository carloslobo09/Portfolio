import { useEffect, useState } from "react";
import { useForm } from "../hooks/useForm";
// import { Message } from "./Message";

export const FormWithCustomHook = () => {

    const {formState, onInputChangue, onResetForm} = useForm({
        username: '',
        email:'',
        password:'',
    })

    const { username, email, password } = formState;

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
            <h1>Formulario con custom Hook</h1>
            <hr />    
            <input 
                type="text" 
                className="form-control"
                placeholder="Username"
                name="username"
                value={ username }
                onChange={ onInputChangue } 
            />
            {/* {
                (username == 'carloslobo') && <Message />
            } */}

            <input 
                type="email"
                className="form-control mt-2" 
                placeholder="Email"
                name="email"
                value={ email }
                onChange={ onInputChangue } 
            />
            
            <input 
                type="password"
                className="form-control mt-2" 
                placeholder="Contraseña"
                name="password"
                value={ password }
                onChange={ onInputChangue } 
            />

            <button onClick={ onResetForm } className="btn btn-danger mt-2"> Borrar</button>

        </>
    )
};
