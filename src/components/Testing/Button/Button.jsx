import "./Button.css"

const Button = ({fruit, name}) => {

    const audio = new Audio("./button2.mp3")

    const HandleClick = (e)=>{

        audio.play()
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