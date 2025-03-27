import GreetingText from "../../components/GreetingText/GreetingText";
import GreetingImg from "../../components/GreetingImg/GreetingImg";
// import GreetingExperience from "../../components/GreetingExperience/GreetingExperience";

import css from "./HomePage.module.css";

export default function HomePage() {
	return (
		<section className={css.homePage}>
			<ul className={css.list}>
				<GreetingText />
				<GreetingImg />
			</ul>
		</section>
	);
}
