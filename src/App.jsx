import { Route, Routes } from "react-router-dom"
import "./App.css"
import NavBar from "./componentes/pages/NavBar/NavBar"
import Home from "./componentes/pages/home/Home"
import Contact from "./componentes/pages/contact/Contact/Contact"
import NotFound from "./componentes/pages/NotFound/NotFound"

const App = () => {
  return (
    <div>
      <NavBar/>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/contact" element={<Contact/>}/>
        <Route path="*" element={<NotFound/>}/>
      </Routes>
    </div>
  )
}

export default App