import { useState } from 'react'
import Header from "./components/Header/Header"
import Hero from './Hero/Hero'
import Category from './components/Category'
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <BrowserRouter>
        <Header></Header>
        <Routes>
          <Route path="/" element={<Hero />} />
          <Route path='/movies' element={<Category />} />
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
