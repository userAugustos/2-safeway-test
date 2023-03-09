import { useState } from "react";
import "../styles/header.css";
import { Cart } from "./cart";

export function Header() {
  const [showCartModal, setShowCartModal] = useState(false);

  const handleShowCartModal = () => {
		console.debug('rodando')
    setShowCartModal(!showCartModal);
  };

  return (
    <>
      <header className="menu-header">
        <section className="icon">
          <img
            src="https://thesafeway.com.br/assets/img/logo.svg"
            alt="safeway logo"
          />
        </section>
        <section className="search">
          <label htmlFor="search">
            <img src="/magnifying.svg" alt="" />
          </label>
          <input
            type="text"
            name="search"
            id="search"
            placeholder="Procure por produtos"
          />
        </section>
        <section className="cart">
          <button onClick={handleShowCartModal}>
            <img src="/shopping-cart.png" alt="" />
          </button>
        </section>
      </header>

			{
				showCartModal && <Cart closeModal={handleShowCartModal}/>
			}
    </>
  );
}
