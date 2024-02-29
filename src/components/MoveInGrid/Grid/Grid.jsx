import { useState } from "react"
import Character from "../Character/Character"
import Controller from "../Controller/Controller"
import "./Grid.css"
import Target from "../Target/Target"

const Grid = () => {

    let [x, setX] = useState(2)
    let [y, setY] = useState(5)



    return(
        <div className="Grid">
            <Controller x={x} setX={setX} y={y} setY={setY} />
            <Character x={x} y={y} />
            <Target charX={x} charyY={y} />
        </div>
    )
}

export default Grid