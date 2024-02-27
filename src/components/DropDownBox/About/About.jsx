import "./About.css"

const About = ({company, backstory, past_projects}) => {

    const handleClick = (e) => {
        const item= e.target.querySelector('p')

        if(item.className === "project-desc project-desc-show"){
        item.classList.remove("project-desc-show")
    } else{

        const openProjects = document.querySelectorAll(".project-desc-show")
        openProjects.forEach(element => {
            element.classList.remove("project-desc-show")
        });
        
        
        item.classList.toggle("project-desc-show")

    }
}
    return(
        <div className="About">
            {/* component */}
            <p className="title">{company.name}</p>
            <p className="town">{company.home_town}</p>
            <br />

            {/* component */}
            <p className="backstory">{backstory}</p>

            {/* component */}
            <ul className="project-list">
                Past projects
                {past_projects.map((project)=>{
                    return(<li onClick={handleClick} key={project.name}>{project.name}<p className="project-desc">{project.description}</p></li>)
                })}
            </ul>


        </div>
    )
}

export default About