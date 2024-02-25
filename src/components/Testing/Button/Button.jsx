import "./Button.css"

const Button = ({fruit, name}) => {

    const HandleClick = ()=>{

        name(fruit)
        
    }

    return(
        <button onClick={HandleClick} className="Button">{fruit}</button>
    )
}

export default Button