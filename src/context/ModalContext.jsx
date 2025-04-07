import { createContext, useContext, useState } from "react";

const ModalContext = createContext();

export const ModalProvider = ({ children }) => {
	const [isOpen, setIsOpen] = useState(false);
	const [type, setType] = useState("");

	const openModal = (modalType) => {
		setType(modalType);
		setIsOpen(true);
	};

	const closeModal = () => {
		setIsOpen(false);
	};

	const handleCloseModal = (e) => {
		if ((e.code && e.code === "Escape") || e.target === e.currentTarget) {
			setType(null);
		}
	};

	return (
		<ModalContext.Provider
			value={{ isOpen, closeModal, openModal, type, handleCloseModal }}
		>
			{children}
		</ModalContext.Provider>
	);
};

export const useModal = () => useContext(ModalContext);
