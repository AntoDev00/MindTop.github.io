import { Routes, Route } from 'react-router-dom'
import { lazy, Suspense } from 'react'
import Header from './components/layout/Header'
import Footer from './components/layout/Footer'
import Loader from './components/ui/Loader'
import './App.css'

// Lazy loading delle pagine per migliorare le performance
const Home = lazy(() => import('./pages/Home'))
const Meditation = lazy(() => import('./pages/Meditation'))
const Library = lazy(() => import('./pages/Library'))
const About = lazy(() => import('./pages/About'))
const NotFound = lazy(() => import('./pages/NotFound'))

function App() {
  return (
    <div className="app">
      <Header />
      <main className="main-content">
        <Suspense fallback={<Loader />}>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/meditazione" element={<Meditation />} />
            <Route path="/libreria" element={<Library />} />
            <Route path="/chi-siamo" element={<About />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </Suspense>
      </main>
      <Footer />
    </div>
  )
}

export default App
