import { Routes, Route } from 'react-router-dom'
import Home from './pages/Home'
import Destinations from './pages/Destinations'
import DestinationDetail from './pages/DestinationDetail'
import PlaceDetail from './pages/PlaceDetail'
import Contact from './pages/Contact'
import About from './pages/About'
import Wildlife from './pages/Wildlife'
import Impact from './pages/Impact'
import Journal from './pages/Journal'
import Layout from './components/Layout'
import './App.css'

function App() {
  return (
    <Layout>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/destinations" element={<Destinations />} />
        <Route path="/destinations/:countryId" element={<DestinationDetail />} />
        <Route path="/destinations/:countryId/:placeId" element={<PlaceDetail />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/about" element={<About />} />
        <Route path="/wildlife" element={<Wildlife />} />
        <Route path="/impact" element={<Impact />} />
        <Route path="/journal" element={<Journal />} />
      </Routes>
    </Layout>
  )
}

export default App
