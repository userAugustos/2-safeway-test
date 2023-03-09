import { Products } from "../App"
import { useCartContext } from "../hooks/useCart";
import { useProductModal } from "../hooks/useProductModal";
import "../styles/card.css"

export function Card({ product }: { product: Products }){
	const { addProduct } = useCartContext()

	const { openModal } = useProductModal();
	
	return(
		<div className="card">
			<section className="card-image">
				<img src={product.foto} alt="Product image" />
			</section>
			<section className="card-content">
				<h2>{product.nome}</h2>
				<p>{product.descricao}</p>
				<section className="card-bottom">
					<p>R${product.preco}</p>
					<button onClick={() => addProduct(product)}>
						<img src="/shopping-cart.png" alt="" />
					</button>

					<button onClick={() => openModal(product.id)}>
						Ver Mais
					</button>
				</section>
			</section>
		</div>
	)
}