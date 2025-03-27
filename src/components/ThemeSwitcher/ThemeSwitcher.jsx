import React from "react";
import { useTheme } from "../../context/ThemeContext";

const ThemeSwitcher = () => {
	const { theme, toggleTheme } = useTheme();

	const handleThemeChange = (newTheme) => {
		toggleTheme(newTheme);
	};

	return (
		<div>
			<button onClick={() => handleThemeChange("origin")}>Origin Theme</button>
			<button onClick={() => handleThemeChange("orange")}>Orange Theme</button>
			<button onClick={() => handleThemeChange("blue")}>Blue Theme</button>
		</div>
	);
};

export default ThemeSwitcher;
