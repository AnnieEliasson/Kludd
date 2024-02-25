import { useState } from "react"
import Button from "../Button/Button"
import "./Test.css"

const Test = () => {

    

    const [name, SetName] = useState("")

    return (
        <div className="Test">
            <div className="button-list">
                <ul>
                    <li><Button name= {SetName} fruit = {"Banan"} /></li>
                    <li><Button name= {SetName} fruit = {"Apple"} /></li>
                    <li><Button name= {SetName} fruit = {"Orange"} /></li>
                    <li><Button name= {SetName} fruit = {"Kiwi"} /></li>
                </ul>
            </div>
            <p>Output: {name}</p>
            
        </div>
    )
}

export default Test