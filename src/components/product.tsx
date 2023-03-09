import { Products } from "../App"
import { useProductModal } from "../hooks/useProductModal"
import "../styles/product.css"

export function Product({product}: { product: Products | undefined}){
	const { closeModal } = useProductModal()

	if(!product) {
		return (<></>)
	}

	return(
		<div className="product">
			<button className="close" onClick={() => closeModal()}>
					<img src="/close.png" alt="close item" />
				</button>
			<section className="card-image">
				<img src={product.foto} alt="Product image" />
			</section>
			<section className="card-content">
				<h2>{product.nome}</h2>
				<p>{product.descricao}</p>
				{/* <p>{product.categoria_id}</p> */}
				<section className="card-bottom">
					<p>R${product.preco}</p>
					<button>
						<img src="/shopping-cart.png" alt="" />
					</button>
				</section>
			</section>
		</div>
	)
}