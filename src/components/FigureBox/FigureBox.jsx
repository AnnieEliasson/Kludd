import Bio from "../Figure/Bio/Bio";
import Figure from "../Figure/Figure"
import "./FigureBox.css"
import figure from "./figure.json"



const FigureBox = () => {



    const data = figure.data;

    return(
        <div className="FigureBox">
            <h2>Figures</h2>

            {
                data.map((figure)=>{
                    return <Figure 
                    rank = {figure.rank} 
                    name = {figure.name}
                    type = {figure.type}
                    color = {figure.color}
                    image = {figure.image}
                    bio = {figure.bio} 
                    key = {figure.name}/>
                })
            }
            
            <Bio />
        </div>
    )
}

export default FigureBox