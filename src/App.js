import { Route, Routes } from "react-router-dom"
import "./App.css"
import { Home } from "./pages/Home"
import Cursor from "react-cursor-follow"

function App() {
  return (
    <>
      <Cursor duration={0.8} size={35} color="#eb5939" />
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
    </>
  )
}

export default App
