import { useState } from "react";

export const CounterApp = () => {
    
    const [state , setCounter] = useState({
        counterOne : 10,
        counterTwo : 20,
        counterThree : 30,
    });

    const {counterOne, counterTwo, counterThree} = state;
    
    return (
        <>
            <h1>Counter1 : {counterOne}</h1>
            <h1>Counter2 : {counterTwo}</h1>
            <h1>Counter3 : {counterThree}</h1>
            <hr />
            <button className="btn btn-success" onClick={() => setCounter({...state,counterOne: counterOne + 1})}> +1</button>
            <button className="btn btn-danger" onClick={() => setCounter({...state,counterOne: counterOne - 1})}> -1</button>
        </>
    )
};
