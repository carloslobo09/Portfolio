import { usContext } from "../../src/pruebas/06-deses-obj";

describe("Pruebas en 06-deses-obj", () => {
    test("usContext devuelva un objeto", () => {
        const testUser = {
            clave: 'ASDSXDS',
            nombre: 'ELCARLOH',
            edad: 24
        }

        const user = usContext(testUser);

        expect(user).toEqual({
            nombreClave: testUser.clave,
            anios: testUser.edad,
            latlng: {
                lat: 14.1232,
                lng: -12.3232
            }
        })

    });
  
});
