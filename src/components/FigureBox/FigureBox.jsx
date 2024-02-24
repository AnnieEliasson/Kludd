import Figure from "../Figure/Figure"
import "./FigureBox.css"
import figure from "./figure.json"



const FigureBox = ({show2}) => {
    const data = figure.data;
    console.log(data);


    if(show2)
    
    return(
        <div className="FigureBox">
            <h2>Figures</h2>

            {
                data.map((figure)=>{
                    return <Figure 
                    rank = {figure.rank} 
                    name = {figure.name}
                    type = {figure.type}
                    color = {figure.color} />
                })
            }
            
            
        </div>
    )
}

export default FigureBox