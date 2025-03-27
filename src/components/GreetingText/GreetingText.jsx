import { Link } from "react-router-dom";
import Button from "../../components/Button/Button";

import css from "./GreetingText.module.css";

const GreetingText = () => {
	return (
		<li className={css.container}>
			<h1 className={css.title}>The road to the depths of the human soul</h1>
			<p className={css.text}>
				We help you to reveal your potential, overcome challenges and find a guide
				in your own life with the help of our experienced psychologists.
			</p>
			<Link to={`/psychologists`}>
				<Button text="Get started" />
			</Link>
		</li>
	);
};

export default GreetingText;
