import { render } from '@testing-library/react';
import { FirstApp } from "../src/FirstApp";

describe("Pruebas en FirsApp", () => {

    // test("Debe hacer match con el snapshot", () => {
    //     const title = "Hola, soy goku"
    //     const {container} = render( <FirstApp title={ title } />) 
    //     expect(container).toMatchSnapshot();
    // });

    test("Debe contener el texto de title", () => {
        const title = "Hola, soy goku";
        const subtitulo = "Que pasa chavales todo bien todo correcto"
        const {container,getByText,getByTestId,getAllByText} = render( 
            <FirstApp title={ title }
                    subtitle= { subtitulo } 
            />
            ) 
        // expect(getByText(title)).toBeTruthy();
        // const h1 = container.querySelector('h1')
        // expect(h1.innerHTML).toBe(title)
        // expect(getByTestId('title').innerHTML).toBe(title);
        expect(getAllByText(subtitulo).length).toBe(2)
        // console.log(title,h1.innerHTML)
    });
    
});
