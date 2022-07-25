import { Routes, Route } from "react-router-dom";
import Home from './Home';
import About from "./About";
function Router(){
    return(
    <Routes>
    <Route path="/" element={<Home />} />
    <Route path="/About" element={<About />} />
  </Routes>
  )
}

export default Router;