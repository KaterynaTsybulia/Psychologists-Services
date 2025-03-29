import { NavLink } from "react-router-dom";

import { useModal } from "../../context/ModalContext";
import { colorThema } from "../../utils/color";

import css from "./UserAuth.module.css";

export const UserAuth = ({ theme }) => {
	const { openModal } = useModal();
	const circleColor = colorThema(theme);

	return (
		<nav className={css.navigation} style={{ "--circle-color": circleColor }}>
			<NavLink className={css.linkL} onClick={() => openModal("login")}>
				Log In
			</NavLink>
			<NavLink className={css.linkR} onClick={() => openModal("register")}>
				Registration
			</NavLink>
		</nav>
	);
};
