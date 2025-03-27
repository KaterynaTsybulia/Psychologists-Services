// import { useDispatch, useSelector } from "react-redux";
// import { selectUser, selectUserIsLoggedIn } from "../../redux/auth/selectors";
// import { logoutUser } from "../../redux/auth/operations";
import Icon from "../Icon/Icon";

import css from "./UserNav.module.css";

export const UserNav = () => {
	// const dispatch = useDispatch();
	// const isLoggedIn = useSelector(selectUserIsLoggedIn);
	// const userData = useSelector(selectUser);

	// const handleLogout = () => {
	// 	dispatch(logoutUser());
	// };

	return (
		<nav className={css.wrapper}>
			{/* {isLoggedIn && ( */}
			<>
				<Icon id="icon-contact" className={css.icon} />
				<span className={css.span}>Hello, ! </span>
				<button className={css.button}>Log out</button>
			</>
			{/* )} */}
		</nav>
	);
};

// {
// 	userData.name;
// }
