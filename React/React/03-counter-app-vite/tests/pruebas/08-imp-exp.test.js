import { getHeroeById,getHeroesByOwner } from "../../src/pruebas/08-imp-exp";
import  heroes  from "../../src/data/heroes";
describe("Pruebas en 08-imp-exp", () => {
    test("getHeroeById debe retoner un heroe por ID", () => {
        const id = 2;
        const hero = getHeroeById(id);

        expect(hero).toEqual({ id: id, name: 'Spiderman', owner: 'Marvel' })
    });

    test("getHeroeById debe regresar undefined si no existe", () => {
        const id = 223;
        const hero = getHeroeById(id);

        expect(hero).toBeFalsy()
    });
    
    test("Debe retornar un arreglo con los heroes de DC", () => {
        const owner = 'DC';
        const hero = getHeroesByOwner(owner)

        expect(hero.length).toBe(3);

        expect(hero).toEqual( [
                { id: 1, name: 'Batman', owner: owner },
                { id: 3, name: 'Superman', owner: owner },
                { id: 4, name: 'Flash', owner: owner }
            ]
        );
    });
    
    test("Debe retornar un arreglo con los heroes de Marvel", () => {
        const owner = 'Marvel';
        const hero = getHeroesByOwner(owner)
        console.log(heroes);
        expect(hero.length).toBe(2);
        expect(hero).toEqual(heroes.filter((heroes) => heroes.owner === owner ));
    });
    

});
