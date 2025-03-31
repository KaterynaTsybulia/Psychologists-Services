import { useAuth } from "../../context/AuthContext";

import { Logo } from "../Logo/Logo";
import { UserMenu } from "../UserMenu/UserMenu";
import { UserInside } from "../UserInside/UserInside";
import { UserAuth } from "../UserAuth/UserAuth";

import css from "./Header.module.css";

export const Header = () => {
	const { user } = useAuth();

	return (
		<header className={css.header}>
			<Logo />
			<UserMenu />
			{user ? <UserInside /> : <UserAuth />}
		</header>
	);
};
