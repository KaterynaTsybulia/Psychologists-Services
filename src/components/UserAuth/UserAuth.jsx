import { NavLink } from "react-router-dom";

import { colorThema } from "../../utils/color";

import css from "./UserAuth.module.css";

export const UserAuth = ({ theme }) => {
	const circleColor = colorThema(theme);

	return (
		<nav className={css.navigation} style={{ "--circle-color": circleColor }}>
			<NavLink className={css.linkL} to="/login">
				Log In
			</NavLink>
			<NavLink className={css.linkR} to="/register">
				Registration
			</NavLink>
		</nav>
	);
};
