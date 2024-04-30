import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import './index.css'
import { ThemeProvider } from './components/theme-provider.tsx'
import { Route, RouterProvider, createHashRouter, createRoutesFromElements } from 'react-router-dom'
import Movies from './Movies/Movies.tsx'
import Info from './components/Info/Info.tsx'
import Series from './Series/Series.tsx'
import About from './About/About.tsx'
import Home from './Home/Home.tsx'
import CategoryGenre from './components/Category/CategoryGenre.tsx'
import { Toaster } from './components/ui/toaster.tsx'
import BySearch from './components/MoviesFilter/BySearch.tsx'
import { GalleryListPlatform } from './components/GalleryList/GalleryList.tsx'
import HomeSection from './Home/HomeSection.tsx'
import { OriginProvider } from './Context/OriginContext.tsx'
import ComingSoon from './Movies/ComingSoon.tsx'
import MovieInfo from './components/Info/MovieInfo.tsx'

const router = createHashRouter(
  createRoutesFromElements(
    <Route path="/" element={<App />}>
      <Route path="" element={<Home />} >
        <Route path='' element={<HomeSection />} />
      </Route>
      <Route path="/category/platform/:platform" element={<GalleryListPlatform />} />
      <Route path="/category/:genre" element={<CategoryGenre />} />
      <Route path="/search/:q" element={<BySearch />} />
      <Route path="/download/:slug" element={<Info />} />
      <Route path="/movies" element={<Movies />} />
      <Route path="/coming-soon" element={<ComingSoon />} />
      <Route path="/coming-soon/:id" element={<MovieInfo />} />
      <Route path="/series" element={<Series />} />
      <Route path="/about" element={<About />} />
    </Route>
  )
)

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <OriginProvider>
      <ThemeProvider>
        <RouterProvider router={router} />
        <Toaster />
      </ThemeProvider>
    </OriginProvider>
  </React.StrictMode>,
)
