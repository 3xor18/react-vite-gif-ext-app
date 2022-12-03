const { render, screen } = require("@testing-library/react");
const { GifGrid } = require("../../src/components/GifGrid");
import { useFetchGifs } from '../../src/hooks/useFetchGifs'
jest.mock('../../src/hooks/useFetchGifs');


describe('test <GifGrid />', () => {

    const category = "One Puch";

    test('Debe Mostar el loading inicialmente', () => {

        useFetchGifs.mockReturnValue({
            images: [],
            isLoading: true
        })

        render(<GifGrid category={category} />)
        expect(screen.getByAltText('Cargando...'))
        expect(screen.getByText(category))
    })

    test('debe de mostrar items cuando se cargan las imagenes useFetchgifs', () => {

        const gifs = [
            {
                id: '1',
                title: 'ABC',
                url: 'https://www.ABC.com'
            },
            {
                id: '2',
                title: 'DEF',
                url: 'https://www.DEF.com'
            }
        ]

        useFetchGifs.mockReturnValue({
            images: gifs,
            isLoading: false
        })


        render(<GifGrid category={category} />);

        expect(screen.getAllByRole('img').length).toBe(2)

    })


})