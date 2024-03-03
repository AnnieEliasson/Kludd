import { useState } from "react"
import Character from "../Character/Character"
import Controller from "../Controller/Controller"
import "./Grid.css"
import Target from "../Target/Target"

const Grid = () => {

    const [x, setX] = useState(2)
    const [y, setY] = useState(5)

    const [targetX, setTargetX] = useState(10)
    const [targetY, setTargetY] = useState(5)



    const NewTarget = () => {

            const newTargetX = Math.ceil(Math.random() * (12 - 0))
            const newTargetY = Math.ceil(Math.random() * (6 - 0))
            setTargetX(newTargetX)
            setTargetY(newTargetY)     

    }

    

    if(targetX === x && targetY === y){
        NewTarget()
    }


    return(
        <div className="Grid">
            <Controller x={x} setX={setX} y={y} setY={setY} NewTarget={NewTarget} />
            <Character x={x} y={y} targetX={targetX} targetY={targetY} />
            <Target targetX={targetX} targetY={targetY} />
        </div>
    )
}

export default Grid