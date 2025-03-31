import { NavLink } from "react-router-dom";
import clsx from "clsx";

import { colorThema } from "../../utils/color";
import { useAuth } from "../../context/AuthContext";

import css from "./UserMenu.module.css";

const buildCssClasses = ({ isActive, to }) =>
	clsx(css.link, isActive && to !== "/" && css.active, to === "/" && "home");

export const UserMenu = ({ theme }) => {
	const circleColor = colorThema(theme);
	const { user } = useAuth();

	return (
		<nav className={css.navigation} style={{ "--circle-color": circleColor }}>
			<NavLink to="/" className={buildCssClasses}>
				Home
			</NavLink>
			<NavLink to="/psychologists" className={buildCssClasses}>
				Psychologists
			</NavLink>
			{user && (
				<NavLink to="/favorites" className={buildCssClasses}>
					Favorites
				</NavLink>
			)}
		</nav>
	);
};
