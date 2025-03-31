import css from "./Button.module.css";

const Button = ({
	value,
	type = "button",
	text,
	className,
	onClick,
	children,
}) => {
	const buttonClass = className ? className : `${css.btn} ${css[value]}`;

	return (
		<button type={type} className={buttonClass} onClick={onClick}>
			{text} {children}
		</button>
	);
};

export default Button;
