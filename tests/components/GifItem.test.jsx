import { render, screen } from "@testing-library/react"
import { GifItem } from "../../src/components/GifItem"

describe('Test <GifItem />', () => {

    const title = 'Saitama';
    const url = 'https://one.punchman.com/saitama.jpg'


    test('coincide con el snapshot', () => {
        const { container } = render(<GifItem title={title} url={url} />)
        //con la u se actualiza
        expect(container).toMatchSnapshot()
    })

    test('Debe mostrar la imagen y laurl con el alt indicado ', () => { 
        render(<GifItem title={title} url={url} />)
        //screen.debug()
        const {src,alt} = screen.getByRole('img')
        expect(src).toBe(url)
        expect(alt).toBe(title)
     })

     test('Debe de Mostrar el titulo del componente', () => { 
        render(<GifItem title={title} url={url} />);
        expect(screen.getByText(title)).toBeTruthy();
      })


})