import { Routes, Route } from 'react-router-dom'
import Home from './pages/Home'
import Destinations from './pages/Destinations'
import DestinationDetail from './pages/DestinationDetail'
import PlaceDetail from './pages/PlaceDetail'
import PackageDetail from './pages/PackageDetail'
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
import KenyaSafari from './pages/KenyaSafari'
import KenyaSignatureSafari from './pages/KenyaSignatureSafari'
import KenyaWingsOverWilderness from './pages/KenyaWingsOverWilderness'
import KenyaWildNorthMountKenya from './pages/KenyaWildNorthMountKenya'
import KenyaWomensEthicalEmpoweringSafari from './pages/KenyaWomensEthicalEmpoweringSafari'
import KenyaSoulOfTheSavannah from './pages/KenyaSoulOfTheSavannah'
import KenyaWingsOverWilderness4Days from './pages/KenyaWingsOverWilderness4Days'
import KenyaEcoAdventureSafariBudget from './pages/KenyaEcoAdventureSafariBudget'
import KenyaEcoAdventureSafariLuxury from './pages/KenyaEcoAdventureSafariLuxury'
import KenyaTwinTreasuresMaraLumo from './pages/KenyaTwinTreasuresMaraLumo'
import KenyaPhotographicSafari14Days from './pages/KenyaPhotographicSafari14Days'
import KenyaGuidedPhotoSafariDavidDouglas from './pages/KenyaGuidedPhotoSafariDavidDouglas'
import KenyaRoadPackageMaasaiMara from './pages/KenyaRoadPackageMaasaiMara'
import KenyaUkuleleMusicalSafari from './pages/KenyaUkuleleMusicalSafari'
import KenyaMagicalMaasaiMara from './pages/KenyaMagicalMaasaiMara'
import TanzaniaSafari from './pages/TanzaniaSafari'
import UgandaSafari from './pages/UgandaSafari'
import RwandaSafari from './pages/RwandaSafari'
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
        <Route path="/packages/:packageId" element={<PackageDetail />} />
        <Route path="/wildlife" element={<Wildlife />} />
        <Route path="/impact" element={<Impact />} />
        <Route path="/travel-info" element={<TravelInfo />} />
        <Route path="/first-safari" element={<FirstSafari />} />
        <Route path="/where-to-visit" element={<WhereToVisit />} />
        <Route path="/best-time-to-visit" element={<BestTimeToVisit />} />
        <Route path="/what-to-pack" element={<WhatToPack />} />
        <Route path="/kenya-safaris" element={<KenyaSafari />} />
        <Route path="/kenya-signature-safari" element={<KenyaSignatureSafari />} />
        <Route path="/kenya-wings-over-wilderness" element={<KenyaWingsOverWilderness />} />
        <Route path="/kenya-wings-over-wilderness-4days" element={<KenyaWingsOverWilderness4Days />} />
        <Route path="/kenya-soul-of-the-savannah" element={<KenyaSoulOfTheSavannah />} />
        <Route path="/kenya-womens-ethical-empowering-safari" element={<KenyaWomensEthicalEmpoweringSafari />} />
        <Route path="/kenya-wild-north-mount-kenya" element={<KenyaWildNorthMountKenya />} />
        <Route path="/kenya-eco-adventure-safari-budget" element={<KenyaEcoAdventureSafariBudget />} />
        <Route path="/kenya-eco-adventure-safari-luxury" element={<KenyaEcoAdventureSafariLuxury />} />
        <Route path="/kenya-twin-treasures-mara-lumo" element={<KenyaTwinTreasuresMaraLumo />} />
        <Route path="/kenya-photographic-safari-14days" element={<KenyaPhotographicSafari14Days />} />
        <Route path="/kenya-guided-photo-safari-david-douglas" element={<KenyaGuidedPhotoSafariDavidDouglas />} />
        <Route path="/kenya-road-package-maasai-mara" element={<KenyaRoadPackageMaasaiMara />} />
        <Route path="/kenya-ukulele-musical-safari" element={<KenyaUkuleleMusicalSafari />} />
        <Route path="/kenya-magical-maasai-mara" element={<KenyaMagicalMaasaiMara />} />
        <Route path="/tanzania-safaris" element={<TanzaniaSafari />} />
        <Route path="/uganda-safaris" element={<UgandaSafari />} />
        <Route path="/rwandasafaris" element={<RwandaSafari />} />
        <Route path="/journal" element={<Journal />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/about" element={<About />} />
      </Routes>
    </Layout>
  )
}

export default App
