import "./ColorSwitch.css"

const ColorSwitch = ({colors, setColor}) => {

    const handleClick= (e) => {
        setColor(e.target.value)

    }

    
    return(
        <div className="ColorSwitch">
            
        
        {
            colors.map((color)=>{
                return(
                    <button key={color} onClick={handleClick} value={color} style={{backgroundColor : color}} className="color-button">
                        
                    </button>
                )
            })
        }
        
        </div>
    )
}

export default ColorSwitch