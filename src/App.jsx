import './App.css'
import Header from './components/Header/index';
import BannerCarrousel from './components/BannerCarousel/BannerCarousel';
import ProductCarousel from './components/ProductCarousel/ProductCarousel';
import Newsletter from './components/Newsletter/Newsletter';
import Footer from './components/Footer/index';
import { ShoppingCartProvider } from './context/ShoppingCartContext'

function App() {

  return (
    <>
      <ShoppingCartProvider>
        <Header />
        <BannerCarrousel />
        <ProductCarousel />
        <Newsletter />
        <Footer />
      </ShoppingCartProvider>
    </>
  )
}

export default App
