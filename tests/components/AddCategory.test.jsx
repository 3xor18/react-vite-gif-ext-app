const { render, screen, fireEvent } = require("@testing-library/react")
const { AddCategory } = require("../../src/AddCategory")

describe('Pruebas en <AddCategory />', () => {

    test('debe cambiar el valor de la caja de Texto', () => {

        render(<AddCategory onNewCategory={() => { }} />)
        //screen.debug()
        const inputHtml = screen.getByRole('textbox');

        fireEvent.input(inputHtml, { target: { value: 'Saitama' } })
        expect(inputHtml.value).toBe('Saitama')
    });


    test('debe de llamar onNewCategory si el imput tiene un valor', () => { 
        const onNewCategoryMock = jest.fn();

        const inputValue = 'Saitama';

        render(<AddCategory onNewCategory={onNewCategoryMock} />)

        const inputHtml = screen.getByRole('textbox');
        const formHtml = screen.getByRole('form');

        fireEvent.input(inputHtml, {target:{value:inputValue}})
        fireEvent.submit(formHtml);

        expect(inputHtml.value).toBe('');
        expect(onNewCategoryMock).toBeCalled()
        expect(onNewCategoryMock).toBeCalledTimes(1)
        expect(onNewCategoryMock).toBeCalledWith(inputValue)

     })

     test('no debe de llamar onNewCategory si el input esta vacio', () => { 
        const onNewCategoryMock = jest.fn();

        const inputValue = '';

        render(<AddCategory onNewCategory={onNewCategoryMock} />)

        const inputHtml = screen.getByRole('textbox');
        const formHtml = screen.getByRole('form');

        fireEvent.input(inputHtml, {target:{value:inputValue}})
        fireEvent.submit(formHtml);

        expect(inputHtml.value).toBe('');
        expect(onNewCategoryMock).toBeCalledTimes(0)

      })



})