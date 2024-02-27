import { useState } from "react"
import Character from "../Character/Character"
import Controller from "../Controller/Controller"
import "./Grid.css"

const Grid = () => {

    let [x, setX] = useState(2)
    let [y, setY] = useState(5)


    return(
        <div className="Grid">
            <Controller x={x} setX={setX} y={y} setY={setY} />
            <Character x={x} y={y} />
        </div>
    )
}

export default Grid