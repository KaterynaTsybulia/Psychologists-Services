import sprite from "../../assets/sprite.svg";

import { colorThema } from "../../utils/color";
import { useTheme } from "../../context/ThemeContext";

const Icon = ({ id, width = 16, height = 16 }) => {
	const { theme } = useTheme();
	const color = colorThema(theme);

	return (
		<svg width={width} height={height} style={{ transition: "fill 0.3s ease" }}>
			<use href={`${sprite}#${id}`} fill={color} />
		</svg>
	);
};

export default Icon;
