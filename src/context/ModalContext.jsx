import React, { createContext, useContext, useState } from "react";

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

	return (
		<ModalContext.Provider value={{ isOpen, closeModal, openModal, type }}>
			{children}
		</ModalContext.Provider>
	);
};

export const useModal = () => useContext(ModalContext);
