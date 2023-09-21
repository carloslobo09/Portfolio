import { render,screen } from '@testing-library/react';
import { FirstApp } from "../src/FirstApp";

describe("Pruebas en FirsApp", () => {
    const title = 'Hola soy gey';
    const subtitulo = "Que pasa chavales todo bien todo correcto"

    test("debe hace match con el snapshot", () => {
        const {container} = render(
            <FirstApp title={title} />
        )
        expect(container).toMatchSnapshot();
    });
    
    test("Debe mostrar hola soy gey", () => {
        render(
            <FirstApp title={title} />
        )
        expect(screen.getByText(title)).toBeTruthy();
        // screen.debug(); para ver el objeto
    });
    
    test("Debe mostrar el h1", () => {
        render(
            <FirstApp title={title} />
        )
        expect(screen.getByRole('heading',{level:1}).innerHTML).toContain(title)
    });
    
    test("Debe mostrar el subtitulo enviado por props", () => {
        render(
            <FirstApp title={title} subtitle={subtitulo}/>
        )
        expect(screen.getAllByText(subtitulo).length).toBe(2)
    });
    
});
