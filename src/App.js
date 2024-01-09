import {Routes , Route} from "react-router-dom"

import "./sass/main.css"
import Home from './pages/Home'

const App = () => {

  return ( 
    <div className={` App`}>
      
      <Routes>
        <Route index   path='/'    element={<Home />} />                           
        
      </Routes>
    </div>

  )
}

export default App




