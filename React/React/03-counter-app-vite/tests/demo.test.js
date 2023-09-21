describe("Demo componente <DemoComponent2/>",()=>{
    test("Estoy probando si funciona", () => {
    //  1 - Inicializacion
        const messsage1 = "Hola mundo";
    //   2 - Estimulo
        const message2 = messsage1.trim();
    
    //   3 - Observar el comportamiento... esperado
        expect(messsage1).toBe(message2);
    });
})

