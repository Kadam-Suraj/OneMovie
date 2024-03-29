import Header from "./components/Header/Header"
import Hero from './Hero/Hero'
import Category from './components/Category'
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
          <Route path='/movies' element={<Category />} />
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
