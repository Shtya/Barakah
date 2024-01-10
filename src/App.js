import {Routes , Route} from "react-router-dom"

import "./sass/main.css"
import Home from './pages/Home'
import About from "./pages/About"
import Services from "./pages/Services"


const App = () => {

  return ( 
    <div className={` App`}>
      
      <Routes>
        <Route index   path='/'    element={<Home />} />                           
        <Route index   path='/about-us'    element={<About />} />                           
        <Route index   path='/services'    element={<Services />} />                           
        
      </Routes>
    </div>

  )
}

export default App



