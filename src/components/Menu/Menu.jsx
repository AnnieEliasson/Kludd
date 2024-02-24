import { useState } from "react"
import CounterBox from "../CounterBox/CounterBox"
import FigureBox from "../FigureBox/FigureBox"
import "../CounterBox/CounterBox.css"
import "./Menu.css"

const Menu = () => {


    let [show, SetShow] = useState(false)
    let [show2, SetShow2] = useState(false)
    

    return(
        <>
        <ul className="Menu">
            <li onClick={()=>{
                if(!show){
                SetShow(show = true)
                SetShow2(show2 = false)
            }
                

                else
                SetShow(show = false)
            }}>Click Counter</li>

            <li onClick={()=>{
                if(!show2){
                SetShow2(show2 = true)
                SetShow(show = false)}

                else
                SetShow2(show2 = false)
            }}>Figures</li>
            <li>Lorem, ipsum dolor.</li>
            <li>Something</li>
            <li>This is an example</li>
        </ul>
        <CounterBox show = {show}/>
        <FigureBox show2 = {show2}/>
        </>
    )
}

export default Menu