import './App.css'
import Header from './components/Header/index'
import BannerCarrousel from './components/BannerCarousel/BannerCarousel'
import ProductCarousel from './components/ProductCarousel/ProductCarousel'
import Newsletter from './components/Newsletter/Newsletter'

function App() {

  return (
    <> 
      <Header/>
      <BannerCarrousel/>
      <ProductCarousel/>
      <Newsletter/>
      <ProductCarousel/>
    </>
  )
}

export default App
