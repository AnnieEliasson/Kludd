import Bio from "./Bio/Bio";
import "./Figure.css"

const Figure = ({name, rank, type, image, bio}) => {

    

    const DisplayBio = ()=>{

        console.log(bio);
        console.log(image);

        const about = document.querySelector(".Bio")
        about.classList.toggle("hidden")

        let bioInfo = document.querySelector(".bio-info")
        bioInfo.innerHTML= bio

        let smallPicture = document.querySelector(".small-picture")
        smallPicture.style.backgroundImage = `url(${image})`
        
    }


    return (
    <div className= {`Figure ${ rank }`} style={{backgroundImage: `url(${image})`}}>
        <p className="name">{name}</p>
        
        <p className="info">
            Type: {type} <br />
            Rank: {rank} <br />
            <span id={name} onClick={DisplayBio}>About Me</span>
        </p>

       
    </div>
    )
}

export default Figure