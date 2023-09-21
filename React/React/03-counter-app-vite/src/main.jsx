import React from 'react';
import ReactDOM from 'react-dom/client';
import { CounterApp } from './CounterApp';
// import { HelloWorldApp } from './HelloWorldApp'
import { FirstApp } from './FirstApp';
import './main.css';

ReactDOM.createRoot(document.getElementById("root")).render(
    <React.StrictMode>
        <CounterApp valor={20} />
        {/* <FirstApp title="Hola soy vegeta"/> */}
    </React.StrictMode>
)