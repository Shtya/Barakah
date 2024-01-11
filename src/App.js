import {Routes , Route} from "react-router-dom"

import "./sass/main.css"
import Home from './pages/Home'
import About from "./pages/About"
import Services from "./pages/Services"
import ContactUs from "./pages/contact"
import Blogs from "./pages/blogs"
import Projects from "./pages/projects"


const App = () => {

  return ( 
    <div className={` App`}>
      
      <Routes>
        <Route index   path='/'    element={<Home />} />                           
        <Route index   path='/about-us'    element={<About />} />                           
        <Route index   path='/services'    element={<Services />} />                           
        <Route index   path='/projects'    element={<Projects />} />                           
        <Route index   path='/contact-us'    element={<ContactUs />} />                           
        <Route index   path='/blogs'    element={<Blogs />} />                           
        
      </Routes>
    </div>

  )
}

export default App




