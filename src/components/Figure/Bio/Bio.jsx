import "./Bio.css"

const Bio = () => {


    

    const Toggle = () => {
        let bioWindow = document.querySelector(".Bio")
        bioWindow.classList.toggle("hidden")

        let fade = document.querySelector(".fade")
        fade.classList.toggle("view-fade")

    }
    return (<>
    <div className="fade">
    <div className="Bio">
        <button onClick={Toggle}>X</button>
        <div className="small-picture" ></div>
        <p className="bio-info"></p>
    </div>
    </div>
    
    </>
    )
}

export default Bio