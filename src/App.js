import React from 'react'
import './index'

import { commerce } from './lib/commerce'
import { Navbar } from './components'
import { Products } from './components/products/Products'

const App = () => {
  return (
    <div>
      <Navbar />
      <Products />
    </div>
  )
}
export default App
