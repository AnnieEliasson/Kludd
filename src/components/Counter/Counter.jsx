import { useState } from "react"
import "./Counter.css"

const Counter = () => {

    const [count, setCount] = useState(5)

    const Sub = ()=>{
        
        setCount(count - 1)
    }

    const Add = () => {

        setCount(count + 1)
    }

    return(
        <div className="Counter">
            <button onClick={Sub}>-</button>
            <p>{count}</p>
            <button onClick={Add}>+</button>
        </div>
    )
}

export default Counter