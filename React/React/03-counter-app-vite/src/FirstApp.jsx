// import { Fragment } from "react"
import PropTypes from 'prop-types';

const getNameForThis = (valor) => {
    return "Estoy testeando"+valor;
}

export const FirstApp = ({title,subtitle, name}) =>{
    return (
        <>
            <h1 data-testid="title">{ title }</h1>
            <p>{ subtitle }</p>
            <p>{ subtitle }</p>
            <p>{ name }</p>
            <p>{ getNameForThis(" y que miras ura") }</p>
        </>
    )
}


FirstApp.propTypes = {
    title: PropTypes.string.isRequired,
    subtitle: PropTypes.string.isRequired
}

FirstApp.defaultProps = {
    title : "No hay titulojiji",
    subtitle: "Aqui tampocosssssssssssssss",
    name: "Ignacio"
}