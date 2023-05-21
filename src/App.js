import React, { useState, useEffect } from 'react'
import './index'

import { commerce } from './lib/commerce'
import { Navbar } from './components'
import { Products } from './components/products/Products'

const App = () => {
  const [products, setProducts] = useState([])
  const fetchProducts = async () => {
    const { data } = await commerce.products.list()
    setProducts(data)
  }
  useEffect(() => {
    fetchProducts()
  }, [])
  console.log(products)
  return (
    <div>
      <Navbar />
      <Products />
    </div>
  )
}
export default App
