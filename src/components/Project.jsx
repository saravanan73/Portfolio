import { project_details_ } from "../data/dataindex"

const Project = () => {
  return (
    <section className="projects__container" id="projects">
        <h2 className="projects__title">Project</h2>
        <div className="projects">
            {
              project_details_.map((project,id)=>{
                return(
                <div className="project-container" key={id}>
                  <img src={project.imagesrc} className="project-img"/>
                  <h3 className="project-title">{project.title}</h3>
                  <p className="project-description">{project.descrip}</p>
                  <ul className="projects-skills">
                    {
                      project.skills.map((skill,id)=>{
                        return (
                          <li className="project-skill" key={id}>{skill}</li>
                        )
                      })
                    }
                  </ul>
                  <div className="project-links">
                    <a href={project.demo} className="project-link" target="_blank">Demo</a>
                    <a href={project.source} className="project-link" target="_blank">Source</a>
                  </div>
                  </div>
                )
              })
            }
        </div>
    </section>
  )
}

export default Project