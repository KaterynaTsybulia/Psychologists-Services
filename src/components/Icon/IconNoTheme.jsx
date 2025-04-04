import sprite from "../../assets/sprite.svg";

const IconNoTheme = ({ id, width = 16, height = 16 }) => {
	return (
		<svg width={width} height={height}>
			<use href={`${sprite}#${id}`} style={{ fill: "none" }} />
		</svg>
	);
};

export default IconNoTheme;
