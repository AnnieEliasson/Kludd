import { useState } from "react"
import "./Target.css"



const Target = ({charX, charyY}) => {

    let[x, setX] = useState(10)
    let[y, setY] = useState(5)


    const NewTarget = () => {

        const newTargetX = Math.ceil(Math.random() * (12 - 0))
        const newTargetY = Math.ceil(Math.random() * (6 - 0))
        setX(newTargetX)
        setY(newTargetY)

    }

    if(x === charX && y === charyY){
        NewTarget()
    }

    return(
        <div className="Target" 
        style={{gridColumn: x, gridRow: y}}>
            <div></div>
        </div>
    )
}

export default Target