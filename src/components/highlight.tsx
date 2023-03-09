import { useEffect, useState } from "react";
import "../styles/highlight.css";
import { Card } from "./card";


type Categories = {
	id: number,
	nome: string
}

export function Highlights() {

	const [categories, setCategories] = useState<Categories[]>([])

	useEffect(() => {
		fetch('http://localhost:3001/categorias')
      .then(response => response.json())
      .then(data => {
				console.debug(data)
				setCategories(data)
			});

			console.debug(categories)
	},[])

  return (
    <div className="highlight-container">
      <section className="categories">
        <h3>Categorias</h3>
        <ul>
         {categories.map(category => (
					<li key={category.id}>
					 <span>{category.nome}{">"}</span>
				 	</li>
				 ))}
        </ul>
      </section>
      <section className="highlight-card">
        <div className="highlight-image">
          <img src="https://images.kabum.com.br/produtos/fotos/115737/console-sony-playstation-5_1603798015_g.jpg" alt="Product Image" />
        </div>
        <div className="highlight-info">
          <h3 className="highlight-title">Product Name</h3>
          <p className="highlight-price">R$50.00</p>
          <button className="highlight-btn">
						<img src="/shopping-cart.png" alt="" />
					</button>
        </div>
      </section>
      <section className="cheap-items">
        {/* <Card />
        <Card /> */}
      </section>
    </div>
  );
}
