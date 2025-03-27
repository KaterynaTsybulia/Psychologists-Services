import { NavLink } from "react-router-dom";
// import { useSelector } from "react-redux";
import clsx from "clsx";

import { colorThema } from "../../utils/color";

// import { selectUserIsLoggedIn } from "../../redux/auth/selectors";
import css from "./UserMenu.module.css";

const buildCssClasses = ({ isActive, to }) =>
	clsx(css.link, isActive && to !== "/" && css.active, to === "/" && "home");

export const UserMenu = ({ theme }) => {
	const circleColor = colorThema(theme);
	// const isLoggedIn = useSelector(selectUserIsLoggedIn);

	return (
		<nav className={css.navigation} style={{ "--circle-color": circleColor }}>
			<NavLink to="/" className={buildCssClasses}>
				Home
			</NavLink>
			<NavLink to="/psychologists" className={buildCssClasses}>
				Psychologists
			</NavLink>
			{/* {isLoggedIn && (
        <NavLink to="/favorites" className={buildCssClasses}>
          Favorites
        </NavLink>
      )} */}
		</nav>
	);
};
