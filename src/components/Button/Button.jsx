import css from "./Button.module.css";

const Button = ({ value, type = "button", text, onClick }) => {
	return (
		<button type={type} className={`${css.btn} ${css[value]}`} onClick={onClick}>
			{text}
		</button>
	);
};

export default Button;
