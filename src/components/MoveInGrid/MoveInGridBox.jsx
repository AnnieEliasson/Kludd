import { useState } from "react"
import Controller from "./Controller/Controller"
import Grid from "./Grid/Grid"
import "./MoveInGridBox.css"

const MoveInGridBox = () => {

    return (
    <div className="MoveInGridBox">
        <h2>MoveInGrid</h2>
        <p className="instructions">Use 'W' 'A' 'S' 'D' to move, and hold 'Space' to Fire!</p>
        
        <Grid />
    </div>
    )
}

export default MoveInGridBox