import { Button } from "@mui/material"
import React from "react"

interface Props {
    count : number,
    handleClickPlus : any,
    handleClickMinus : undefined
}

const CounterComponent = React.memo(({count, handleClickPlus, handleClickMinus} : Props) => {
    return (<>
        <h1>Counter : {count}</h1>
        <Button variant="outlined" color="success" onClick={handleClickPlus}>+</Button>
        <Button variant="outlined" color="error" onClick={handleClickMinus}>-</Button>
        </>)
})