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
import SafariTypes from './pages/SafariTypes'
import Packages from './pages/Packages'
import TravelInfo from './pages/TravelInfo'
import FirstSafari from './pages/FirstSafari'
import WhereToVisit from './pages/WhereToVisit'
import BestTimeToVisit from './pages/BestTimeToVisit'
import WhatToPack from './pages/WhatToPack'
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
        <Route path="/safari-types" element={<SafariTypes />} />
        <Route path="/safari-types/:slug" element={<SafariTypes />} />
        <Route path="/packages" element={<Packages />} />
        <Route path="/packages/:packageId" element={<Packages />} />
        <Route path="/wildlife" element={<Wildlife />} />
        <Route path="/impact" element={<Impact />} />
        <Route path="/travel-info" element={<TravelInfo />} />
        <Route path="/first-safari" element={<FirstSafari />} />
        <Route path="/where-to-visit" element={<WhereToVisit />} />
        <Route path="/best-time-to-visit" element={<BestTimeToVisit />} />
        <Route path="/what-to-pack" element={<WhatToPack />} />
        <Route path="/journal" element={<Journal />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/about" element={<About />} />
      </Routes>
    </Layout>
  )
}

export default App
