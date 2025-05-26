import { Icon } from "@iconify/react"
import Footer from "../footer/Footer"
import Header from "../header/Header"


function Skills() {
  return (
    <div className="total-wrapper">
         <Header />
      <div className="lol-container">
        <div className="skills">
          <h3>Skills</h3>
          <h4>My technologies</h4>
        </div>
        <div className="naveen-skills">
          <div className="naveen-skills-1">
            <div className="naveen-skills-sub-1">
              <Icon icon="vscode-icons:file-type-html" width="80" height="40" />
              <h4>HTML</h4>
            </div>
          </div>
          <div className="naveen-skills-1">
            <div className="naveen-skills-sub-1">
            <Icon icon="vscode-icons:file-type-css" width="80" height="40" />
              <h4>CSS</h4>
            </div>
          </div>
          <div className="naveen-skills-1">
            <div className="naveen-skills-sub-1">
            <Icon icon="vscode-icons:file-type-js-official" width="80" height="40" />
              <h4>JavaScript</h4>
            </div>
          </div>
          <div className="naveen-skills-1">
            <div className="naveen-skills-sub-1">
            <Icon icon="devicon:react" width="80" height="40" />
              <h4>REACT</h4>
            </div>
          </div>
          <div className="naveen-skills-1">
            <div className="naveen-skills-sub-1">
            <Icon icon="devicon:mongodb" width="80" height="40" />
              <h4 >MONGO DB</h4>
            </div>
          </div>
          <div className="naveen-skills-1">
            <div className="naveen-skills-sub-1">
            <Icon icon="logos:nodejs" width="80" height="40" />
              <h4>NODE JS</h4>
            </div>
          </div>
          <div className="naveen-skills-1">
            <div className="naveen-skills-sub-1">
            <Icon icon="devicon:github" width="80" height="40" />
              <h4>GitHub</h4>
            </div>
          </div>
          <div className="naveen-skills-1">
            <div className="naveen-skills-sub-1">
            <Icon icon="vscode-icons:file-type-vscode" width="80" height="40" />
              <h4>VsCode</h4>
            </div>
          </div>
        </div>
      </div>
      <Footer/>
      </div>
  )
}

export default Skills