import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import { CartContextProvider } from './hooks/useCart'
import { ModalContextProvider } from './hooks/useProductModal'
import './styles/index.css'

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
	<ModalContextProvider>
		<CartContextProvider>
			<React.StrictMode>
				<App />
			</React.StrictMode>
		</CartContextProvider>
	</ModalContextProvider>,
)
