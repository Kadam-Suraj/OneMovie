import Header from "./components/Header/Header"
import Info from "./components/Info/Info";
import Hero from './Hero/Hero'
import Movies from './Movies'
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {

  return (
    <>
      <BrowserRouter>
        <div className="md:px-10 md:pt-5">
          <Header></Header>
        </div>
        <Routes>
          <Route path="/" element={<Hero />} />
          <Route path="/:info" element={<Info />} />
          <Route path='/movies' element={<Movies />} />
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
