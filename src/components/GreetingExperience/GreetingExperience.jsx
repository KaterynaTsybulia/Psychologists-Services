import IconWithTheme from "../Icon/IconWithTheme";
import css from "./GreetingExperience.module.css";

const GreetingExperience = () => {
	return (
		<ul className={css.container}>
			<li className={css.svg}>
				<IconWithTheme id="icon-check" width="30" height="30" />
			</li>
			<li className={css.blokText}>
				<h6 className={css.title}>Experienced psychologists</h6>
				<p className={css.text}>15,000</p>
			</li>
		</ul>
	);
};

export default GreetingExperience;
