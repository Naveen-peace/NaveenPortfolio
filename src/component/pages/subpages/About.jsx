import { Icon } from "@iconify/react"
import Header from "../header/Header"
import Footer from "../footer/Footer"
import naveenimg from "../../../assets/image/naveen-img.jpeg"
import PdfDownloader from "../../subcomponents/resumedownloader/PdfDownloader"
import Stepper from '../../subcomponents/stepper/Steeper';

function About() {
  return (
    <div className="total-wrapper" >
      <Header />
      <div className="lol-container">
        <div className="naveen-about">
          <h2>About Me</h2>
          <h3>My Introduction</h3>
        </div>
        <div className="naveen-about-1">
          <div>
            <img className="fade-in-image" style={{ width: '250px', height: '350px', borderRadius: '10px' }} src={naveenimg} alt="myimage" />
          </div>
          <div className="naveen-about-sub">
            <h4 className="zoom-in-text">👋 Hello, Im Naveen Kumar.S, a dedicated and aspiring frontend developer. Eager to venture into the dynamic world of web development, I am enrolled in the MERN FullStack Developer course to hone my skills and broaden my knowledge.</h4>
            <PdfDownloader />
          </div>  
        </div>
        <div className="naveen-qualification">
          <div className="naveen-qualification-1">
            <h2>Qualification</h2>
            <h4>My journey</h4>
          </div>
          <div className="education-work">
            <h3><Icon icon="mdi:education-outline" /> Education</h3>
          </div>
          <div className="naveen-education">
            {/* <h5><strong>DIPLOMA-MECH</strong> sri durgadevi polytechnic college, kavaraipettai</h5>
       <h5><strong>B.TECH IT</strong> st peter's university Avadi</h5>
       <h5><strong>MERN FullStack</strong> in FITA Academy Anna Nagar</h5> */}
            <Stepper />
          </div>
          <div className="naveen-work"></div>
        </div>
      </div>
      <Footer />
    </div>
  )
}

export default About


// currently pursuing my B.Tech in IT