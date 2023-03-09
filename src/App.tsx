import { useEffect, useState } from 'react'
import './styles/App.css'
import { Card } from './components/card'
import { Header } from './components/header'
import { Highlights } from './components/highlight'
import { Product } from './components/product'
import { useProductModal } from './hooks/useProductModal'

export interface Products {
		id: number
		nome: string
		descricao: string
		preco: 4500
		foto: string
		categoria_id: number
}

function App() {
	const { modalIsOpen, productId } = useProductModal();

	const [products, setProducts] = useState<Products[]>([])

	useEffect(() => {
		fetch('http://localhost:3001/produtos')
      .then(response => response.json())
      .then(data => {
				console.debug(data)
				setProducts(data)
			});

	},[])

  return (
		<>
			<Header />

			<Highlights />
			<div className='content-container'>
				<div className='main-stream'>
					<h2> Nossos Produtos </h2>
				</div>
				{ products.map(product => (
					<Card product={product} />
				)) }

				{
					modalIsOpen && <Product  product={ products.find( product => product.id == productId) }/>
				}
			</div>
		</>
  )
}

export default App
