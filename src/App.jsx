import Home from "./components/Home"
import Edit from "./components/Edit"
import { BrowserRouter, Routes, Route } from "react-router-dom"
import Create from "./components/Create"

function App() {

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={ <Home /> } />
          <Route path="/create" element={ <Create /> } />
          <Route path="/edit" element={ <Edit /> } />
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
