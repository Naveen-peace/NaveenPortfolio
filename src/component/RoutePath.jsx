import { BrowserRouter, Route, Routes } from "react-router-dom"
import DashBoard from "./pages/home/DashBoard"
import '../assets/css/style.css'
import About from "./pages/subpages/About"
import Skills from "./pages/subpages/Skills"
import Project from "./pages/subpages/Project"
import Contact from "./pages/subpages/Contact"

function RoutePath() {
  return (
    <div style={{height:'100%'}}>
      <BrowserRouter>
            <Routes>
                <Route path='/' element={<DashBoard />} />
                <Route path="/about" element={<About/>} />
                <Route path="/skill" element={<Skills/>} />
                <Route path="/project" element={<Project />} />
                <Route path="/contact" element={<Contact/>}/> 
            </Routes>
        </BrowserRouter>
    </div>
  )
}

export default RoutePath