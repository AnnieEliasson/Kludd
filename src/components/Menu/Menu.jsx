import "../CounterBox/CounterBox.css"
import "./Menu.css"

const Menu = () => {

    const ToggleShow = (e)=>{

        const allVisible = document.querySelectorAll(".show")
        allVisible.forEach(element => {
            element.classList.remove("show")
        });


        const clicked = document.querySelector(`.${e.target.id}`)
        clicked.classList.toggle("show")
    }
    
    return(
        <ul className="Menu">
                      
            <li id="CounterBox" onClick={ToggleShow}>Click Counter</li>
            <li id="FigureBox" onClick={ToggleShow}>Figures</li>
            <li id="Testing" onClick={ToggleShow}>Testing</li>
            <li id="Something" onClick={ToggleShow}>Something</li>

        </ul>
    )
}

export default Menu