import { useState } from 'react';
import PropTypes from 'prop-types';


export const CounterApp = ({valor}) => {
    const [ counter, setCounter ] = useState(valor)
    
    const HandleAdd = () => {
        setCounter(counter + 1);
    }

    const HandleRest = () => {
        setCounter(counter - 1);
    }

    const HandleReset = () => {
        setCounter(valor);
    }
    
    return (
        <>
            <h1>CounterApp</h1>
            <h2 data-testid='contador'> { counter } </h2>
            <button onClick={ HandleAdd }>+1</button>
            <button onClick={ HandleRest }>-1</button>
            <button aria-label='btn-reset' onClick={ HandleReset }>Reset</button>
        </>
    )
}

CounterApp.propTypes = {
    valor : PropTypes.number,
}