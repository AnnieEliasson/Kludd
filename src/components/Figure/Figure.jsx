import "./Figure.css"

const Figure = ({name, rank, type, color}) => {
    return (
    <div className= {`Figure ${ rank }`} >
        <p className="name">{name}</p>
        
        <p className="info">Type: {type} <br />
        Rank: {rank}</p>
        
    </div>
    )
}

export default Figure