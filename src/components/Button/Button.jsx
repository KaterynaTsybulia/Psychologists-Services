import css from "./Button.module.css";

const Button = ({ value, type = "button", text, onClick, children }) => {
	return (
		<button type={type} className={`${css.btn} ${css[value]}`} onClick={onClick}>
			{text} {children}
		</button>
	);
};

export default Button;
