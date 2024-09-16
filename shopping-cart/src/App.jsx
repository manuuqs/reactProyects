import { Products } from "./components/Products"
import {products as initialProducts} from './mocks/products.json'
import { Header } from "./components/Header.jsx"
import { Footer } from "./components/Footer.jsx"
import { useState } from "react"
import { useFilters } from "./hooks/useFilters.js";
import { Cart } from "./components/Cart.jsx"
import { CartProvider } from "./context/cart.jsx"


function App() {

  const [products] = useState(initialProducts)
  const {filterProducts} = useFilters()
  const filteredProducts = filterProducts(products)

  return (
    <CartProvider>
    <Header/>
    <Cart/>
    <Products products={filteredProducts}/>
    <Footer/>
    </CartProvider>
   
  )
}

export default App
