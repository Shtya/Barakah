import {Routes , Route, useLocation} from "react-router-dom"

import "./sass/main.css"
import Home from './pages/Home'
import About from "./pages/About"
import Services from "./pages/Services"
import ContactUs from "./pages/contact"
import Blogs from "./pages/blogs"
import Projects from "./pages/projects"
import { Helmet } from 'react-helmet';
import whats from "./assets/whats.webp"
import up from "./assets/icon/up3.png"
import Error from "./pages/Error"
import Logo from "./assets/Logo.webp"
import { useEffect } from "react"


function ScrollToTopOnMount() {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'instant' });
  }, [pathname]);

  return null;
}

const App = () => {

  return ( 
    <div className={` App`}>
      <Helmet>  
      <title>Barakah</title>   
      <link rel="icon" href={Logo} />
    </Helmet>

      <div className="up">
        <a href="https://api.whatsapp.com/send?phone=+97143339645&text=السلام%2C%20عليكم%2C%20ورحمة%2C%20الله%2C%20وبركاتة"> <img src={whats} alt="" /> </a>
        <a href="#up"> <img src={up} alt="" /> </a>
      </div>
      <ScrollToTopOnMount />
      <Routes>
        <Route index   path='/'    element={<Home />} />                           
        <Route index   path='/about-us'    element={<About />} />                           
        <Route index   path='/services'    element={<Services />} />                           
        <Route index   path='/projects'    element={<Projects />} />                           
        <Route index   path='/contact-us'    element={<ContactUs />} />                           
        <Route index   path='/blogs'    element={<Blogs />} />                           
        <Route path='*'            element={<Error />} />                        
      </Routes>
    </div>

  )
}

export default App




