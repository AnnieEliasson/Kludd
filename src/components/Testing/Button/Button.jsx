import "./Button.css"

const Button = ({fruit, name}) => {

    const HandleClick = (e)=>{

        const allActive = document.querySelectorAll(".active")
        
        allActive.forEach(element => {
            element.classList.remove("active")
        });

        name(fruit)

        const active = e.target
        active.classList.add("active")

    }

    return(
        <button onClick={HandleClick} className="Button">{fruit}</button>
    )
}

export default Button