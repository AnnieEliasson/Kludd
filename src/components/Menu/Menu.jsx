import "../CounterBox/CounterBox.css"
import "./Menu.css"

const Menu = () => {

    const ToggleShow = (e)=>{

        const allActive = document.querySelectorAll(".active-item")
        allActive.forEach(element => {
            element.classList.remove("active-item")
        });

        const allVisible = document.querySelectorAll(".show")
        allVisible.forEach(element => {
            element.classList.remove("show")
        });


        const clicked = document.querySelector(`.${e.target.id}`)
        clicked.classList.toggle("show")

        e.target.classList.add("active-item")
    }
    

    return(
        <ul className="Menu">
                      
            <li id="CounterBox" onClick={ToggleShow}>&#9774; Click Counter</li>
            <li id="FigureBox" onClick={ToggleShow}>&#9774; Figures</li>
            <li id="Testing" onClick={ToggleShow}>&#9774; Automat</li>
            <li id="Something" onClick={ToggleShow}>&#9774; Rolling Text</li>
            <li id="DropDownBox" onClick={ToggleShow}>&#9774; DropDown</li>

        </ul>
    )
}

export default Menu