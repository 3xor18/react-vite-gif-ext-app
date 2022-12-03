import { useState } from "react"
import PropTypes from 'prop-types'

export const AddCategory = ({onNewCategory}) => {

    const [inputValue, setInputValue] = useState("")

    const onInputChage = ({ target: { value } }) => {
        setInputValue(value)
    }

    const onSubmit  = (e) => {
        e.preventDefault();
        const value = inputValue.trim()
        if(value<=1) return
        onNewCategory(value)
        setInputValue("")
    }

    return (
        <form onSubmit={onSubmit } aria-label="form">
            <input id="nombre" placeholder='Buscar Gifs' value={inputValue} onChange={onInputChage} />
        </form>
    )
}

AddCategory.propTypes = { onNewCategory: PropTypes.func.isRequired }
