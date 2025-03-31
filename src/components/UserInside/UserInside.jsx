import React from "react";
import { useAuth } from "../../context/AuthContext";
import { auth } from "../../firebaseConfig";
import { colorThema } from "../../utils/color";

import css from "./UserInside.module.css";
import Loader from "../Loader/Loader";
import Button from "../Button/Button";
import IconNoTheme from "../Icon/IconNoTheme";

export const UserInside = ({ theme }) => {
	const { user, loading } = useAuth();
	const color = colorThema(theme);

	const handleLogout = async () => {
		try {
			await auth.signOut();
		} catch (error) {
			alert(error.message);
		}
	};

	if (loading) {
		return <Loader />;
	}

	return (
		<section className={css.sectionUser} style={{ "--circle-color": color }}>
			<ul className={css.boxUser}>
				<li className={css.svg}>
					<IconNoTheme id="icon-contact" />
				</li>
				<li className={css.nameLi}>
					<p className={css.nameUser}>{user.displayName}</p>
				</li>
			</ul>

			<Button className={css.buttonR} onClick={() => handleLogout()}>
				Log out
			</Button>
		</section>
	);
};
