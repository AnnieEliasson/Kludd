import { useState } from "react"
import CounterBox from "../CounterBox/CounterBox"
import FigureBox from "../FigureBox/FigureBox"
import "../CounterBox/CounterBox.css"
import "./Menu.css"
import Testing from "../Testing/Testing"
import Something from "../Somehing/Something"

const Menu = () => {


    let [show, SetShow] = useState(false)
    let [show2, SetShow2] = useState(false)

    const Hide = (e)=>{

        let allVisible = document.querySelectorAll(".show")
        allVisible.forEach(element => {
            element.classList.remove("show")
        });


        let test = document.querySelector(`.${e.target.id}`)
        test.classList.toggle("show")
        console.log(e.target.id);
    }
    
    return(
        <>
        <ul className="Menu">
                      
            <li id="CounterBox" onClick={Hide}>Click Counter</li>
            <li id="FigureBox" onClick={Hide}>Figures</li>
            <li id="Testing" onClick={Hide}>Testing</li>
            <li id="Something" onClick={Hide}>Something</li>


            
        </ul>
        <CounterBox />
        <FigureBox />


        <Testing />
        <Something />

        </>
    )
}

export default Menu