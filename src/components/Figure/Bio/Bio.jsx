import "./Bio.css"

const Bio = ({bio, image}) => {


    

    const Toggle = () => {
        let bioWindow = document.querySelector(".Bio")
        bioWindow.classList.toggle("hidden")
    }
    return (<>
    <div className="Bio">
        <button onClick={Toggle}>X</button>
        <div className="small-picture" ></div>
        <p className="bio-info">{/* {bio} */}</p>


        
    </div>
    
    </>
    )
}

export default Bio