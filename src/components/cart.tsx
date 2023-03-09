import { Dispatch, SetStateAction } from "react"
import { useCartContext } from "../hooks/useCart"
import "../styles/cart.css"

export function Cart({ closeModal }: { closeModal: () => void }) {
	const { products } = useCartContext()

	return(
		<div className="overlay cart">
			<ul className="card-container">
				<button className="close" onClick={() => closeModal()}>
					<img src="/close.png" alt="close item" />
				</button>
				{products.map(product => (
					<li className="cart-card" key={product.id}>
						<section>
							<img src={product.foto} alt="" />
						</section>
						<section className="info">
							<h4>{product.nome}</h4>
							<p>{product.descricao}</p>
							<span>
								{product.preco}
							</span>
						</section>
					</li>
				))}
			</ul>
		</div>
	)
}