import { useState } from 'react'
import './App.css'
import { Card } from './components/card'
import { Header } from './components/header'
import { Highlights } from './components/highlight'
import { Product } from './components/product'

function App() {

  return (
		<>
			<Header />
			<Highlights />
			<Product />

			<div>
				{/* { arr.map(product => (
					<Card product={product} />
				)) } */}
			</div>
		</>
  )
}

export default App
