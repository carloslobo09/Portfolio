import { useEffect } from "react";

export const Message = () => {

    useEffect(() => {

        const onMouseMove = (event) => {
            console.log(event)
        }

        window.addEventListener('mousemove',onMouseMove )
        
        return () => {
            window.removeEventListener('mousemove',onMouseMove )
        };
    }, []);
    


    return (
        <>
            <h5 className="text text-danger">Usuario ya existente</h5>
        </>
    )
};
