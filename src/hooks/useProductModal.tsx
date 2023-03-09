
import { createContext, ReactElement, useContext, useState } from "react";


interface ModalContextData {
  modalIsOpen: boolean;
	productId: number;
  closeModal: () => void;
	openModal: (id: number) => void;
}

export const ProductModalContext = createContext<ModalContextData>({
	modalIsOpen: false,
	productId: 0,
	closeModal: () => {},
	openModal: (id: number) => {}
});

export const ModalContextProvider = ({ children }: { children: ReactElement | Iterable<ReactElement> }) => {
  const [ modalIsOpen, setModalIsOpen ] = useState(false);
	const [ productId, setProductId ] = useState(0);

	function openModal(id: number) {
		setModalIsOpen(true)
		setProductId(id)
	}

  function closeModal() {
    setModalIsOpen(false);
  }

  return (
    <ProductModalContext.Provider value={{ modalIsOpen, closeModal, productId, openModal }}>
      {children}
    </ProductModalContext.Provider>
  );
};

export const useProductModal = () => useContext(ProductModalContext);