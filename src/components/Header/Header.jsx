import { Link } from "react-router-dom";

// import Navigation from "../Navigation/Navigation";
import { UserMenu } from "../UserMenu/UserMenu";
import { Logo } from "../Logo/logo";

import css from "./Header.module.css";
import { UserNav } from "../UserNav/UserNav";
import { UserAuth } from "../UserAuth/UserAuth";

export default function Header() {
	// const isLoggedIn = useSelector(selectUserIsLoggedIn);

	return (
		<header className={css.header}>
			<Logo />
			<UserMenu />
			{/* {isLoggedIn ? */}
			{/* <UserNav /> */}
			<UserAuth />
			{/* } */}
			{/* <Navigation /> */}
		</header>
	);
}
