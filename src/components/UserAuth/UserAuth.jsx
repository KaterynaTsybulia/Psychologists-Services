import { useModal } from "../../context/ModalContext";
import { colorThema } from "../../utils/color";
import Button from "../Button/Button";

import css from "./UserAuth.module.css";

export const UserAuth = ({ theme }) => {
	const { openModal } = useModal();
	const circleColor = colorThema(theme);

	return (
		<section
			className={css.sectionAuth}
			style={{ "--circle-color": circleColor }}
		>
			<Button
				className={css.buttonL}
				value="linkL"
				text="Log In"
				onClick={() => openModal("login")}
			/>
			<Button
				className={css.buttonR}
				value="linkR"
				text="Registration"
				onClick={() => openModal("register")}
			/>
		</section>
	);
};
