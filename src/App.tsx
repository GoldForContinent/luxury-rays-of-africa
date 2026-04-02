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
import KenyaDiscoverKenyaSafari from './pages/KenyaDiscoverKenyaSafari'
import KenyaTanzaniaSafari from './pages/KenyaTanzaniaSafari'
import KenyaNorthernFrontierLakeTurkana from './pages/KenyaNorthernFrontierLakeTurkana'
import KenyaMigrationSafariMara from './pages/KenyaMigrationSafariMara'
import KenyaLuxurySafariKenya from './pages/KenyaLuxurySafariKenya'
import KenyaFlyKenyaSafari from './pages/KenyaFlyKenyaSafari'
import KenyaGreatRiftValleyMaraExplorer from './pages/KenyaGreatRiftValleyMaraExplorer'
import KenyaLakeTurkanaExpedition from './pages/KenyaLakeTurkanaExpedition'
import KenyaGorillaTrekkingMigrationSafari from './pages/KenyaGorillaTrekkingMigrationSafari'
import KenyaFunFamilySafariKenya from './pages/KenyaFunFamilySafariKenya'
import KenyaNorthernKenyaCulturalWildlifeTour from './pages/KenyaNorthernKenyaCulturalWildlifeTour'
import KenyaSafariBeachCombo from './pages/KenyaSafariBeachCombo'
import KenyaSaveTheElephantSafari from './pages/KenyaSaveTheElephantSafari'
import KenyaSaveTheRhinoSafari from './pages/KenyaSaveTheRhinoSafari'
import KenyaUltimateFamilySafariKenya from './pages/KenyaUltimateFamilySafariKenya'
import TanzaniaSafari from './pages/TanzaniaSafari'
import TanzaniaClassicSkySafari from './pages/TanzaniaClassicSkySafari'
import TanzaniaBestOfZanzibar from './pages/TanzaniaBestOfZanzibar'
import TanzaniaDianiBeachExtension from './pages/TanzaniaDianiBeachExtension'
import TanzaniaNdutuCalvingSafari from './pages/TanzaniaNdutuCalvingSafari'
import TanzaniaLuxurySafari8Days from './pages/TanzaniaLuxurySafari8Days'
import TanzaniaWildebeestSafari from './pages/TanzaniaWildebeestSafari'
import UgandaDiscoverUganda from './pages/UgandaDiscoverUganda'
import UgandaGorillaExtension from './pages/UgandaGorillaExtension'
import UgandaPrimatesIntensive from './pages/UgandaPrimatesIntensive'
import UgandaSafari from './pages/UgandaSafari'
import RwandaSafari from './pages/RwandaSafari'
import NamibiaSafari from './pages/NamibiaSafari'
import SouthAfricaSafari from './pages/SouthAfricaSafari'
import BotswanaSafari from './pages/BotswanaSafari'
import ZambiaSafari from './pages/ZambiaSafari'
import ZimbabweSafari from './pages/ZimbabweSafari'
import ZanzibarSafari from './pages/ZanzibarSafari'
import LamuSafari from './pages/LamuSafari'
import NosyBeSafari from './pages/NosyBeSafari'
import MafiaSafari from './pages/MafiaSafari'
import RwandaGoldenMonkeyGorillaTrekking from './pages/RwandaGoldenMonkeyGorillaTrekking'
import RwandaGorillaTrekkingExpress from './pages/RwandaGorillaTrekkingExpress'
import RwandaThisIsAfricaWomensCenter from './pages/RwandaThisIsAfricaWomensCenter'
import RwandaThousandHillsDistilleries from './pages/RwandaThousandHillsDistilleries'
import RwandaKigaliCityTour from './pages/RwandaKigaliCityTour'
>>>>>>> 97ea7d41fe667eb483cdb7a0b5c86aa25ac0cc24
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
        <Route path="/kenya-discover-kenya-safari" element={<KenyaDiscoverKenyaSafari />} />
        <Route path="/kenya-tanzania-safari" element={<KenyaTanzaniaSafari />} />
        <Route path="/kenya-northern-frontier-lake-turkana" element={<KenyaNorthernFrontierLakeTurkana />} />
        <Route path="/kenya-migration-safari-mara" element={<KenyaMigrationSafariMara />} />
        <Route path="/kenya-luxury-safari-kenya" element={<KenyaLuxurySafariKenya />} />
        <Route path="/kenya-fly-kenya-safari" element={<KenyaFlyKenyaSafari />} />
        <Route path="/kenya-great-rift-valley-mara-explorer" element={<KenyaGreatRiftValleyMaraExplorer />} />
        <Route path="/kenya-lake-turkana-expedition" element={<KenyaLakeTurkanaExpedition />} />
        <Route path="/kenya-gorilla-trekking-migration-safari" element={<KenyaGorillaTrekkingMigrationSafari />} />
        <Route path="/kenya-fun-family-safari-kenya" element={<KenyaFunFamilySafariKenya />} />
        <Route path="/kenya-northern-kenya-cultural-wildlife-tour" element={<KenyaNorthernKenyaCulturalWildlifeTour />} />
        <Route path="/kenya-safari-beach-combo" element={<KenyaSafariBeachCombo />} />
        <Route path="/kenya-save-the-elephant-safari" element={<KenyaSaveTheElephantSafari />} />
        <Route path="/kenya-save-the-rhino-safari" element={<KenyaSaveTheRhinoSafari />} />
        <Route path="/kenya-ultimate-family-safari-kenya" element={<KenyaUltimateFamilySafariKenya />} />
        <Route path="/tanzania-safaris" element={<TanzaniaSafari />} />
        <Route path="/tanzania-classic-sky-safari" element={<TanzaniaClassicSkySafari />} />
        <Route path="/tanzania-best-of-zanzibar" element={<TanzaniaBestOfZanzibar />} />
        <Route path="/tanzania-diani-beach-extension" element={<TanzaniaDianiBeachExtension />} />
        <Route path="/tanzania-ndutu-calving-safari" element={<TanzaniaNdutuCalvingSafari />} />
        <Route path="/tanzania-luxury-safari-8days" element={<TanzaniaLuxurySafari8Days />} />
        <Route path="/tanzania-wildebeest-safari" element={<TanzaniaWildebeestSafari />} />
        <Route path="/uganda-safaris" element={<UgandaSafari />} />
        <Route path="/uganda-gorilla-extension" element={<UgandaGorillaExtension />} />
        <Route path="/uganda-primates-intensive" element={<UgandaPrimatesIntensive />} />
        <Route path="/uganda-discover-uganda" element={<UgandaDiscoverUganda />} />
        <Route path="/rwandasafaris" element={<RwandaSafari />} />
        <Route path="/namibia-safaris" element={<NamibiaSafari />} />
        <Route path="/south-africa-safaris" element={<SouthAfricaSafari />} />
        <Route path="/botswana-safaris" element={<BotswanaSafari />} />
        <Route path="/botswana-makgadikgadi-pans" element={<BotswanaMakgadikgadiPans />} />
        <Route path="/botswana-central-kalahari" element={<BotswanaCentralKalahari />} />
        <Route path="/botswana-chobe-national-park" element={<BotswanaChobeNationalPark />} />
        <Route path="/zambia-safaris" element={<ZambiaSafari />} />
        <Route path="/zimbabwe-safaris" element={<ZimbabweSafari />} />
        <Route path="/zanzibar-island" element={<ZanzibarSafari />} />
        <Route path="/lamu-island" element={<LamuSafari />} />
        <Route path="/nosy-be-island" element={<NosyBeSafari />} />
        <Route path="/mafia-island" element={<MafiaSafari />} />
        <Route path="/rwanda-golden-monkey-gorilla-trekking" element={<RwandaGoldenMonkeyGorillaTrekking />} />
        <Route path="/rwanda-gorilla-trekking-express" element={<RwandaGorillaTrekkingExpress />} />
        <Route path="/rwanda-this-is-africa-womens-center" element={<RwandaThisIsAfricaWomensCenter />} />
        <Route path="/rwanda-thousand-hills-distilleries" element={<RwandaThousandHillsDistilleries />} />
        <Route path="/rwanda-kigali-city-tour" element={<RwandaKigaliCityTour />} />
        <Route path="/journal" element={<Journal />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/about" element={<About />} />
      </Routes>
    </Layout>
  )
}

export default App
