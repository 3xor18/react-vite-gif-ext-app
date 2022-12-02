import React from 'react'
import { useState } from "react"


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
        <form onSubmit={onSubmit }>
            <input id="nombre" placeholder='Buscar Gifs' value={inputValue} onChange={onInputChage} />
        </form>
    )
}
