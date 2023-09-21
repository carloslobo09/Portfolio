import { useRef } from "react";

export const FocusScreen = () => {

    const inputRef = useRef();
    
    const onClick = () => {
        inputRef.current.select()
    }

    return (
        <>
            <div>FocusScreen</div>
            <hr />

            <input
                ref={inputRef} 
                type="text" 
                className="form-control"
                placeholder="Ingrese su nombre"
            />

            <button 
                className="btn btn-primary mt-2"
                onClick={ onClick }
            >
                Set Focus
            </button>

        </>
    );
};
