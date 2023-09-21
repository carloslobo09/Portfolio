import {fireEvent, render,screen} from "@testing-library/react";
import { CounterApp } from "../src/CounterApp";

describe("Test en CounterApp", () => {
    const value = 10
    test("Debe hacer match con el snapshot", () => {
        const {container} = render(
            <CounterApp valor={ value }/>
        )
        expect(container).toMatchSnapshot();
    });
    
    test("Debe de renderizar 100 en el valor", () => {
        const {container} = render(
            <CounterApp valor={ 100 }/>
        )
        expect(screen.getByTestId('contador').innerHTML).toContain(value.toString())
    });

    test("Debe de incrementar con el boton +1", () => {
        render(
            <CounterApp valor={ value }/>
        )
        fireEvent.click( screen.getByText('+1') );
        expect(screen.getByText('11')).toBeTruthy();
    });
    
    test("Debe de incrementar con el boton -1", () => {
        render(
            <CounterApp valor={ value }/>
        )
        fireEvent.click( screen.getByText('-1') );
        expect(screen.getByText('9')).toBeTruthy();
        // screen.debug()
    });

    test("Debe mantener el valor del Reset", () => {
        render(
            <CounterApp valor={ value }/>
        )
        fireEvent.click( screen.getByText('+1') );
        fireEvent.click( screen.getByText('+1') );
        fireEvent.click( screen.getByText('+1') );
        fireEvent.click( screen.getByText('+1') );
        fireEvent.click( screen.getByRole('button',{name:'btn-reset'}));
        expect(screen.getByText(value)).toBeTruthy();
        // expect(screen.getByText('9')).toBeTruthy();
        // screen.debug()
    });

});
