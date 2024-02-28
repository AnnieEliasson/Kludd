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
            <div className="fire" style={{gridColumn: x + 1 , gridRow: y}}></div>
            
            <div className="fire2" style={{gridColumn: x + 1 , gridRow: y}}>
                <div className="bullets"></div>
                <div className="bullets2"></div>
                <div className="bullets3"></div>
            </div>
        </div>
    )
}

export default Grid