import { useState } from "react"
import { useEffect } from "react"
import "./Target.css"


    



const Target = ({charX, charyY}) => {

    let[x, setX] = useState(1)
    let[y, setY] = useState(2)


    const NewTarget = () => {

        const newTargetX = Math.ceil(Math.random() * (12 - 0))
        const newTargetY = Math.ceil(Math.random() * (6 - 0))
        console.log(newTargetX, newTargetY);
        setX(newTargetX)
        setY(newTargetY)
        
    }

    if(x === charX && y === charyY){
        console.log('same!');
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