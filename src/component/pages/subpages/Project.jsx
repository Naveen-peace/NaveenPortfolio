import { Icon } from "@iconify/react"
import Footer from "../footer/Footer"
import Header from "../header/Header"
import userNaveen from "../../data/Data"


function Project() {
  return (
    <div>
      <Header />
      <div className="lol-container">
        <div className="project-card">
          <div className="project-card-sub">
            <h2>Projects</h2>
            <h3>My recent works</h3>
          </div>
          <div className="corrcetion-card">
            <div className="project-card-1">
              {userNaveen.allprojects.map((project, index) => (
                <div className="project-1" key={index}>
                  <img
                    style={{ width: '100%', height: '185px', }}
                    src={project.project}
                    alt={`project`}
                  />
                  <div className="project-card-2">
                    <div className="project-2">
                      <h2>{project.name}</h2>
                      <h4>{project.title}</h4>
                      <h4>{project.language}</h4>
                    </div>
                    <div className="project-livebutton">
                      <button className="livebutton" >
                        <a href={project.githubLink} target="_blank" rel="noopener noreferrer">
                          <Icon icon="devicon:github" width="40" height="30" />
                          GitHub
                        </a>
                      </button>
                      <button className="livebutton" >
                        <a href={project.Livelink} target="_blank" rel="noopener noreferrer">
                          <Icon icon="basil:share-box-solid" width="40" height="30" />
                          Live
                        </a>
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  )
}

export default Project