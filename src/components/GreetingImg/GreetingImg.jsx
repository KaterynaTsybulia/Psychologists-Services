import GreetingExperience from "../GreetingExperience/GreetingExperience";
import css from "./GreetingImg.module.css";

const GreetingImg = () => {
	return (
		<li className={css.liImg}>
			<img
				className={css.img}
				src="/src/assets/image/home@2x.jpg"
				alt="Girl with glasses"
			/>
			<div className={css.greetingExperienceContainer}>
				<GreetingExperience />
			</div>
		</li>
	);
};

export default GreetingImg;
