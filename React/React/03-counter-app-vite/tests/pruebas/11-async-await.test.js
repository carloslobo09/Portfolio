import { getImagen } from "../../src/pruebas/11-async-await";


describe("Pruebas en 11-async-await", () => {
    test("getImagen debe retonar la url", async () => {
        const url = await getImagen()
        console.log(url);

        expect(typeof url).toBe('string');
    });
    
});
