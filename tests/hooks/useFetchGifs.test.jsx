const { renderHook, waitFor } = require("@testing-library/react")
const { useFetchGifs } = require("../../src/hooks/useFetchGifs")


describe('Pruebas en useFetchGifts', () => { 

    test('debe regresar el estado Inicial', () => { 
        const {result}=renderHook(()=> useFetchGifs('one Punch'));
        const {images,isLoading} = result.current;
        expect(images.length).toBe(0)
        expect(isLoading).toBeTruthy()
     });

     test('debe retornar un Arreglo de imagenes y isLoading en false', async() => { 
        const {result}=renderHook(()=> useFetchGifs('one Punch'));
        await waitFor(
            ()=>expect(result.current.images.length).toBeGreaterThan(0),
            {timeout:2000}
        )
        const {images,isLoading} = result.current;
        expect(images.length).toBeGreaterThan(0)
        expect(isLoading).toBeFalsy()
     });


 })